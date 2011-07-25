goog.provide('apogee.charts');
goog.require('cljs.core');
goog.require('apogee.svg');
goog.require('apogee.xml');
goog.require('apogee.util');
apogee.charts.default_chart_props = cljs.core.ObjMap.fromObject(["﷐'minor-grid-width","﷐'width","﷐'y","﷐'axis-font-size","﷐'major-grid-width","﷐'x","﷐'label-points?","﷐'minor-grid-color","﷐'points","﷐'label-number-format","﷐'major-grid-color","﷐'xmin","﷐'xmax","﷐'ymin","﷐'background-color","﷐'grid-lines","﷐'ymax","﷐'axis-font-family","﷐'label-font-family","﷐'axis-number-format","﷐'label-font-size","﷐'height"],{"﷐'minor-grid-width":1,"﷐'width":750,"﷐'y":50,"﷐'axis-font-size":"12px","﷐'major-grid-width":2,"﷐'x":50,"﷐'label-points?":false,"﷐'minor-grid-color":apogee.svg.rgb.call(null,245,245,245),"﷐'points":cljs.core.Vector.fromArray([]),"﷐'label-number-format":1,"﷐'major-grid-color":apogee.svg.rgb.call(null,255,255,255),"﷐'xmin":0,"﷐'xmax":100,"﷐'ymin":0,"﷐'background-color":apogee.svg.rgb.call(null,225,225,225),"﷐'grid-lines":10,"﷐'ymax":100,"﷐'axis-font-family":"Verdana","﷐'label-font-family":"Verdana","﷐'axis-number-format":1,"﷐'label-font-size":"10px","﷐'height":500});
goog.exportSymbol('apogee.charts.default_chart_props', apogee.charts.default_chart_props);
apogee.charts.chart_background = (function chart_background(p__1960){
var map__1961__1962 = p__1960;
var map__1961__1963 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__1961__1962))?cljs.core.apply.call(null,cljs.core.hash_map,map__1961__1962):map__1961__1962);
var major_grid_width__1964 = cljs.core.get.call(null,map__1961__1963,"﷐'major-grid-width");
var major_grid_color__1965 = cljs.core.get.call(null,map__1961__1963,"﷐'major-grid-color");
var background_color__1966 = cljs.core.get.call(null,map__1961__1963,"﷐'background-color");
var width__1967 = cljs.core.get.call(null,map__1961__1963,"﷐'width");
var height__1968 = cljs.core.get.call(null,map__1961__1963,"﷐'height");

return apogee.svg.style.call(null,apogee.svg.rect.call(null,0,0,height__1968,width__1967),"﷐'fill",background_color__1966,"﷐'stroke",major_grid_color__1965,"﷐'stroke-width",major_grid_width__1964);
});
goog.exportSymbol('apogee.charts.chart_background', apogee.charts.chart_background);
apogee.charts.x_grid = (function x_grid(p__1969){
var map__1970__1971 = p__1969;
var map__1970__1972 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__1970__1971))?cljs.core.apply.call(null,cljs.core.hash_map,map__1970__1971):map__1970__1971);
var minor_grid_width__1973 = cljs.core.get.call(null,map__1970__1972,"﷐'minor-grid-width");
var major_grid_width__1974 = cljs.core.get.call(null,map__1970__1972,"﷐'major-grid-width");
var minor_grid_color__1975 = cljs.core.get.call(null,map__1970__1972,"﷐'minor-grid-color");
var major_grid_color__1976 = cljs.core.get.call(null,map__1970__1972,"﷐'major-grid-color");
var grid_lines__1977 = cljs.core.get.call(null,map__1970__1972,"﷐'grid-lines");
var xmax__1978 = cljs.core.get.call(null,map__1970__1972,"﷐'xmax");
var xmin__1979 = cljs.core.get.call(null,map__1970__1972,"﷐'xmin");
var width__1980 = cljs.core.get.call(null,map__1970__1972,"﷐'width");
var height__1981 = cljs.core.get.call(null,map__1970__1972,"﷐'height");

var grid_x_space__1982 = cljs.core._SLASH_.call(null,width__1980,grid_lines__1977);

var iter__159__auto____1987 = (function iter__1983(s__1984){
return (new cljs.core.LazySeq(null,false,(function (){
var s__1984__1985 = s__1984;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__1984__1985)))
{var i__1986 = cljs.core.first.call(null,s__1984__1985);

return cljs.core.cons.call(null,apogee.svg.style.call(null,apogee.svg.line.call(null,cljs.core._STAR_.call(null,i__1986,grid_x_space__1982),0,cljs.core._STAR_.call(null,i__1986,grid_x_space__1982),height__1981),"﷐'stroke",(cljs.core.truth_(cljs.core.even_QMARK_.call(null,i__1986))?major_grid_color__1976:minor_grid_color__1975),"﷐'stroke-width",(cljs.core.truth_(cljs.core.even_QMARK_.call(null,i__1986))?major_grid_width__1974:minor_grid_width__1973)),iter__1983.call(null,cljs.core.rest.call(null,s__1984__1985)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____1987.call(null,apogee.util.range.call(null,1,grid_lines__1977));
});
goog.exportSymbol('apogee.charts.x_grid', apogee.charts.x_grid);
apogee.charts.y_grid = (function y_grid(p__1988){
var map__1989__1990 = p__1988;
var map__1989__1991 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__1989__1990))?cljs.core.apply.call(null,cljs.core.hash_map,map__1989__1990):map__1989__1990);
var minor_grid_width__1992 = cljs.core.get.call(null,map__1989__1991,"﷐'minor-grid-width");
var major_grid_width__1993 = cljs.core.get.call(null,map__1989__1991,"﷐'major-grid-width");
var minor_grid_color__1994 = cljs.core.get.call(null,map__1989__1991,"﷐'minor-grid-color");
var major_grid_color__1995 = cljs.core.get.call(null,map__1989__1991,"﷐'major-grid-color");
var grid_lines__1996 = cljs.core.get.call(null,map__1989__1991,"﷐'grid-lines");
var ymax__1997 = cljs.core.get.call(null,map__1989__1991,"﷐'ymax");
var ymin__1998 = cljs.core.get.call(null,map__1989__1991,"﷐'ymin");
var width__1999 = cljs.core.get.call(null,map__1989__1991,"﷐'width");
var height__2000 = cljs.core.get.call(null,map__1989__1991,"﷐'height");

var grid_y_space__2001 = cljs.core._SLASH_.call(null,height__2000,grid_lines__1996);

var iter__159__auto____2006 = (function iter__2002(s__2003){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2003__2004 = s__2003;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2003__2004)))
{var i__2005 = cljs.core.first.call(null,s__2003__2004);

return cljs.core.cons.call(null,apogee.svg.style.call(null,apogee.svg.line.call(null,0,cljs.core._STAR_.call(null,i__2005,grid_y_space__2001),width__1999,cljs.core._STAR_.call(null,i__2005,grid_y_space__2001)),"﷐'stroke",(cljs.core.truth_(cljs.core.even_QMARK_.call(null,i__2005))?major_grid_color__1995:minor_grid_color__1994),"﷐'stroke-width",(cljs.core.truth_(cljs.core.even_QMARK_.call(null,i__2005))?major_grid_width__1993:minor_grid_width__1992)),iter__2002.call(null,cljs.core.rest.call(null,s__2003__2004)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____2006.call(null,apogee.util.range.call(null,1,grid_lines__1996));
});
goog.exportSymbol('apogee.charts.y_grid', apogee.charts.y_grid);
apogee.charts.x_axis = (function x_axis(p__2007){
var map__2008__2009 = p__2007;
var map__2008__2010 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2008__2009))?cljs.core.apply.call(null,cljs.core.hash_map,map__2008__2009):map__2008__2009);
var axis_number_format__2011 = cljs.core.get.call(null,map__2008__2010,"﷐'axis-number-format");
var axis_font_size__2012 = cljs.core.get.call(null,map__2008__2010,"﷐'axis-font-size");
var axis_font_family__2013 = cljs.core.get.call(null,map__2008__2010,"﷐'axis-font-family");
var grid_lines__2014 = cljs.core.get.call(null,map__2008__2010,"﷐'grid-lines");
var xmax__2015 = cljs.core.get.call(null,map__2008__2010,"﷐'xmax");
var xmin__2016 = cljs.core.get.call(null,map__2008__2010,"﷐'xmin");
var width__2017 = cljs.core.get.call(null,map__2008__2010,"﷐'width");
var height__2018 = cljs.core.get.call(null,map__2008__2010,"﷐'height");

var grid_x_space__2019 = cljs.core._SLASH_.call(null,width__2017,grid_lines__2014);

var iter__159__auto____2024 = (function iter__2020(s__2021){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2021__2022 = s__2021;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2021__2022)))
{var i__2023 = cljs.core.first.call(null,s__2021__2022);

if(cljs.core.truth_(cljs.core.even_QMARK_.call(null,i__2023)))
{return cljs.core.cons.call(null,apogee.svg.style.call(null,apogee.svg.text.call(null,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":cljs.core._STAR_.call(null,i__2023,grid_x_space__2019),"﷐'y":cljs.core._PLUS_.call(null,20,height__2018)}),apogee.util.format.call(null,axis_number_format__2011,apogee.svg.translate_value.call(null,cljs.core._STAR_.call(null,i__2023,grid_x_space__2019),0,width__2017,xmin__2016,xmax__2015))),"﷐'fill",apogee.svg.rgb.call(null,150,150,150),"﷐'font-family",axis_font_family__2013,"﷐'font-size",axis_font_size__2012,"﷐'text-anchor","﷐'middle"),iter__2020.call(null,cljs.core.rest.call(null,s__2021__2022)));
} else
{{
var G__2025 = cljs.core.rest.call(null,s__2021__2022);
s__2021__2022 = G__2025;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____2024.call(null,apogee.util.range.call(null,0,cljs.core.inc.call(null,grid_lines__2014)));
});
goog.exportSymbol('apogee.charts.x_axis', apogee.charts.x_axis);
apogee.charts.y_axis = (function y_axis(p__2026){
var map__2027__2028 = p__2026;
var map__2027__2029 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2027__2028))?cljs.core.apply.call(null,cljs.core.hash_map,map__2027__2028):map__2027__2028);
var axis_number_format__2030 = cljs.core.get.call(null,map__2027__2029,"﷐'axis-number-format");
var axis_font_size__2031 = cljs.core.get.call(null,map__2027__2029,"﷐'axis-font-size");
var axis_font_family__2032 = cljs.core.get.call(null,map__2027__2029,"﷐'axis-font-family");
var grid_lines__2033 = cljs.core.get.call(null,map__2027__2029,"﷐'grid-lines");
var ymax__2034 = cljs.core.get.call(null,map__2027__2029,"﷐'ymax");
var ymin__2035 = cljs.core.get.call(null,map__2027__2029,"﷐'ymin");
var width__2036 = cljs.core.get.call(null,map__2027__2029,"﷐'width");
var height__2037 = cljs.core.get.call(null,map__2027__2029,"﷐'height");

var grid_y_space__2038 = cljs.core._SLASH_.call(null,height__2037,grid_lines__2033);

var iter__159__auto____2043 = (function iter__2039(s__2040){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2040__2041 = s__2040;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2040__2041)))
{var i__2042 = cljs.core.first.call(null,s__2040__2041);

if(cljs.core.truth_(cljs.core.even_QMARK_.call(null,i__2042)))
{return cljs.core.cons.call(null,apogee.svg.style.call(null,apogee.svg.text.call(null,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":0,"﷐'y":cljs.core._.call(null,height__2037,cljs.core._STAR_.call(null,i__2042,grid_y_space__2038))}),apogee.util.format.call(null,axis_number_format__2030,apogee.svg.translate_value.call(null,cljs.core._STAR_.call(null,i__2042,grid_y_space__2038),0,height__2037,ymin__2035,ymax__2034))),"﷐'fill",apogee.svg.rgb.call(null,150,150,150),"﷐'font-family",axis_font_family__2032,"﷐'font-size",axis_font_size__2031,"﷐'text-anchor","﷐'end","﷐'alignment-baseline","﷐'middle"),iter__2039.call(null,cljs.core.rest.call(null,s__2040__2041)));
} else
{{
var G__2044 = cljs.core.rest.call(null,s__2040__2041);
s__2040__2041 = G__2044;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____2043.call(null,apogee.util.range.call(null,1,cljs.core.inc.call(null,grid_lines__2033)));
});
goog.exportSymbol('apogee.charts.y_axis', apogee.charts.y_axis);
/**
* @param {...*} var_args
*/
apogee.charts.xy_plot = (function xy_plot(var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var props__2045 = cljs.core.merge.call(null,apogee.charts.default_chart_props,cljs.core.apply.call(null,cljs.core.hash_map,options));

return cljs.core.ObjMap.fromObject(["﷐'properties","﷐'svg"],{"﷐'properties":props__2045,"﷐'svg":cljs.core.concat.call(null,apogee.svg.translate.call(null,apogee.svg.group.call(null,apogee.charts.chart_background.call(null,props__2045)),"﷐'x".call(null,props__2045),"﷐'y".call(null,props__2045)),apogee.charts.x_grid.call(null,props__2045),apogee.charts.y_grid.call(null,props__2045),apogee.charts.x_axis.call(null,props__2045),apogee.charts.y_axis.call(null,props__2045))});
});
goog.exportSymbol('apogee.charts.xy_plot', apogee.charts.xy_plot);
/**
* @param {...*} var_args
*/
apogee.charts.point_label = (function point_label(p__2046,x_STAR_,y_STAR_,x,y,r,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
var map__2047__2048 = p__2046;
var map__2047__2049 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2047__2048))?cljs.core.apply.call(null,cljs.core.hash_map,map__2047__2048):map__2047__2048);
var label_number_format__2050 = cljs.core.get.call(null,map__2047__2049,"﷐'label-number-format");
var label_font_size__2051 = cljs.core.get.call(null,map__2047__2049,"﷐'label-font-size");
var label_font_family__2052 = cljs.core.get.call(null,map__2047__2049,"﷐'label-font-family");

return apogee.svg.style.call(null,apogee.svg.text.call(null,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":cljs.core._PLUS_.call(null,x_STAR_,r),"﷐'y":cljs.core._.call(null,y_STAR_,r)}),cljs.core.str.call(null,apogee.util.format.call(null,label_number_format__2050,x),",",apogee.util.format.call(null,label_number_format__2050,y))),"﷐'fill",apogee.svg.rgb.call(null,100,100,150),"﷐'font-family",label_font_family__2052,"﷐'font-size",label_font_size__2051);
});
goog.exportSymbol('apogee.charts.point_label', apogee.charts.point_label);
/**
* @param {...*} var_args
*/
apogee.charts.add_point = (function add_point(chart,x,y,r,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
var props__2054 = "﷐'properties".call(null,chart);
var map__2053__2055 = props__2054;
var map__2053__2056 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2053__2055))?cljs.core.apply.call(null,cljs.core.hash_map,map__2053__2055):map__2053__2055);
var label_points_QMARK___2057 = cljs.core.get.call(null,map__2053__2056,"﷐'label-points?");
var ymax__2058 = cljs.core.get.call(null,map__2053__2056,"﷐'ymax");
var ymin__2059 = cljs.core.get.call(null,map__2053__2056,"﷐'ymin");
var xmax__2060 = cljs.core.get.call(null,map__2053__2056,"﷐'xmax");
var xmin__2061 = cljs.core.get.call(null,map__2053__2056,"﷐'xmin");
var width__2062 = cljs.core.get.call(null,map__2053__2056,"﷐'width");
var height__2063 = cljs.core.get.call(null,map__2053__2056,"﷐'height");
var x_STAR___2064 = apogee.svg.translate_value.call(null,x,xmin__2061,xmax__2060,0,width__2062);
var y_STAR___2065 = cljs.core._.call(null,height__2063,apogee.svg.translate_value.call(null,y,ymin__2059,ymax__2058,0,height__2063));
var point__2066 = cljs.core.apply.call(null,apogee.svg.circle,x_STAR___2064,y_STAR___2065,r,options);
var label__2067 = apogee.charts.point_label.call(null,props__2054,x_STAR___2064,y_STAR___2065,x,y,r);

return cljs.core.assoc.call(null,cljs.core.update_in.call(null,chart,cljs.core.Vector.fromArray(["﷐'points"]),(function (old){
return cljs.core.conj.call(null,old,cljs.core.apply.call(null,cljs.core.assoc,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y","﷐'r"],{"﷐'x":x,"﷐'y":y,"﷐'r":r}),options));
})),"﷐'svg",cljs.core.concat.call(null,"﷐'svg".call(null,chart),(cljs.core.truth_(label_points_QMARK___2057)?cljs.core.Vector.fromArray([point__2066,label__2067]):cljs.core.Vector.fromArray([point__2066]))));
});
goog.exportSymbol('apogee.charts.add_point', apogee.charts.add_point);
apogee.charts.points__GT_xy = (function points__GT_xy(points){
return cljs.core.reduce.call(null,(function (p__2068,p__2069){
var vec__2070__2072 = p__2068;
var x__2073 = cljs.core.nth.call(null,vec__2070__2072,0,null);
var y__2074 = cljs.core.nth.call(null,vec__2070__2072,1,null);
var vec__2071__2075 = p__2069;
var p1__2076 = cljs.core.nth.call(null,vec__2071__2075,0,null);
var p2__2077 = cljs.core.nth.call(null,vec__2071__2075,1,null);

return cljs.core.Vector.fromArray([cljs.core.conj.call(null,x__2073,p1__2076),cljs.core.conj.call(null,y__2074,p2__2077)]);
}),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])]),points);
});
goog.exportSymbol('apogee.charts.points__GT_xy', apogee.charts.points__GT_xy);
apogee.charts.xy__GT_points = (function xy__GT_points(p__2078){
var vec__2079__2080 = p__2078;
var x__2081 = cljs.core.nth.call(null,vec__2079__2080,0,null);
var y__2082 = cljs.core.nth.call(null,vec__2079__2080,1,null);

return cljs.core.map.call(null,(function (p1,p2){
return cljs.core.Vector.fromArray([p1,p2]);
}),x__2081,y__2082);
});
goog.exportSymbol('apogee.charts.xy__GT_points', apogee.charts.xy__GT_points);
/**
* @param {...*} var_args
*/
apogee.charts.add_points = (function add_points(chart,data,var_args){
var p__2083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
var map__2084__2085 = p__2083;
var map__2084__2086 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2084__2085))?cljs.core.apply.call(null,cljs.core.hash_map,map__2084__2085):map__2084__2085);
var fill__2087 = cljs.core.get.call(null,map__2084__2086,"﷐'fill");
var transpose_data_QMARK___2088 = cljs.core.get.call(null,map__2084__2086,"﷐'transpose-data?");
var colors__2089 = cljs.core.get.call(null,map__2084__2086,"﷐'colors");
var sizes__2090 = cljs.core.get.call(null,map__2084__2086,"﷐'sizes");
var size__2091 = cljs.core.get.call(null,map__2084__2086,"﷐'size");

var points__2092 = (cljs.core.truth_(transpose_data_QMARK___2088)?apogee.charts.xy__GT_points.call(null,data):data);
var sizes__2095 = (function (){var or__3576__auto____2093 = sizes__2090;

if(cljs.core.truth_(or__3576__auto____2093))
{return or__3576__auto____2093;
} else
{return cljs.core.repeat.call(null,cljs.core.count.call(null,points__2092),(function (){var or__3576__auto____2094 = size__2091;

if(cljs.core.truth_(or__3576__auto____2094))
{return or__3576__auto____2094;
} else
{return 3;
}
})());
}
})();
var colors__2098 = (function (){var or__3576__auto____2096 = colors__2089;

if(cljs.core.truth_(or__3576__auto____2096))
{return or__3576__auto____2096;
} else
{return cljs.core.repeat.call(null,cljs.core.count.call(null,points__2092),(function (){var or__3576__auto____2097 = fill__2087;

if(cljs.core.truth_(or__3576__auto____2097))
{return or__3576__auto____2097;
} else
{return apogee.svg.rgb.call(null,0,0,255);
}
})());
}
})();
var data__2104 = cljs.core.map.call(null,(function (p__2099,r,color){
var vec__2100__2101 = p__2099;
var x__2102 = cljs.core.nth.call(null,vec__2100__2101,0,null);
var y__2103 = cljs.core.nth.call(null,vec__2100__2101,1,null);

return cljs.core.Vector.fromArray([x__2102,y__2103,r,color]);
}),points__2092,sizes__2095,colors__2098);

return cljs.core.reduce.call(null,(function (chart_svg,p__2105){
var vec__2106__2107 = p__2105;
var x__2108 = cljs.core.nth.call(null,vec__2106__2107,0,null);
var y__2109 = cljs.core.nth.call(null,vec__2106__2107,1,null);
var r__2110 = cljs.core.nth.call(null,vec__2106__2107,2,null);
var color__2111 = cljs.core.nth.call(null,vec__2106__2107,3,null);

return apogee.charts.add_point.call(null,chart_svg,x__2108,y__2109,r__2110,"﷐'fill",color__2111);
}),chart,data__2104);
});
goog.exportSymbol('apogee.charts.add_points', apogee.charts.add_points);
apogee.charts.emit_svg = (function emit_svg(chart){
return apogee.xml.emit.call(null,apogee.svg.svg.call(null,"﷐'svg".call(null,chart)));
});
goog.exportSymbol('apogee.charts.emit_svg', apogee.charts.emit_svg);
