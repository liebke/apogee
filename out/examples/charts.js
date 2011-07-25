goog.provide('examples.charts');
goog.require('cljs.core');
goog.require('apogee.charts');
goog.require('apogee.svg');
goog.require('apogee.util');
examples.charts.rand_plot = (function rand_plot(){
var x__2257 = cljs.core.repeatedly.call(null,25,(function (){
return cljs.core.rand_int.call(null,100);
}));
var y__2258 = cljs.core.repeatedly.call(null,25,(function (){
return cljs.core.rand_int.call(null,100);
}));

return apogee.charts.emit_svg.call(null,apogee.charts.add_points.call(null,apogee.charts.xy_plot.call(null,"﷐'width",500,"﷐'height",500,"﷐'label-points?",true),cljs.core.Vector.fromArray([x__2257,y__2258]),"﷐'transpose-data?",true));
});
goog.exportSymbol('examples.charts.rand_plot', examples.charts.rand_plot);
examples.charts.sin_cos_plot = (function sin_cos_plot(){
var x__2259 = apogee.util.range.call(null,-5,5,0.05);
var y1__2260 = cljs.core.map.call(null,(function (p1__2255_SHARP_){
return Math.cos.call(null,p1__2255_SHARP_);
}),x__2259);
var y2__2261 = cljs.core.map.call(null,(function (p1__2256_SHARP_){
return Math.sin.call(null,p1__2256_SHARP_);
}),x__2259);

return apogee.charts.emit_svg.call(null,apogee.charts.add_points.call(null,apogee.charts.add_points.call(null,apogee.charts.xy_plot.call(null,"﷐'width",450,"﷐'height",200,"﷐'xmin",-5,"﷐'xmax",5,"﷐'ymin",-1.5,"﷐'ymax",1.5),cljs.core.Vector.fromArray([x__2259,y1__2260]),"﷐'transpose-data?",true,"﷐'size",1),cljs.core.Vector.fromArray([x__2259,y2__2261]),"﷐'transpose-data?",true,"﷐'size",1,"﷐'fill",apogee.svg.rgb.call(null,255,0,0)));
});
goog.exportSymbol('examples.charts.sin_cos_plot', examples.charts.sin_cos_plot);
