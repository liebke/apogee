(defproject org.clojars.frozenlock/apogee "0.1.1-SNAPSHOT"
  :description "Apogee is a ClojureScript SVG and charting library."
  :url "https://github.com/Frozenlock/apogee"
  :dependencies [[org.clojure/clojure "1.5.1"]]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :cljsbuild { 
              :builds {
                       :main {
                              :source-paths ["src/apogee"]                              
                              :jar true}
                       :example {
                                 :source-paths ["src/examples"]
                                 :compiler {:output-to "apogee.js"
                                            :optimizations :simple
                                            :pretty-print true}}}})

