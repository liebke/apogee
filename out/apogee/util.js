goog.provide('apogee.util');
goog.require('cljs.core');
/**
* Brain dead implementation of clojure.core/range until it is supported in ClojureScript
*/
apogee.util.range = (function() {
var range = null;
var range__2171 = (function (end){
return range.call(null,0,end,1);
});
var range__2172 = (function (start,end){
return range.call(null,start,end,1);
});
var range__2173 = (function (start,end,step){
var i__2169 = start;
var result__2170 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2169,end)))
{{
var G__2175 = cljs.core._PLUS_.call(null,i__2169,step);
var G__2176 = cljs.core.conj.call(null,result__2170,i__2169);
i__2169 = G__2175;
result__2170 = G__2176;
continue;
}
} else
{return result__2170;
}
break;
}
});
range = function(start,end,step){
switch(arguments.length){
case  1 :
return range__2171.call(this,start);
case  2 :
return range__2172.call(this,start,end);
case  3 :
return range__2173.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
goog.exportSymbol('apogee.util.range', apogee.util.range);
/**
* A Terrible replacement for clojure.core/format needed for trivial formatting requirement
*/
apogee.util.format = (function format(n,float_number){
return float_number.toFixed(n);
});
goog.exportSymbol('apogee.util.format', apogee.util.format);
