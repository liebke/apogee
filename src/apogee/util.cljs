(ns apogee.util)

(defn ^:export range
  "Brain dead implementation of clojure.core/range until it is supported in ClojureScript"
  ([end] (range 0 end 1))
  ([start end] (range start end 1))
  ([start end step]
    (loop [i start result []]
      (if (< i end)
        (recur (+ i step) (conj result i))
        result))))

(defn ^:export format
"A Terrible replacement for clojure.core/format needed for trivial formatting requirement"
  ([n float-number] (.toFixed float-number n)))

