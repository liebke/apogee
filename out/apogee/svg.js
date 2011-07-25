goog.provide('apogee.svg');
goog.require('cljs.core');
goog.require('apogee.xml');
/**
* @param {...*} var_args
*/
apogee.svg.svg = (function svg(var_args){
var content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var xmlns__2112 = cljs.core.ObjMap.fromObject(["xmlns:svg","xmlns","xmlns:xlink","version"],{"xmlns:svg":"http://www.w3.org/2000/svg","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","version":"1.0"});
var attrs__2113 = (cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,content)))?cljs.core.first.call(null,content):cljs.core.ObjMap.fromObject([],{}));
var content__2114 = (cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,content)))?cljs.core.rest.call(null,content):content);

return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["﷐'svg",cljs.core.merge.call(null,xmlns__2112,attrs__2113)]),content__2114);
});
goog.exportSymbol('apogee.svg.svg', apogee.svg.svg);
apogee.svg.style_map = (function style_map(elem,props){
var styling__2120 = (cljs.core.truth_(cljs.core.seq.call(null,props))?cljs.core.reduce.call(null,(function (s,p__2115){
var vec__2116__2117 = p__2115;
var k__2118 = cljs.core.nth.call(null,vec__2116__2117,0,null);
var v__2119 = cljs.core.nth.call(null,vec__2116__2117,1,null);

return cljs.core.str.call(null,s," ",cljs.core.name.call(null,k__2118),": ",(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__2119))?cljs.core.name.call(null,v__2119):v__2119),"; ");
}),"",props):null);

return apogee.xml.add_attrs.call(null,elem,"﷐'style",styling__2120);
});
goog.exportSymbol('apogee.svg.style_map', apogee.svg.style_map);
/**
* @param {...*} var_args
*/
apogee.svg.style = (function style(elem,var_args){
var properties = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return apogee.svg.style_map.call(null,elem,cljs.core.apply.call(null,cljs.core.hash_map,properties));
});
goog.exportSymbol('apogee.svg.style', apogee.svg.style);
/**
* @param {...*} var_args
*/
apogee.svg.line = (function line(x1,y1,x2,y2,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
var attrs__2121 = cljs.core.apply.call(null,cljs.core.hash_map,options);

return cljs.core.Vector.fromArray(["﷐'line",cljs.core.apply.call(null,cljs.core.merge,cljs.core.ObjMap.fromObject(["﷐'x1","﷐'y1","﷐'x2","﷐'y2"],{"﷐'x1":x1,"﷐'y1":y1,"﷐'x2":x2,"﷐'y2":y2}),attrs__2121)]);
});
goog.exportSymbol('apogee.svg.line', apogee.svg.line);
/**
* @param {...*} var_args
*/
apogee.svg.rect = (function rect(x,y,height,width,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
var attrs__2122 = cljs.core.apply.call(null,cljs.core.hash_map,options);

return cljs.core.Vector.fromArray(["﷐'rect",cljs.core.apply.call(null,cljs.core.merge,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y","﷐'height","﷐'width"],{"﷐'x":x,"﷐'y":y,"﷐'height":height,"﷐'width":width}),attrs__2122)]);
});
goog.exportSymbol('apogee.svg.rect', apogee.svg.rect);
/**
* @param {...*} var_args
*/
apogee.svg.circle = (function circle(cx,cy,r,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var attrs__2123 = cljs.core.apply.call(null,cljs.core.hash_map,options);

return cljs.core.Vector.fromArray(["﷐'circle",cljs.core.apply.call(null,cljs.core.merge,cljs.core.ObjMap.fromObject(["﷐'cx","﷐'cy","﷐'r"],{"﷐'cx":cx,"﷐'cy":cy,"﷐'r":r}),attrs__2123)]);
});
goog.exportSymbol('apogee.svg.circle', apogee.svg.circle);
/**
* @param {...*} var_args
*/
apogee.svg.ellipse = (function ellipse(cx,cy,rx,ry,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
var attrs__2124 = cljs.core.apply.call(null,cljs.core.hash_map,options);

return cljs.core.Vector.fromArray(["﷐'ellipse",cljs.core.apply.call(null,cljs.core.merge,cljs.core.ObjMap.fromObject(["﷐'cx","﷐'cy","﷐'rx","﷐'ry"],{"﷐'cx":cx,"﷐'cy":cy,"﷐'rx":rx,"﷐'ry":ry}),attrs__2124)]);
});
goog.exportSymbol('apogee.svg.ellipse', apogee.svg.ellipse);
/**
* @param {...*} var_args
*/
apogee.svg.polygon = (function polygon(p__2125,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var vec__2126__2127 = p__2125;
var points__2128 = cljs.core.nthnext.call(null,vec__2126__2127,0);

var attrs__2129 = cljs.core.apply.call(null,cljs.core.hash_map,options);
var points__2135 = cljs.core.reduce.call(null,(function (s,p__2130){
var vec__2131__2132 = p__2130;
var x__2133 = cljs.core.nth.call(null,vec__2131__2132,0,null);
var y__2134 = cljs.core.nth.call(null,vec__2131__2132,1,null);

return cljs.core.str.call(null,s," ",x__2133,",",y__2134);
}),"",cljs.core.partition.call(null,2,points__2128));

return cljs.core.Vector.fromArray(["﷐'polygon",cljs.core.apply.call(null,cljs.core.merge,cljs.core.ObjMap.fromObject(["﷐'points"],{"﷐'points":points__2135}),attrs__2129)]);
});
goog.exportSymbol('apogee.svg.polygon', apogee.svg.polygon);
/**
* @param {...*} var_args
*/
apogee.svg.text = (function text(var_args){
var content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["﷐'text"]),content);
});
goog.exportSymbol('apogee.svg.text', apogee.svg.text);
/**
* @param {...*} var_args
*/
apogee.svg.group = (function group(var_args){
var content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.cons.call(null,"﷐'g",content);
});
goog.exportSymbol('apogee.svg.group', apogee.svg.group);
/**
* @param {...*} var_args
*/
apogee.svg.draw = (function draw(var_args){
var commands = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.reduce.call(null,(function (s,p__2136){
var vec__2137__2138 = p__2136;
var cmd__2139 = cljs.core.nth.call(null,vec__2137__2138,0,null);
var args__2140 = cljs.core.nth.call(null,vec__2137__2138,1,null);

return cljs.core.str.call(null,s," ",cljs.core.name.call(null,cmd__2139),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",args__2140)));
}),"",cljs.core.partition.call(null,2,commands));
});
goog.exportSymbol('apogee.svg.draw', apogee.svg.draw);
/**
* @param {...*} var_args
*/
apogee.svg.path = (function path(draw_commands,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var attrs__2141 = cljs.core.apply.call(null,cljs.core.hash_map,options);

return cljs.core.Vector.fromArray(["﷐'path",cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["﷐'d"],{"﷐'d":cljs.core.apply.call(null,apogee.svg.draw,draw_commands)}),attrs__2141)]);
});
goog.exportSymbol('apogee.svg.path', apogee.svg.path);
apogee.svg.tref = (function tref(id){
return cljs.core.Vector.fromArray(["﷐'tref",cljs.core.ObjMap.fromObject(["xlink:href"],{"xlink:href":cljs.core.str.call(null,"#",cljs.core.name.call(null,id))})]);
});
goog.exportSymbol('apogee.svg.tref', apogee.svg.tref);
apogee.svg.rgb = (function rgb(r,g,b){
return cljs.core.str.call(null,"rgb(",r,",",g,",",b,")");
});
goog.exportSymbol('apogee.svg.rgb', apogee.svg.rgb);
/**
* @param {...*} var_args
*/
apogee.svg.animate = (function animate(elem,attr,var_args){
var attrs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return apogee.xml.add_content.call(null,elem,apogee.xml.merge_attrs.call(null,cljs.core.Vector.fromArray(["﷐'animate",cljs.core.ObjMap.fromObject(["﷐'attributeName","﷐'begin","﷐'fill"],{"﷐'attributeName":cljs.core.name.call(null,attr),"﷐'begin":0,"﷐'fill":"freeze"})]),cljs.core.apply.call(null,cljs.core.hash_map,attrs)));
});
goog.exportSymbol('apogee.svg.animate', apogee.svg.animate);
/**
* @param {...*} var_args
*/
apogee.svg.animate_motion = (function animate_motion(elem,var_args){
var attrs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return apogee.xml.add_content.call(null,elem,apogee.xml.merge_attrs.call(null,cljs.core.Vector.fromArray(["﷐'animateMotion",cljs.core.ObjMap.fromObject(["﷐'begin","﷐'fill"],{"﷐'begin":0,"﷐'fill":"freeze"})]),cljs.core.apply.call(null,cljs.core.hash_map,attrs)));
});
goog.exportSymbol('apogee.svg.animate_motion', apogee.svg.animate_motion);
/**
* @param {...*} var_args
*/
apogee.svg.animate_color = (function animate_color(elem,attr,var_args){
var attrs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return apogee.xml.add_content.call(null,elem,apogee.xml.merge_attrs.call(null,cljs.core.Vector.fromArray(["﷐'animateColor",cljs.core.ObjMap.fromObject(["﷐'attributeName","﷐'begin","﷐'fill"],{"﷐'attributeName":cljs.core.name.call(null,attr),"﷐'begin":0,"﷐'fill":"freeze"})]),cljs.core.apply.call(null,cljs.core.hash_map,attrs)));
});
goog.exportSymbol('apogee.svg.animate_color', apogee.svg.animate_color);
/**
* @param {...*} var_args
*/
apogee.svg.animate_transform = (function animate_transform(elem,var_args){
var attrs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return apogee.xml.add_content.call(null,elem,apogee.xml.merge_attrs.call(null,cljs.core.Vector.fromArray(["﷐'animateTransform",cljs.core.ObjMap.fromObject(["﷐'attributeName","﷐'begin","﷐'fill"],{"﷐'attributeName":"transform","﷐'begin":0,"﷐'fill":"freeze"})]),cljs.core.apply.call(null,cljs.core.hash_map,attrs)));
});
goog.exportSymbol('apogee.svg.animate_transform', apogee.svg.animate_transform);
apogee.svg.transform = (function transform(elem,trans){
var attrs__2142 = apogee.xml.get_attrs.call(null,elem);
var trans__2143 = (cljs.core.truth_("﷐'transform".call(null,attrs__2142))?cljs.core.str.call(null,"﷐'transform".call(null,attrs__2142)," ",trans):trans);

return apogee.xml.add_attrs.call(null,elem,"﷐'transform",trans__2143);
});
goog.exportSymbol('apogee.svg.transform', apogee.svg.transform);
apogee.svg.rotate = (function rotate(elem,angle,x,y){
return apogee.svg.transform.call(null,elem,cljs.core.str.call(null,"rotate(",angle,",",x,",",y,")"));
});
goog.exportSymbol('apogee.svg.rotate', apogee.svg.rotate);
apogee.svg.translate = (function() {
var translate = null;
var translate__2144 = (function (elem,x){
return apogee.svg.transform.call(null,elem,cljs.core.str.call(null,"translate(",x,")"));
});
var translate__2145 = (function (elem,x,y){
return apogee.svg.transform.call(null,elem,cljs.core.str.call(null,"translate(",x,",",y,")"));
});
translate = function(elem,x,y){
switch(arguments.length){
case  2 :
return translate__2144.call(this,elem,x);
case  3 :
return translate__2145.call(this,elem,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return translate;
})()
;
goog.exportSymbol('apogee.svg.translate', apogee.svg.translate);
apogee.svg.defs = (function defs(p__2147){
var vec__2148__2149 = p__2147;
var bindings__2150 = cljs.core.nthnext.call(null,vec__2148__2149,0);

var bindings__2151 = cljs.core.partition.call(null,2,bindings__2150);
var f__2157 = (function (defs_tag,p__2152){
var vec__2153__2154 = p__2152;
var id__2155 = cljs.core.nth.call(null,vec__2153__2154,0,null);
var tag__2156 = cljs.core.nth.call(null,vec__2153__2154,1,null);

return cljs.core.conj.call(null,defs_tag,apogee.xml.add_attrs.call(null,tag__2156,"﷐'id",cljs.core.name.call(null,id__2155)));
});

return cljs.core.reduce.call(null,f__2157,cljs.core.Vector.fromArray(["﷐'defs"]),bindings__2151);
});
goog.exportSymbol('apogee.svg.defs', apogee.svg.defs);
apogee.svg.text_path = (function text_path(text,path_id){
return cljs.core.Vector.fromArray(["﷐'textPath",cljs.core.ObjMap.fromObject(["xlink:href"],{"xlink:href":cljs.core.str.call(null,"#",cljs.core.name.call(null,path_id))}),text]);
});
goog.exportSymbol('apogee.svg.text_path', apogee.svg.text_path);
/**
* @param {...*} var_args
*/
apogee.svg.tspan = (function tspan(var_args){
var content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["﷐'tspan"]),content);
});
goog.exportSymbol('apogee.svg.tspan', apogee.svg.tspan);
/**
* @param {...*} var_args
*/
apogee.svg.image = (function image(href,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var attrs__2158 = cljs.core.apply.call(null,cljs.core.hash_map,options);

return cljs.core.Vector.fromArray(["﷐'image",cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["xlink:href"],{"xlink:href":href}),attrs__2158)]);
});
goog.exportSymbol('apogee.svg.image', apogee.svg.image);
apogee.svg.translate_value = (function translate_value(v,from_min,from_max,to_min,to_max){
var scale__2160 = cljs.core._SLASH_.call(null,cljs.core._.call(null,to_max,to_min),cljs.core._.call(null,from_max,from_min));
var trans__2161 = cljs.core._.call(null,to_min,cljs.core._STAR_.call(null,from_min,scale__2160));

return cljs.core._PLUS_.call(null,cljs.core._STAR_.call(null,v,scale__2160),trans__2161);
});
goog.exportSymbol('apogee.svg.translate_value', apogee.svg.translate_value);
apogee.svg.parse_inline_css = (function parse_inline_css(css_str){
return cljs.core.reduce.call(null,(function (m,p__2162){
var vec__2163__2164 = p__2162;
var k__2165 = cljs.core.nth.call(null,vec__2163__2164,0,null);
var v__2166 = cljs.core.nth.call(null,vec__2163__2164,1,null);

return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k__2165),v__2166);
}),cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p1__2159_SHARP_){
return p1__2159_SHARP_.split(":");
}),css_str.split(";")));
});
goog.exportSymbol('apogee.svg.parse_inline_css', apogee.svg.parse_inline_css);
/**
* @param {...*} var_args
*/
apogee.svg.add_style = (function add_style(elem,var_args){
var styling = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var css_str__2168 = (function (){var or__3576__auto____2167 = "﷐'style".call(null,apogee.xml.get_attrs.call(null,elem));

if(cljs.core.truth_(or__3576__auto____2167))
{return or__3576__auto____2167;
} else
{return "";
}
})();

return apogee.svg.style_map.call(null,elem,cljs.core.apply.call(null,cljs.core.merge,apogee.svg.parse_inline_css.call(null,css_str__2168),cljs.core.apply.call(null,cljs.core.hash_map,styling)));
});
goog.exportSymbol('apogee.svg.add_style', apogee.svg.add_style);
