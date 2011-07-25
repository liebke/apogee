(ns apogee.xml
  (:require [clojure.zip :as z]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; XML FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export has-attrs? [tag]
  (map? (second tag)))

(defn ^:export has-content? [tag]
  (if (has-attrs? tag)
    (> (count tag) 2)
    (> (count tag) 1)))

(defn ^:export get-name [tag]
  (if-let [n (first tag)]
    (name n)))

(defn ^:export get-attrs [tag]
  (if (has-attrs? tag) (second tag) {}))

(defn ^:export get-content [tag]
  (if (has-attrs? tag)
    (drop 2 tag)
    (rest tag)))

(defn ^:export set-attrs [tag attrs]
  (concat [(get-name tag) attrs]
	  (get-content tag)))

(defn ^:export set-content [tag & content]
  (concat [(get-name tag) (get-attrs tag)]
	  content))

(defn ^:export add-attrs [tag & attrs]
  (concat [(get-name tag)
	   (apply assoc (get-attrs tag) attrs)]
	  (get-content tag)))

(defn ^:export merge-attrs [tag attrs]
  (concat [(get-name tag)
	   (merge (get-attrs tag) attrs)]
	  (get-content tag)))

(defn ^:export add-content [tag & content]
  (concat [(get-name tag)
	   (get-attrs tag)]
	  (concat (get-content tag)
		  content)))

(defn ^:export update-attrs [tag [& keys] update-fn & args]
  (set-attrs tag (apply update-in (get-attrs tag) keys update-fn args)))

(defn ^:export emit-attrs [attrs]
  (when attrs
    (reduce (fn [s [k v]]
	      (str s (name k) "=\"" (if (keyword? v) (name v) v) "\" "))
	    "" attrs)))

(defn ^:export emit-tag [tag]
  (if-let [n (get-name tag)]
    (str "<" n " "
	(emit-attrs (get-attrs tag))
	(if (seq (get-content tag))
	  (str ">" (apply str (map #(if (string? %) % (emit-tag %)) (get-content tag)))
	       "</" n ">")
	  "/>"))))

(defn ^:export emit [& tags]
  (str 
       (reduce #(str %1 (emit-tag %2)) "" tags)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; FUNCTIONS FOR PARSING XML FILES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;(defn ^:export get-xml-map [xml-string]
  ;;(xml/parse (ByteArrayInputStream. (.getBytes xml-string "UTF-8"))))

(defn ^:export parse-xml-map [xml-map]
  (if (map? xml-map)
    (let [{:keys [tag attrs content]} xml-map]
      (concat (if attrs [tag attrs] [tag])
	      (map parse-xml-map content)))
    xml-map))

;;(defn ^:export parse-xml [xml-string]
  ;;(parse-xml-map (get-xml-map xml-string)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; FUNCTIONS FOR FILTERING AND TRANSFORMING PARSED XML
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- ^:export select-loc?
  "Provides selector functionality used by filter-xml and transform-xml.

    Examples of selectors:
     :tag-name
     {attr-name val}
     [:and :tag-name {:attr val}]
     [:or :tag1 :tag2]
     [:and [:not {attr val}] [:or :tag1 :tag2]]

  "
  ([loc selector]
     (when (z/branch? loc)
       (let [node (z/node loc)]
	 (cond
	  (map? selector)
            (and (has-attrs? node)
	         (= (select-keys (get-attrs node) (keys selector))
		    selector))
	  (or (string? selector) (keyword? selector))
            (= (get-name node) (name selector))
	  (coll? selector)
            (condp = (first selector)
		:and (reduce #(and %1 (select-loc? loc %2)) true (next selector))
		:or (reduce #(or %1 (select-loc? loc %2)) false (next selector))
		:not (not (select-loc? loc [:or (second selector)]))))))))

(defn ^:export filter-xml [xml-seq [& selectors]]
  (let [filter-xml* (fn filter-xml* [zip-loc [selector & child-selectors]]
		      (loop [nodes [] loc zip-loc]
			(if (z/end? loc)
			  nodes
			  (recur
			   (if (select-loc? loc selector)
			     (if (seq child-selectors)
			       (filter-xml* loc child-selectors)
			       (conj nodes (z/node loc)))
			     nodes)
			   (z/next loc)))))]
    (filter-xml* (z/seq-zip xml-seq) selectors)))

(defn ^:export transform-xml [xml-seq [& selectors] f & args]
  (let [transform-xml* (fn transform-xml* [zip-loc [selector & child-selectors] f & args]
			 (loop [loc zip-loc]
			   (if (z/end? loc)
			     loc
			     (recur
			      (z/next
			       (if (select-loc? loc selector)
				 (if (seq child-selectors)
				   (apply transform-xml* loc child-selectors f args)
				   (apply z/edit loc f args))
				 loc))))))]
    (z/root (apply transform-xml* (z/seq-zip xml-seq) selectors f args))))




