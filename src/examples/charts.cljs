(ns examples.charts
  (:require [apogee.charts :as charts]
	    [apogee.svg :as svg]
	    [apogee.util :as util]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; BASIC CHART EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export rand-plot []
  (let [x (repeatedly 25 #(rand-int 100))
	y (repeatedly 25 #(rand-int 100))]
    (charts/emit-svg
     (-> (charts/xy-plot :width 500 :height 500 :label-points? true)
	 (charts/add-points [x y] :transpose-data? true)))))

(defn ^:export sin-cos-plot []
  (let [x (util/range -5 5 0.05)
	y1 (map #(Math/cos %) x)
	y2 (map #(Math/sin %) x)]
    (charts/emit-svg
     (-> (charts/xy-plot :width 450 :height 200
			 :xmin -5 :xmax 5
			 :ymin -1.5 :ymax 1.5)
	 (charts/add-points [x y1]
			    :transpose-data? true
			    :size 1)
	 (charts/add-points [x y2]
			    :transpose-data? true
			    :size 1
			    :fill (svg/rgb 255 0 0))))))


