goog.provide('apogee.xml');
goog.require('cljs.core');
goog.require('clojure.zip');
apogee.xml.has_attrs_QMARK_ = (function has_attrs_QMARK_(tag){
return cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,tag));
});
goog.exportSymbol('apogee.xml.has_attrs_QMARK_', apogee.xml.has_attrs_QMARK_);
apogee.xml.has_content_QMARK_ = (function has_content_QMARK_(tag){
if(cljs.core.truth_(apogee.xml.has_attrs_QMARK_.call(null,tag)))
{return cljs.core._GT_.call(null,cljs.core.count.call(null,tag),2);
} else
{return cljs.core._GT_.call(null,cljs.core.count.call(null,tag),1);
}
});
goog.exportSymbol('apogee.xml.has_content_QMARK_', apogee.xml.has_content_QMARK_);
apogee.xml.get_name = (function get_name(tag){
var temp__3723__auto____2177 = cljs.core.first.call(null,tag);

if(cljs.core.truth_(temp__3723__auto____2177))
{var n__2178 = temp__3723__auto____2177;

return cljs.core.name.call(null,n__2178);
} else
{return null;
}
});
goog.exportSymbol('apogee.xml.get_name', apogee.xml.get_name);
apogee.xml.get_attrs = (function get_attrs(tag){
if(cljs.core.truth_(apogee.xml.has_attrs_QMARK_.call(null,tag)))
{return cljs.core.second.call(null,tag);
} else
{return cljs.core.ObjMap.fromObject([],{});
}
});
goog.exportSymbol('apogee.xml.get_attrs', apogee.xml.get_attrs);
apogee.xml.get_content = (function get_content(tag){
if(cljs.core.truth_(apogee.xml.has_attrs_QMARK_.call(null,tag)))
{return cljs.core.drop.call(null,2,tag);
} else
{return cljs.core.rest.call(null,tag);
}
});
goog.exportSymbol('apogee.xml.get_content', apogee.xml.get_content);
apogee.xml.set_attrs = (function set_attrs(tag,attrs){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([apogee.xml.get_name.call(null,tag),attrs]),apogee.xml.get_content.call(null,tag));
});
goog.exportSymbol('apogee.xml.set_attrs', apogee.xml.set_attrs);
/**
* @param {...*} var_args
*/
apogee.xml.set_content = (function set_content(tag,var_args){
var content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([apogee.xml.get_name.call(null,tag),apogee.xml.get_attrs.call(null,tag)]),content);
});
goog.exportSymbol('apogee.xml.set_content', apogee.xml.set_content);
/**
* @param {...*} var_args
*/
apogee.xml.add_attrs = (function add_attrs(tag,var_args){
var attrs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([apogee.xml.get_name.call(null,tag),cljs.core.apply.call(null,cljs.core.assoc,apogee.xml.get_attrs.call(null,tag),attrs)]),apogee.xml.get_content.call(null,tag));
});
goog.exportSymbol('apogee.xml.add_attrs', apogee.xml.add_attrs);
apogee.xml.merge_attrs = (function merge_attrs(tag,attrs){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([apogee.xml.get_name.call(null,tag),cljs.core.merge.call(null,apogee.xml.get_attrs.call(null,tag),attrs)]),apogee.xml.get_content.call(null,tag));
});
goog.exportSymbol('apogee.xml.merge_attrs', apogee.xml.merge_attrs);
/**
* @param {...*} var_args
*/
apogee.xml.add_content = (function add_content(tag,var_args){
var content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([apogee.xml.get_name.call(null,tag),apogee.xml.get_attrs.call(null,tag)]),cljs.core.concat.call(null,apogee.xml.get_content.call(null,tag),content));
});
goog.exportSymbol('apogee.xml.add_content', apogee.xml.add_content);
/**
* @param {...*} var_args
*/
apogee.xml.update_attrs = (function update_attrs(tag,p__2179,update_fn,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var vec__2180__2181 = p__2179;
var keys__2182 = cljs.core.nthnext.call(null,vec__2180__2181,0);

return apogee.xml.set_attrs.call(null,tag,cljs.core.apply.call(null,cljs.core.update_in,apogee.xml.get_attrs.call(null,tag),keys__2182,update_fn,args));
});
goog.exportSymbol('apogee.xml.update_attrs', apogee.xml.update_attrs);
apogee.xml.emit_attrs = (function emit_attrs(attrs){
if(cljs.core.truth_(attrs))
{return cljs.core.reduce.call(null,(function (s,p__2184){
var vec__2185__2186 = p__2184;
var k__2187 = cljs.core.nth.call(null,vec__2185__2186,0,null);
var v__2188 = cljs.core.nth.call(null,vec__2185__2186,1,null);

return cljs.core.str.call(null,s,cljs.core.name.call(null,k__2187),"=\"",(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__2188))?cljs.core.name.call(null,v__2188):v__2188),"\" ");
}),"",attrs);
} else
{return null;
}
});
goog.exportSymbol('apogee.xml.emit_attrs', apogee.xml.emit_attrs);
apogee.xml.emit_tag = (function emit_tag(tag){
var temp__3723__auto____2191 = apogee.xml.get_name.call(null,tag);

if(cljs.core.truth_(temp__3723__auto____2191))
{var n__2192 = temp__3723__auto____2191;

return cljs.core.str.call(null,"<",n__2192," ",apogee.xml.emit_attrs.call(null,apogee.xml.get_attrs.call(null,tag)),(cljs.core.truth_(cljs.core.seq.call(null,apogee.xml.get_content.call(null,tag)))?cljs.core.str.call(null,">",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__2183_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2183_SHARP_)))
{return p1__2183_SHARP_;
} else
{return emit_tag.call(null,p1__2183_SHARP_);
}
}),apogee.xml.get_content.call(null,tag))),"</",n__2192,">"):"/>"));
} else
{return null;
}
});
goog.exportSymbol('apogee.xml.emit_tag', apogee.xml.emit_tag);
/**
* @param {...*} var_args
*/
apogee.xml.emit = (function emit(var_args){
var tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.str.call(null,cljs.core.reduce.call(null,(function (p1__2189_SHARP_,p2__2190_SHARP_){
return cljs.core.str.call(null,p1__2189_SHARP_,apogee.xml.emit_tag.call(null,p2__2190_SHARP_));
}),"",tags));
});
goog.exportSymbol('apogee.xml.emit', apogee.xml.emit);
apogee.xml.parse_xml_map = (function parse_xml_map(xml_map){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,xml_map)))
{var map__2197__2198 = xml_map;
var map__2197__2199 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2197__2198))?cljs.core.apply.call(null,cljs.core.hash_map,map__2197__2198):map__2197__2198);
var content__2200 = cljs.core.get.call(null,map__2197__2199,"﷐'content");
var attrs__2201 = cljs.core.get.call(null,map__2197__2199,"﷐'attrs");
var tag__2202 = cljs.core.get.call(null,map__2197__2199,"﷐'tag");

return cljs.core.concat.call(null,(cljs.core.truth_(attrs__2201)?cljs.core.Vector.fromArray([tag__2202,attrs__2201]):cljs.core.Vector.fromArray([tag__2202])),cljs.core.map.call(null,parse_xml_map,content__2200));
} else
{return xml_map;
}
});
goog.exportSymbol('apogee.xml.parse_xml_map', apogee.xml.parse_xml_map);
/**
* Provides selector functionality used by filter-xml and transform-xml.
* 
* Examples of selectors:
* :tag-name
* {attr-name val}
* [:and :tag-name {:attr val}]
* [:or :tag1 :tag2]
* [:and [:not {attr val}] [:or :tag1 :tag2]]
* 
* 
*/
apogee.xml.select_loc_QMARK_ = (function select_loc_QMARK_(loc,selector){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var node__2203 = clojure.zip.node.call(null,loc);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,selector)))
{var and__3574__auto____2204 = apogee.xml.has_attrs_QMARK_.call(null,node__2203);

if(cljs.core.truth_(and__3574__auto____2204))
{return cljs.core._EQ_.call(null,cljs.core.select_keys.call(null,apogee.xml.get_attrs.call(null,node__2203),cljs.core.keys.call(null,selector)),selector);
} else
{return and__3574__auto____2204;
}
} else
{if(cljs.core.truth_((function (){var or__3576__auto____2205 = cljs.core.string_QMARK_.call(null,selector);

if(cljs.core.truth_(or__3576__auto____2205))
{return or__3576__auto____2205;
} else
{return cljs.core.keyword_QMARK_.call(null,selector);
}
})()))
{return cljs.core._EQ_.call(null,apogee.xml.get_name.call(null,node__2203),cljs.core.name.call(null,selector));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,selector)))
{var pred__2206__2209 = cljs.core._EQ_;
var expr__2207__2210 = cljs.core.first.call(null,selector);

if(cljs.core.truth_(pred__2206__2209.call(null,"﷐'and",expr__2207__2210)))
{return cljs.core.reduce.call(null,(function (p1__2193_SHARP_,p2__2194_SHARP_){
var and__3574__auto____2211 = p1__2193_SHARP_;

if(cljs.core.truth_(and__3574__auto____2211))
{return select_loc_QMARK_.call(null,loc,p2__2194_SHARP_);
} else
{return and__3574__auto____2211;
}
}),true,cljs.core.next.call(null,selector));
} else
{if(cljs.core.truth_(pred__2206__2209.call(null,"﷐'or",expr__2207__2210)))
{return cljs.core.reduce.call(null,(function (p1__2195_SHARP_,p2__2196_SHARP_){
var or__3576__auto____2212 = p1__2195_SHARP_;

if(cljs.core.truth_(or__3576__auto____2212))
{return or__3576__auto____2212;
} else
{return select_loc_QMARK_.call(null,loc,p2__2196_SHARP_);
}
}),false,cljs.core.next.call(null,selector));
} else
{if(cljs.core.truth_(pred__2206__2209.call(null,"﷐'not",expr__2207__2210)))
{return cljs.core.not.call(null,select_loc_QMARK_.call(null,loc,cljs.core.Vector.fromArray(["﷐'or",cljs.core.second.call(null,selector)])));
} else
{throw (new java.lang.IllegalArgumentException(cljs.core.str.call(null,"No matching clause: ",expr__2207__2210)));
}
}
}
} else
{return null;
}
}
}
} else
{return null;
}
});
goog.exportSymbol('apogee.xml.select_loc_QMARK_', apogee.xml.select_loc_QMARK_);
apogee.xml.filter_xml = (function filter_xml(xml_seq,p__2213){
var vec__2214__2215 = p__2213;
var selectors__2216 = cljs.core.nthnext.call(null,vec__2214__2215,0);

var filter_xml_STAR___2224 = (function filter_xml_STAR_(zip_loc,p__2217){
var vec__2218__2219 = p__2217;
var selector__2220 = cljs.core.nth.call(null,vec__2218__2219,0,null);
var child_selectors__2221 = cljs.core.nthnext.call(null,vec__2218__2219,1);

var nodes__2222 = cljs.core.Vector.fromArray([]);
var loc__2223 = zip_loc;

while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc__2223)))
{return nodes__2222;
} else
{{
var G__2225 = (cljs.core.truth_(apogee.xml.select_loc_QMARK_.call(null,loc__2223,selector__2220))?(cljs.core.truth_(cljs.core.seq.call(null,child_selectors__2221))?filter_xml_STAR_.call(null,loc__2223,child_selectors__2221):cljs.core.conj.call(null,nodes__2222,clojure.zip.node.call(null,loc__2223))):nodes__2222);
var G__2226 = clojure.zip.next.call(null,loc__2223);
nodes__2222 = G__2225;
loc__2223 = G__2226;
continue;
}
}
break;
}
});

return filter_xml_STAR___2224.call(null,clojure.zip.seq_zip.call(null,xml_seq),selectors__2216);
});
goog.exportSymbol('apogee.xml.filter_xml', apogee.xml.filter_xml);
/**
* @param {...*} var_args
*/
apogee.xml.transform_xml = (function transform_xml(xml_seq,p__2227,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var vec__2228__2229 = p__2227;
var selectors__2230 = cljs.core.nthnext.call(null,vec__2228__2229,0);

var transform_xml_STAR___2237 = (function transform_xml_STAR_(zip_loc,p__2231,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var vec__2232__2233 = p__2231;
var selector__2234 = cljs.core.nth.call(null,vec__2232__2233,0,null);
var child_selectors__2235 = cljs.core.nthnext.call(null,vec__2232__2233,1);

var loc__2236 = zip_loc;

while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc__2236)))
{return loc__2236;
} else
{{
var G__2238 = clojure.zip.next.call(null,(cljs.core.truth_(apogee.xml.select_loc_QMARK_.call(null,loc__2236,selector__2234))?(cljs.core.truth_(cljs.core.seq.call(null,child_selectors__2235))?cljs.core.apply.call(null,transform_xml_STAR_,loc__2236,child_selectors__2235,f,args):cljs.core.apply.call(null,clojure.zip.edit,loc__2236,f,args)):loc__2236));
loc__2236 = G__2238;
continue;
}
}
break;
}
});

return clojure.zip.root.call(null,cljs.core.apply.call(null,transform_xml_STAR___2237,clojure.zip.seq_zip.call(null,xml_seq),selectors__2230,f,args));
});
goog.exportSymbol('apogee.xml.transform_xml', apogee.xml.transform_xml);
