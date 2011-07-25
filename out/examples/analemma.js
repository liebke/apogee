goog.provide('examples.apogee');
goog.require('cljs.core');
goog.require('apogee.charts');
goog.require('apogee.svg');
goog.require('apogee.xml');
examples.apogee.analemma_data = cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([-15.165,-23.07]),cljs.core.Vector.fromArray([-17.016,-22.7]),cljs.core.Vector.fromArray([-19.171,-22.08]),cljs.core.Vector.fromArray([-21.099,-21.27]),cljs.core.Vector.fromArray([-22.755,-20.3]),cljs.core.Vector.fromArray([-24.107,-19.16]),cljs.core.Vector.fromArray([-25.446,-17.33]),cljs.core.Vector.fromArray([-25.914,-16.17]),cljs.core.Vector.fromArray([-26.198,-14.62]),cljs.core.Vector.fromArray([-26.158,-12.96]),cljs.core.Vector.fromArray([-25.814,-11.21]),cljs.core.Vector.fromArray([-25.194,-9.39]),cljs.core.Vector.fromArray([-24.52,-7.89]),cljs.core.Vector.fromArray([-23.708,-6.37]),cljs.core.Vector.fromArray([-22.529,-4.42]),cljs.core.Vector.fromArray([-21.205,-2.45]),cljs.core.Vector.fromArray([-19.777,-0.48]),cljs.core.Vector.fromArray([-18.289,1.5]),cljs.core.Vector.fromArray([-16.185,4.24]),cljs.core.Vector.fromArray([-15.009,5.78]),cljs.core.Vector.fromArray([-13.605,7.66]),cljs.core.Vector.fromArray([-12.309,9.49]),cljs.core.Vector.fromArray([-11.153,11.26]),cljs.core.Vector.fromArray([-10.169,12.94]),cljs.core.Vector.fromArray([-9.25,14.85]),cljs.core.Vector.fromArray([-8.811,16.04]),cljs.core.Vector.fromArray([-8.469,17.43]),cljs.core.Vector.fromArray([-8.364,18.69]),cljs.core.Vector.fromArray([-8.493,19.83]),cljs.core.Vector.fromArray([-8.847,20.82]),cljs.core.Vector.fromArray([-9.685,21.96]),cljs.core.Vector.fromArray([-10.317,22.47]),cljs.core.Vector.fromArray([-11.231,22.96]),cljs.core.Vector.fromArray([-12.243,23.28]),cljs.core.Vector.fromArray([-13.308,23.43]),cljs.core.Vector.fromArray([-14.378,23.41]),cljs.core.Vector.fromArray([-15.599,23.16]),cljs.core.Vector.fromArray([-16.339,22.86]),cljs.core.Vector.fromArray([-17.139,22.33]),cljs.core.Vector.fromArray([-17.767,21.64]),cljs.core.Vector.fromArray([-18.191,20.8]),cljs.core.Vector.fromArray([-18.387,19.81]),cljs.core.Vector.fromArray([-18.253,18.2]),cljs.core.Vector.fromArray([-17.956,17.17]),cljs.core.Vector.fromArray([-17.361,15.78]),cljs.core.Vector.fromArray([-16.529,14.28]),cljs.core.Vector.fromArray([-15.474,12.68]),cljs.core.Vector.fromArray([-14.221,11.01]),cljs.core.Vector.fromArray([-12.183,8.54]),cljs.core.Vector.fromArray([-10.901,7.07]),cljs.core.Vector.fromArray([-9.212,5.2]),cljs.core.Vector.fromArray([-7.462,3.29]),cljs.core.Vector.fromArray([-5.693,1.36]),cljs.core.Vector.fromArray([-3.946,-0.59]),cljs.core.Vector.fromArray([-1.938,-2.93]),cljs.core.Vector.fromArray([-0.686,-4.48]),cljs.core.Vector.fromArray([0.742,-6.39]),cljs.core.Vector.fromArray([1.982,-8.28]),cljs.core.Vector.fromArray([2.993,-10.11]),cljs.core.Vector.fromArray([3.742,-11.88]),cljs.core.Vector.fromArray([4.29,-14.23]),cljs.core.Vector.fromArray([4.318,-15.49]),cljs.core.Vector.fromArray([4.044,-16.97]),cljs.core.Vector.fromArray([3.42,-18.33]),cljs.core.Vector.fromArray([2.446,-19.55]),cljs.core.Vector.fromArray([1.135,-20.63]),cljs.core.Vector.fromArray([-0.852,-21.71]),cljs.core.Vector.fromArray([-2.398,-22.29]),cljs.core.Vector.fromArray([-4.538,-22.86]),cljs.core.Vector.fromArray([-6.855,-23.24]),cljs.core.Vector.fromArray([-9.286,-23.42]),cljs.core.Vector.fromArray([-11.761,-23.41]),cljs.core.Vector.fromArray([-14.691,-23.14])]);
goog.exportSymbol('examples.apogee.analemma_data', examples.apogee.analemma_data);
examples.apogee.analemma_chart = (function analemma_chart(){
return apogee.xml.emit.call(null,apogee.svg.svg.call(null,"﷐'svg".call(null,apogee.charts.add_points.call(null,apogee.charts.xy_plot.call(null,"﷐'xmin",-30,"﷐'xmax",10,"﷐'ymin",-30,"﷐'ymax",30,"﷐'height",500,"﷐'width",500),examples.apogee.analemma_data))));
});
goog.exportSymbol('examples.apogee.analemma_chart', examples.apogee.analemma_chart);
examples.apogee.analemma_logo = (function analemma_logo(){
return apogee.xml.emit.call(null,apogee.svg.svg.call(null,cljs.core.apply.call(null,apogee.svg.group,apogee.svg.style.call(null,apogee.xml.add_attrs.call(null,apogee.svg.text.call(null,"Analemma"),"﷐'x",120,"﷐'y",60),"﷐'fill",/000066/,"﷐'font-family","Garamond","﷐'font-size","75px","﷐'alignment-baseline","﷐'middle"),(function (){var iter__159__auto____2246 = (function iter__2239(s__2240){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2240__2241 = s__2240;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2240__2241)))
{var vec__2242__2243 = cljs.core.first.call(null,s__2240__2241);
var x__2244 = cljs.core.nth.call(null,vec__2242__2243,0,null);
var y__2245 = cljs.core.nth.call(null,vec__2242__2243,1,null);

return cljs.core.cons.call(null,apogee.svg.circle.call(null,apogee.svg.translate_value.call(null,x__2244,-30,5,0,125),apogee.svg.translate_value.call(null,y__2245,-25,30,125,0),2,"﷐'fill","#000066"),iter__2239.call(null,cljs.core.rest.call(null,s__2240__2241)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____2246.call(null,examples.apogee.analemma_data);
})())));
});
goog.exportSymbol('examples.apogee.analemma_logo', examples.apogee.analemma_logo);
examples.apogee.rotating_analemma_logo = (function rotating_analemma_logo(){
return apogee.xml.emit.call(null,apogee.svg.svg.call(null,apogee.svg.animate_transform.call(null,cljs.core.apply.call(null,apogee.svg.group,apogee.svg.style.call(null,apogee.xml.add_attrs.call(null,apogee.svg.text.call(null,"Analemma"),"﷐'x",120,"﷐'y",60),"﷐'fill",/000066/,"﷐'font-family","Garamond","﷐'font-size","75px","﷐'alignment-baseline","﷐'middle"),(function (){var iter__159__auto____2254 = (function iter__2247(s__2248){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2248__2249 = s__2248;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2248__2249)))
{var vec__2250__2251 = cljs.core.first.call(null,s__2248__2249);
var x__2252 = cljs.core.nth.call(null,vec__2250__2251,0,null);
var y__2253 = cljs.core.nth.call(null,vec__2250__2251,1,null);

return cljs.core.cons.call(null,apogee.svg.circle.call(null,apogee.svg.translate_value.call(null,x__2252,-30,5,0,125),apogee.svg.translate_value.call(null,y__2253,-25,30,125,0),2,"﷐'fill","#000066"),iter__2247.call(null,cljs.core.rest.call(null,s__2248__2249)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____2254.call(null,examples.apogee.analemma_data);
})()),"﷐'begin",0,"﷐'dur",20,"﷐'type","﷐'rotate","﷐'from","0 200 150","﷐'to","360 200 150","﷐'repeatCount","﷐'indefinite")));
});
goog.exportSymbol('examples.apogee.rotating_analemma_logo', examples.apogee.rotating_analemma_logo);
