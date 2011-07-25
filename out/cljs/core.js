goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____2266 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____2266))
{return or__3576__auto____2266;
} else
{var or__3576__auto____2267 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____2267))
{return or__3576__auto____2267;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2268 = coll;

if(cljs.core.truth_(and__3574__auto____2268))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____2268;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____2269 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2269))
{return or__3576__auto____2269;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2270 = coll;

if(cljs.core.truth_(and__3574__auto____2270))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2270;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2271 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2271))
{return or__3576__auto____2271;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2272 = coll;

if(cljs.core.truth_(and__3574__auto____2272))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2272;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2273 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2273))
{return or__3576__auto____2273;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2278 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2274 = coll;

if(cljs.core.truth_(and__3574__auto____2274))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2274;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2275 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2275))
{return or__3576__auto____2275;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__2279 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2276 = coll;

if(cljs.core.truth_(and__3574__auto____2276))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2276;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2277 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2277))
{return or__3576__auto____2277;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2278.call(this,coll,n);
case  3 :
return _nth__2279.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2281 = coll;

if(cljs.core.truth_(and__3574__auto____2281))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2281;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2282 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2282))
{return or__3576__auto____2282;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2283 = coll;

if(cljs.core.truth_(and__3574__auto____2283))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2283;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2284 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2284))
{return or__3576__auto____2284;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2289 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2285 = o;

if(cljs.core.truth_(and__3574__auto____2285))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2285;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2286 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2286))
{return or__3576__auto____2286;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__2290 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2287 = o;

if(cljs.core.truth_(and__3574__auto____2287))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2287;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2288 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2288))
{return or__3576__auto____2288;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2289.call(this,o,k);
case  3 :
return _lookup__2290.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2292 = coll;

if(cljs.core.truth_(and__3574__auto____2292))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2292;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2293 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2293))
{return or__3576__auto____2293;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2294 = coll;

if(cljs.core.truth_(and__3574__auto____2294))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2294;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2295 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2295))
{return or__3576__auto____2295;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2296 = coll;

if(cljs.core.truth_(and__3574__auto____2296))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2296;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2297 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2297))
{return or__3576__auto____2297;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2298 = coll;

if(cljs.core.truth_(and__3574__auto____2298))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2298;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2299 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2299))
{return or__3576__auto____2299;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2300 = coll;

if(cljs.core.truth_(and__3574__auto____2300))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2300;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2301 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2301))
{return or__3576__auto____2301;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2302 = coll;

if(cljs.core.truth_(and__3574__auto____2302))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2302;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2303 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2303))
{return or__3576__auto____2303;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2304 = coll;

if(cljs.core.truth_(and__3574__auto____2304))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2304;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2305 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2305))
{return or__3576__auto____2305;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2306 = o;

if(cljs.core.truth_(and__3574__auto____2306))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2306;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2307 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2307))
{return or__3576__auto____2307;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2308 = o;

if(cljs.core.truth_(and__3574__auto____2308))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2308;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2309 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2309))
{return or__3576__auto____2309;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2310 = o;

if(cljs.core.truth_(and__3574__auto____2310))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2310;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2311 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2311))
{return or__3576__auto____2311;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2312 = o;

if(cljs.core.truth_(and__3574__auto____2312))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2312;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2313 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2313))
{return or__3576__auto____2313;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2318 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2314 = coll;

if(cljs.core.truth_(and__3574__auto____2314))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2314;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2315 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2315))
{return or__3576__auto____2315;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__2319 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2316 = coll;

if(cljs.core.truth_(and__3574__auto____2316))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2316;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2317 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2317))
{return or__3576__auto____2317;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2318.call(this,coll,f);
case  3 :
return _reduce__2319.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2321 = o;

if(cljs.core.truth_(and__3574__auto____2321))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2321;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2322 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2322))
{return or__3576__auto____2322;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2323 = o;

if(cljs.core.truth_(and__3574__auto____2323))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2323;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2324 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2324))
{return or__3576__auto____2324;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2325 = o;

if(cljs.core.truth_(and__3574__auto____2325))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2325;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2326 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2326))
{return or__3576__auto____2326;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2327 = o;

if(cljs.core.truth_(and__3574__auto____2327))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2327;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2328 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2328))
{return or__3576__auto____2328;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2329 = d;

if(cljs.core.truth_(and__3574__auto____2329))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2329;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2330 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2330))
{return or__3576__auto____2330;
} else
{return (_realized_QMARK_["_"]);
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2331 = null;
var G__2331__2332 = (function (_,n){
return null;
});
var G__2331__2333 = (function (_,n,not_found){
return not_found;
});
G__2331 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2331__2332.call(this,_,n);
case  3 :
return G__2331__2333.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2331;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2335 = null;
var G__2335__2336 = (function (_,f){
return f.call(null);
});
var G__2335__2337 = (function (_,f,start){
return start;
});
G__2335 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2335__2336.call(this,_,f);
case  3 :
return G__2335__2337.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2335;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2339 = null;
var G__2339__2340 = (function (o,k){
return null;
});
var G__2339__2341 = (function (o,k,not_found){
return not_found;
});
G__2339 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2339__2340.call(this,o,k);
case  3 :
return G__2339__2341.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2339;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2349 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2343 = cljs.core._nth.call(null,cicoll,0);
var n__2344 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2344,cljs.core._count.call(null,cicoll))))
{{
var G__2353 = f.call(null,val__2343,cljs.core._nth.call(null,cicoll,n__2344));
var G__2354 = cljs.core.inc.call(null,n__2344);
val__2343 = G__2353;
n__2344 = G__2354;
continue;
}
} else
{return val__2343;
}
break;
}
}
});
var ci_reduce__2350 = (function (cicoll,f,val){
var val__2345 = val;
var n__2346 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2346,cljs.core._count.call(null,cicoll))))
{{
var G__2355 = f.call(null,val__2345,cljs.core._nth.call(null,cicoll,n__2346));
var G__2356 = cljs.core.inc.call(null,n__2346);
val__2345 = G__2355;
n__2346 = G__2356;
continue;
}
} else
{return val__2345;
}
break;
}
});
var ci_reduce__2351 = (function (cicoll,f,val,idx){
var val__2347 = val;
var n__2348 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2348,cljs.core._count.call(null,cicoll))))
{{
var G__2357 = f.call(null,val__2347,cljs.core._nth.call(null,cicoll,n__2348));
var G__2358 = cljs.core.inc.call(null,n__2348);
val__2347 = G__2357;
n__2348 = G__2358;
continue;
}
} else
{return val__2347;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2349.call(this,cicoll,f);
case  3 :
return ci_reduce__2350.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2351.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2365 = null;
var G__2365__2366 = (function (_,f){
var this__2359 = this;
return cljs.core.ci_reduce.call(null,this__2359.a,f,(this__2359.a[this__2359.i]),cljs.core.inc.call(null,this__2359.i));
});
var G__2365__2367 = (function (_,f,start){
var this__2360 = this;
return cljs.core.ci_reduce.call(null,this__2360.a,f,start,this__2360.i);
});
G__2365 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2365__2366.call(this,_,f);
case  3 :
return G__2365__2367.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2365;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2361 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2362 = this;
return (this__2362.a[this__2362.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2363 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2363.i),cljs.core._count.call(null,this__2363.a))))
{return (new cljs.core.IndexedSeq(this__2363.a,cljs.core.inc.call(null,this__2363.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2364 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,prim))))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2369 = null;
var G__2369__2370 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2369__2371 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2369 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2369__2370.call(this,array,f);
case  3 :
return G__2369__2371.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2369;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2373 = null;
var G__2373__2374 = (function (array,k){
return (array[k]);
});
var G__2373__2375 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2373 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2373__2374.call(this,array,k);
case  3 :
return G__2373__2375.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2373;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2377 = null;
var G__2377__2378 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2377__2379 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2377 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2377__2378.call(this,array,n);
case  3 :
return G__2377__2379.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2377;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2381 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2381))
{var s__2382 = temp__3726__auto____2381;

return cljs.core._first.call(null,s__2382);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2383 = cljs.core.next.call(null,s);
s = G__2383;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2384 = cljs.core.seq.call(null,x);
var n__2385 = 0;

while(true){
if(cljs.core.truth_(s__2384))
{{
var G__2386 = cljs.core.next.call(null,s__2384);
var G__2387 = cljs.core.inc.call(null,n__2385);
s__2384 = G__2386;
n__2385 = G__2387;
continue;
}
} else
{return n__2385;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2388 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2389 = (function (coll,x,var_args){
var xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(xs))
{{
var G__2391 = conj.call(null,coll,x);
var G__2392 = cljs.core.first.call(null,xs);
var G__2393 = cljs.core.next.call(null,xs);
coll = G__2391;
x = G__2392;
xs = G__2393;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
});
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2388.call(this,coll,x);
default:
return conj__2389.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = (function (arglist__2394){
var coll = cljs.core.first(arglist__2394);
var x = cljs.core.first(cljs.core.next(arglist__2394));
var xs = cljs.core.rest(cljs.core.next(arglist__2394));
return conj__2389.call(null, coll, x, xs);
});
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2395 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2396 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2395.call(this,coll,n);
case  3 :
return nth__2396.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2398 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2399 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2398.call(this,o,k);
case  3 :
return get__2399.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2402 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2403 = (function (coll,k,v,var_args){
var kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
while(true){
var ret__2401 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2405 = ret__2401;
var G__2406 = cljs.core.first.call(null,kvs);
var G__2407 = cljs.core.second.call(null,kvs);
var G__2408 = cljs.core.nnext.call(null,kvs);
coll = G__2405;
k = G__2406;
v = G__2407;
kvs = G__2408;
continue;
}
} else
{return ret__2401;
}
break;
}
});
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2402.call(this,coll,k,v);
default:
return assoc__2403.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = (function (arglist__2409){
var coll = cljs.core.first(arglist__2409);
var k = cljs.core.first(cljs.core.next(arglist__2409));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2409)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2409)));
return assoc__2403.call(null, coll, k, v, kvs);
});
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2411 = (function (coll){
return coll;
});
var dissoc__2412 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2413 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__2410 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2415 = ret__2410;
var G__2416 = cljs.core.first.call(null,ks);
var G__2417 = cljs.core.next.call(null,ks);
coll = G__2415;
k = G__2416;
ks = G__2417;
continue;
}
} else
{return ret__2410;
}
break;
}
});
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2411.call(this,coll);
case  2 :
return dissoc__2412.call(this,coll,k);
default:
return dissoc__2413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = (function (arglist__2418){
var coll = cljs.core.first(arglist__2418);
var k = cljs.core.first(cljs.core.next(arglist__2418));
var ks = cljs.core.rest(cljs.core.next(arglist__2418));
return dissoc__2413.call(null, coll, k, ks);
});
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
return cljs.core._meta.call(null,o);
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2420 = (function (coll){
return coll;
});
var disj__2421 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2422 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__2419 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2424 = ret__2419;
var G__2425 = cljs.core.first.call(null,ks);
var G__2426 = cljs.core.next.call(null,ks);
coll = G__2424;
k = G__2425;
ks = G__2426;
continue;
}
} else
{return ret__2419;
}
break;
}
});
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2420.call(this,coll);
case  2 :
return disj__2421.call(this,coll,k);
default:
return disj__2422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = (function (arglist__2427){
var coll = cljs.core.first(arglist__2427);
var k = cljs.core.first(cljs.core.next(arglist__2427));
var ks = cljs.core.rest(cljs.core.next(arglist__2427));
return disj__2422.call(null, coll, k, ks);
});
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2428 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2429 = x__105__auto____2428;

if(cljs.core.truth_(and__3574__auto____2429))
{return x__105__auto____2428.cljs$core$ICollection$;
} else
{return and__3574__auto____2429;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2428);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2430 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2431 = x__105__auto____2430;

if(cljs.core.truth_(and__3574__auto____2431))
{return x__105__auto____2430.cljs$core$ISet$;
} else
{return and__3574__auto____2431;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2430);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2432 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2433 = x__105__auto____2432;

if(cljs.core.truth_(and__3574__auto____2433))
{return x__105__auto____2432.cljs$core$IAssociative$;
} else
{return and__3574__auto____2433;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2432);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2434 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2435 = x__105__auto____2434;

if(cljs.core.truth_(and__3574__auto____2435))
{return x__105__auto____2434.cljs$core$ISequential$;
} else
{return and__3574__auto____2435;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2434);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2436 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2437 = x__105__auto____2436;

if(cljs.core.truth_(and__3574__auto____2437))
{return x__105__auto____2436.cljs$core$ICounted$;
} else
{return and__3574__auto____2437;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2436);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2438 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2439 = x__105__auto____2438;

if(cljs.core.truth_(and__3574__auto____2439))
{return x__105__auto____2438.cljs$core$IMap$;
} else
{return and__3574__auto____2439;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2438);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2440 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2441 = x__105__auto____2440;

if(cljs.core.truth_(and__3574__auto____2441))
{return x__105__auto____2440.cljs$core$IVector$;
} else
{return and__3574__auto____2441;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2440);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2442 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2442.push(key);
}));
return keys__2442;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__105__auto____2443 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2444 = x__105__auto____2443;

if(cljs.core.truth_(and__3574__auto____2444))
{return x__105__auto____2443.cljs$core$ISeq$;
} else
{return and__3574__auto____2444;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2443);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2445 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2445))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2446 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2446))
{return or__3576__auto____2446;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2445;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2447 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2447))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2447;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2448 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2448))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2448;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2449 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2449))
{return (n == n.toFixed());
} else
{return and__3574__auto____2449;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2450 = coll;

if(cljs.core.truth_(and__3574__auto____2450))
{var and__3574__auto____2451 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2451))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2451;
}
} else
{return and__3574__auto____2450;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2456 = (function (x){
return true;
});
var distinct_QMARK___2457 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2458 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2452 = cljs.core.set([y,x]);
var xs__2453 = more;

while(true){
var x__2454 = cljs.core.first.call(null,xs__2453);
var etc__2455 = cljs.core.next.call(null,xs__2453);

if(cljs.core.truth_(xs__2453))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2452,x__2454)))
{return false;
} else
{{
var G__2460 = cljs.core.conj.call(null,s__2452,x__2454);
var G__2461 = etc__2455;
s__2452 = G__2460;
xs__2453 = G__2461;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
});
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2456.call(this,x);
case  2 :
return distinct_QMARK___2457.call(this,x,y);
default:
return distinct_QMARK___2458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = (function (arglist__2462){
var x = cljs.core.first(arglist__2462);
var y = cljs.core.first(cljs.core.next(arglist__2462));
var more = cljs.core.rest(cljs.core.next(arglist__2462));
return distinct_QMARK___2458.call(null, x, y, more);
});
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2463 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2463)))
{return r__2463;
} else
{if(cljs.core.truth_(r__2463))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2465 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2466 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2464 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2464,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2464);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2465.call(this,comp);
case  2 :
return sort__2466.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2468 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2469 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2468.call(this,keyfn,comp);
case  3 :
return sort_by__2469.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2471 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2472 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2471.call(this,f,val);
case  3 :
return reduce__2472.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2478 = (function (f,coll){
var temp__3723__auto____2474 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2474))
{var s__2475 = temp__3723__auto____2474;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2475),cljs.core.next.call(null,s__2475));
} else
{return f.call(null);
}
});
var seq_reduce__2479 = (function (f,val,coll){
var val__2476 = val;
var coll__2477 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2477))
{{
var G__2481 = f.call(null,val__2476,cljs.core.first.call(null,coll__2477));
var G__2482 = cljs.core.next.call(null,coll__2477);
val__2476 = G__2481;
coll__2477 = G__2482;
continue;
}
} else
{return val__2476;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2478.call(this,f,val);
case  3 :
return seq_reduce__2479.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2483 = null;
var G__2483__2484 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2483__2485 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2483 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2483__2484.call(this,coll,f);
case  3 :
return G__2483__2485.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2483;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2487 = (function (){
return 0;
});
var _PLUS___2488 = (function (x){
return x;
});
var _PLUS___2489 = (function (x,y){
return (x + y);
});
var _PLUS___2490 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
});
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2487.call(this);
case  1 :
return _PLUS___2488.call(this,x);
case  2 :
return _PLUS___2489.call(this,x,y);
default:
return _PLUS___2490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = (function (arglist__2492){
var x = cljs.core.first(arglist__2492);
var y = cljs.core.first(cljs.core.next(arglist__2492));
var more = cljs.core.rest(cljs.core.next(arglist__2492));
return _PLUS___2490.call(null, x, y, more);
});
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2493 = (function (x){
return (- x);
});
var ___2494 = (function (x,y){
return (x - y);
});
var ___2495 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
});
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2493.call(this,x);
case  2 :
return ___2494.call(this,x,y);
default:
return ___2495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = (function (arglist__2497){
var x = cljs.core.first(arglist__2497);
var y = cljs.core.first(cljs.core.next(arglist__2497));
var more = cljs.core.rest(cljs.core.next(arglist__2497));
return ___2495.call(null, x, y, more);
});
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2498 = (function (){
return 1;
});
var _STAR___2499 = (function (x){
return x;
});
var _STAR___2500 = (function (x,y){
return (x * y);
});
var _STAR___2501 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
});
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2498.call(this);
case  1 :
return _STAR___2499.call(this,x);
case  2 :
return _STAR___2500.call(this,x,y);
default:
return _STAR___2501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = (function (arglist__2503){
var x = cljs.core.first(arglist__2503);
var y = cljs.core.first(cljs.core.next(arglist__2503));
var more = cljs.core.rest(cljs.core.next(arglist__2503));
return _STAR___2501.call(null, x, y, more);
});
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2504 = (function (x){
return (1 / x);
});
var _SLASH___2505 = (function (x,y){
return (x / y);
});
var _SLASH___2506 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
});
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2504.call(this,x);
case  2 :
return _SLASH___2505.call(this,x,y);
default:
return _SLASH___2506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = (function (arglist__2508){
var x = cljs.core.first(arglist__2508);
var y = cljs.core.first(cljs.core.next(arglist__2508));
var more = cljs.core.rest(cljs.core.next(arglist__2508));
return _SLASH___2506.call(null, x, y, more);
});
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2509 = (function (x){
return true;
});
var _LT___2510 = (function (x,y){
return (x < y);
});
var _LT___2511 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2513 = y;
var G__2514 = cljs.core.first.call(null,more);
var G__2515 = cljs.core.next.call(null,more);
x = G__2513;
y = G__2514;
more = G__2515;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2509.call(this,x);
case  2 :
return _LT___2510.call(this,x,y);
default:
return _LT___2511.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = (function (arglist__2516){
var x = cljs.core.first(arglist__2516);
var y = cljs.core.first(cljs.core.next(arglist__2516));
var more = cljs.core.rest(cljs.core.next(arglist__2516));
return _LT___2511.call(null, x, y, more);
});
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2517 = (function (x){
return true;
});
var _LT__EQ___2518 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2519 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2521 = y;
var G__2522 = cljs.core.first.call(null,more);
var G__2523 = cljs.core.next.call(null,more);
x = G__2521;
y = G__2522;
more = G__2523;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2517.call(this,x);
case  2 :
return _LT__EQ___2518.call(this,x,y);
default:
return _LT__EQ___2519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = (function (arglist__2524){
var x = cljs.core.first(arglist__2524);
var y = cljs.core.first(cljs.core.next(arglist__2524));
var more = cljs.core.rest(cljs.core.next(arglist__2524));
return _LT__EQ___2519.call(null, x, y, more);
});
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2525 = (function (x){
return true;
});
var _GT___2526 = (function (x,y){
return (x > y);
});
var _GT___2527 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2529 = y;
var G__2530 = cljs.core.first.call(null,more);
var G__2531 = cljs.core.next.call(null,more);
x = G__2529;
y = G__2530;
more = G__2531;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2525.call(this,x);
case  2 :
return _GT___2526.call(this,x,y);
default:
return _GT___2527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = (function (arglist__2532){
var x = cljs.core.first(arglist__2532);
var y = cljs.core.first(cljs.core.next(arglist__2532));
var more = cljs.core.rest(cljs.core.next(arglist__2532));
return _GT___2527.call(null, x, y, more);
});
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2533 = (function (x){
return true;
});
var _GT__EQ___2534 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2535 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2537 = y;
var G__2538 = cljs.core.first.call(null,more);
var G__2539 = cljs.core.next.call(null,more);
x = G__2537;
y = G__2538;
more = G__2539;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2533.call(this,x);
case  2 :
return _GT__EQ___2534.call(this,x,y);
default:
return _GT__EQ___2535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = (function (arglist__2540){
var x = cljs.core.first(arglist__2540);
var y = cljs.core.first(cljs.core.next(arglist__2540));
var more = cljs.core.rest(cljs.core.next(arglist__2540));
return _GT__EQ___2535.call(null, x, y, more);
});
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2541 = (function (x){
return x;
});
var max__2542 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2543 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
});
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2541.call(this,x);
case  2 :
return max__2542.call(this,x,y);
default:
return max__2543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = (function (arglist__2545){
var x = cljs.core.first(arglist__2545);
var y = cljs.core.first(cljs.core.next(arglist__2545));
var more = cljs.core.rest(cljs.core.next(arglist__2545));
return max__2543.call(null, x, y, more);
});
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2546 = (function (x){
return x;
});
var min__2547 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2548 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
});
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2546.call(this,x);
case  2 :
return min__2547.call(this,x,y);
default:
return min__2548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = (function (arglist__2550){
var x = cljs.core.first(arglist__2550);
var y = cljs.core.first(cljs.core.next(arglist__2550));
var more = cljs.core.rest(cljs.core.next(arglist__2550));
return min__2548.call(null, x, y, more);
});
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2551 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2551) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2552 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2552));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2553 = (function (){
return Math.random.call(null);
});
var rand__2554 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2553.call(this);
case  1 :
return rand__2554.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2556 = (function (x){
return true;
});
var _EQ__EQ___2557 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2558 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2560 = y;
var G__2561 = cljs.core.first.call(null,more);
var G__2562 = cljs.core.next.call(null,more);
x = G__2560;
y = G__2561;
more = G__2562;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2556.call(this,x);
case  2 :
return _EQ__EQ___2557.call(this,x,y);
default:
return _EQ__EQ___2558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = (function (arglist__2563){
var x = cljs.core.first(arglist__2563);
var y = cljs.core.first(cljs.core.next(arglist__2563));
var more = cljs.core.rest(cljs.core.next(arglist__2563));
return _EQ__EQ___2558.call(null, x, y, more);
});
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2564 = n;
var xs__2565 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2566 = xs__2565;

if(cljs.core.truth_(and__3574__auto____2566))
{return cljs.core.pos_QMARK_.call(null,n__2564);
} else
{return and__3574__auto____2566;
}
})()))
{{
var G__2567 = cljs.core.dec.call(null,n__2564);
var G__2568 = cljs.core.next.call(null,xs__2565);
n__2564 = G__2567;
xs__2565 = G__2568;
continue;
}
} else
{return xs__2565;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2573 = null;
var G__2573__2574 = (function (coll,n){
var temp__3723__auto____2569 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2569))
{var xs__2570 = temp__3723__auto____2569;

return cljs.core.first.call(null,xs__2570);
} else
{throw "Index out of bounds";
}
});
var G__2573__2575 = (function (coll,n,not_found){
var temp__3723__auto____2571 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2571))
{var xs__2572 = temp__3723__auto____2571;

return cljs.core.first.call(null,xs__2572);
} else
{return not_found;
}
});
G__2573 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2573__2574.call(this,coll,n);
case  3 :
return G__2573__2575.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2573;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2577 = (function (){
return "";
});
var str__2578 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2579 = (function (x,var_args){
var ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2581 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2582 = cljs.core.next.call(null,more);
sb = G__2581;
more = G__2582;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
});
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2577.call(this);
case  1 :
return str__2578.call(this,x);
default:
return str__2579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = (function (arglist__2583){
var x = cljs.core.first(arglist__2583);
var ys = cljs.core.rest(arglist__2583);
return str__2579.call(null, x, ys);
});
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2584 = (function (s,start){
return s.substring(start);
});
var subs__2585 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2584.call(this,s,start);
case  3 :
return subs__2585.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2587 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2588 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2587.call(this,ns);
case  2 :
return symbol__2588.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2590 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2591 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2590.call(this,ns);
case  2 :
return keyword__2591.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2593 = cljs.core.seq.call(null,x);
var ys__2594 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2593)))
{return cljs.core.nil_QMARK_.call(null,ys__2594);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2594)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2593),cljs.core.first.call(null,ys__2594))))
{{
var G__2595 = cljs.core.next.call(null,xs__2593);
var G__2596 = cljs.core.next.call(null,ys__2594);
xs__2593 = G__2595;
ys__2594 = G__2596;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2597_SHARP_,p2__2598_SHARP_){
return cljs.core.hash_combine.call(null,p1__2597_SHARP_,cljs.core.hash.call(null,p2__2598_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2599 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2600 = this;
return (new cljs.core.List(this__2600.meta,o,coll,cljs.core.inc.call(null,this__2600.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2601 = this;
return this__2601.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2602 = this;
return this__2602.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2603 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2604 = this;
return this__2604.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2605 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2606 = this;
return (new cljs.core.List(meta,this__2606.first,this__2606.rest,this__2606.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2607 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2608 = this;
return this__2608.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2609 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2610 = this;
return this__2610.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2611 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2612 = this;
return (new cljs.core.List(this__2612.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2613 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2614 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2615 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2616 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2617 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2618 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2619 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2620 = this;
return this__2620.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2621 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2622 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function list(var_args){
var items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
});

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2623 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2624 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2625 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2626 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2626.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2627 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2628 = this;
return this__2628.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2629 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2629.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2629.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2630 = this;
return this__2630.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2631 = this;
return (new cljs.core.Cons(meta,this__2631.first,this__2631.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2632 = null;
var G__2632__2633 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2632__2634 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2632 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2632__2633.call(this,string,f);
case  3 :
return G__2632__2634.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2632;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2636 = null;
var G__2636__2637 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2636__2638 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2636 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2636__2637.call(this,string,k);
case  3 :
return G__2636__2638.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2636;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2640 = null;
var G__2640__2641 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2640__2642 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2640 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2640__2641.call(this,string,n);
case  3 :
return G__2640__2642.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2640;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__2644 = null;
var G__2644__2645 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2644__2646 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2644 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2644__2645.call(this,_,coll);
case  3 :
return G__2644__2646.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2644;
})()
;
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2648 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2648;
} else
{lazy_seq.x = x__2648.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2649 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2650 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2651 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2652 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2652.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2653 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2654 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2655 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2656 = this;
return this__2656.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2657 = this;
return (new cljs.core.LazySeq(meta,this__2657.realized,this__2657.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2658 = cljs.core.array.call(null);

var s__2659 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2659)))
{ary__2658.push(cljs.core.first.call(null,s__2659));
{
var G__2660 = cljs.core.next.call(null,s__2659);
s__2659 = G__2660;
continue;
}
} else
{return ary__2658;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2661 = s;
var i__2662 = n;
var sum__2663 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2664 = cljs.core.pos_QMARK_.call(null,i__2662);

if(cljs.core.truth_(and__3574__auto____2664))
{return cljs.core.seq.call(null,s__2661);
} else
{return and__3574__auto____2664;
}
})()))
{{
var G__2665 = cljs.core.next.call(null,s__2661);
var G__2666 = cljs.core.dec.call(null,i__2662);
var G__2667 = cljs.core.inc.call(null,sum__2663);
s__2661 = G__2665;
i__2662 = G__2666;
sum__2663 = G__2667;
continue;
}
} else
{return sum__2663;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2671 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2672 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2673 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2668 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2668))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2668),concat.call(null,cljs.core.rest.call(null,s__2668),y));
} else
{return y;
}
})));
});
var concat__2674 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
var cat__2670 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2669 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2669))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2669),cat.call(null,cljs.core.rest.call(null,xys__2669),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2670.call(null,concat.call(null,x,y),zs);
});
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2671.call(this);
case  1 :
return concat__2672.call(this,x);
case  2 :
return concat__2673.call(this,x,y);
default:
return concat__2674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = (function (arglist__2676){
var x = cljs.core.first(arglist__2676);
var y = cljs.core.first(cljs.core.next(arglist__2676));
var zs = cljs.core.rest(cljs.core.next(arglist__2676));
return concat__2674.call(null, x, y, zs);
});
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2677 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2678 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2679 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2680 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2681 = (function (a,b,c,d,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
});
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2677.call(this,a);
case  2 :
return list_STAR___2678.call(this,a,b);
case  3 :
return list_STAR___2679.call(this,a,b,c);
case  4 :
return list_STAR___2680.call(this,a,b,c,d);
default:
return list_STAR___2681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = (function (arglist__2683){
var a = cljs.core.first(arglist__2683);
var b = cljs.core.first(cljs.core.next(arglist__2683));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2683)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2683))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2683))));
return list_STAR___2681.call(null, a, b, c, d, more);
});
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2693 = (function (f,args){
var fixed_arity__2684 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,fixed_arity__2684),fixed_arity__2684)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2694 = (function (f,x,args){
var arglist__2685 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2686 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2685,fixed_arity__2686),fixed_arity__2686)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2685));
} else
{return f.cljs$lang$applyTo(arglist__2685);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2685));
}
});
var apply__2695 = (function (f,x,y,args){
var arglist__2687 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2688 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2687,fixed_arity__2688),fixed_arity__2688)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2687));
} else
{return f.cljs$lang$applyTo(arglist__2687);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2687));
}
});
var apply__2696 = (function (f,x,y,z,args){
var arglist__2689 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2690 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2689,fixed_arity__2690),fixed_arity__2690)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2689));
} else
{return f.cljs$lang$applyTo(arglist__2689);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2689));
}
});
var apply__2697 = (function (f,a,b,c,d,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
var arglist__2691 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2692 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2691,fixed_arity__2692),fixed_arity__2692)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2691));
} else
{return f.cljs$lang$applyTo(arglist__2691);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2691));
}
});
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2693.call(this,f,a);
case  3 :
return apply__2694.call(this,f,a,b);
case  4 :
return apply__2695.call(this,f,a,b,c);
case  5 :
return apply__2696.call(this,f,a,b,c,d);
default:
return apply__2697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = (function (arglist__2699){
var f = cljs.core.first(arglist__2699);
var a = cljs.core.first(cljs.core.next(arglist__2699));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2699)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2699))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2699)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2699)))));
return apply__2697.call(null, f, a, b, c, d, args);
});
return apply;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2700 = (function (x){
return false;
});
var not_EQ___2701 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2702 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
});
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2700.call(this,x);
case  2 :
return not_EQ___2701.call(this,x,y);
default:
return not_EQ___2702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = (function (arglist__2704){
var x = cljs.core.first(arglist__2704);
var y = cljs.core.first(cljs.core.next(arglist__2704));
var more = cljs.core.rest(cljs.core.next(arglist__2704));
return not_EQ___2702.call(null, x, y, more);
});
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2705 = pred;
var G__2706 = cljs.core.next.call(null,coll);
pred = G__2705;
coll = G__2706;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2707 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2707))
{return or__3576__auto____2707;
} else
{{
var G__2708 = pred;
var G__2709 = cljs.core.next.call(null,coll);
pred = G__2708;
coll = G__2709;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2710 = null;
var G__2710__2711 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2710__2712 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2710__2713 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2710__2714 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
});
G__2710 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2710__2711.call(this);
case  1 :
return G__2710__2712.call(this,x);
case  2 :
return G__2710__2713.call(this,x,y);
default:
return G__2710__2714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2710.cljs$lang$maxFixedArity = 2;
G__2710.cljs$lang$applyTo = (function (arglist__2716){
var x = cljs.core.first(arglist__2716);
var y = cljs.core.first(cljs.core.next(arglist__2716));
var zs = cljs.core.rest(cljs.core.next(arglist__2716));
return G__2710__2714.call(null, x, y, zs);
});
return G__2710;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return x;
});
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2720 = (function (){
return cljs.core.identity;
});
var comp__2721 = (function (f){
return f;
});
var comp__2722 = (function (f,g){
return (function() {
var G__2726 = null;
var G__2726__2727 = (function (){
return f.call(null,g.call(null));
});
var G__2726__2728 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2726__2729 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2726__2730 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2726__2731 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
});
G__2726 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2726__2727.call(this);
case  1 :
return G__2726__2728.call(this,x);
case  2 :
return G__2726__2729.call(this,x,y);
case  3 :
return G__2726__2730.call(this,x,y,z);
default:
return G__2726__2731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2726.cljs$lang$maxFixedArity = 3;
G__2726.cljs$lang$applyTo = (function (arglist__2733){
var x = cljs.core.first(arglist__2733);
var y = cljs.core.first(cljs.core.next(arglist__2733));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2733)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2733)));
return G__2726__2731.call(null, x, y, z, args);
});
return G__2726;
})()
});
var comp__2723 = (function (f,g,h){
return (function() {
var G__2734 = null;
var G__2734__2735 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2734__2736 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2734__2737 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2734__2738 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2734__2739 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
});
G__2734 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2734__2735.call(this);
case  1 :
return G__2734__2736.call(this,x);
case  2 :
return G__2734__2737.call(this,x,y);
case  3 :
return G__2734__2738.call(this,x,y,z);
default:
return G__2734__2739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2734.cljs$lang$maxFixedArity = 3;
G__2734.cljs$lang$applyTo = (function (arglist__2741){
var x = cljs.core.first(arglist__2741);
var y = cljs.core.first(cljs.core.next(arglist__2741));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2741)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2741)));
return G__2734__2739.call(null, x, y, z, args);
});
return G__2734;
})()
});
var comp__2724 = (function (f1,f2,f3,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__2717 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var ret__2718 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2717),args);
var fs__2719 = cljs.core.next.call(null,fs__2717);

while(true){
if(cljs.core.truth_(fs__2719))
{{
var G__2742 = cljs.core.first.call(null,fs__2719).call(null,ret__2718);
var G__2743 = cljs.core.next.call(null,fs__2719);
ret__2718 = G__2742;
fs__2719 = G__2743;
continue;
}
} else
{return ret__2718;
}
break;
}
});
});
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2720.call(this);
case  1 :
return comp__2721.call(this,f1);
case  2 :
return comp__2722.call(this,f1,f2);
case  3 :
return comp__2723.call(this,f1,f2,f3);
default:
return comp__2724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = (function (arglist__2744){
var f1 = cljs.core.first(arglist__2744);
var f2 = cljs.core.first(cljs.core.next(arglist__2744));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2744)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2744)));
return comp__2724.call(null, f1, f2, f3, fs);
});
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2745 = (function (f,arg1){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,args);
});
});
var partial__2746 = (function (f,arg1,arg2){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,args);
});
});
var partial__2747 = (function (f,arg1,arg2,arg3){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
});
});
var partial__2748 = (function (f,arg1,arg2,arg3,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
});
});
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2745.call(this,f,arg1);
case  3 :
return partial__2746.call(this,f,arg1,arg2);
case  4 :
return partial__2747.call(this,f,arg1,arg2,arg3);
default:
return partial__2748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = (function (arglist__2750){
var f = cljs.core.first(arglist__2750);
var arg1 = cljs.core.first(cljs.core.next(arglist__2750));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2750)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2750))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2750))));
return partial__2748.call(null, f, arg1, arg2, arg3, more);
});
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2757 = (function (f,x){
return (function() {
var G__2761 = null;
var G__2761__2762 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2761__2763 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2761__2764 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2761__2765 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
});
G__2761 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2761__2762.call(this,a);
case  2 :
return G__2761__2763.call(this,a,b);
case  3 :
return G__2761__2764.call(this,a,b,c);
default:
return G__2761__2765.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2761.cljs$lang$maxFixedArity = 3;
G__2761.cljs$lang$applyTo = (function (arglist__2767){
var a = cljs.core.first(arglist__2767);
var b = cljs.core.first(cljs.core.next(arglist__2767));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2767)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2767)));
return G__2761__2765.call(null, a, b, c, ds);
});
return G__2761;
})()
});
var fnil__2758 = (function (f,x,y){
return (function() {
var G__2768 = null;
var G__2768__2769 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2768__2770 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2768__2771 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
});
G__2768 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2768__2769.call(this,a,b);
case  3 :
return G__2768__2770.call(this,a,b,c);
default:
return G__2768__2771.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2768.cljs$lang$maxFixedArity = 3;
G__2768.cljs$lang$applyTo = (function (arglist__2773){
var a = cljs.core.first(arglist__2773);
var b = cljs.core.first(cljs.core.next(arglist__2773));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2773)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2773)));
return G__2768__2771.call(null, a, b, c, ds);
});
return G__2768;
})()
});
var fnil__2759 = (function (f,x,y,z){
return (function() {
var G__2774 = null;
var G__2774__2775 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2774__2776 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2774__2777 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
});
G__2774 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2774__2775.call(this,a,b);
case  3 :
return G__2774__2776.call(this,a,b,c);
default:
return G__2774__2777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2774.cljs$lang$maxFixedArity = 3;
G__2774.cljs$lang$applyTo = (function (arglist__2779){
var a = cljs.core.first(arglist__2779);
var b = cljs.core.first(cljs.core.next(arglist__2779));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2779)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2779)));
return G__2774__2777.call(null, a, b, c, ds);
});
return G__2774;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2757.call(this,f,x);
case  3 :
return fnil__2758.call(this,f,x,y);
case  4 :
return fnil__2759.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2824 = (function (p){
return (function() {
var ep1 = null;
var ep1__2829 = (function (){
return true;
});
var ep1__2830 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2831 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2786 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2786))
{return p.call(null,y);
} else
{return and__3574__auto____2786;
}
})());
});
var ep1__2832 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2787 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2787))
{var and__3574__auto____2788 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2788))
{return p.call(null,z);
} else
{return and__3574__auto____2788;
}
} else
{return and__3574__auto____2787;
}
})());
});
var ep1__2833 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2789 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2789))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2789;
}
})());
});
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2829.call(this);
case  1 :
return ep1__2830.call(this,x);
case  2 :
return ep1__2831.call(this,x,y);
case  3 :
return ep1__2832.call(this,x,y,z);
default:
return ep1__2833.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = (function (arglist__2835){
var x = cljs.core.first(arglist__2835);
var y = cljs.core.first(cljs.core.next(arglist__2835));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2835)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2835)));
return ep1__2833.call(null, x, y, z, args);
});
return ep1;
})()
});
var every_pred__2825 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2836 = (function (){
return true;
});
var ep2__2837 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2790 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2790))
{return p2.call(null,x);
} else
{return and__3574__auto____2790;
}
})());
});
var ep2__2838 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2791 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2791))
{var and__3574__auto____2792 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2792))
{var and__3574__auto____2793 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2793))
{return p2.call(null,y);
} else
{return and__3574__auto____2793;
}
} else
{return and__3574__auto____2792;
}
} else
{return and__3574__auto____2791;
}
})());
});
var ep2__2839 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2794 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2794))
{var and__3574__auto____2795 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2795))
{var and__3574__auto____2796 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2796))
{var and__3574__auto____2797 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2797))
{var and__3574__auto____2798 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2798))
{return p2.call(null,z);
} else
{return and__3574__auto____2798;
}
} else
{return and__3574__auto____2797;
}
} else
{return and__3574__auto____2796;
}
} else
{return and__3574__auto____2795;
}
} else
{return and__3574__auto____2794;
}
})());
});
var ep2__2840 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2799 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2799))
{return cljs.core.every_QMARK_.call(null,(function (p1__2751_SHARP_){
var and__3574__auto____2800 = p1.call(null,p1__2751_SHARP_);

if(cljs.core.truth_(and__3574__auto____2800))
{return p2.call(null,p1__2751_SHARP_);
} else
{return and__3574__auto____2800;
}
}),args);
} else
{return and__3574__auto____2799;
}
})());
});
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2836.call(this);
case  1 :
return ep2__2837.call(this,x);
case  2 :
return ep2__2838.call(this,x,y);
case  3 :
return ep2__2839.call(this,x,y,z);
default:
return ep2__2840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = (function (arglist__2842){
var x = cljs.core.first(arglist__2842);
var y = cljs.core.first(cljs.core.next(arglist__2842));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2842)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2842)));
return ep2__2840.call(null, x, y, z, args);
});
return ep2;
})()
});
var every_pred__2826 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2843 = (function (){
return true;
});
var ep3__2844 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2801 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2801))
{var and__3574__auto____2802 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2802))
{return p3.call(null,x);
} else
{return and__3574__auto____2802;
}
} else
{return and__3574__auto____2801;
}
})());
});
var ep3__2845 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2803 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2803))
{var and__3574__auto____2804 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2804))
{var and__3574__auto____2805 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2805))
{var and__3574__auto____2806 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2806))
{var and__3574__auto____2807 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2807))
{return p3.call(null,y);
} else
{return and__3574__auto____2807;
}
} else
{return and__3574__auto____2806;
}
} else
{return and__3574__auto____2805;
}
} else
{return and__3574__auto____2804;
}
} else
{return and__3574__auto____2803;
}
})());
});
var ep3__2846 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2808 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2808))
{var and__3574__auto____2809 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2809))
{var and__3574__auto____2810 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2810))
{var and__3574__auto____2811 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2811))
{var and__3574__auto____2812 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2812))
{var and__3574__auto____2813 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2813))
{var and__3574__auto____2814 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2814))
{var and__3574__auto____2815 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2815))
{return p3.call(null,z);
} else
{return and__3574__auto____2815;
}
} else
{return and__3574__auto____2814;
}
} else
{return and__3574__auto____2813;
}
} else
{return and__3574__auto____2812;
}
} else
{return and__3574__auto____2811;
}
} else
{return and__3574__auto____2810;
}
} else
{return and__3574__auto____2809;
}
} else
{return and__3574__auto____2808;
}
})());
});
var ep3__2847 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2816 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2816))
{return cljs.core.every_QMARK_.call(null,(function (p1__2752_SHARP_){
var and__3574__auto____2817 = p1.call(null,p1__2752_SHARP_);

if(cljs.core.truth_(and__3574__auto____2817))
{var and__3574__auto____2818 = p2.call(null,p1__2752_SHARP_);

if(cljs.core.truth_(and__3574__auto____2818))
{return p3.call(null,p1__2752_SHARP_);
} else
{return and__3574__auto____2818;
}
} else
{return and__3574__auto____2817;
}
}),args);
} else
{return and__3574__auto____2816;
}
})());
});
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2843.call(this);
case  1 :
return ep3__2844.call(this,x);
case  2 :
return ep3__2845.call(this,x,y);
case  3 :
return ep3__2846.call(this,x,y,z);
default:
return ep3__2847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = (function (arglist__2849){
var x = cljs.core.first(arglist__2849);
var y = cljs.core.first(cljs.core.next(arglist__2849));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2849)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2849)));
return ep3__2847.call(null, x, y, z, args);
});
return ep3;
})()
});
var every_pred__2827 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__2819 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2850 = (function (){
return true;
});
var epn__2851 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2753_SHARP_){
return p1__2753_SHARP_.call(null,x);
}),ps__2819);
});
var epn__2852 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2754_SHARP_){
var and__3574__auto____2820 = p1__2754_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2820))
{return p1__2754_SHARP_.call(null,y);
} else
{return and__3574__auto____2820;
}
}),ps__2819);
});
var epn__2853 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2755_SHARP_){
var and__3574__auto____2821 = p1__2755_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2821))
{var and__3574__auto____2822 = p1__2755_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2822))
{return p1__2755_SHARP_.call(null,z);
} else
{return and__3574__auto____2822;
}
} else
{return and__3574__auto____2821;
}
}),ps__2819);
});
var epn__2854 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2823 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2823))
{return cljs.core.every_QMARK_.call(null,(function (p1__2756_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2756_SHARP_,args);
}),ps__2819);
} else
{return and__3574__auto____2823;
}
})());
});
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2850.call(this);
case  1 :
return epn__2851.call(this,x);
case  2 :
return epn__2852.call(this,x,y);
case  3 :
return epn__2853.call(this,x,y,z);
default:
return epn__2854.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = (function (arglist__2856){
var x = cljs.core.first(arglist__2856);
var y = cljs.core.first(cljs.core.next(arglist__2856));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2856)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2856)));
return epn__2854.call(null, x, y, z, args);
});
return epn;
})()
});
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2824.call(this,p1);
case  2 :
return every_pred__2825.call(this,p1,p2);
case  3 :
return every_pred__2826.call(this,p1,p2,p3);
default:
return every_pred__2827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = (function (arglist__2857){
var p1 = cljs.core.first(arglist__2857);
var p2 = cljs.core.first(cljs.core.next(arglist__2857));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2857)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2857)));
return every_pred__2827.call(null, p1, p2, p3, ps);
});
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2897 = (function (p){
return (function() {
var sp1 = null;
var sp1__2902 = (function (){
return null;
});
var sp1__2903 = (function (x){
return p.call(null,x);
});
var sp1__2904 = (function (x,y){
var or__3576__auto____2859 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2859))
{return or__3576__auto____2859;
} else
{return p.call(null,y);
}
});
var sp1__2905 = (function (x,y,z){
var or__3576__auto____2860 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2860))
{return or__3576__auto____2860;
} else
{var or__3576__auto____2861 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2861))
{return or__3576__auto____2861;
} else
{return p.call(null,z);
}
}
});
var sp1__2906 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____2862 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2862))
{return or__3576__auto____2862;
} else
{return cljs.core.some.call(null,p,args);
}
});
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2902.call(this);
case  1 :
return sp1__2903.call(this,x);
case  2 :
return sp1__2904.call(this,x,y);
case  3 :
return sp1__2905.call(this,x,y,z);
default:
return sp1__2906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = (function (arglist__2908){
var x = cljs.core.first(arglist__2908);
var y = cljs.core.first(cljs.core.next(arglist__2908));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2908)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2908)));
return sp1__2906.call(null, x, y, z, args);
});
return sp1;
})()
});
var some_fn__2898 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2909 = (function (){
return null;
});
var sp2__2910 = (function (x){
var or__3576__auto____2863 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2863))
{return or__3576__auto____2863;
} else
{return p2.call(null,x);
}
});
var sp2__2911 = (function (x,y){
var or__3576__auto____2864 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2864))
{return or__3576__auto____2864;
} else
{var or__3576__auto____2865 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2865))
{return or__3576__auto____2865;
} else
{var or__3576__auto____2866 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2866))
{return or__3576__auto____2866;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2912 = (function (x,y,z){
var or__3576__auto____2867 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2867))
{return or__3576__auto____2867;
} else
{var or__3576__auto____2868 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2868))
{return or__3576__auto____2868;
} else
{var or__3576__auto____2869 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2869))
{return or__3576__auto____2869;
} else
{var or__3576__auto____2870 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2870))
{return or__3576__auto____2870;
} else
{var or__3576__auto____2871 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2871))
{return or__3576__auto____2871;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2913 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____2872 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2872))
{return or__3576__auto____2872;
} else
{return cljs.core.some.call(null,(function (p1__2780_SHARP_){
var or__3576__auto____2873 = p1.call(null,p1__2780_SHARP_);

if(cljs.core.truth_(or__3576__auto____2873))
{return or__3576__auto____2873;
} else
{return p2.call(null,p1__2780_SHARP_);
}
}),args);
}
});
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2909.call(this);
case  1 :
return sp2__2910.call(this,x);
case  2 :
return sp2__2911.call(this,x,y);
case  3 :
return sp2__2912.call(this,x,y,z);
default:
return sp2__2913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = (function (arglist__2915){
var x = cljs.core.first(arglist__2915);
var y = cljs.core.first(cljs.core.next(arglist__2915));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2915)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2915)));
return sp2__2913.call(null, x, y, z, args);
});
return sp2;
})()
});
var some_fn__2899 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2916 = (function (){
return null;
});
var sp3__2917 = (function (x){
var or__3576__auto____2874 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2874))
{return or__3576__auto____2874;
} else
{var or__3576__auto____2875 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2875))
{return or__3576__auto____2875;
} else
{return p3.call(null,x);
}
}
});
var sp3__2918 = (function (x,y){
var or__3576__auto____2876 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2876))
{return or__3576__auto____2876;
} else
{var or__3576__auto____2877 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2877))
{return or__3576__auto____2877;
} else
{var or__3576__auto____2878 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2878))
{return or__3576__auto____2878;
} else
{var or__3576__auto____2879 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2879))
{return or__3576__auto____2879;
} else
{var or__3576__auto____2880 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2880))
{return or__3576__auto____2880;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2919 = (function (x,y,z){
var or__3576__auto____2881 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2881))
{return or__3576__auto____2881;
} else
{var or__3576__auto____2882 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2882))
{return or__3576__auto____2882;
} else
{var or__3576__auto____2883 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2883))
{return or__3576__auto____2883;
} else
{var or__3576__auto____2884 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2884))
{return or__3576__auto____2884;
} else
{var or__3576__auto____2885 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2885))
{return or__3576__auto____2885;
} else
{var or__3576__auto____2886 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2886))
{return or__3576__auto____2886;
} else
{var or__3576__auto____2887 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2887))
{return or__3576__auto____2887;
} else
{var or__3576__auto____2888 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2888))
{return or__3576__auto____2888;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2920 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____2889 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2889))
{return or__3576__auto____2889;
} else
{return cljs.core.some.call(null,(function (p1__2781_SHARP_){
var or__3576__auto____2890 = p1.call(null,p1__2781_SHARP_);

if(cljs.core.truth_(or__3576__auto____2890))
{return or__3576__auto____2890;
} else
{var or__3576__auto____2891 = p2.call(null,p1__2781_SHARP_);

if(cljs.core.truth_(or__3576__auto____2891))
{return or__3576__auto____2891;
} else
{return p3.call(null,p1__2781_SHARP_);
}
}
}),args);
}
});
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2916.call(this);
case  1 :
return sp3__2917.call(this,x);
case  2 :
return sp3__2918.call(this,x,y);
case  3 :
return sp3__2919.call(this,x,y,z);
default:
return sp3__2920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = (function (arglist__2922){
var x = cljs.core.first(arglist__2922);
var y = cljs.core.first(cljs.core.next(arglist__2922));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2922)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2922)));
return sp3__2920.call(null, x, y, z, args);
});
return sp3;
})()
});
var some_fn__2900 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__2892 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2923 = (function (){
return null;
});
var spn__2924 = (function (x){
return cljs.core.some.call(null,(function (p1__2782_SHARP_){
return p1__2782_SHARP_.call(null,x);
}),ps__2892);
});
var spn__2925 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2783_SHARP_){
var or__3576__auto____2893 = p1__2783_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2893))
{return or__3576__auto____2893;
} else
{return p1__2783_SHARP_.call(null,y);
}
}),ps__2892);
});
var spn__2926 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2784_SHARP_){
var or__3576__auto____2894 = p1__2784_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2894))
{return or__3576__auto____2894;
} else
{var or__3576__auto____2895 = p1__2784_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2895))
{return or__3576__auto____2895;
} else
{return p1__2784_SHARP_.call(null,z);
}
}
}),ps__2892);
});
var spn__2927 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____2896 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2896))
{return or__3576__auto____2896;
} else
{return cljs.core.some.call(null,(function (p1__2785_SHARP_){
return cljs.core.some.call(null,p1__2785_SHARP_,args);
}),ps__2892);
}
});
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2923.call(this);
case  1 :
return spn__2924.call(this,x);
case  2 :
return spn__2925.call(this,x,y);
case  3 :
return spn__2926.call(this,x,y,z);
default:
return spn__2927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = (function (arglist__2929){
var x = cljs.core.first(arglist__2929);
var y = cljs.core.first(cljs.core.next(arglist__2929));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2929)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2929)));
return spn__2927.call(null, x, y, z, args);
});
return spn;
})()
});
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2897.call(this,p1);
case  2 :
return some_fn__2898.call(this,p1,p2);
case  3 :
return some_fn__2899.call(this,p1,p2,p3);
default:
return some_fn__2900.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = (function (arglist__2930){
var p1 = cljs.core.first(arglist__2930);
var p2 = cljs.core.first(cljs.core.next(arglist__2930));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2930)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2930)));
return some_fn__2900.call(null, p1, p2, p3, ps);
});
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2943 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2931 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2931))
{var s__2932 = temp__3726__auto____2931;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2932)),map.call(null,f,cljs.core.rest.call(null,s__2932)));
} else
{return null;
}
})));
});
var map__2944 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2933 = cljs.core.seq.call(null,c1);
var s2__2934 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2935 = s1__2933;

if(cljs.core.truth_(and__3574__auto____2935))
{return s2__2934;
} else
{return and__3574__auto____2935;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2933),cljs.core.first.call(null,s2__2934)),map.call(null,f,cljs.core.rest.call(null,s1__2933),cljs.core.rest.call(null,s2__2934)));
} else
{return null;
}
})));
});
var map__2945 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2936 = cljs.core.seq.call(null,c1);
var s2__2937 = cljs.core.seq.call(null,c2);
var s3__2938 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2939 = s1__2936;

if(cljs.core.truth_(and__3574__auto____2939))
{var and__3574__auto____2940 = s2__2937;

if(cljs.core.truth_(and__3574__auto____2940))
{return s3__2938;
} else
{return and__3574__auto____2940;
}
} else
{return and__3574__auto____2939;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2936),cljs.core.first.call(null,s2__2937),cljs.core.first.call(null,s3__2938)),map.call(null,f,cljs.core.rest.call(null,s1__2936),cljs.core.rest.call(null,s2__2937),cljs.core.rest.call(null,s3__2938)));
} else
{return null;
}
})));
});
var map__2946 = (function (f,c1,c2,c3,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
var step__2942 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2941 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2941)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2941),step.call(null,map.call(null,cljs.core.rest,ss__2941)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2858_SHARP_){
return cljs.core.apply.call(null,f,p1__2858_SHARP_);
}),step__2942.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
});
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2943.call(this,f,c1);
case  3 :
return map__2944.call(this,f,c1,c2);
case  4 :
return map__2945.call(this,f,c1,c2,c3);
default:
return map__2946.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = (function (arglist__2948){
var f = cljs.core.first(arglist__2948);
var c1 = cljs.core.first(cljs.core.next(arglist__2948));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2948)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2948))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2948))));
return map__2946.call(null, f, c1, c2, c3, colls);
});
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____2949 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2949))
{var s__2950 = temp__3726__auto____2949;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2950),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2950)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2953 = (function (n,coll){
while(true){
var s__2951 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2952 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2952))
{return s__2951;
} else
{return and__3574__auto____2952;
}
})()))
{{
var G__2954 = cljs.core.dec.call(null,n);
var G__2955 = cljs.core.rest.call(null,s__2951);
n = G__2954;
coll = G__2955;
continue;
}
} else
{return s__2951;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2953.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2956 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2957 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2956.call(this,n);
case  2 :
return drop_last__2957.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2959 = cljs.core.seq.call(null,coll);
var lead__2960 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2960))
{{
var G__2961 = cljs.core.next.call(null,s__2959);
var G__2962 = cljs.core.next.call(null,lead__2960);
s__2959 = G__2961;
lead__2960 = G__2962;
continue;
}
} else
{return s__2959;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2965 = (function (pred,coll){
while(true){
var s__2963 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2964 = s__2963;

if(cljs.core.truth_(and__3574__auto____2964))
{return pred.call(null,cljs.core.first.call(null,s__2963));
} else
{return and__3574__auto____2964;
}
})()))
{{
var G__2966 = pred;
var G__2967 = cljs.core.rest.call(null,s__2963);
pred = G__2966;
coll = G__2967;
continue;
}
} else
{return s__2963;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2965.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2968 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2968))
{var s__2969 = temp__3726__auto____2968;

return cljs.core.concat.call(null,s__2969,cycle.call(null,s__2969));
} else
{return null;
}
})));
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2970 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2971 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2970.call(this,n);
case  2 :
return repeat__2971.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2973 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2974 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2973.call(this,n);
case  2 :
return repeatedly__2974.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2980 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2976 = cljs.core.seq.call(null,c1);
var s2__2977 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2978 = s1__2976;

if(cljs.core.truth_(and__3574__auto____2978))
{return s2__2977;
} else
{return and__3574__auto____2978;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2976),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2977),interleave.call(null,cljs.core.rest.call(null,s1__2976),cljs.core.rest.call(null,s2__2977))));
} else
{return null;
}
})));
});
var interleave__2981 = (function (c1,c2,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2979 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2979)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2979),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2979)));
} else
{return null;
}
})));
});
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2980.call(this,c1,c2);
default:
return interleave__2981.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = (function (arglist__2983){
var c1 = cljs.core.first(arglist__2983);
var c2 = cljs.core.first(cljs.core.next(arglist__2983));
var colls = cljs.core.rest(cljs.core.next(arglist__2983));
return interleave__2981.call(null, c1, c2, colls);
});
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2986 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2984 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2984))
{var coll__2985 = temp__3723__auto____2984;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2985),cat.call(null,cljs.core.rest.call(null,coll__2985),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2986.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2987 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2988 = (function (f,coll,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
});
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2987.call(this,f,coll);
default:
return mapcat__2988.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = (function (arglist__2990){
var f = cljs.core.first(arglist__2990);
var coll = cljs.core.first(cljs.core.next(arglist__2990));
var colls = cljs.core.rest(cljs.core.next(arglist__2990));
return mapcat__2988.call(null, f, coll, colls);
});
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2991 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2991))
{var s__2992 = temp__3726__auto____2991;

var f__2993 = cljs.core.first.call(null,s__2992);
var r__2994 = cljs.core.rest.call(null,s__2992);

if(cljs.core.truth_(pred.call(null,f__2993)))
{return cljs.core.cons.call(null,f__2993,filter.call(null,pred,r__2994));
} else
{return filter.call(null,pred,r__2994);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2996 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2996.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2995_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2995_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3003 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3004 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2997 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2997))
{var s__2998 = temp__3726__auto____2997;

var p__2999 = cljs.core.take.call(null,n,s__2998);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2999))))
{return cljs.core.cons.call(null,p__2999,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2998)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3005 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3000 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3000))
{var s__3001 = temp__3726__auto____3000;

var p__3002 = cljs.core.take.call(null,n,s__3001);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3002))))
{return cljs.core.cons.call(null,p__3002,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3001)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3002,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3003.call(this,n,step);
case  3 :
return partition__3004.call(this,n,step,pad);
case  4 :
return partition__3005.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3011 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3012 = (function (m,ks,not_found){
var sentinel__3007 = cljs.core.lookup_sentinel;
var m__3008 = m;
var ks__3009 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3009))
{var m__3010 = cljs.core.get.call(null,m__3008,cljs.core.first.call(null,ks__3009),sentinel__3007);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3007,m__3010)))
{return not_found;
} else
{{
var G__3014 = sentinel__3007;
var G__3015 = m__3010;
var G__3016 = cljs.core.next.call(null,ks__3009);
sentinel__3007 = G__3014;
m__3008 = G__3015;
ks__3009 = G__3016;
continue;
}
}
} else
{return m__3008;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3011.call(this,m,ks);
case  3 :
return get_in__3012.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3017,v){
var vec__3018__3019 = p__3017;
var k__3020 = cljs.core.nth.call(null,vec__3018__3019,0,null);
var ks__3021 = cljs.core.nthnext.call(null,vec__3018__3019,1);

if(cljs.core.truth_(ks__3021))
{return cljs.core.assoc.call(null,m,k__3020,assoc_in.call(null,cljs.core.get.call(null,m,k__3020),ks__3021,v));
} else
{return cljs.core.assoc.call(null,m,k__3020,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function update_in(m,p__3022,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var vec__3023__3024 = p__3022;
var k__3025 = cljs.core.nth.call(null,vec__3023__3024,0,null);
var ks__3026 = cljs.core.nthnext.call(null,vec__3023__3024,1);

if(cljs.core.truth_(ks__3026))
{return cljs.core.assoc.call(null,m,k__3025,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3025),ks__3026,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3025,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3025),args));
}
});

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3027 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3028 = this;
var new_array__3029 = cljs.core.aclone.call(null,this__3028.array);

new_array__3029.push(o);
return (new cljs.core.Vector(this__3028.meta,new_array__3029));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3030 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3030.array.length,0)))
{var vector_seq__3031 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__3030.array.length)))
{return cljs.core.cons.call(null,(this__3030.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__3031.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3032 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3033 = this;
var count__3034 = this__3033.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__3034,0)))
{return (this__3033.array[cljs.core.dec.call(null,count__3034)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3035 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3035.array.length,0)))
{var new_array__3036 = cljs.core.aclone.call(null,this__3035.array);

new_array__3036.pop();
return (new cljs.core.Vector(this__3035.meta,new_array__3036));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3037 = this;
return (new cljs.core.Vector(meta,this__3037.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3038 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3038.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3052 = null;
var G__3052__3053 = (function (coll,n){
var this__3039 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3040 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____3040))
{return cljs.core._LT_.call(null,n,this__3039.array.length);
} else
{return and__3574__auto____3040;
}
})()))
{return (this__3039.array[n]);
} else
{return null;
}
});
var G__3052__3054 = (function (coll,n,not_found){
var this__3041 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3042 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____3042))
{return cljs.core._LT_.call(null,n,this__3041.array.length);
} else
{return and__3574__auto____3042;
}
})()))
{return (this__3041.array[n]);
} else
{return not_found;
}
});
G__3052 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3052__3053.call(this,coll,n);
case  3 :
return G__3052__3054.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3052;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3043 = this;
return this__3043.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3056 = null;
var G__3056__3057 = (function (v,f){
var this__3044 = this;
return cljs.core.ci_reduce.call(null,this__3044.array,f);
});
var G__3056__3058 = (function (v,f,start){
var this__3045 = this;
return cljs.core.ci_reduce.call(null,this__3045.array,f,start);
});
G__3056 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3056__3057.call(this,v,f);
case  3 :
return G__3056__3058.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3056;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3046 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3047 = this;
return this__3047.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3048 = this;
var new_array__3049 = cljs.core.aclone.call(null,this__3048.array);

(new_array__3049[k] = v);
return (new cljs.core.Vector(this__3048.meta,new_array__3049));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3060 = null;
var G__3060__3061 = (function (coll,k){
var this__3050 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3060__3062 = (function (coll,k,not_found){
var this__3051 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3060 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3060__3061.call(this,coll,k);
case  3 :
return G__3060__3062.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3060;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3064 = null;
var G__3064__3065 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3064__3066 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3064 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3064__3065.call(this,_,k);
case  3 :
return G__3064__3066.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3064;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function vector(var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.vec.call(null,args);
});

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3068 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3069 = array.length;

var i__3070 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3070,len__3069)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3070]))))
{return i__3070;
} else
{{
var G__3071 = cljs.core._PLUS_.call(null,i__3070,incr);
i__3070 = G__3071;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3073 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3074 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____3072 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3072))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3072;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3073.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3074.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3077 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3078 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3079 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3079.keys.length)))
{return cljs.core.map.call(null,(function (p1__3076_SHARP_){
return cljs.core.vector.call(null,p1__3076_SHARP_,(this__3079.strobj[p1__3076_SHARP_]));
}),this__3079.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3080 = this;
return (new cljs.core.ObjMap(meta,this__3080.keys,this__3080.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3081 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3082 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3082))
{return this__3081.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3082;
}
})()))
{var new_keys__3083 = cljs.core.aclone.call(null,this__3081.keys);
var new_strobj__3084 = goog.object.clone.call(null,this__3081.strobj);

new_keys__3083.splice(cljs.core.scan_array.call(null,1,k,new_keys__3083),1);
cljs.core.js_delete.call(null,new_strobj__3084,k);
return (new cljs.core.ObjMap(this__3081.meta,new_keys__3083,new_strobj__3084));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3085 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3085.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3086 = this;
return this__3086.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3087 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3088 = this;
return this__3088.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3089 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3090 = goog.object.clone.call(null,this__3089.strobj);
var overwrite_QMARK___3091 = new_strobj__3090.hasOwnProperty(k);

(new_strobj__3090[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3091))
{return (new cljs.core.ObjMap(this__3089.meta,this__3089.keys,new_strobj__3090));
} else
{var new_keys__3092 = cljs.core.aclone.call(null,this__3089.keys);

new_keys__3092.push(k);
return (new cljs.core.ObjMap(this__3089.meta,new_keys__3092,new_strobj__3090));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3089.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3093 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3093.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3096 = null;
var G__3096__3097 = (function (coll,k){
var this__3094 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3096__3098 = (function (coll,k,not_found){
var this__3095 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3095.strobj,(this__3095.strobj[k]),not_found);
});
G__3096 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3096__3097.call(this,coll,k);
case  3 :
return G__3096__3098.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3096;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3101 = null;
var G__3101__3102 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3101__3103 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3101 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3101__3102.call(this,_,k);
case  3 :
return G__3101__3103.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3101;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3105 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3106 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3107 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3107.count)))
{var hashes__3108 = cljs.core.js_keys.call(null,this__3107.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3100_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3107.hashobj[p1__3100_SHARP_])));
}),hashes__3108);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3109 = this;
return (new cljs.core.HashMap(meta,this__3109.count,this__3109.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3110 = this;
var h__3111 = cljs.core.hash.call(null,k);
var bucket__3112 = (this__3110.hashobj[h__3111]);
var i__3113 = (cljs.core.truth_(bucket__3112)?cljs.core.scan_array.call(null,2,k,bucket__3112):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3113)))
{return coll;
} else
{var new_hashobj__3114 = goog.object.clone.call(null,this__3110.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3112.length)))
{cljs.core.js_delete.call(null,new_hashobj__3114,h__3111);
} else
{var new_bucket__3115 = cljs.core.aclone.call(null,bucket__3112);

new_bucket__3115.splice(i__3113,2);
(new_hashobj__3114[h__3111] = new_bucket__3115);
}
return (new cljs.core.HashMap(this__3110.meta,cljs.core.dec.call(null,this__3110.count),new_hashobj__3114));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3116 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3116.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3117 = this;
return this__3117.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3118 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3119 = this;
return this__3119.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3120 = this;
var h__3121 = cljs.core.hash.call(null,k);
var bucket__3122 = (this__3120.hashobj[h__3121]);

if(cljs.core.truth_(bucket__3122))
{var new_bucket__3123 = cljs.core.aclone.call(null,bucket__3122);
var new_hashobj__3124 = goog.object.clone.call(null,this__3120.hashobj);

(new_hashobj__3124[h__3121] = new_bucket__3123);
var temp__3723__auto____3125 = cljs.core.scan_array.call(null,2,k,new_bucket__3123);

if(cljs.core.truth_(temp__3723__auto____3125))
{var i__3126 = temp__3723__auto____3125;

(new_bucket__3123[cljs.core.inc.call(null,i__3126)] = v);
return (new cljs.core.HashMap(this__3120.meta,this__3120.count,new_hashobj__3124));
} else
{new_bucket__3123.push(k,v);
return (new cljs.core.HashMap(this__3120.meta,cljs.core.inc.call(null,this__3120.count),new_hashobj__3124));
}
} else
{var new_hashobj__3127 = goog.object.clone.call(null,this__3120.hashobj);

(new_hashobj__3127[h__3121] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3120.meta,cljs.core.inc.call(null,this__3120.count),new_hashobj__3127));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3128 = this;
var bucket__3129 = (this__3128.hashobj[cljs.core.hash.call(null,k)]);
var i__3130 = (cljs.core.truth_(bucket__3129)?cljs.core.scan_array.call(null,2,k,bucket__3129):null);

if(cljs.core.truth_(i__3130))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3135 = null;
var G__3135__3136 = (function (coll,k){
var this__3131 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3135__3137 = (function (coll,k,not_found){
var this__3132 = this;
var bucket__3133 = (this__3132.hashobj[cljs.core.hash.call(null,k)]);
var i__3134 = (cljs.core.truth_(bucket__3133)?cljs.core.scan_array.call(null,2,k,bucket__3133):null);

if(cljs.core.truth_(i__3134))
{return (bucket__3133[cljs.core.inc.call(null,i__3134)]);
} else
{return not_found;
}
});
G__3135 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3135__3136.call(this,coll,k);
case  3 :
return G__3135__3137.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3135;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3139 = ks.length;

var i__3140 = 0;
var out__3141 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3140,len__3139)))
{{
var G__3142 = cljs.core.inc.call(null,i__3140);
var G__3143 = cljs.core.assoc.call(null,out__3141,(ks[i__3140]),(vs[i__3140]));
i__3140 = G__3142;
out__3141 = G__3143;
continue;
}
} else
{return out__3141;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3144 = null;
var G__3144__3145 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3144__3146 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3144 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3144__3145.call(this,_,k);
case  3 :
return G__3144__3146.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3144;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function hash_map(var_args){
var keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var in$__3148 = cljs.core.seq.call(null,keyvals);
var out__3149 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3148))
{{
var G__3150 = cljs.core.nnext.call(null,in$__3148);
var G__3151 = cljs.core.assoc.call(null,out__3149,cljs.core.first.call(null,in$__3148),cljs.core.second.call(null,in$__3148));
in$__3148 = G__3150;
out__3149 = G__3151;
continue;
}
} else
{return out__3149;
}
break;
}
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function merge(var_args){
var maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3152_SHARP_,p2__3153_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____3154 = p1__3152_SHARP_;

if(cljs.core.truth_(or__3576__auto____3154))
{return or__3576__auto____3154;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3153_SHARP_);
}),maps);
} else
{return null;
}
});
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3156 = cljs.core.ObjMap.fromObject([],{});
var keys__3157 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3157))
{var key__3158 = cljs.core.first.call(null,keys__3157);
var entry__3159 = cljs.core.get.call(null,map,key__3158);

{
var G__3160 = (cljs.core.truth_(entry__3159)?cljs.core.assoc.call(null,ret__3156,key__3158,entry__3159):ret__3156);
var G__3161 = cljs.core.next.call(null,keys__3157);
ret__3156 = G__3160;
keys__3157 = G__3161;
continue;
}
} else
{return ret__3156;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3162 = this;
return (new cljs.core.Set(this__3162.meta,cljs.core.dissoc.call(null,this__3162.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3163 = this;
var and__3574__auto____3164 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____3164))
{var and__3574__auto____3165 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____3165))
{return cljs.core.every_QMARK_.call(null,(function (p1__3155_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3155_SHARP_);
}),other);
} else
{return and__3574__auto____3165;
}
} else
{return and__3574__auto____3164;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3166 = this;
return (new cljs.core.Set(this__3166.meta,cljs.core.assoc.call(null,this__3166.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3167 = this;
return cljs.core.keys.call(null,this__3167.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3168 = this;
return (new cljs.core.Set(meta,this__3168.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3169 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3169.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3170 = this;
return this__3170.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3171 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3172 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3175 = null;
var G__3175__3176 = (function (coll,v){
var this__3173 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3175__3177 = (function (coll,v,not_found){
var this__3174 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3174.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3175 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3175__3176.call(this,coll,v);
case  3 :
return G__3175__3177.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3175;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3179 = null;
var G__3179__3180 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3179__3181 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3179 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3179__3180.call(this,_,k);
case  3 :
return G__3179__3181.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3179;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3183 = cljs.core.seq.call(null,coll);
var out__3184 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3183))))
{{
var G__3185 = cljs.core.rest.call(null,in$__3183);
var G__3186 = cljs.core.conj.call(null,out__3184,cljs.core.first.call(null,in$__3183));
in$__3183 = G__3185;
out__3184 = G__3186;
continue;
}
} else
{return out__3184;
}
break;
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3194 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3187,seen){
while(true){
var vec__3188__3189 = p__3187;
var f__3190 = cljs.core.nth.call(null,vec__3188__3189,0,null);
var xs__3191 = vec__3188__3189;

var temp__3726__auto____3192 = cljs.core.seq.call(null,xs__3191);

if(cljs.core.truth_(temp__3726__auto____3192))
{var s__3193 = temp__3726__auto____3192;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3190)))
{{
var G__3195 = cljs.core.rest.call(null,s__3193);
var G__3196 = seen;
p__3187 = G__3195;
seen = G__3196;
continue;
}
} else
{return cljs.core.cons.call(null,f__3190,step.call(null,cljs.core.rest.call(null,s__3193),cljs.core.conj.call(null,seen,f__3190)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3194.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3197 = cljs.core.Vector.fromArray([]);
var s__3198 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3198)))
{{
var G__3199 = cljs.core.conj.call(null,ret__3197,cljs.core.first.call(null,s__3198));
var G__3200 = cljs.core.next.call(null,s__3198);
ret__3197 = G__3199;
s__3198 = G__3200;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3197);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____3201 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3201))
{return or__3576__auto____3201;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3202 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3202,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3202));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____3203 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3203))
{return or__3576__auto____3203;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3204 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3204,-1)))
{return cljs.core.subs.call(null,x,2,i__3204);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3207 = cljs.core.ObjMap.fromObject([],{});
var ks__3208 = cljs.core.seq.call(null,keys);
var vs__3209 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3210 = ks__3208;

if(cljs.core.truth_(and__3574__auto____3210))
{return vs__3209;
} else
{return and__3574__auto____3210;
}
})()))
{{
var G__3211 = cljs.core.assoc.call(null,map__3207,cljs.core.first.call(null,ks__3208),cljs.core.first.call(null,vs__3209));
var G__3212 = cljs.core.next.call(null,ks__3208);
var G__3213 = cljs.core.next.call(null,vs__3209);
map__3207 = G__3211;
ks__3208 = G__3212;
vs__3209 = G__3213;
continue;
}
} else
{return map__3207;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3216 = (function (k,x){
return x;
});
var max_key__3217 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3218 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__3205_SHARP_,p2__3206_SHARP_){
return max_key.call(null,k,p1__3205_SHARP_,p2__3206_SHARP_);
}),max_key.call(null,k,x,y),more);
});
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3216.call(this,k,x);
case  3 :
return max_key__3217.call(this,k,x,y);
default:
return max_key__3218.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = (function (arglist__3220){
var k = cljs.core.first(arglist__3220);
var x = cljs.core.first(cljs.core.next(arglist__3220));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3220)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3220)));
return max_key__3218.call(null, k, x, y, more);
});
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3221 = (function (k,x){
return x;
});
var min_key__3222 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3223 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__3214_SHARP_,p2__3215_SHARP_){
return min_key.call(null,k,p1__3214_SHARP_,p2__3215_SHARP_);
}),min_key.call(null,k,x,y),more);
});
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3221.call(this,k,x);
case  3 :
return min_key__3222.call(this,k,x,y);
default:
return min_key__3223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = (function (arglist__3225){
var k = cljs.core.first(arglist__3225);
var x = cljs.core.first(cljs.core.next(arglist__3225));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3225)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3225)));
return min_key__3223.call(null, k, x, y, more);
});
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3228 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3229 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3226 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3226))
{var s__3227 = temp__3726__auto____3226;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3227),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3227)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3228.call(this,n,step);
case  3 :
return partition_all__3229.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3231 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3231))
{var s__3232 = temp__3726__auto____3231;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3232))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3232),take_while.call(null,pred,cljs.core.rest.call(null,s__3232)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3234 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3234))
{var s__3235 = temp__3726__auto____3234;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3235),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3235)));
} else
{return null;
}
})));
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3236 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3236))
{var s__3237 = temp__3726__auto____3236;

var fst__3238 = cljs.core.first.call(null,s__3237);
var fv__3239 = f.call(null,fst__3238);
var run__3240 = cljs.core.cons.call(null,fst__3238,cljs.core.take_while.call(null,(function (p1__3233_SHARP_){
return cljs.core._EQ_.call(null,fv__3239,f.call(null,p1__3233_SHARP_));
}),cljs.core.next.call(null,s__3237)));

return cljs.core.cons.call(null,run__3240,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3240),s__3237))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3255 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3251 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3251))
{var s__3252 = temp__3723__auto____3251;

return reductions.call(null,f,cljs.core.first.call(null,s__3252),cljs.core.rest.call(null,s__3252));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3256 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3253 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3253))
{var s__3254 = temp__3726__auto____3253;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3254)),cljs.core.rest.call(null,s__3254));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3255.call(this,f,init);
case  3 :
return reductions__3256.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3259 = (function (f){
return (function() {
var G__3264 = null;
var G__3264__3265 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3264__3266 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3264__3267 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3264__3268 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3264__3269 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
});
G__3264 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3264__3265.call(this);
case  1 :
return G__3264__3266.call(this,x);
case  2 :
return G__3264__3267.call(this,x,y);
case  3 :
return G__3264__3268.call(this,x,y,z);
default:
return G__3264__3269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3264.cljs$lang$maxFixedArity = 3;
G__3264.cljs$lang$applyTo = (function (arglist__3271){
var x = cljs.core.first(arglist__3271);
var y = cljs.core.first(cljs.core.next(arglist__3271));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3271)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3271)));
return G__3264__3269.call(null, x, y, z, args);
});
return G__3264;
})()
});
var juxt__3260 = (function (f,g){
return (function() {
var G__3272 = null;
var G__3272__3273 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3272__3274 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3272__3275 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3272__3276 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3272__3277 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
});
G__3272 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3272__3273.call(this);
case  1 :
return G__3272__3274.call(this,x);
case  2 :
return G__3272__3275.call(this,x,y);
case  3 :
return G__3272__3276.call(this,x,y,z);
default:
return G__3272__3277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3272.cljs$lang$maxFixedArity = 3;
G__3272.cljs$lang$applyTo = (function (arglist__3279){
var x = cljs.core.first(arglist__3279);
var y = cljs.core.first(cljs.core.next(arglist__3279));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3279)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3279)));
return G__3272__3277.call(null, x, y, z, args);
});
return G__3272;
})()
});
var juxt__3261 = (function (f,g,h){
return (function() {
var G__3280 = null;
var G__3280__3281 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3280__3282 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3280__3283 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3280__3284 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3280__3285 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
});
G__3280 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3280__3281.call(this);
case  1 :
return G__3280__3282.call(this,x);
case  2 :
return G__3280__3283.call(this,x,y);
case  3 :
return G__3280__3284.call(this,x,y,z);
default:
return G__3280__3285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3280.cljs$lang$maxFixedArity = 3;
G__3280.cljs$lang$applyTo = (function (arglist__3287){
var x = cljs.core.first(arglist__3287);
var y = cljs.core.first(cljs.core.next(arglist__3287));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3287)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3287)));
return G__3280__3285.call(null, x, y, z, args);
});
return G__3280;
})()
});
var juxt__3262 = (function (f,g,h,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__3258 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3288 = null;
var G__3288__3289 = (function (){
return cljs.core.reduce.call(null,(function (p1__3241_SHARP_,p2__3242_SHARP_){
return cljs.core.conj.call(null,p1__3241_SHARP_,p2__3242_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3258);
});
var G__3288__3290 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3243_SHARP_,p2__3244_SHARP_){
return cljs.core.conj.call(null,p1__3243_SHARP_,p2__3244_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3258);
});
var G__3288__3291 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3245_SHARP_,p2__3246_SHARP_){
return cljs.core.conj.call(null,p1__3245_SHARP_,p2__3246_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3258);
});
var G__3288__3292 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3247_SHARP_,p2__3248_SHARP_){
return cljs.core.conj.call(null,p1__3247_SHARP_,p2__3248_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3258);
});
var G__3288__3293 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__3249_SHARP_,p2__3250_SHARP_){
return cljs.core.conj.call(null,p1__3249_SHARP_,cljs.core.apply.call(null,p2__3250_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3258);
});
G__3288 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3288__3289.call(this);
case  1 :
return G__3288__3290.call(this,x);
case  2 :
return G__3288__3291.call(this,x,y);
case  3 :
return G__3288__3292.call(this,x,y,z);
default:
return G__3288__3293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3288.cljs$lang$maxFixedArity = 3;
G__3288.cljs$lang$applyTo = (function (arglist__3295){
var x = cljs.core.first(arglist__3295);
var y = cljs.core.first(cljs.core.next(arglist__3295));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3295)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3295)));
return G__3288__3293.call(null, x, y, z, args);
});
return G__3288;
})()
});
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3259.call(this,f);
case  2 :
return juxt__3260.call(this,f,g);
case  3 :
return juxt__3261.call(this,f,g,h);
default:
return juxt__3262.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = (function (arglist__3296){
var f = cljs.core.first(arglist__3296);
var g = cljs.core.first(cljs.core.next(arglist__3296));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3296)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3296)));
return juxt__3262.call(null, f, g, h, fs);
});
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3298 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3301 = cljs.core.next.call(null,coll);
coll = G__3301;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3299 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3297 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3297))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3297;
}
})()))
{{
var G__3302 = cljs.core.dec.call(null,n);
var G__3303 = cljs.core.next.call(null,coll);
n = G__3302;
coll = G__3303;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3298.call(this,n);
case  2 :
return dorun__3299.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3304 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3305 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3304.call(this,n);
case  2 :
return doall__3305.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3307 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3307),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3307),1)))
{return cljs.core.first.call(null,matches__3307);
} else
{return cljs.core.vec.call(null,matches__3307);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3308 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3308)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3308),1)))
{return cljs.core.first.call(null,matches__3308);
} else
{return cljs.core.vec.call(null,matches__3308);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3309 = cljs.core.re_find.call(null,re,s);
var match_idx__3310 = s.search(re);
var match_str__3311 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3309))?cljs.core.first.call(null,match_data__3309):match_data__3309);
var post_match__3312 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3310,cljs.core.count.call(null,match_str__3311)));

if(cljs.core.truth_(match_data__3309))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3309,re_seq.call(null,re,post_match__3312));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3313_SHARP_){
return print_one.call(null,p1__3313_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3314 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3314))
{var and__3574__auto____3317 = (function (){var x__105__auto____3315 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3316 = x__105__auto____3315;

if(cljs.core.truth_(and__3574__auto____3316))
{return x__105__auto____3315.cljs$core$IMeta$;
} else
{return and__3574__auto____3316;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3315);
}
})();

if(cljs.core.truth_(and__3574__auto____3317))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3317;
}
} else
{return and__3574__auto____3314;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3318 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3319 = x__105__auto____3318;

if(cljs.core.truth_(and__3574__auto____3319))
{return x__105__auto____3318.cljs$core$IPrintable$;
} else
{return and__3574__auto____3319;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3318);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3320 = cljs.core.first.call(null,objs);
var sb__3321 = (new goog.string.StringBuffer());

var G__3322__3323 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3322__3323))
{var obj__3324 = cljs.core.first.call(null,G__3322__3323);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3324,first_obj__3320)))
{} else
{sb__3321.append(" ");
}
var G__3325__3326 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3324,opts));

while(true){
if(cljs.core.truth_(G__3325__3326))
{var string__3327 = cljs.core.first.call(null,G__3325__3326);

sb__3321.append(string__3327);
{
var G__3328 = cljs.core.next.call(null,G__3325__3326);
G__3325__3326 = G__3328;
continue;
}
} else
{}
break;
}
{
var G__3329 = cljs.core.next.call(null,G__3322__3323);
G__3322__3323 = G__3329;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3321);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3330 = cljs.core.first.call(null,objs);

var G__3331__3332 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3331__3332))
{var obj__3333 = cljs.core.first.call(null,G__3331__3332);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3333,first_obj__3330)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3334__3335 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3333,opts));

while(true){
if(cljs.core.truth_(G__3334__3335))
{var string__3336 = cljs.core.first.call(null,G__3334__3335);

cljs.core.string_print.call(null,string__3336);
{
var G__3337 = cljs.core.next.call(null,G__3334__3335);
G__3334__3335 = G__3337;
continue;
}
} else
{}
break;
}
{
var G__3338 = cljs.core.next.call(null,G__3331__3332);
G__3331__3332 = G__3338;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function pr_str(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function pr(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function cljs_core_print(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
});
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function println(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function prn(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3339 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3339,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3340 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3340))
{var nspc__3341 = temp__3726__auto____3340;

return cljs.core.str.call(null,nspc__3341,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3342 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3342))
{var nspc__3343 = temp__3726__auto____3342;

return cljs.core.str.call(null,nspc__3343,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3344 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3344,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3345 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3345.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3346 = this;
return this__3346.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3347 = this;
return this__3347.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3348 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3355 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3356 = (function (x,var_args){
var p__3349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__3350__3351 = p__3349;
var map__3350__3352 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3350__3351))?cljs.core.apply.call(null,cljs.core.hash_map,map__3350__3351):map__3350__3351);
var validator__3353 = cljs.core.get.call(null,map__3350__3352,"﷐'validator");
var meta__3354 = cljs.core.get.call(null,map__3350__3352,"﷐'meta");

return (new cljs.core.Atom(x,meta__3354,validator__3353));
});
atom = function(x,var_args){
var p__3349 = var_args;
switch(arguments.length){
case  1 :
return atom__3355.call(this,x);
default:
return atom__3356.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = (function (arglist__3358){
var x = cljs.core.first(arglist__3358);
var p__3349 = cljs.core.rest(arglist__3358);
return atom__3356.call(null, x, p__3349);
});
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3359 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3359))
{var v__3360 = temp__3726__auto____3359;

if(cljs.core.truth_(v__3360.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3361 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3362 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3363 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3364 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3365 = (function (a,f,x,y,z,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
});
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3361.call(this,a,f);
case  3 :
return swap_BANG___3362.call(this,a,f,x);
case  4 :
return swap_BANG___3363.call(this,a,f,x,y);
case  5 :
return swap_BANG___3364.call(this,a,f,x,y,z);
default:
return swap_BANG___3365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = (function (arglist__3367){
var a = cljs.core.first(arglist__3367);
var f = cljs.core.first(cljs.core.next(arglist__3367));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3367)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3367))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3367)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3367)))));
return swap_BANG___3365.call(null, a, f, x, y, z, more);
});
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function alter_meta_BANG_(iref,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
});
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3368 = (function (){
return gensym.call(null,"G__");
});
var gensym__3369 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3368.call(this);
case  1 :
return gensym__3369.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3371 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3371.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3372 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3372.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3372.state,this__3372.f);
}
return cljs.core.deref.call(null,this__3372.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function delay(var_args){
var body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function js__GT_clj(x,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__3373__3374 = options;
var map__3373__3375 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3373__3374))?cljs.core.apply.call(null,cljs.core.hash_map,map__3373__3374):map__3373__3374);
var keywordize_keys__3376 = cljs.core.get.call(null,map__3373__3375,"﷐'keywordize-keys");
var keyfn__3377 = (cljs.core.truth_(keywordize_keys__3376)?cljs.core.keyword:cljs.core.str);
var f__3383 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3382 = (function iter__3378(s__3379){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3379__3380 = s__3379;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3379__3380)))
{var k__3381 = cljs.core.first.call(null,s__3379__3380);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3377.call(null,k__3381),thisfn.call(null,(x[k__3381]))]),iter__3378.call(null,cljs.core.rest.call(null,s__3379__3380)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3382.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3383.call(null,x);
});
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3384 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var temp__3723__auto____3385 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3384),args);

if(cljs.core.truth_(temp__3723__auto____3385))
{var v__3386 = temp__3723__auto____3385;

return v__3386;
} else
{var ret__3387 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3384,cljs.core.assoc,args,ret__3387);
return ret__3387;
}
});
});
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3388 = (function (){
return rand.call(null,1);
});
var rand__3389 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3388.call(this);
case  1 :
return rand__3389.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3393 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3393,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3393,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
cljs.core.test_stuff = (function test_stuff(){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([4,3,2,1,0]),(function (){var i__3394 = 0;
var j__3395 = cljs.core.List.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3394,5)))
{{
var G__3529 = cljs.core.inc.call(null,i__3394);
var G__3530 = cljs.core.conj.call(null,j__3395,((function (i__3394,j__3395){
return (function (){
return i__3394;
});})(i__3394,j__3395))
);
i__3394 = G__3529;
j__3395 = G__3530;
continue;
}
} else
{return cljs.core.map.call(null,((function (i__3394,j__3395){
return (function (p1__3391_SHARP_){
return p1__3391_SHARP_.call(null);
});})(i__3394,j__3395))
,j__3395);
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [4,3,2,1,0])),cljs.core.list("﷑'loop",(new cljs.core.Vector(null, ["﷑'i",0,"﷑'j",cljs.core.List.EMPTY])),cljs.core.list("﷑'if",cljs.core.list("﷑'<","﷑'i",5),cljs.core.list("﷑'recur",cljs.core.list("﷑'inc","﷑'i"),cljs.core.list("﷑'conj","﷑'j",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),"﷑'i"))),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3391#"])),cljs.core.list("﷑'p1__3391#")),"﷑'j"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,3]),cljs.core.Vector.fromArray([2,1]),cljs.core.Vector.fromArray([2,2]),cljs.core.Vector.fromArray([2,3])]),cljs.core.map.call(null,(function (p1__3392_SHARP_){
return p1__3392_SHARP_.call(null);
}),(function (){var iter__159__auto____3406 = (function iter__3396(s__3397){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3397__3400 = s__3397;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3397__3400)))
{var i__3401 = cljs.core.first.call(null,s__3397__3400);

var iterys__157__auto____3404 = ((function (s__3397__3400){
return (function iter__3398(s__3399){
return (new cljs.core.LazySeq(null,false,((function (s__3397__3400){
return (function (){
var s__3399__3402 = s__3399;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3399__3402)))
{var j__3403 = cljs.core.first.call(null,s__3399__3402);

return cljs.core.cons.call(null,((function (s__3397__3400){
return (function (){
return cljs.core.Vector.fromArray([i__3401,j__3403]);
});})(s__3397__3400))
,iter__3398.call(null,cljs.core.rest.call(null,s__3399__3402)));
} else
{return null;
}
break;
}
});})(s__3397__3400))
));
});})(s__3397__3400))
;
var fs__158__auto____3405 = cljs.core.seq.call(null,iterys__157__auto____3404.call(null,cljs.core.Vector.fromArray([1,2,3])));

if(cljs.core.truth_(fs__158__auto____3405))
{return cljs.core.concat.call(null,fs__158__auto____3405,iter__3396.call(null,cljs.core.rest.call(null,s__3397__3400)));
} else
{{
var G__3531 = cljs.core.rest.call(null,s__3397__3400);
s__3397__3400 = G__3531;
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

return iter__159__auto____3406.call(null,cljs.core.Vector.fromArray([1,2]));
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,3])),(new cljs.core.Vector(null, [2,1])),(new cljs.core.Vector(null, [2,2])),(new cljs.core.Vector(null, [2,3]))])),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3392#"])),cljs.core.list("﷑'p1__3392#")),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'i",(new cljs.core.Vector(null, [1,2])),"﷑'j",(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, ["﷑'i","﷑'j"]))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷐'b".call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷐'b",cljs.core.hash_map("﷐'a",1,"﷐'b",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷑'b".call(null,cljs.core.hash_map("﷐'a",1,"﷑'b",2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.list("﷑'quote","﷑'b"),cljs.core.list("﷑'quote",cljs.core.hash_map("﷐'a",1,"﷑'b",2))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}).call(null,"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.HashMap.fromArrays([1,2],[1,2]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map(1,1,2,2),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.set([1,2,3]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.set([1,2,3]),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"foo/bar",cljs.core.namespace.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","foo/bar",cljs.core.list("﷑'namespace",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷐'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name","﷐'foo/bar/baz"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.get.call(null,cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2,3]),4],[cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),5]),cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'get",cljs.core.hash_map((new cljs.core.Vector(null, [1,2,3])),cljs.core.hash_map("﷐'a","﷐'b"),4,5),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'a",cljs.core.nth.call(null,cljs.core.Vector.fromArray(["﷐'a","﷐'b","﷐'c","﷐'d"]),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'a",cljs.core.list("﷑'nth",(new cljs.core.Vector(null, ["﷐'a","﷐'b","﷐'c","﷐'d"])),0))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":null}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'d"],{"﷐'a":"﷐'b","﷐'d":null})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b","﷐'c",null),cljs.core.hash_map("﷐'a","﷐'b","﷐'d",null)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.list.call(null,3,2,1),cljs.core.Vector.fromArray([3,2,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'list",3,2,1),(new cljs.core.Vector(null, [3,2,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.seq.call(null,cljs.core.array.call(null,3,2,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'seq",cljs.core.list("﷑'array",3,2,1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.Vector.fromArray([1])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",(new cljs.core.Vector(null, [1]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.array.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",cljs.core.list("﷑'array",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["x"],{"x":"y"}),cljs.core.meta.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray([]),cljs.core.ObjMap.fromObject(["x"],{"x":"y"}))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("x","y"),cljs.core.list("﷑'meta",cljs.core.with_meta((new cljs.core.Vector(null, [])),cljs.core.hash_map("x","y"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.dissoc.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":"﷐'d"}),"﷐'c"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'dissoc",cljs.core.hash_map("﷐'a","﷐'b","﷐'c","﷐'d"),"﷐'c"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.hash_map.call(null,"﷐'foo",5),cljs.core.assoc.call(null,(new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null))),"﷐'foo",5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'hash-map","﷐'foo",5),cljs.core.list("﷑'assoc",cljs.core.list("﷑'cljs.core.ObjMap.",null,cljs.core.list("﷑'array"),cljs.core.list("﷑'js-obj")),"﷐'foo",5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.pr_str.call(null,cljs.core.Vector.fromArray([1,true,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":2,"﷐'b":42}),cljs.core.array.call(null,3,4)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.list("﷑'pr-str",(new cljs.core.Vector(null, [1,true,cljs.core.hash_map("﷐'a",2,"﷐'b",42),cljs.core.list("﷑'array",3,4)]))))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,"one","two"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=","one","two"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core._count.call(null,"abc"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'-count","abc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._count.call(null,cljs.core.array.call(null,1,2,3,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-count",cljs.core.list("﷑'array",1,2,3,4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"c",cljs.core._nth.call(null,"abc",2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","c",cljs.core.list("﷑'-nth","abc",2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"quux",cljs.core._nth.call(null,"abc",3,"quux"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","quux",cljs.core.list("﷑'-nth","abc",3,"quux"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"val",cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),4,"val"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","val",cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),4,"val"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"b",cljs.core._lookup.call(null,"abc",1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","b",cljs.core.list("﷑'-lookup","abc",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"harriet",cljs.core._lookup.call(null,"abcd",4,"harriet"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","harriet",cljs.core.list("﷑'-lookup","abcd",4,"harriet"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"zot",cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),4,"zot"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","zot",cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),4,"zot"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_,10))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+",10))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cabd",(function (){var jumble__3407 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3407);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cabd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cafrogbd",(function (){var jumble__3408 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3408,"frog");
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cafrogbd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble","frog")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,1,0,1]),cljs.core.Vector.fromArray([cljs.core.bit_and.call(null,1,0),cljs.core.bit_and.call(null,0,0),cljs.core.bit_and.call(null,1,1),cljs.core.bit_and.call(null,42,1),cljs.core.bit_and.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,1,0,1])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and",1,0),cljs.core.list("﷑'bit-and",0,0),cljs.core.list("﷑'bit-and",1,1),cljs.core.list("﷑'bit-and",42,1),cljs.core.list("﷑'bit-and",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,1,43,41]),cljs.core.Vector.fromArray([cljs.core.bit_or.call(null,1,0),cljs.core.bit_or.call(null,0,0),cljs.core.bit_or.call(null,1,1),cljs.core.bit_or.call(null,42,1),cljs.core.bit_or.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,1,43,41])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-or",1,0),cljs.core.list("﷑'bit-or",0,0),cljs.core.list("﷑'bit-or",1,1),cljs.core.list("﷑'bit-or",42,1),cljs.core.list("﷑'bit-or",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,0,42,40]),cljs.core.Vector.fromArray([cljs.core.bit_and_not.call(null,1,0),cljs.core.bit_and_not.call(null,0,0),cljs.core.bit_and_not.call(null,1,1),cljs.core.bit_and_not.call(null,42,1),cljs.core.bit_and_not.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,0,42,40])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and-not",1,0),cljs.core.list("﷑'bit-and-not",0,0),cljs.core.list("﷑'bit-and-not",1,1),cljs.core.list("﷑'bit-and-not",42,1),cljs.core.list("﷑'bit-and-not",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,968,16649,0]),cljs.core.Vector.fromArray([cljs.core.bit_clear.call(null,1,0),cljs.core.bit_clear.call(null,2,0),cljs.core.bit_clear.call(null,1000,5),cljs.core.bit_clear.call(null,16713,6),cljs.core.bit_clear.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,968,16649,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-clear",1,0),cljs.core.list("﷑'bit-clear",2,0),cljs.core.list("﷑'bit-clear",1000,5),cljs.core.list("﷑'bit-clear",16713,6),cljs.core.list("﷑'bit-clear",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,992,18761,0]),cljs.core.Vector.fromArray([cljs.core.bit_flip.call(null,1,0),cljs.core.bit_flip.call(null,2,1),cljs.core.bit_flip.call(null,1000,3),cljs.core.bit_flip.call(null,16713,11),cljs.core.bit_flip.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,992,18761,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-flip",1,0),cljs.core.list("﷑'bit-flip",2,1),cljs.core.list("﷑'bit-flip",1000,3),cljs.core.list("﷑'bit-flip",16713,11),cljs.core.list("﷑'bit-flip",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([-2,-3,999,-16714,-1025]),cljs.core.Vector.fromArray([cljs.core.bit_not.call(null,1),cljs.core.bit_not.call(null,2),cljs.core.bit_not.call(null,-1000),cljs.core.bit_not.call(null,16713),cljs.core.bit_not.call(null,1024)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [-2,-3,999,-16714,-1025])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-not",1),cljs.core.list("﷑'bit-not",2),cljs.core.list("﷑'bit-not",-1000),cljs.core.list("﷑'bit-not",16713),cljs.core.list("﷑'bit-not",1024)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,1000,18761,1024]),cljs.core.Vector.fromArray([cljs.core.bit_set.call(null,1,0),cljs.core.bit_set.call(null,2,1),cljs.core.bit_set.call(null,1000,3),cljs.core.bit_set.call(null,16713,11),cljs.core.bit_set.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,1000,18761,1024])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-set",1,0),cljs.core.list("﷑'bit-set",2,1),cljs.core.list("﷑'bit-set",1000,3),cljs.core.list("﷑'bit-set",16713,11),cljs.core.list("﷑'bit-set",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true,true,false,true]),cljs.core.Vector.fromArray([cljs.core.bit_test.call(null,1,0),cljs.core.bit_test.call(null,2,1),cljs.core.bit_test.call(null,1000,3),cljs.core.bit_test.call(null,16713,11),cljs.core.bit_test.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true,true,false,true])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-test",1,0),cljs.core.list("﷑'bit-test",2,1),cljs.core.list("﷑'bit-test",1000,3),cljs.core.list("﷑'bit-test",16713,11),cljs.core.list("﷑'bit-test",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,false,false]),cljs.core.Vector.fromArray([cljs.core.true_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,goog.global['undefined']),cljs.core.false_QMARK_.call(null,goog.global['undefined'])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,false,false])),(new cljs.core.Vector(null, [cljs.core.list("﷑'true?",true),cljs.core.list("﷑'true?",false),cljs.core.list("﷑'false?",false),cljs.core.list("﷑'false?",true),cljs.core.list("﷑'true?","﷑'js/undefined"),cljs.core.list("﷑'false?","﷑'js/undefined")])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.apply.call(null,cljs.core._PLUS_,1,cljs.core.list.call(null,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'apply","﷑'+",1,cljs.core.list("﷑'list",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,7,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,cljs.core.list.call(null,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",7,cljs.core.list("﷑'apply","﷑'+",1,2,cljs.core.list("﷑'list",4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,15,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,cljs.core.list.call(null,8)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",15,cljs.core.list("﷑'apply","﷑'+",1,2,4,cljs.core.list("﷑'list",8)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,31,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,cljs.core.list.call(null,16)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",31,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,cljs.core.list("﷑'list",16)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,63,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",63,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,127,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32,64)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",127,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32,64)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4950,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.take.call(null,100,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4950,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'take",100,cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
var a__3409 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,a__3409))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3409,cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,cljs.core.compare_and_set_BANG_.call(null,a__3409,0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'compare-and-set!","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,cljs.core.compare_and_set_BANG_.call(null,a__3409,1,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'compare-and-set!","﷑'a",1,7))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.meta.call(null,a__3409))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.get_validator.call(null,a__3409))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
var a__3410 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3410,cljs.core._PLUS_,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.swap_BANG_.call(null,a__3410,cljs.core._PLUS_,1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core.swap_BANG_.call(null,a__3410,cljs.core._PLUS_,1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core.swap_BANG_.call(null,a__3410,cljs.core._PLUS_,1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3,4))));
}
var a__3411 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([1]),"﷐'validator",cljs.core.coll_QMARK_,"﷐'meta",cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.coll_QMARK_,cljs.core.get_validator.call(null,a__3411))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'coll?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),cljs.core.meta.call(null,a__3411))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1),cljs.core.list("﷑'meta","﷑'a"))));
}
cljs.core.alter_meta_BANG_.call(null,a__3411,cljs.core.assoc,"﷐'b",2);
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.meta.call(null,a__3411))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.empty.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'empty",null))));
}
var e_lazy_seq__3412 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,(new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,"﷐'a",null);
}))),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_lazy_seq__3412)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_lazy_seq__3412)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_lazy_seq__3412))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-lazy-seq"))));
}
var e_list__3413 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.list(1,2,3),cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_list__3413)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-list")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_list__3413)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-list")));
}
var e_elist__3414 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.List.EMPTY,cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_elist__3414)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_elist__3414)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'c",cljs.core.get.call(null,cljs.core.meta.call(null,e_elist__3414),"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'c",cljs.core.list("﷑'get",cljs.core.list("﷑'meta","﷑'e-elist"),"﷐'b"))));
}
var e_cons__3415 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,cljs.core.cons.call(null,"﷐'a",null),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_cons__3415)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_cons__3415)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_cons__3415))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-cons"))));
}
var e_vec__3416 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray(["﷐'a","﷐'d","﷐'g"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,e_vec__3416)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'vector?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_vec__3416)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_vec__3416))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-vec"))));
}
var e_omap__3417 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.ObjMap.fromObject(["﷐'a","﷐'g"],{"﷐'a":"﷐'d","﷐'g":"﷐'h"}),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_omap__3417)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_omap__3417)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_omap__3417))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-omap"))));
}
var e_hmap__3418 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2]),"﷐'g"],["﷐'d","﷐'h"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_hmap__3418)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_hmap__3418)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_hmap__3418))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-hmap"))));
}
var a__3419 = cljs.core.atom.call(null,null);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e3421){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e3421)))
{var e__3422 = e3421;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3421;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e3423){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e3423)))
{var e__3424 = e3423;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3423;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,(function (){try{return 1;
}finally {cljs.core.reset_BANG_.call(null,a__3419,42);
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1,cljs.core.list("﷑'finally",cljs.core.list("﷑'reset!","﷑'a",42))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,cljs.core.deref.call(null,a__3419))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),cljs.core.nthnext.call(null,cljs.core.Vector.fromArray([1,2,3]),2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'nthnext",(new cljs.core.Vector(null, [1,2,3])),2))));
}
var v__3426 = cljs.core.Vector.fromArray([1,2,3]);

if(cljs.core.truth_(cljs.core._EQ_.call(null,v__3426,(function (){var iter__159__auto____3431 = (function iter__3427(s__3428){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3428__3429 = s__3428;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3428__3429)))
{var e__3430 = cljs.core.first.call(null,s__3428__3429);

return cljs.core.cons.call(null,e__3430,iter__3427.call(null,cljs.core.rest.call(null,s__3428__3429)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3431.call(null,v__3426);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'v",cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v"])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4]),cljs.core.Vector.fromArray([3,9])]),(function (){var iter__159__auto____3437 = (function iter__3432(s__3433){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3433__3434 = s__3433;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3433__3434)))
{var e__3435 = cljs.core.first.call(null,s__3433__3434);

var m__3436 = cljs.core._STAR_.call(null,e__3435,e__3435);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3435,m__3436]),iter__3432.call(null,cljs.core.rest.call(null,s__3433__3434)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3437.call(null,v__3426);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4])),(new cljs.core.Vector(null, [3,9]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var iter__159__auto____3442 = (function iter__3438(s__3439){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3439__3440 = s__3439;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3439__3440)))
{var e__3441 = cljs.core.first.call(null,s__3439__3440);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3441,3)))
{return cljs.core.cons.call(null,e__3441,iter__3438.call(null,cljs.core.rest.call(null,s__3439__3440)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3442.call(null,v__3426);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),(function (){var iter__159__auto____3447 = (function iter__3443(s__3444){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3444__3445 = s__3444;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3444__3445)))
{var e__3446 = cljs.core.first.call(null,s__3444__3445);

if(cljs.core.truth_(cljs.core._GT_.call(null,e__3446,2)))
{return cljs.core.cons.call(null,e__3446,iter__3443.call(null,cljs.core.rest.call(null,s__3444__3445)));
} else
{{
var G__3532 = cljs.core.rest.call(null,s__3444__3445);
s__3444__3445 = G__3532;
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

return iter__159__auto____3447.call(null,v__3426);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'when",cljs.core.list("﷑'>","﷑'e",2)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4])]),(function (){var iter__159__auto____3453 = (function iter__3448(s__3449){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3449__3450 = s__3449;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3449__3450)))
{var e__3451 = cljs.core.first.call(null,s__3449__3450);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3451,3)))
{var m__3452 = cljs.core._STAR_.call(null,e__3451,e__3451);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3451,m__3452]),iter__3448.call(null,cljs.core.rest.call(null,s__3449__3450)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3453.call(null,v__3426);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3),"﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,1,2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",1,2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_EQ_.call(null,1,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not=",1,1))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core.boolean$.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'boolean",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"joel",cljs.core.min_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","joel",cljs.core.list("﷑'min-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"crooooooooow",cljs.core.max_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","crooooooooow",cljs.core.list("﷑'max-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,2,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([3,4,5,6]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([7,8,9]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,2,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [3,4,5,6])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [7,8,9])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true]),cljs.core.take_while.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true])),cljs.core.list("﷑'take-while","﷑'true?",(new cljs.core.Vector(null, [true,true,2,3,4]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([true,true]),cljs.core.Vector.fromArray([false,false,false]),cljs.core.Vector.fromArray([true,true])]),cljs.core.partition_by.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,false,false,false,true,true])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [true,true])),(new cljs.core.Vector(null, [false,false,false])),(new cljs.core.Vector(null, [true,true]))])),cljs.core.list("﷑'partition-by","﷑'true?",(new cljs.core.Vector(null, [true,true,false,false,false,true,true]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,4,6,8,10]),cljs.core.take_nth.call(null,2,cljs.core.Vector.fromArray([0,1,2,3,4,5,6,7,8,9,10])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,4,6,8,10])),cljs.core.list("﷑'take-nth",2,(new cljs.core.Vector(null, [0,1,2,3,4,5,6,7,8,9,10]))))));
}
var a10__3454 = cljs.core.partial.call(null,cljs.core._PLUS_,10);
var a20__3455 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10);
var a21__3456 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10,1);
var a22__3457 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3);
var a23__3458 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3,1);

if(cljs.core.truth_(cljs.core._EQ_.call(null,110,a10__3454.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",110,cljs.core.list("﷑'a10",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,120,a20__3455.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",120,cljs.core.list("﷑'a20",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,121,a21__3456.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",121,cljs.core.list("﷑'a21",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,122,a22__3457.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",122,cljs.core.list("﷑'a22",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,123,a23__3458.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",123,cljs.core.list("﷑'a23",100))));
}
var n2__3459 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest);
var n3__3460 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest);
var n4__3461 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n5__3462 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n6__3463 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,n2__3459.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'n2",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,n3__3460.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'n3",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,n4__3461.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'n4",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,n5__3462.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'n5",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,n6__3463.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'n6",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
var sf__3464 = cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_);

if(cljs.core.truth_(sf__3464.call(null,"﷐'foo",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo",1)));
}
if(cljs.core.truth_(sf__3464.call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo")));
}
if(cljs.core.truth_(sf__3464.call(null,"﷑'bar",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf",cljs.core.list("﷑'quote","﷑'bar"),1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,sf__3464.call(null,cljs.core.Vector.fromArray([]),cljs.core.List.EMPTY))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'sf",(new cljs.core.Vector(null, [])),cljs.core.List.EMPTY))));
}
var ep__3465 = cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.zero_QMARK_);

if(cljs.core.truth_(ep__3465.call(null,0,0,0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'ep",0,0,0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,ep__3465.call(null,1,2,3,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'ep",1,2,3,0))));
}
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.number_QMARK_).call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list(cljs.core.list("﷑'complement","﷑'number?"),"﷐'foo")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,cljs.core.Vector.fromArray([2,3]),cljs.core.Vector.fromArray([1,2,3])]),cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest,cljs.core.seq).call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,(new cljs.core.Vector(null, [2,3])),(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list(cljs.core.list("﷑'juxt","﷑'first","﷑'rest","﷑'seq"),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,cljs.core.max.call(null,1,2,3,4,5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'max",1,2,3,4,5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5.5,cljs.core.max.call(null,1,2,3,4,5,5.5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5.5,cljs.core.list("﷑'max",1,2,3,4,5,5.5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.min.call(null,5,4,3,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'min",5,4,3,2,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0.5,cljs.core.min.call(null,5,4,3,0.5,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0.5,cljs.core.list("﷑'min",5,4,3,0.5,2,1))));
}
var x__3466 = cljs.core.array.call(null,1,2,3);

x__3466.foo = "﷐'hello";
if(cljs.core.truth_(cljs.core._EQ_.call(null,x__3466.foo,"﷐'hello")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'.foo","﷑'x"),"﷐'hello")));
}
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.Vector.fromArray([]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'set",(new cljs.core.Vector(null, [])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core.set.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set(["foo"]),cljs.core.set.call(null,cljs.core.Vector.fromArray(["foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set(["foo"]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, ["foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]),cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]),cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.set([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.set([])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])])),5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'count",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))])),5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),1),cljs.core.set([1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),1),cljs.core.set([1]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),2),cljs.core.set([1,2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),2),cljs.core.set([1,2]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core._empty.call(null,cljs.core.set([1,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'-empty",cljs.core.set([1,2,3,4])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.set([1,2,3,4,5])),15)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'reduce","﷑'+",cljs.core.set([1,2,3,4,5])),15)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get.call(null,cljs.core.set([1,2,3,4]),4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get",cljs.core.set([1,2,3,4]),4))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([1,2,3,4]),4)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([1,2,3,4]),4)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([null,0,cljs.core.ObjMap.fromObject([],{}),cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.ObjMap.fromObject([],{}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([null,0,cljs.core.hash_map(),cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.hash_map())));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([cljs.core.Vector.fromArray([1,2,3])]),cljs.core.Vector.fromArray([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([(new cljs.core.Vector(null, [1,2,3]))]),(new cljs.core.Vector(null, [1,2,3])))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core._disjoin.call(null,cljs.core.set([1,2,3]),3),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'-disjoin",cljs.core.set([1,2,3]),3),3))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",1))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1.765)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1.765)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.integer_QMARK_,cljs.core.Vector.fromArray([1,1.00001,2023,cljs.core.Vector.fromArray([]),cljs.core._.call(null,88,1001991881),"﷐'foo",0,"0"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'integer?",(new cljs.core.Vector(null, [1,1.00001,2023,(new cljs.core.Vector(null, [])),cljs.core.list("﷑'-",88,1001991881),"﷐'foo",0,"0"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.odd_QMARK_,cljs.core.Vector.fromArray([1,2,3,4,-1,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'odd?",(new cljs.core.Vector(null, [1,2,3,4,-1,0]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,true]),cljs.core.map.call(null,cljs.core.even_QMARK_,cljs.core.Vector.fromArray([2,3,4,5,-2,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,true])),cljs.core.list("﷑'map","﷑'even?",(new cljs.core.Vector(null, [2,3,4,5,-2,0]))))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a")));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'z"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'z"))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),3))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),3))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,null,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",null,42))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,"f",0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?","f",0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,"f",55))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?","f",55))));
}
if(cljs.core.truth_(cljs.core.distinct_QMARK_.call(null,1,2,3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'distinct?",1,2,3)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.distinct_QMARK_.call(null,1,2,3,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'distinct?",1,2,3,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.List.EMPTY),cljs.core.List.EMPTY)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.List.EMPTY),cljs.core.List.EMPTY)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1)),cljs.core.list(1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1))),cljs.core.list("﷑'quote",cljs.core.list(1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1,2,3,1,1,1)),cljs.core.list(1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1,2,3,1,1,1))),cljs.core.list("﷑'quote",cljs.core.list(1,2,3)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,1,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,1,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,2,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,2,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"a"),cljs.core.Vector.fromArray(["a"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","a"),(new cljs.core.Vector(null, ["a"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"abcabab"),cljs.core.Vector.fromArray(["a","b","c"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","abcabab"),(new cljs.core.Vector(null, ["a","b","c"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["abc","abc"])),cljs.core.Vector.fromArray(["abc"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["abc","abc"]))),(new cljs.core.Vector(null, ["abc"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([null,null])),cljs.core.Vector.fromArray([null]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [null,null]))),(new cljs.core.Vector(null, [null])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([0.0,0.0])),cljs.core.Vector.fromArray([0.0]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [0.0,0.0]))),(new cljs.core.Vector(null, [0.0])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷑'sym","﷑'sym"])),(new cljs.core.Vector(null, ["﷑'sym"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote","﷑'sym"),cljs.core.list("﷑'quote","﷑'sym")]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, ["﷑'sym"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷐'kw","﷐'kw"])),cljs.core.Vector.fromArray(["﷐'kw"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["﷐'kw","﷐'kw"]))),(new cljs.core.Vector(null, ["﷐'kw"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([42,42])),cljs.core.Vector.fromArray([42]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [42,42]))),(new cljs.core.Vector(null, [42])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, []))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, []))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.list(1,2),cljs.core.list(1,2)])),(new cljs.core.Vector(null, [cljs.core.list(1,2)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote",cljs.core.list(1,2)),cljs.core.list("﷑'quote",cljs.core.list(1,2))]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, [cljs.core.list(1,2)]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.List.EMPTY,cljs.core.List.EMPTY])),cljs.core.Vector.fromArray([cljs.core.List.EMPTY]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.List.EMPTY,cljs.core.List.EMPTY]))),(new cljs.core.Vector(null, [cljs.core.List.EMPTY])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,2])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,2]))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))),(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{}),cljs.core.ObjMap.fromObject([],{})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map(),cljs.core.hash_map()]))),(new cljs.core.Vector(null, [cljs.core.hash_map()])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([1,2]),cljs.core.set([1,2])])),cljs.core.Vector.fromArray([cljs.core.set([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([1,2]),cljs.core.set([1,2])]))),(new cljs.core.Vector(null, [cljs.core.set([1,2])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([]),cljs.core.set([])])),cljs.core.Vector.fromArray([cljs.core.set([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([]),cljs.core.set([])]))),(new cljs.core.Vector(null, [cljs.core.set([])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3467__3468 = cljs.core.Vector.fromArray([1,2]);
var a__3469 = cljs.core.nth.call(null,vec__3467__3468,0,null);
var b__3470 = cljs.core.nth.call(null,vec__3467__3468,1,null);

return cljs.core.Vector.fromArray([b__3470,a__3469]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),(function (){var vec__3471__3472 = cljs.core.Vector.fromArray([1,2]);
var a__3473 = cljs.core.nth.call(null,vec__3471__3472,0,null);
var b__3474 = cljs.core.nth.call(null,vec__3471__3472,1,null);

return cljs.core.set([a__3473,b__3474]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.set(["﷑'a","﷑'b"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3475__3476 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3475__3477 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3475__3476))?cljs.core.apply.call(null,cljs.core.hash_map,map__3475__3476):map__3475__3476);
var a__3478 = cljs.core.get.call(null,map__3475__3477,"﷐'a");
var b__3479 = cljs.core.get.call(null,map__3475__3477,"﷐'b");

return cljs.core.Vector.fromArray([a__3478,b__3479]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷑'a","﷐'a","﷑'b","﷐'b"),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3480__3481 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3480__3482 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3480__3481))?cljs.core.apply.call(null,cljs.core.hash_map,map__3480__3481):map__3480__3481);
var b__3483 = cljs.core.get.call(null,map__3480__3482,"﷐'b");
var a__3484 = cljs.core.get.call(null,map__3480__3482,"﷐'a");

return cljs.core.Vector.fromArray([a__3484,b__3483]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,cljs.core.Vector.fromArray([1,2])]),(function (){var vec__3485__3486 = cljs.core.Vector.fromArray([1,2]);
var a__3487 = cljs.core.nth.call(null,vec__3485__3486,0,null);
var b__3488 = cljs.core.nth.call(null,vec__3485__3486,1,null);
var v__3489 = vec__3485__3486;

return cljs.core.Vector.fromArray([a__3487,b__3488,v__3489]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,(new cljs.core.Vector(null, [1,2]))])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷐'as","﷑'v"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷑'v"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,42]),(function (){var map__3490__3491 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3490__3492 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3490__3491))?cljs.core.apply.call(null,cljs.core.hash_map,map__3490__3491):map__3490__3491);
var b__3493 = cljs.core.get.call(null,map__3490__3492,"﷐'b",42);
var a__3494 = cljs.core.get.call(null,map__3490__3492,"﷐'a");

return cljs.core.Vector.fromArray([a__3494,b__3493]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,42])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'b",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,null]),(function (){var map__3495__3496 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3495__3497 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3495__3496))?cljs.core.apply.call(null,cljs.core.hash_map,map__3495__3496):map__3495__3496);
var b__3498 = cljs.core.get.call(null,map__3495__3497,"﷐'b");
var a__3499 = cljs.core.get.call(null,map__3495__3497,"﷐'a");

return cljs.core.Vector.fromArray([a__3499,b__3498]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,null])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'c",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3500__3501 = cljs.core.list(1,2);
var a__3502 = cljs.core.nth.call(null,vec__3500__3501,0,null);
var b__3503 = cljs.core.nth.call(null,vec__3500__3501,1,null);

return cljs.core.Vector.fromArray([b__3503,a__3502]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'quote",cljs.core.list(1,2))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),(function (){var vec__3504__3505 = cljs.core.Vector.fromArray([1,2]);
var a__3506 = cljs.core.nth.call(null,vec__3504__3505,0,null);
var b__3507 = cljs.core.nth.call(null,vec__3504__3505,1,null);

return cljs.core.HashMap.fromArrays([a__3506],[b__3507]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.hash_map("﷑'a","﷑'b")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3508__3509 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([1,2]));
var a__3510 = cljs.core.nth.call(null,vec__3508__3509,0,null);
var b__3511 = cljs.core.nth.call(null,vec__3508__3509,1,null);

return cljs.core.Vector.fromArray([b__3511,a__3510]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'seq",(new cljs.core.Vector(null, [1,2])))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1})})}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",1))),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":10}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),cljs.core._PLUS_,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",10),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),"﷑'+",7))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":3})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",3)])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":3})})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})})]),cljs.core.Vector.fromArray([1,"﷐'foo","﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",3))])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2))])),(new cljs.core.Vector(null, [1,"﷐'foo","﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})})}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",100))),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":100}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",100),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})])})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])})]),cljs.core.Vector.fromArray([1,"﷐'foo",1,"﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",100)])))])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)])))])),(new cljs.core.Vector(null, [1,"﷐'foo",1,"﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":100})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",100)])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.Vector.fromArray(["﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),(new cljs.core.Vector(null, ["﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":1}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":2})]),cljs.core.Vector.fromArray([0,"﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1),cljs.core.hash_map("﷐'foo",2)])),(new cljs.core.Vector(null, [0,"﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":2})])}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":3,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":4})])})]),cljs.core.Vector.fromArray([1,"﷐'bar",1,"﷐'buzz"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",1),cljs.core.hash_map("﷐'buzz",2)]))),cljs.core.hash_map("﷐'foo",3,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",3),cljs.core.hash_map("﷐'buzz",4)])))])),(new cljs.core.Vector(null, [1,"﷐'bar",1,"﷐'buzz"]))))));
}
var a__3512 = cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([10,20,30]),cljs.core.seq.call(null,(function (){var a__192__auto____3513 = a__3512;
var ret__3514 = cljs.core.aclone.call(null,a__192__auto____3513);

var i__3515 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3515,cljs.core.alength.call(null,a__192__auto____3513))))
{(ret__3514[i__3515] = cljs.core._STAR_.call(null,10,(a__3512[i__3515])));
{
var G__3533 = cljs.core.inc.call(null,i__3515);
i__3515 = G__3533;
continue;
}
} else
{return ret__3514;
}
break;
}
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [10,20,30])),cljs.core.list("﷑'seq",cljs.core.list("﷑'amap","﷑'a","﷑'i","﷑'ret",cljs.core.list("﷑'*",10,cljs.core.list("﷑'aget","﷑'a","﷑'i")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,(function (){var a__198__auto____3516 = a__3512;

var i__3517 = 0;
var ret__3518 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3517,cljs.core.alength.call(null,a__198__auto____3516))))
{{
var G__3534 = cljs.core.inc.call(null,i__3517);
var G__3535 = cljs.core._PLUS_.call(null,ret__3518,(a__3512[i__3517]));
i__3517 = G__3534;
ret__3518 = G__3535;
continue;
}
} else
{return ret__3518;
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'areduce","﷑'a","﷑'i","﷑'ret",0,cljs.core.list("﷑'+","﷑'ret",cljs.core.list("﷑'aget","﷑'a","﷑'i"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.seq.call(null,a__3512),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,(a__3512[0] = 42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'aset","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,cljs.core.seq.call(null,a__3512),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,a__3512,cljs.core.aclone.call(null,a__3512))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'a",cljs.core.list("﷑'aclone","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core._LT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort","﷑'<",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([5,4,3,2,1]),cljs.core.sort.call(null,cljs.core._GT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [5,4,3,2,1])),cljs.core.list("﷑'sort","﷑'>",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["a",cljs.core.Vector.fromArray([1,2]),"foo"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["a",(new cljs.core.Vector(null, [1,2])),"foo"])),cljs.core.list("﷑'sort-by","﷑'count",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["foo",cljs.core.Vector.fromArray([1,2]),"a"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["foo",(new cljs.core.Vector(null, [1,2])),"a"])),cljs.core.list("﷑'sort-by","﷑'count","﷑'>",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["a","b"],{"a":1,"b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("a",1,"b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2},"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,[[{"a":1,"b":2}, {"a":1,"b":2}]],"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","[[{\"a\":1,\"b\":2}, {\"a\":1,\"b\":2}]]"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,null,cljs.core.last.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",null,cljs.core.list("﷑'last",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.last.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'last",(new cljs.core.Vector(null, [1,2,3]))))));
}
var s__3519 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));

var n__204__auto____3520 = 5;

var n__3521 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,n__3521,n__204__auto____3520)))
{cljs.core.swap_BANG_.call(null,s__3519,cljs.core.conj,n__3521);
{
var G__3536 = cljs.core.inc.call(null,n__3521);
n__3521 = G__3536;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]),cljs.core.deref.call(null,s__3519))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,1,2,3,4])),cljs.core.list("﷑'clojure.core/deref","﷑'s"))));
}
var v__3522 = cljs.core.Vector.fromArray([1,2,3,4,5]);
var s__3523 = cljs.core.atom.call(null,cljs.core.List.EMPTY);

var G__3524__3525 = cljs.core.seq.call(null,v__3522);

while(true){
if(cljs.core.truth_(G__3524__3525))
{var n__3526 = cljs.core.first.call(null,G__3524__3525);

cljs.core.swap_BANG_.call(null,s__3523,cljs.core.conj,n__3526);
{
var G__3537 = cljs.core.next.call(null,G__3524__3525);
G__3524__3525 = G__3537;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,s__3523),cljs.core.reverse.call(null,v__3522))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'clojure.core/deref","﷑'s"),cljs.core.list("﷑'reverse","﷑'v"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2,3,4))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([42,2]),cljs.core.assoc.call(null,cljs.core.Vector.fromArray([1,2]),0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [42,2])),cljs.core.list("﷑'assoc",(new cljs.core.Vector(null, [1,2])),0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),1,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),1,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.disj.call(null,cljs.core.set([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),2,3))));
}
var f__3527 = cljs.core.memoize.call(null,(function (){
return cljs.core.rand.call(null);
}));

f__3527.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,f__3527.call(null),f__3527.call(null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'f"),cljs.core.list("﷑'f"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'a"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),"﷐'a"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'b"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'b"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'b"),cljs.core.Vector.fromArray(["﷐'b",2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"),(new cljs.core.Vector(null, ["﷐'b",2])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'c"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'c"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.Vector.fromArray([1,2,3]),0),cljs.core.Vector.fromArray([0,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",(new cljs.core.Vector(null, [1,2,3])),0),(new cljs.core.Vector(null, [0,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,4,2),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",4,2),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,6,4),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",6,4),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,-5),-8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,-5),-8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-42,-5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-42,-5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,3),3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,3),3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,-3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,-3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-9,3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-9,3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,2,-5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",2,-5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-2,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-2,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,6,4),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",6,4),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3216478362187432,432143214),120355456)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3216478362187432,432143214),120355456)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,-5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,-5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,3),0)));
}
var d__3528 = cljs.core.group_by.call(null,cljs.core.second,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b","﷐'c","﷐'d","﷐'e","﷐'f"],{"﷐'a":1,"﷐'b":2,"﷐'c":1,"﷐'d":4,"﷐'e":1,"﷐'f":2}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,cljs.core.get.call(null,d__3528,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,cljs.core.get.call(null,d__3528,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,cljs.core.get.call(null,d__3528,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3,5],[2,4,6]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),cljs.core.HashMap.fromArrays([5],[6])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4,5,6),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),cljs.core.hash_map(5,6)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":3,"﷐'b":2}),cljs.core.frequencies.call(null,cljs.core.Vector.fromArray(["﷐'a","﷐'b","﷐'a","﷐'b","﷐'a"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",3,"﷐'b",2),cljs.core.list("﷑'frequencies",(new cljs.core.Vector(null, ["﷐'a","﷐'b","﷐'a","﷐'b","﷐'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,3,6,10,15]),cljs.core.reductions.call(null,cljs.core._PLUS_,cljs.core.Vector.fromArray([1,2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,3,6,10,15])),cljs.core.list("﷑'reductions","﷑'+",(new cljs.core.Vector(null, [1,2,3,4,5]))))));
}
return "﷐'ok";
});
