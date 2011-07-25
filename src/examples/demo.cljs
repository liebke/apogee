(ns examples.demo
  (:require [apogee.xml :as xml]
	[apogee.svg :as svg]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ANALEMMA SVG EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def ^:export ex-group (xml/emit (svg/svg
			 (svg/svg {:x 50 :y 50}
				  (-> (svg/group
				       (-> (svg/line 10 10 85 10)
					   (svg/style :stroke "#006600"))
				       (-> (svg/rect 10 20 50 75)
					   (svg/style :stroke "#006600" :fill "#006600"))
				       (-> (svg/text {:x 10 :y 90} "Text grouped with shapes")
					   (svg/style :stroke "#660000" :fill "660000")))
				      (svg/rotate 45 50 50))))))

;; http://tutorials.jenkov.com/svg/rect-element.html
(def ^:export ex-round-rects
     (xml/emit (svg/svg
       (-> (svg/rect 10 10 50 50 :rx 5 :ry 5)
	   (svg/style :stroke "#006600" :fill "#00cc00"))
       (-> (svg/rect 70 10 50 50 :rx 10 :ry 10)
	   (svg/style :stroke "#006600" :fill "#00cc00"))
       (-> (svg/rect 130 10 50 50 :rx 15 :ry 15)
	   (svg/style :stroke "#006600" :fill "#00cc00")))))

(def ^:export ex-circle (xml/emit (svg/svg
			  (-> (svg/circle 40 40 24)
			      (svg/style :stroke "#006600" :fill "#00cc00")))))

(def ^:export ex-ellipse (xml/emit (svg/svg
			   (-> (svg/ellipse 40 40 30 15)
			       (svg/style :stroke "#006600" :fill "#00cc00")))))

(def ex-tri (xml/emit (svg/svg
	      (-> (svg/polygon [0,0 30,0 15,30 0,0])
		  (svg/style :stroke "#006600" :fill "#33cc33")))))

(def ^:export ex-oct (xml/emit (svg/svg
		       (-> (svg/polygon [50,05 100,5 125,30 125,80 100,105 50,105 25,80 25,30])
			   (svg/style :stroke "#660000"
				      :fill "#cc3333"
				      :stroke-width 3)))))

;; http://tutorials.jenkov.com/svg/path-element.html
(def ^:export ex-path (xml/emit (svg/svg
			(-> (svg/path [:M [50,50]
				       :A [30,30 0 0,1 35,20]
				       :L [100,100]
				       :M [110,110]
				       :L [100,0]])
			    (svg/style :stroke "#660000" :fill :none)))))

(def ^:export ex-text (xml/emit (svg/svg
			(svg/text {:x 20 :y 40} "Example SVG text 1")
			(-> (svg/line 10 40 150 40)
			    (svg/style :stroke "#000000")))))

(def ^:export ex-text2 (xml/emit (svg/svg
			 (-> (svg/text {:x 20 :y 40} "Rotated SVG text")
			     (svg/style :stroke :none :fill "#000000")
			     (svg/rotate 30 20 40)))))

(def ^:export ex-text3 (xml/emit (svg/svg
			 (-> (svg/text {:x 20 :y 40} "Styled SVG text")
			     (svg/style :font-family "Arial"
					:font-size 34
					:stroke "#000000"
					:fill "#00ff00")))))

(def ^:export ex-text4 (xml/emit (svg/svg
			 (svg/text {:x 20 :y 10}
				   (svg/tspan "tspan line 1")
				   (svg/tspan "tspan line 2")
				   (svg/tspan "tspan line 3")))))

(def ^:export ex-text5 (xml/emit (svg/svg
			 (svg/text {:y 10}
				   (svg/tspan {:x 0} "tspan line 1")
				   (svg/tspan {:x 0 :dy 15} "tspan line 2")
				   (svg/tspan {:x 0 :dy 15} "tspan line 3")))))

(def ^:export ex-tref (xml/emit (svg/svg
			(svg/defs [:the-text (svg/text "A text that is referenced.")])
			(svg/text {:x 20 :y 10} (svg/tref :the-text))
			(svg/text {:x 30 :y 30} (svg/tref :the-text)))))

(def ^:export ex-text-path (xml/emit (svg/svg
			     (svg/defs [:my-path (svg/path [:M [75,20]
							    :a [1,1 0 0,0 100,0]])])
			     (-> (svg/text {:x 10 :y 100}
					   (svg/text-path "Text along a curved path..." :my-path))
				 (svg/style :stroke "#000000")))))

(def ^:export ex-text-path2 (xml/emit (svg/svg
			      (svg/defs [:the-text (svg/text "Text ref along a curved path...")
					 :my-path (svg/path [:M [75,20]
							     :a [1,1 0 0,0 100,0]])])
			      (-> (svg/text {:x 10 :y 100}
					    (svg/text-path (svg/tref :the-text) :my-path))
				  (svg/style :stroke "#000000")))))

(def ^:export ex-img (xml/emit (svg/svg
		       (-> (svg/rect 10 10 130 500)
			   (svg/style :fill "#000000"))
		       (svg/image "http://jenkov.com/images/layout/top-bar-logo.png"
				  :x 20 :y 20 :width 300 :height 80)
		       (-> (svg/line 25 80 350 80)
			   (svg/style :stroke "#ffffff" :stroke-width 3)))))

(def ^:export ex-trans (xml/emit (svg/svg
			 (-> (svg/rect 50 50 110 110)
			     (svg/style :stroke "#ff0000" :fill "#ccccff")
			     (svg/translate 30)
			     (svg/rotate 45 50 50))
			 (-> (svg/text {:x 70 :y 100} "Hello World")
			     (svg/translate 30)
			     (svg/rotate 45 50 50)))))

(def ^:export ex-animate (xml/emit (svg/svg
			   (-> (svg/rect 10 10 110 110)
			       (svg/style :stroke "#ff0000" :fill "#0000ff")
			       (svg/animate-transform :begin 0
						      :dur 20
						      :type :rotate
						      :from "0 60 60"
						      :to "360 60 60"
						      :repeatCount :indefinite)))))

;; http://www.w3.org/TR/SVG/animate.html
(def ^:export ex-anim2 (xml/emit (svg/svg
			 (-> (svg/rect 1 1 298 798)
			     (svg/style :fill "none" :stroke "blue" :stroke-width 2))

			 (-> (svg/rect 300 100 300 100)
			     (svg/style :fill (svg/rgb 255 255 0))
			     (svg/animate :x :begin 0 :dur 9 :from 300 :to 0)
			     (svg/animate :y :begin 0 :dur 9 :from 100 :to 0)
			     (svg/animate :width :begin 0 :dur 9 :from 300 :to 800)
			     (svg/animate :height :begin 0 :dur 9 :from 100 :to 300))

			 (-> (svg/group
			      (-> (svg/text "It's alive")
				  (svg/style :font-family :Verdana
					     :font-size 35.27
					     :visibility :hidden)
				  (svg/animate :visibility :to :visible :begin 3)
				  (svg/animate-motion :path (svg/draw :M [0 0] :L [100 100])
						      :begin 3 :dur 6)
				  (svg/animate-color :fill :from (svg/rgb 0 0 255) :to (svg/rgb 128 0 0)
						     :begin 3 :dur 6)
				  (svg/animate-transform :type :rotate :from -30 :to 0 :begin 3 :dur 6)
				  (svg/animate-transform :type :scale :from 1 :to 3 :additive :sum
							 :begin 3 :dur 6)))
			     (svg/translate 100 100)))))

(def ^:export ex-anim-logo (xml/emit (svg/svg
			     (-> (svg/image "http://clojure.org/space/showimage/clojure-icon.gif"
					    :width 100 :height 100)
				 (svg/animate :x :begin 0 :dur 9 :from 0 :to 300)
				 (svg/animate :y :begin 0 :dur 9 :from 0 :to 300)))))

(def ^:export ex-anim-logo2 (xml/emit (svg/svg
			      (-> (svg/image "http://clojure.org/space/showimage/clojure-icon.gif"
					     :width 100 :height 100)
				  (svg/animate-transform :type :rotate :from -30 :to 0 :begin 0 :dur 6)))))

(def ^:export ex-anim-logo3 (xml/emit (svg/svg
			      (-> (svg/group
				   (-> (svg/image "http://clojure.org/space/showimage/clojure-icon.gif"
						  :width 100 :height 100)
				       (svg/animate-transform :type :rotate
							      :begin 0
							      :dur 20
							      :from "0 50 50"
							      :to "360 50 50"
							      :repeatCount :indefinite)))
			
				  (svg/translate 100 100)))))

(defn txt-box [txt x y fill]
  (let [box-width 300
	box-height 50]
    (-> (svg/svg 
	  (svg/group 
	   (-> (svg/rect 0 0 box-height box-width :rx 5 :ry 5)
	       (svg/style :stroke fill :fill fill))
	   (-> (svg/text txt)
	       (xml/add-attrs :x (/ box-width 2)
			  :y (/ box-height 2))
	       (svg/style :fill "#ffffff"
		      :font-size "25px"
		      :font-family "Verdana"
		      :alignment-baseline :middle
		      :text-anchor :middle))))
	(xml/add-attrs :x x :y y))))

(defn ^:export apogee-stack []
  (xml/emit
   (svg/svg
    (-> (svg/group
	 (-> (txt-box "apogee.charts" 0 10 "#006600")
	     (xml/add-attrs :visibility :hidden)
	     (svg/animate :visibility :to :visible :begin 5)
	     (svg/animate :y :begin 5 :dur 1 :from 0 :to 10))
	 (-> (txt-box "apogee.svg" 0 65 "#660000")
	     (xml/add-attrs :visibility :hidden)
	     (svg/animate :visibility :to :visible :begin 3)
	     (svg/animate :y :begin 3 :dur 2 :from 0 :to 65))
	 (-> (txt-box "apogee.xml" 0 120 "#000066")
	     (xml/add-attrs :visibility :hidden)
	     (svg/animate :visibility :to :visible :begin 1)
	     (svg/animate :y :begin 1 :dur 4 :from 0 :to 120)))
	(svg/translate 10 10)))))


#_(defn parse-us-map []
  (xml/parse-xml (slurp "http://upload.wikimedia.org/wikipedia/commons/3/32/Blank_US_Map.svg")))

#_(defn hide-california []
  (xml/emit
   (xml/transform-xml (parse-us-map)
		      [{:id "CA"}]
		      #(xml/add-attrs % :visibility "hidden"))))

#_(defn color-maryland []
  (xml/emit
   (xml/transform-xml (parse-us-map)
		      [{:id "MD"}]
		      (fn [elem]
			(-> (svg/add-style elem :fill "#0000ff")
			    (xml/add-attrs :transform "scale(1.10)"))))))


#_(defn select-maryland []
  (xml/emit
   (svg/svg (-> (apply svg/svg {:x -600 :y -200}
		   (xml/filter-xml (parse-us-map)
				   [[:or "sodipodi:namedview" :defs {:id "MD"}]]))
	    (xml/transform-xml [:svg]
			       #(xml/add-attrs %
					       "xmlns:sodipodi" "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
					       "xmlns:inkscape" "http://www.inkscape.org/namespaces/inkscape"))
	    (xml/transform-xml [{:id "MD"}]
			       (fn [elem]
				 (xml/add-attrs elem :transform "scale(1.5)")))))))

(defn to-hex-string [n] (str "#" (.toString n 16)))

;;(to-hex-string (translate-value 0.5 0 1 0 16777215))

(def us-states
     {"AK"	 "ALASKA"
      "AL"	 "ALABAMA"
      "AR"	 "ARKANSAS"
      "AS"	 "AMERICAN SAMOA"
      "AZ"	 "ARIZONA"
      "CA"	 "CALIFORNIA"
      "CO"	 "COLORADO"
      "CT"	 "CONNECTICUT"
      "DC"	 "WASHINGTON, DC"
      "DE"	 "DELAWARE"
      "FL"	 "FLORIDA"
      "FM"	 "FEDERATED STATES OF MICRONESIA"
      "GA"	 "GEORGIA"
      "GU"	 "GUAM"
      "HI"	 "HAWAII"
      "IA"	 "IOWA"
      "ID"	 "IDAHO"
      "IL"	 "ILLINOIS"
      "IN"	 "INDIANA"
      "KS"	 "KANSAS"
      "KY"	 "KENTUCKY"
      "LA"	 "LOUISIANA"
      "MA"	 "MASSACHUSETTS"
      "MD"	 "MARYLAND"
      "ME"	 "MAINE"
      "MH"	 "MARSHALL ISLANDS"
      "MI"	 "MICHIGAN"
      "MN"	 "MINNESOTA"
      "MO"	 "MISSOURI"
      "MP"	 "NORTHERN MARIANA ISLANDS"
      "MS"	 "MISSISSIPPI"
      "MT"	 "MONTANA"
      "NC"	 "NORTH CAROLINA"
      "ND"	 "NORTH DAKOTA"
      "NE"	 "NEBRASKA"
      "NH"	 "NEW HAMPSHIRE"
      "NJ"	 "NEW JERSEY"
      "NM"	 "NEW MEXICO"
      "NV"	 "NEVADA"
      "NY"	 "NEW YORK"
      "OH"	 "OHIO"
      "OK"	 "OKLAHOMA"
      "OR"	 "OREGON"
      "PA"	 "PENNSYLVANIA"
      "PR"	 "PUERTO RICO"
      "PW"	 "PALAU"
      "RI"	 "RHODE ISLAND"
      "SC"	 "SOUTH CAROLINA"
      "SD"	 "SOUTH DAKOTA"
      "TN"	 "TENNESSEE"
      "TX"	 "TEXAS"
      "UT"	 "UTAH"
      "VA"	 "VIRGINIA"
      "VI"	 "VIRGIN ISLANDS"
      "VT"	 "VERMONT"
      "WA"	 "WASHINGTON"
      "WI"	 "WISCONSIN"
      "WV"	 "WEST VIRGINIA"
      "WY"	 "WYOMING"})

#_(defn color-states []
  (xml/emit
   (xml/transform-xml (parse-us-map)
		      [[:and [:not {:id "path57"}] [:or :g :path]]]
		      (fn [elem]
			(svg/add-style elem :fill (to-hex-string (rand 16777215)))))))

