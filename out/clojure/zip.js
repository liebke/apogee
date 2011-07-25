goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(cljs.core.Vector.fromArray([root,null]),cljs.core.ObjMap.fromObject(["﷐'zip/make-node","﷐'zip/children","﷐'zip/branch?"],{"﷐'zip/make-node":make_node,"﷐'zip/children":children,"﷐'zip/branch?":branch_QMARK_}));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){
return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){
return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){
return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,"﷐'content"),(function (node,children){
return cljs.core.assoc.call(null,node,"﷐'content",(function (){var and__3574__auto____3538 = children;

if(cljs.core.truth_(and__3574__auto____3538))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3574__auto____3538;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){
return loc.call(null,0);
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){
return "﷐'zip/branch?".call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return "﷐'zip/children".call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){
return "﷐'zip/make-node".call(null,cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){
return "﷐'pnodes".call(null,loc.call(null,1));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){
return cljs.core.seq.call(null,"﷐'l".call(null,loc.call(null,1)));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){
return "﷐'r".call(null,loc.call(null,1));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__3539__3541 = loc;
var node__3542 = cljs.core.nth.call(null,vec__3539__3541,0,null);
var path__3543 = cljs.core.nth.call(null,vec__3539__3541,1,null);
var vec__3540__3544 = clojure.zip.children.call(null,loc);
var c__3545 = cljs.core.nth.call(null,vec__3540__3544,0,null);
var cnext__3546 = cljs.core.nthnext.call(null,vec__3540__3544,1);
var cs__3547 = vec__3540__3544;

if(cljs.core.truth_(cs__3547))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([c__3545,cljs.core.ObjMap.fromObject(["﷐'l","﷐'pnodes","﷐'ppath","﷐'r"],{"﷐'l":cljs.core.Vector.fromArray([]),"﷐'pnodes":(cljs.core.truth_(path__3543)?cljs.core.conj.call(null,"﷐'pnodes".call(null,path__3543),node__3542):cljs.core.Vector.fromArray([node__3542])),"﷐'ppath":path__3543,"﷐'r":cnext__3546})]),cljs.core.meta.call(null,loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){
var vec__3548__3549 = loc;
var node__3550 = cljs.core.nth.call(null,vec__3548__3549,0,null);
var path__3551 = cljs.core.nth.call(null,vec__3548__3549,1,null);
var path__3552 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3551))?cljs.core.apply.call(null,cljs.core.hash_map,path__3551):path__3551);
var l__3553 = cljs.core.get.call(null,path__3552,"﷐'l");
var ppath__3554 = cljs.core.get.call(null,path__3552,"﷐'ppath");
var pnodes__3555 = cljs.core.get.call(null,path__3552,"﷐'pnodes");
var r__3556 = cljs.core.get.call(null,path__3552,"﷐'r");
var changed_QMARK___3557 = cljs.core.get.call(null,path__3552,"﷐'changed?");

if(cljs.core.truth_(pnodes__3555))
{var pnode__3558 = cljs.core.peek.call(null,pnodes__3555);

return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK___3557)?cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,pnode__3558,cljs.core.concat.call(null,l__3553,cljs.core.cons.call(null,node__3550,r__3556))),(function (){var and__3574__auto____3559 = ppath__3554;

if(cljs.core.truth_(and__3574__auto____3559))
{return cljs.core.assoc.call(null,ppath__3554,"﷐'changed?",true);
} else
{return and__3574__auto____3559;
}
})()]):cljs.core.Vector.fromArray([pnode__3558,ppath__3554])),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){
while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1))))
{return clojure.zip.node.call(null,loc);
} else
{var p__3560 = clojure.zip.up.call(null,loc);

if(cljs.core.truth_(p__3560))
{{
var G__3561 = p__3560;
loc = G__3561;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){
var vec__3562__3564 = loc;
var node__3565 = cljs.core.nth.call(null,vec__3562__3564,0,null);
var path__3566 = cljs.core.nth.call(null,vec__3562__3564,1,null);
var path__3567 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3566))?cljs.core.apply.call(null,cljs.core.hash_map,path__3566):path__3566);
var l__3568 = cljs.core.get.call(null,path__3567,"﷐'l");
var vec__3563__3569 = cljs.core.get.call(null,path__3567,"﷐'r");
var r__3570 = cljs.core.nth.call(null,vec__3563__3569,0,null);
var rnext__3571 = cljs.core.nthnext.call(null,vec__3563__3569,1);
var rs__3572 = vec__3563__3569;

if(cljs.core.truth_((function (){var and__3574__auto____3573 = path__3567;

if(cljs.core.truth_(and__3574__auto____3573))
{return rs__3572;
} else
{return and__3574__auto____3573;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([r__3570,cljs.core.assoc.call(null,path__3567,"﷐'l",cljs.core.conj.call(null,l__3568,node__3565),"﷐'r",rnext__3571)]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){
var vec__3574__3575 = loc;
var node__3576 = cljs.core.nth.call(null,vec__3574__3575,0,null);
var path__3577 = cljs.core.nth.call(null,vec__3574__3575,1,null);
var path__3578 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3577))?cljs.core.apply.call(null,cljs.core.hash_map,path__3577):path__3577);
var l__3579 = cljs.core.get.call(null,path__3578,"﷐'l");
var r__3580 = cljs.core.get.call(null,path__3578,"﷐'r");

if(cljs.core.truth_((function (){var and__3574__auto____3581 = path__3578;

if(cljs.core.truth_(and__3574__auto____3581))
{return r__3580;
} else
{return and__3574__auto____3581;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.last.call(null,r__3580),cljs.core.assoc.call(null,path__3578,"﷐'l",cljs.core.apply.call(null,cljs.core.conj,l__3579,node__3576,cljs.core.butlast.call(null,r__3580)),"﷐'r",null)]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){
var vec__3582__3583 = loc;
var node__3584 = cljs.core.nth.call(null,vec__3582__3583,0,null);
var path__3585 = cljs.core.nth.call(null,vec__3582__3583,1,null);
var path__3586 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3585))?cljs.core.apply.call(null,cljs.core.hash_map,path__3585):path__3585);
var l__3587 = cljs.core.get.call(null,path__3586,"﷐'l");
var r__3588 = cljs.core.get.call(null,path__3586,"﷐'r");

if(cljs.core.truth_((function (){var and__3574__auto____3589 = path__3586;

if(cljs.core.truth_(and__3574__auto____3589))
{return cljs.core.seq.call(null,l__3587);
} else
{return and__3574__auto____3589;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__3587),cljs.core.assoc.call(null,path__3586,"﷐'l",cljs.core.pop.call(null,l__3587),"﷐'r",cljs.core.cons.call(null,node__3584,r__3588))]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){
var vec__3590__3591 = loc;
var node__3592 = cljs.core.nth.call(null,vec__3590__3591,0,null);
var path__3593 = cljs.core.nth.call(null,vec__3590__3591,1,null);
var path__3594 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3593))?cljs.core.apply.call(null,cljs.core.hash_map,path__3593):path__3593);
var l__3595 = cljs.core.get.call(null,path__3594,"﷐'l");
var r__3596 = cljs.core.get.call(null,path__3594,"﷐'r");

if(cljs.core.truth_((function (){var and__3574__auto____3597 = path__3594;

if(cljs.core.truth_(and__3574__auto____3597))
{return cljs.core.seq.call(null,l__3595);
} else
{return and__3574__auto____3597;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.first.call(null,l__3595),cljs.core.assoc.call(null,path__3594,"﷐'l",cljs.core.Vector.fromArray([]),"﷐'r",cljs.core.concat.call(null,cljs.core.rest.call(null,l__3595),cljs.core.Vector.fromArray([node__3592]),r__3596))]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){
var vec__3598__3599 = loc;
var node__3600 = cljs.core.nth.call(null,vec__3598__3599,0,null);
var path__3601 = cljs.core.nth.call(null,vec__3598__3599,1,null);
var path__3602 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3601))?cljs.core.apply.call(null,cljs.core.hash_map,path__3601):path__3601);
var l__3603 = cljs.core.get.call(null,path__3602,"﷐'l");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__3602)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__3600,cljs.core.assoc.call(null,path__3602,"﷐'l",cljs.core.conj.call(null,l__3603,item),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){
var vec__3604__3605 = loc;
var node__3606 = cljs.core.nth.call(null,vec__3604__3605,0,null);
var path__3607 = cljs.core.nth.call(null,vec__3604__3605,1,null);
var path__3608 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3607))?cljs.core.apply.call(null,cljs.core.hash_map,path__3607):path__3607);
var r__3609 = cljs.core.get.call(null,path__3608,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__3608)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__3606,cljs.core.assoc.call(null,path__3608,"﷐'r",cljs.core.cons.call(null,item,r__3609),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){
var vec__3610__3611 = loc;
var ___3612 = cljs.core.nth.call(null,vec__3610__3611,0,null);
var path__3613 = cljs.core.nth.call(null,vec__3610__3611,1,null);

return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node,cljs.core.assoc.call(null,path__3613,"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function edit(loc,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
});
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),cljs.core.Vector.fromArray([item]))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1))))
{return loc;
} else
{var or__3576__auto____3615 = (function (){var and__3574__auto____3614 = clojure.zip.branch_QMARK_.call(null,loc);

if(cljs.core.truth_(and__3574__auto____3614))
{return clojure.zip.down.call(null,loc);
} else
{return and__3574__auto____3614;
}
})();

if(cljs.core.truth_(or__3576__auto____3615))
{return or__3576__auto____3615;
} else
{var or__3576__auto____3616 = clojure.zip.right.call(null,loc);

if(cljs.core.truth_(or__3576__auto____3616))
{return or__3576__auto____3616;
} else
{var p__3617 = loc;

while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p__3617)))
{var or__3576__auto____3618 = clojure.zip.right.call(null,clojure.zip.up.call(null,p__3617));

if(cljs.core.truth_(or__3576__auto____3618))
{return or__3576__auto____3618;
} else
{{
var G__3619 = clojure.zip.up.call(null,p__3617);
p__3617 = G__3619;
continue;
}
}
} else
{return cljs.core.Vector.fromArray([clojure.zip.node.call(null,p__3617),"﷐'end"]);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){
var temp__3723__auto____3620 = clojure.zip.left.call(null,loc);

if(cljs.core.truth_(temp__3723__auto____3620))
{var lloc__3621 = temp__3723__auto____3620;

var loc__3622 = lloc__3621;

while(true){
var temp__3723__auto____3624 = (function (){var and__3574__auto____3623 = clojure.zip.branch_QMARK_.call(null,loc__3622);

if(cljs.core.truth_(and__3574__auto____3623))
{return clojure.zip.down.call(null,loc__3622);
} else
{return and__3574__auto____3623;
}
})();

if(cljs.core.truth_(temp__3723__auto____3624))
{var child__3625 = temp__3723__auto____3624;

{
var G__3626 = clojure.zip.rightmost.call(null,child__3625);
loc__3622 = G__3626;
continue;
}
} else
{return loc__3622;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){
return cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){
var vec__3627__3628 = loc;
var node__3629 = cljs.core.nth.call(null,vec__3627__3628,0,null);
var path__3630 = cljs.core.nth.call(null,vec__3627__3628,1,null);
var path__3631 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3630))?cljs.core.apply.call(null,cljs.core.hash_map,path__3630):path__3630);
var l__3632 = cljs.core.get.call(null,path__3631,"﷐'l");
var ppath__3633 = cljs.core.get.call(null,path__3631,"﷐'ppath");
var pnodes__3634 = cljs.core.get.call(null,path__3631,"﷐'pnodes");
var rs__3635 = cljs.core.get.call(null,path__3631,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__3631)))
{throw "Remove at top";
} else
{if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,l__3632))))
{var loc__3636 = cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__3632),cljs.core.assoc.call(null,path__3631,"﷐'l",cljs.core.pop.call(null,l__3632),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));

while(true){
var temp__3723__auto____3638 = (function (){var and__3574__auto____3637 = clojure.zip.branch_QMARK_.call(null,loc__3636);

if(cljs.core.truth_(and__3574__auto____3637))
{return clojure.zip.down.call(null,loc__3636);
} else
{return and__3574__auto____3637;
}
})();

if(cljs.core.truth_(temp__3723__auto____3638))
{var child__3639 = temp__3723__auto____3638;

{
var G__3641 = clojure.zip.rightmost.call(null,child__3639);
loc__3636 = G__3641;
continue;
}
} else
{return loc__3636;
}
break;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes__3634),rs__3635),(function (){var and__3574__auto____3640 = ppath__3633;

if(cljs.core.truth_(and__3574__auto____3640))
{return cljs.core.assoc.call(null,ppath__3633,"﷐'changed?",true);
} else
{return and__3574__auto____3640;
}
})()]),cljs.core.meta.call(null,loc));
}
}
});
