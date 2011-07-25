(ns apogee.svg
  (:require [apogee.xml :as xml]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; SVG FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export svg [& content]
  (let [xmlns {"xmlns:svg" "http://www.w3.org/2000/svg"
	       "xmlns" "http://www.w3.org/2000/svg"
	       "xmlns:xlink" "http://www.w3.org/1999/xlink"
	       "version" "1.0"}
	attrs (if (map? (first content)) (first content) {})
	content (if (map? (first content)) (rest content) content)]
    (concat [:svg (merge xmlns attrs)] content)))

(defn ^:export style-map [elem props]
  (let [styling (when (seq props)
		  (reduce (fn [s [k v]]
			    (str s " " (name k) ": "
				 (if (keyword? v)
				   (name v)
				   v)
				 "; "))
			  "" props))]
    (xml/add-attrs elem :style styling)))

(defn ^:export style [elem & properties]
  (style-map elem (apply hash-map properties)))

(defn ^:export line [x1 y1 x2 y2 & options]
  (let [attrs (apply hash-map options)]
    [:line (apply merge {:x1 x1, :y1 y1, :x2 x2, :y2 y2} attrs)]))

(defn ^:export rect [x y height width & options]
  (let [attrs (apply hash-map options)]
    [:rect (apply merge {:x x, :y y, :height height, :width width} attrs)]))

(defn ^:export circle [cx cy r & options]
  (let [attrs (apply hash-map options)]
    [:circle (apply merge {:cx cx, :cy cy, :r r} attrs)]))

(defn ^:export ellipse [cx cy rx ry & options]
  (let [attrs (apply hash-map options)]
    [:ellipse (apply merge {:cx cx, :cy cy, :rx rx, :ry ry} attrs)]))

(defn ^:export polygon [[& points] & options]
  (let [attrs (apply hash-map options)
	points (reduce (fn [s [x y]] (str s " " x "," y))
		       "" (partition 2 points))]
    [:polygon (apply merge {:points points}
		     attrs)]))

(defn ^:export text [& content]
  (concat [:text] content))

(defn ^:export group [& content]
  (cons :g content))

(defn ^:export draw [& commands]
  (reduce (fn [s [cmd args]] (str s " " (name cmd) (apply str (interpose "," args))))
	  "" (partition 2 commands)))

(defn ^:export path [draw-commands & options]
  (let [attrs (apply hash-map options)]
    [:path (merge {:d (apply draw draw-commands)} attrs)]))

(defn ^:export tref [id]
  [:tref {"xlink:href" (str "#" (name id))}])

(defn ^:export rgb [r g b]
  (str "rgb(" r "," g "," b ")"))

(defn ^:export animate [elem attr & attrs]
  (-> elem
      (xml/add-content (-> [:animate {:attributeName (name attr),
				      :begin 0, :fill "freeze"}]
			   (xml/merge-attrs (apply hash-map attrs))))))

(defn ^:export animate-motion [elem & attrs]
  (-> elem
      (xml/add-content (-> [:animateMotion {:begin 0, :fill "freeze"}]
			   (xml/merge-attrs (apply hash-map attrs))))))

(defn ^:export animate-color [elem attr & attrs]
  (-> elem
      (xml/add-content (-> [:animateColor {:attributeName (name attr),
					   :begin 0, :fill "freeze"}]
			   (xml/merge-attrs (apply hash-map attrs))))))

(defn ^:export animate-transform [elem & attrs]
  (-> elem
      (xml/add-content (-> [:animateTransform {:attributeName "transform"
					       :begin 0, :fill "freeze"}]
			   (xml/merge-attrs (apply hash-map attrs))))))

(defn ^:export transform [elem trans]
  (let [attrs (xml/get-attrs elem)
	trans (if (:transform attrs)
		(str (:transform attrs) " " trans)
		trans)]
    (xml/add-attrs elem :transform trans)))

(defn ^:export rotate [elem angle x y]
  (transform elem (str "rotate(" angle "," x "," y ")")))

(defn ^:export translate
  ([elem x] (transform elem (str "translate(" x ")")))
  ([elem x y] (transform elem (str "translate(" x "," y ")"))))

(defn ^:export defs [[& bindings]]
  (let [bindings (partition 2 bindings)
	f (fn [defs-tag [id tag]]
	    (conj defs-tag
		  (xml/add-attrs tag :id (name id))))]
    (reduce f [:defs] bindings)))

(defn ^:export text-path [text path-id]
  [:textPath {"xlink:href" (str "#" (name path-id))} text])

(defn ^:export tspan [& content]
  (concat [:tspan] content))

(defn ^:export image [href & options]
  (let [attrs (apply hash-map options)]
    [:image (merge {"xlink:href" href} attrs)]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UTILITY FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export translate-value [v from-min from-max to-min to-max]
  (let [scale (/ (- to-max to-min)
		 (- from-max from-min))
	trans (- to-min (* from-min scale))]
    (+ (* v scale) trans)))

(defn ^:export parse-inline-css [css-str]
  (reduce (fn [m [k v]] (assoc m (keyword k) v))
	  {} (map #(.split % ":") (.split css-str ";"))))

(defn ^:export add-style [elem & styling]
  (let [css-str (or (:style (xml/get-attrs elem)) "")]
    (style-map elem (apply merge (parse-inline-css css-str) (apply hash-map styling)))))
