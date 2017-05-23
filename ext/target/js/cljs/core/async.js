// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9058 = (function (f,fn_handler,meta9059){
this.f = f;
this.fn_handler = fn_handler;
this.meta9059 = meta9059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9058.cljs$lang$type = true;
cljs.core.async.t9058.cljs$lang$ctorStr = "cljs.core.async/t9058";
cljs.core.async.t9058.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9058");
});
cljs.core.async.t9058.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9060){var self__ = this;
var _9060__$1 = this;return self__.meta9059;
});
cljs.core.async.t9058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9060,meta9059__$1){var self__ = this;
var _9060__$1 = this;return (new cljs.core.async.t9058(self__.f,self__.fn_handler,meta9059__$1));
});
cljs.core.async.__GT_t9058 = (function __GT_t9058(f__$1,fn_handler__$1,meta9059){return (new cljs.core.async.t9058(f__$1,fn_handler__$1,meta9059));
});
}
return (new cljs.core.async.t9058(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9061 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9061);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9061);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3391__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___9062 = n;var x_9063 = 0;while(true){
if((x_9063 < n__4251__auto___9062))
{(a[x_9063] = 0);
{
var G__9064 = (x_9063 + 1);
x_9063 = G__9064;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9065 = (i + 1);
i = G__9065;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9069 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9069 = (function (flag,alt_flag,meta9070){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9070 = meta9070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9069.cljs$lang$type = true;
cljs.core.async.t9069.cljs$lang$ctorStr = "cljs.core.async/t9069";
cljs.core.async.t9069.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9069");
});
cljs.core.async.t9069.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9071){var self__ = this;
var _9071__$1 = this;return self__.meta9070;
});
cljs.core.async.t9069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9071,meta9070__$1){var self__ = this;
var _9071__$1 = this;return (new cljs.core.async.t9069(self__.flag,self__.alt_flag,meta9070__$1));
});
cljs.core.async.__GT_t9069 = (function __GT_t9069(flag__$1,alt_flag__$1,meta9070){return (new cljs.core.async.t9069(flag__$1,alt_flag__$1,meta9070));
});
}
return (new cljs.core.async.t9069(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9075 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9075 = (function (cb,flag,alt_handler,meta9076){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9076 = meta9076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9075.cljs$lang$type = true;
cljs.core.async.t9075.cljs$lang$ctorStr = "cljs.core.async/t9075";
cljs.core.async.t9075.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9075");
});
cljs.core.async.t9075.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9077){var self__ = this;
var _9077__$1 = this;return self__.meta9076;
});
cljs.core.async.t9075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9077,meta9076__$1){var self__ = this;
var _9077__$1 = this;return (new cljs.core.async.t9075(self__.cb,self__.flag,self__.alt_handler,meta9076__$1));
});
cljs.core.async.__GT_t9075 = (function __GT_t9075(cb__$1,flag__$1,alt_handler__$1,meta9076){return (new cljs.core.async.t9075(cb__$1,flag__$1,alt_handler__$1,meta9076));
});
}
return (new cljs.core.async.t9075(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9078_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9078_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9079 = (i + 1);
i = G__9079;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3403__auto__ = ret;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9080){var map__9082 = p__9080;var map__9082__$1 = ((cljs.core.seq_QMARK_.call(null,map__9082))?cljs.core.apply.call(null,cljs.core.hash_map,map__9082):map__9082);var opts = map__9082__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9080 = null;if (arguments.length > 1) {
  p__9080 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9080);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9083){
var ports = cljs.core.first(arglist__9083);
var p__9080 = cljs.core.rest(arglist__9083);
return alts_BANG___delegate(ports,p__9080);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9091 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9091 = (function (ch,f,map_LT_,meta9092){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9092 = meta9092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9091.cljs$lang$type = true;
cljs.core.async.t9091.cljs$lang$ctorStr = "cljs.core.async/t9091";
cljs.core.async.t9091.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9091");
});
cljs.core.async.t9091.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9091.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9094 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9094 = (function (fn1,_,meta9092,ch,f,map_LT_,meta9095){
this.fn1 = fn1;
this._ = _;
this.meta9092 = meta9092;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9095 = meta9095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9094.cljs$lang$type = true;
cljs.core.async.t9094.cljs$lang$ctorStr = "cljs.core.async/t9094";
cljs.core.async.t9094.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9094");
});
cljs.core.async.t9094.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9094.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9084_SHARP_){return f1.call(null,(((p1__9084_SHARP_ == null))?null:self__.f.call(null,p1__9084_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9096){var self__ = this;
var _9096__$1 = this;return self__.meta9095;
});
cljs.core.async.t9094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9096,meta9095__$1){var self__ = this;
var _9096__$1 = this;return (new cljs.core.async.t9094(self__.fn1,self__._,self__.meta9092,self__.ch,self__.f,self__.map_LT_,meta9095__$1));
});
cljs.core.async.__GT_t9094 = (function __GT_t9094(fn1__$1,___$2,meta9092__$1,ch__$2,f__$2,map_LT___$2,meta9095){return (new cljs.core.async.t9094(fn1__$1,___$2,meta9092__$1,ch__$2,f__$2,map_LT___$2,meta9095));
});
}
return (new cljs.core.async.t9094(fn1,___$1,self__.meta9092,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9091.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9093){var self__ = this;
var _9093__$1 = this;return self__.meta9092;
});
cljs.core.async.t9091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9093,meta9092__$1){var self__ = this;
var _9093__$1 = this;return (new cljs.core.async.t9091(self__.ch,self__.f,self__.map_LT_,meta9092__$1));
});
cljs.core.async.__GT_t9091 = (function __GT_t9091(ch__$1,f__$1,map_LT___$1,meta9092){return (new cljs.core.async.t9091(ch__$1,f__$1,map_LT___$1,meta9092));
});
}
return (new cljs.core.async.t9091(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9100 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9100 = (function (ch,f,map_GT_,meta9101){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9101 = meta9101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9100.cljs$lang$type = true;
cljs.core.async.t9100.cljs$lang$ctorStr = "cljs.core.async/t9100";
cljs.core.async.t9100.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9100");
});
cljs.core.async.t9100.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9100.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9100.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9102){var self__ = this;
var _9102__$1 = this;return self__.meta9101;
});
cljs.core.async.t9100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9102,meta9101__$1){var self__ = this;
var _9102__$1 = this;return (new cljs.core.async.t9100(self__.ch,self__.f,self__.map_GT_,meta9101__$1));
});
cljs.core.async.__GT_t9100 = (function __GT_t9100(ch__$1,f__$1,map_GT___$1,meta9101){return (new cljs.core.async.t9100(ch__$1,f__$1,map_GT___$1,meta9101));
});
}
return (new cljs.core.async.t9100(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9106 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9106 = (function (ch,p,filter_GT_,meta9107){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9107 = meta9107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9106.cljs$lang$type = true;
cljs.core.async.t9106.cljs$lang$ctorStr = "cljs.core.async/t9106";
cljs.core.async.t9106.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9106");
});
cljs.core.async.t9106.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9106.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9106.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9108){var self__ = this;
var _9108__$1 = this;return self__.meta9107;
});
cljs.core.async.t9106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9108,meta9107__$1){var self__ = this;
var _9108__$1 = this;return (new cljs.core.async.t9106(self__.ch,self__.p,self__.filter_GT_,meta9107__$1));
});
cljs.core.async.__GT_t9106 = (function __GT_t9106(ch__$1,p__$1,filter_GT___$1,meta9107){return (new cljs.core.async.t9106(ch__$1,p__$1,filter_GT___$1,meta9107));
});
}
return (new cljs.core.async.t9106(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5417__auto___9183 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_9166){var state_val_9167 = (state_9166[1]);if((state_val_9167 === 1))
{var state_9166__$1 = state_9166;var statearr_9168_9184 = state_9166__$1;(statearr_9168_9184[2] = null);
(statearr_9168_9184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9167 === 2))
{var state_9166__$1 = state_9166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9166__$1,4,ch);
} else
{if((state_val_9167 === 3))
{var inst_9164 = (state_9166[2]);var state_9166__$1 = state_9166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9166__$1,inst_9164);
} else
{if((state_val_9167 === 4))
{var inst_9148 = (state_9166[5]);var inst_9148__$1 = (state_9166[2]);var inst_9149 = (inst_9148__$1 == null);var state_9166__$1 = (function (){var statearr_9169 = state_9166;(statearr_9169[5] = inst_9148__$1);
return statearr_9169;
})();if(cljs.core.truth_(inst_9149))
{var statearr_9170_9185 = state_9166__$1;(statearr_9170_9185[1] = 5);
} else
{var statearr_9171_9186 = state_9166__$1;(statearr_9171_9186[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9167 === 5))
{var inst_9151 = cljs.core.async.close_BANG_.call(null,out);var state_9166__$1 = state_9166;var statearr_9172_9187 = state_9166__$1;(statearr_9172_9187[2] = inst_9151);
(statearr_9172_9187[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9167 === 6))
{var inst_9148 = (state_9166[5]);var inst_9153 = p.call(null,inst_9148);var state_9166__$1 = state_9166;if(cljs.core.truth_(inst_9153))
{var statearr_9173_9188 = state_9166__$1;(statearr_9173_9188[1] = 8);
} else
{var statearr_9174_9189 = state_9166__$1;(statearr_9174_9189[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9167 === 7))
{var inst_9162 = (state_9166[2]);var state_9166__$1 = state_9166;var statearr_9175_9190 = state_9166__$1;(statearr_9175_9190[2] = inst_9162);
(statearr_9175_9190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9167 === 8))
{var inst_9148 = (state_9166[5]);var state_9166__$1 = state_9166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9166__$1,11,out,inst_9148);
} else
{if((state_val_9167 === 9))
{var state_9166__$1 = state_9166;var statearr_9176_9191 = state_9166__$1;(statearr_9176_9191[2] = null);
(statearr_9176_9191[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9167 === 10))
{var inst_9159 = (state_9166[2]);var state_9166__$1 = (function (){var statearr_9177 = state_9166;(statearr_9177[6] = inst_9159);
return statearr_9177;
})();var statearr_9178_9192 = state_9166__$1;(statearr_9178_9192[2] = null);
(statearr_9178_9192[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9167 === 11))
{var inst_9156 = (state_9166[2]);var state_9166__$1 = state_9166;var statearr_9179_9193 = state_9166__$1;(statearr_9179_9193[2] = inst_9156);
(statearr_9179_9193[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_9181 = [null,null,null,null,null,null,null];(statearr_9181[0] = state_machine__5405__auto__);
(statearr_9181[1] = 1);
return statearr_9181;
});
var state_machine__5405__auto____1 = (function (state_9166){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_9166);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_9166){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_9166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_9182 = f__5418__auto__.call(null);(statearr_9182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto___9183);
return statearr_9182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_9341){var state_val_9342 = (state_9341[1]);if((state_val_9342 === 1))
{var state_9341__$1 = state_9341;var statearr_9343_9376 = state_9341__$1;(statearr_9343_9376[2] = null);
(statearr_9343_9376[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 2))
{var state_9341__$1 = state_9341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9341__$1,4,in$);
} else
{if((state_val_9342 === 3))
{var inst_9339 = (state_9341[2]);var state_9341__$1 = state_9341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9341__$1,inst_9339);
} else
{if((state_val_9342 === 4))
{var inst_9287 = (state_9341[5]);var inst_9287__$1 = (state_9341[2]);var inst_9288 = (inst_9287__$1 == null);var state_9341__$1 = (function (){var statearr_9344 = state_9341;(statearr_9344[5] = inst_9287__$1);
return statearr_9344;
})();if(cljs.core.truth_(inst_9288))
{var statearr_9345_9377 = state_9341__$1;(statearr_9345_9377[1] = 5);
} else
{var statearr_9346_9378 = state_9341__$1;(statearr_9346_9378[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 5))
{var inst_9290 = cljs.core.async.close_BANG_.call(null,out);var state_9341__$1 = state_9341;var statearr_9347_9379 = state_9341__$1;(statearr_9347_9379[2] = inst_9290);
(statearr_9347_9379[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 6))
{var inst_9287 = (state_9341[5]);var inst_9292 = f.call(null,inst_9287);var inst_9297 = cljs.core.seq.call(null,inst_9292);var inst_9298 = inst_9297;var inst_9299 = null;var inst_9300 = 0;var inst_9301 = 0;var state_9341__$1 = (function (){var statearr_9348 = state_9341;(statearr_9348[6] = inst_9301);
(statearr_9348[7] = inst_9300);
(statearr_9348[8] = inst_9298);
(statearr_9348[9] = inst_9299);
return statearr_9348;
})();var statearr_9349_9380 = state_9341__$1;(statearr_9349_9380[2] = null);
(statearr_9349_9380[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 7))
{var inst_9337 = (state_9341[2]);var state_9341__$1 = state_9341;var statearr_9350_9381 = state_9341__$1;(statearr_9350_9381[2] = inst_9337);
(statearr_9350_9381[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 8))
{var inst_9301 = (state_9341[6]);var inst_9300 = (state_9341[7]);var inst_9303 = (inst_9301 < inst_9300);var inst_9304 = inst_9303;var state_9341__$1 = state_9341;if(cljs.core.truth_(inst_9304))
{var statearr_9351_9382 = state_9341__$1;(statearr_9351_9382[1] = 10);
} else
{var statearr_9352_9383 = state_9341__$1;(statearr_9352_9383[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 9))
{var inst_9334 = (state_9341[2]);var state_9341__$1 = (function (){var statearr_9353 = state_9341;(statearr_9353[10] = inst_9334);
return statearr_9353;
})();var statearr_9354_9384 = state_9341__$1;(statearr_9354_9384[2] = null);
(statearr_9354_9384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 10))
{var inst_9301 = (state_9341[6]);var inst_9299 = (state_9341[9]);var inst_9306 = cljs.core._nth.call(null,inst_9299,inst_9301);var state_9341__$1 = state_9341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9341__$1,13,out,inst_9306);
} else
{if((state_val_9342 === 11))
{var inst_9312 = (state_9341[11]);var inst_9298 = (state_9341[8]);var inst_9312__$1 = cljs.core.seq.call(null,inst_9298);var state_9341__$1 = (function (){var statearr_9358 = state_9341;(statearr_9358[11] = inst_9312__$1);
return statearr_9358;
})();if(inst_9312__$1)
{var statearr_9359_9385 = state_9341__$1;(statearr_9359_9385[1] = 14);
} else
{var statearr_9360_9386 = state_9341__$1;(statearr_9360_9386[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 12))
{var inst_9332 = (state_9341[2]);var state_9341__$1 = state_9341;var statearr_9361_9387 = state_9341__$1;(statearr_9361_9387[2] = inst_9332);
(statearr_9361_9387[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 13))
{var inst_9301 = (state_9341[6]);var inst_9300 = (state_9341[7]);var inst_9298 = (state_9341[8]);var inst_9299 = (state_9341[9]);var inst_9308 = (state_9341[2]);var inst_9309 = (inst_9301 + 1);var tmp9355 = inst_9300;var tmp9356 = inst_9298;var tmp9357 = inst_9299;var inst_9298__$1 = tmp9356;var inst_9299__$1 = tmp9357;var inst_9300__$1 = tmp9355;var inst_9301__$1 = inst_9309;var state_9341__$1 = (function (){var statearr_9362 = state_9341;(statearr_9362[6] = inst_9301__$1);
(statearr_9362[7] = inst_9300__$1);
(statearr_9362[12] = inst_9308);
(statearr_9362[8] = inst_9298__$1);
(statearr_9362[9] = inst_9299__$1);
return statearr_9362;
})();var statearr_9363_9388 = state_9341__$1;(statearr_9363_9388[2] = null);
(statearr_9363_9388[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 14))
{var inst_9312 = (state_9341[11]);var inst_9314 = cljs.core.chunked_seq_QMARK_.call(null,inst_9312);var state_9341__$1 = state_9341;if(inst_9314)
{var statearr_9364_9389 = state_9341__$1;(statearr_9364_9389[1] = 17);
} else
{var statearr_9365_9390 = state_9341__$1;(statearr_9365_9390[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 15))
{var state_9341__$1 = state_9341;var statearr_9366_9391 = state_9341__$1;(statearr_9366_9391[2] = null);
(statearr_9366_9391[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 16))
{var inst_9330 = (state_9341[2]);var state_9341__$1 = state_9341;var statearr_9367_9392 = state_9341__$1;(statearr_9367_9392[2] = inst_9330);
(statearr_9367_9392[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 17))
{var inst_9312 = (state_9341[11]);var inst_9316 = cljs.core.chunk_first.call(null,inst_9312);var inst_9317 = cljs.core.chunk_rest.call(null,inst_9312);var inst_9318 = cljs.core.count.call(null,inst_9316);var inst_9298 = inst_9317;var inst_9299 = inst_9316;var inst_9300 = inst_9318;var inst_9301 = 0;var state_9341__$1 = (function (){var statearr_9368 = state_9341;(statearr_9368[6] = inst_9301);
(statearr_9368[7] = inst_9300);
(statearr_9368[8] = inst_9298);
(statearr_9368[9] = inst_9299);
return statearr_9368;
})();var statearr_9369_9393 = state_9341__$1;(statearr_9369_9393[2] = null);
(statearr_9369_9393[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 18))
{var inst_9312 = (state_9341[11]);var inst_9321 = cljs.core.first.call(null,inst_9312);var state_9341__$1 = state_9341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9341__$1,20,out,inst_9321);
} else
{if((state_val_9342 === 19))
{var inst_9327 = (state_9341[2]);var state_9341__$1 = state_9341;var statearr_9370_9394 = state_9341__$1;(statearr_9370_9394[2] = inst_9327);
(statearr_9370_9394[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9342 === 20))
{var inst_9312 = (state_9341[11]);var inst_9323 = (state_9341[2]);var inst_9324 = cljs.core.next.call(null,inst_9312);var inst_9298 = inst_9324;var inst_9299 = null;var inst_9300 = 0;var inst_9301 = 0;var state_9341__$1 = (function (){var statearr_9371 = state_9341;(statearr_9371[6] = inst_9301);
(statearr_9371[7] = inst_9300);
(statearr_9371[13] = inst_9323);
(statearr_9371[8] = inst_9298);
(statearr_9371[9] = inst_9299);
return statearr_9371;
})();var statearr_9372_9395 = state_9341__$1;(statearr_9372_9395[2] = null);
(statearr_9372_9395[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_9374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9374[0] = state_machine__5405__auto__);
(statearr_9374[1] = 1);
return statearr_9374;
});
var state_machine__5405__auto____1 = (function (state_9341){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_9341);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_9341){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_9341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_9375 = f__5418__auto__.call(null);(statearr_9375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_9375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5417__auto___9468 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_9451){var state_val_9452 = (state_9451[1]);if((state_val_9452 === 1))
{var state_9451__$1 = state_9451;var statearr_9453_9469 = state_9451__$1;(statearr_9453_9469[2] = null);
(statearr_9453_9469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 2))
{var state_9451__$1 = state_9451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9451__$1,4,from);
} else
{if((state_val_9452 === 3))
{var inst_9449 = (state_9451[2]);var state_9451__$1 = state_9451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9451__$1,inst_9449);
} else
{if((state_val_9452 === 4))
{var inst_9434 = (state_9451[5]);var inst_9434__$1 = (state_9451[2]);var inst_9435 = (inst_9434__$1 == null);var state_9451__$1 = (function (){var statearr_9454 = state_9451;(statearr_9454[5] = inst_9434__$1);
return statearr_9454;
})();if(cljs.core.truth_(inst_9435))
{var statearr_9455_9470 = state_9451__$1;(statearr_9455_9470[1] = 5);
} else
{var statearr_9456_9471 = state_9451__$1;(statearr_9456_9471[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 5))
{var state_9451__$1 = state_9451;if(cljs.core.truth_(close_QMARK_))
{var statearr_9457_9472 = state_9451__$1;(statearr_9457_9472[1] = 8);
} else
{var statearr_9458_9473 = state_9451__$1;(statearr_9458_9473[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 6))
{var inst_9434 = (state_9451[5]);var state_9451__$1 = state_9451;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9451__$1,11,to,inst_9434);
} else
{if((state_val_9452 === 7))
{var inst_9447 = (state_9451[2]);var state_9451__$1 = state_9451;var statearr_9459_9474 = state_9451__$1;(statearr_9459_9474[2] = inst_9447);
(statearr_9459_9474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 8))
{var inst_9438 = cljs.core.async.close_BANG_.call(null,to);var state_9451__$1 = state_9451;var statearr_9460_9475 = state_9451__$1;(statearr_9460_9475[2] = inst_9438);
(statearr_9460_9475[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 9))
{var state_9451__$1 = state_9451;var statearr_9461_9476 = state_9451__$1;(statearr_9461_9476[2] = null);
(statearr_9461_9476[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 10))
{var inst_9441 = (state_9451[2]);var state_9451__$1 = state_9451;var statearr_9462_9477 = state_9451__$1;(statearr_9462_9477[2] = inst_9441);
(statearr_9462_9477[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9452 === 11))
{var inst_9444 = (state_9451[2]);var state_9451__$1 = (function (){var statearr_9463 = state_9451;(statearr_9463[6] = inst_9444);
return statearr_9463;
})();var statearr_9464_9478 = state_9451__$1;(statearr_9464_9478[2] = null);
(statearr_9464_9478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_9466 = [null,null,null,null,null,null,null];(statearr_9466[0] = state_machine__5405__auto__);
(statearr_9466[1] = 1);
return statearr_9466;
});
var state_machine__5405__auto____1 = (function (state_9451){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_9451);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_9451){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_9451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_9467 = f__5418__auto__.call(null);(statearr_9467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto___9468);
return statearr_9467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5417__auto___9557 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_9539){var state_val_9540 = (state_9539[1]);if((state_val_9540 === 1))
{var state_9539__$1 = state_9539;var statearr_9541_9558 = state_9539__$1;(statearr_9541_9558[2] = null);
(statearr_9541_9558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9540 === 2))
{var state_9539__$1 = state_9539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9539__$1,4,ch);
} else
{if((state_val_9540 === 3))
{var inst_9537 = (state_9539[2]);var state_9539__$1 = state_9539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9539__$1,inst_9537);
} else
{if((state_val_9540 === 4))
{var inst_9520 = (state_9539[5]);var inst_9520__$1 = (state_9539[2]);var inst_9521 = (inst_9520__$1 == null);var state_9539__$1 = (function (){var statearr_9542 = state_9539;(statearr_9542[5] = inst_9520__$1);
return statearr_9542;
})();if(cljs.core.truth_(inst_9521))
{var statearr_9543_9559 = state_9539__$1;(statearr_9543_9559[1] = 5);
} else
{var statearr_9544_9560 = state_9539__$1;(statearr_9544_9560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9540 === 5))
{var inst_9523 = cljs.core.async.close_BANG_.call(null,tc);var inst_9524 = cljs.core.async.close_BANG_.call(null,fc);var state_9539__$1 = (function (){var statearr_9545 = state_9539;(statearr_9545[6] = inst_9523);
return statearr_9545;
})();var statearr_9546_9561 = state_9539__$1;(statearr_9546_9561[2] = inst_9524);
(statearr_9546_9561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9540 === 6))
{var inst_9520 = (state_9539[5]);var inst_9526 = p.call(null,inst_9520);var state_9539__$1 = state_9539;if(cljs.core.truth_(inst_9526))
{var statearr_9547_9562 = state_9539__$1;(statearr_9547_9562[1] = 9);
} else
{var statearr_9548_9563 = state_9539__$1;(statearr_9548_9563[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9540 === 7))
{var inst_9535 = (state_9539[2]);var state_9539__$1 = state_9539;var statearr_9549_9564 = state_9539__$1;(statearr_9549_9564[2] = inst_9535);
(statearr_9549_9564[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9540 === 8))
{var inst_9532 = (state_9539[2]);var state_9539__$1 = (function (){var statearr_9550 = state_9539;(statearr_9550[7] = inst_9532);
return statearr_9550;
})();var statearr_9551_9565 = state_9539__$1;(statearr_9551_9565[2] = null);
(statearr_9551_9565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9540 === 9))
{var state_9539__$1 = state_9539;var statearr_9552_9566 = state_9539__$1;(statearr_9552_9566[2] = tc);
(statearr_9552_9566[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9540 === 10))
{var state_9539__$1 = state_9539;var statearr_9553_9567 = state_9539__$1;(statearr_9553_9567[2] = fc);
(statearr_9553_9567[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9540 === 11))
{var inst_9520 = (state_9539[5]);var inst_9530 = (state_9539[2]);var state_9539__$1 = state_9539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9539__$1,8,inst_9530,inst_9520);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_9555 = [null,null,null,null,null,null,null,null];(statearr_9555[0] = state_machine__5405__auto__);
(statearr_9555[1] = 1);
return statearr_9555;
});
var state_machine__5405__auto____1 = (function (state_9539){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_9539);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_9539){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_9539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_9556 = f__5418__auto__.call(null);(statearr_9556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto___9557);
return statearr_9556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_9610){var state_val_9611 = (state_9610[1]);if((state_val_9611 === 7))
{var inst_9606 = (state_9610[2]);var state_9610__$1 = state_9610;var statearr_9612_9624 = state_9610__$1;(statearr_9612_9624[2] = inst_9606);
(statearr_9612_9624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9611 === 6))
{var inst_9599 = (state_9610[5]);var inst_9596 = (state_9610[6]);var inst_9603 = f.call(null,inst_9596,inst_9599);var inst_9596__$1 = inst_9603;var state_9610__$1 = (function (){var statearr_9613 = state_9610;(statearr_9613[6] = inst_9596__$1);
return statearr_9613;
})();var statearr_9614_9625 = state_9610__$1;(statearr_9614_9625[2] = null);
(statearr_9614_9625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9611 === 5))
{var inst_9596 = (state_9610[6]);var state_9610__$1 = state_9610;var statearr_9615_9626 = state_9610__$1;(statearr_9615_9626[2] = inst_9596);
(statearr_9615_9626[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9611 === 4))
{var inst_9599 = (state_9610[5]);var inst_9599__$1 = (state_9610[2]);var inst_9600 = (inst_9599__$1 == null);var state_9610__$1 = (function (){var statearr_9616 = state_9610;(statearr_9616[5] = inst_9599__$1);
return statearr_9616;
})();if(cljs.core.truth_(inst_9600))
{var statearr_9617_9627 = state_9610__$1;(statearr_9617_9627[1] = 5);
} else
{var statearr_9618_9628 = state_9610__$1;(statearr_9618_9628[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9611 === 3))
{var inst_9608 = (state_9610[2]);var state_9610__$1 = state_9610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9610__$1,inst_9608);
} else
{if((state_val_9611 === 2))
{var state_9610__$1 = state_9610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9610__$1,4,ch);
} else
{if((state_val_9611 === 1))
{var inst_9596 = init;var state_9610__$1 = (function (){var statearr_9619 = state_9610;(statearr_9619[6] = inst_9596);
return statearr_9619;
})();var statearr_9620_9629 = state_9610__$1;(statearr_9620_9629[2] = null);
(statearr_9620_9629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_9622 = [null,null,null,null,null,null,null];(statearr_9622[0] = state_machine__5405__auto__);
(statearr_9622[1] = 1);
return statearr_9622;
});
var state_machine__5405__auto____1 = (function (state_9610){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_9610);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_9610){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_9610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_9623 = f__5418__auto__.call(null);(statearr_9623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_9623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_9687){var state_val_9688 = (state_9687[1]);if((state_val_9688 === 1))
{var inst_9667 = cljs.core.seq.call(null,coll);var inst_9668 = inst_9667;var state_9687__$1 = (function (){var statearr_9689 = state_9687;(statearr_9689[5] = inst_9668);
return statearr_9689;
})();var statearr_9690_9704 = state_9687__$1;(statearr_9690_9704[2] = null);
(statearr_9690_9704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9688 === 2))
{var inst_9668 = (state_9687[5]);var state_9687__$1 = state_9687;if(cljs.core.truth_(inst_9668))
{var statearr_9691_9705 = state_9687__$1;(statearr_9691_9705[1] = 4);
} else
{var statearr_9692_9706 = state_9687__$1;(statearr_9692_9706[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9688 === 3))
{var inst_9685 = (state_9687[2]);var state_9687__$1 = state_9687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9687__$1,inst_9685);
} else
{if((state_val_9688 === 4))
{var inst_9668 = (state_9687[5]);var inst_9671 = cljs.core.first.call(null,inst_9668);var state_9687__$1 = state_9687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9687__$1,7,ch,inst_9671);
} else
{if((state_val_9688 === 5))
{var state_9687__$1 = state_9687;if(cljs.core.truth_(close_QMARK_))
{var statearr_9693_9707 = state_9687__$1;(statearr_9693_9707[1] = 8);
} else
{var statearr_9694_9708 = state_9687__$1;(statearr_9694_9708[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9688 === 6))
{var inst_9683 = (state_9687[2]);var state_9687__$1 = state_9687;var statearr_9695_9709 = state_9687__$1;(statearr_9695_9709[2] = inst_9683);
(statearr_9695_9709[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9688 === 7))
{var inst_9668 = (state_9687[5]);var inst_9673 = (state_9687[2]);var inst_9674 = cljs.core.next.call(null,inst_9668);var inst_9668__$1 = inst_9674;var state_9687__$1 = (function (){var statearr_9696 = state_9687;(statearr_9696[5] = inst_9668__$1);
(statearr_9696[6] = inst_9673);
return statearr_9696;
})();var statearr_9697_9710 = state_9687__$1;(statearr_9697_9710[2] = null);
(statearr_9697_9710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9688 === 8))
{var inst_9678 = cljs.core.async.close_BANG_.call(null,ch);var state_9687__$1 = state_9687;var statearr_9698_9711 = state_9687__$1;(statearr_9698_9711[2] = inst_9678);
(statearr_9698_9711[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9688 === 9))
{var state_9687__$1 = state_9687;var statearr_9699_9712 = state_9687__$1;(statearr_9699_9712[2] = null);
(statearr_9699_9712[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9688 === 10))
{var inst_9681 = (state_9687[2]);var state_9687__$1 = state_9687;var statearr_9700_9713 = state_9687__$1;(statearr_9700_9713[2] = inst_9681);
(statearr_9700_9713[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_9702 = [null,null,null,null,null,null,null];(statearr_9702[0] = state_machine__5405__auto__);
(statearr_9702[1] = 1);
return statearr_9702;
});
var state_machine__5405__auto____1 = (function (state_9687){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_9687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_9687){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_9687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_9703 = f__5418__auto__.call(null);(statearr_9703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_9703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj9715 = {};return obj9715;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3391__auto__ = _;if(and__3391__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9717 = {};return obj9717;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t9930 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9930 = (function (cs,ch,mult,meta9931){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta9931 = meta9931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9930.cljs$lang$type = true;
cljs.core.async.t9930.cljs$lang$ctorStr = "cljs.core.async/t9930";
cljs.core.async.t9930.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9930");
});})(cs))
;
cljs.core.async.t9930.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t9930.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t9930.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t9930.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t9930.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t9930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9932){var self__ = this;
var _9932__$1 = this;return self__.meta9931;
});})(cs))
;
cljs.core.async.t9930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9932,meta9931__$1){var self__ = this;
var _9932__$1 = this;return (new cljs.core.async.t9930(self__.cs,self__.ch,self__.mult,meta9931__$1));
});})(cs))
;
cljs.core.async.__GT_t9930 = ((function (cs){
return (function __GT_t9930(cs__$1,ch__$1,mult__$1,meta9931){return (new cljs.core.async.t9930(cs__$1,ch__$1,mult__$1,meta9931));
});})(cs))
;
}
return (new cljs.core.async.t9930(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5417__auto___10142 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_10060){var state_val_10061 = (state_10060[1]);if((state_val_10061 === 32))
{try{var inst_10011 = (state_10060[5]);var inst_9935 = (state_10060[6]);var inst_10017 = cljs.core.async.put_BANG_.call(null,inst_10011,inst_9935,done);var state_10060__$1 = state_10060;var statearr_10064_10143 = state_10060__$1;(statearr_10064_10143[2] = inst_10017);
(statearr_10064_10143[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e10062){if((e10062 instanceof Object))
{var ex__5398__auto__ = e10062;var statearr_10063_10144 = state_10060;(statearr_10063_10144[1] = 31);
(statearr_10063_10144[2] = ex__5398__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10062;
} else
{return null;
}
}
}} else
{if((state_val_10061 === 1))
{var state_10060__$1 = state_10060;var statearr_10065_10145 = state_10060__$1;(statearr_10065_10145[2] = null);
(statearr_10065_10145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 33))
{var inst_10023 = (state_10060[7]);var inst_10025 = cljs.core.chunked_seq_QMARK_.call(null,inst_10023);var state_10060__$1 = state_10060;if(inst_10025)
{var statearr_10066_10146 = state_10060__$1;(statearr_10066_10146[1] = 36);
} else
{var statearr_10067_10147 = state_10060__$1;(statearr_10067_10147[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 2))
{var state_10060__$1 = state_10060;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10060__$1,4,ch);
} else
{if((state_val_10061 === 34))
{var state_10060__$1 = state_10060;var statearr_10068_10148 = state_10060__$1;(statearr_10068_10148[2] = null);
(statearr_10068_10148[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 3))
{var inst_10058 = (state_10060[2]);var state_10060__$1 = state_10060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10060__$1,inst_10058);
} else
{if((state_val_10061 === 35))
{var inst_10047 = (state_10060[2]);var state_10060__$1 = state_10060;var statearr_10069_10149 = state_10060__$1;(statearr_10069_10149[2] = inst_10047);
(statearr_10069_10149[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 4))
{var inst_9935 = (state_10060[6]);var inst_9935__$1 = (state_10060[2]);var inst_9936 = (inst_9935__$1 == null);var state_10060__$1 = (function (){var statearr_10070 = state_10060;(statearr_10070[6] = inst_9935__$1);
return statearr_10070;
})();if(cljs.core.truth_(inst_9936))
{var statearr_10071_10150 = state_10060__$1;(statearr_10071_10150[1] = 5);
} else
{var statearr_10072_10151 = state_10060__$1;(statearr_10072_10151[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 36))
{var inst_10023 = (state_10060[7]);var inst_10027 = cljs.core.chunk_first.call(null,inst_10023);var inst_10028 = cljs.core.chunk_rest.call(null,inst_10023);var inst_10029 = cljs.core.count.call(null,inst_10027);var inst_10003 = inst_10028;var inst_10004 = inst_10027;var inst_10005 = inst_10029;var inst_10006 = 0;var state_10060__$1 = (function (){var statearr_10073 = state_10060;(statearr_10073[8] = inst_10004);
(statearr_10073[9] = inst_10005);
(statearr_10073[10] = inst_10006);
(statearr_10073[11] = inst_10003);
return statearr_10073;
})();var statearr_10074_10152 = state_10060__$1;(statearr_10074_10152[2] = null);
(statearr_10074_10152[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 5))
{var inst_9942 = cljs.core.deref.call(null,cs);var inst_9943 = cljs.core.seq.call(null,inst_9942);var inst_9944 = inst_9943;var inst_9945 = null;var inst_9946 = 0;var inst_9947 = 0;var state_10060__$1 = (function (){var statearr_10075 = state_10060;(statearr_10075[12] = inst_9947);
(statearr_10075[13] = inst_9946);
(statearr_10075[14] = inst_9945);
(statearr_10075[15] = inst_9944);
return statearr_10075;
})();var statearr_10076_10153 = state_10060__$1;(statearr_10076_10153[2] = null);
(statearr_10076_10153[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 37))
{var inst_10023 = (state_10060[7]);var inst_10032 = cljs.core.first.call(null,inst_10023);var state_10060__$1 = (function (){var statearr_10077 = state_10060;(statearr_10077[16] = inst_10032);
return statearr_10077;
})();var statearr_10078_10154 = state_10060__$1;(statearr_10078_10154[2] = null);
(statearr_10078_10154[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 6))
{var inst_9994 = cljs.core.deref.call(null,cs);var inst_9995 = cljs.core.keys.call(null,inst_9994);var inst_9996 = cljs.core.count.call(null,inst_9995);var inst_9997 = cljs.core.reset_BANG_.call(null,dctr,inst_9996);var inst_10002 = cljs.core.seq.call(null,inst_9995);var inst_10003 = inst_10002;var inst_10004 = null;var inst_10005 = 0;var inst_10006 = 0;var state_10060__$1 = (function (){var statearr_10079 = state_10060;(statearr_10079[8] = inst_10004);
(statearr_10079[9] = inst_10005);
(statearr_10079[10] = inst_10006);
(statearr_10079[17] = inst_9997);
(statearr_10079[11] = inst_10003);
return statearr_10079;
})();var statearr_10080_10155 = state_10060__$1;(statearr_10080_10155[2] = null);
(statearr_10080_10155[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 38))
{var inst_10044 = (state_10060[2]);var state_10060__$1 = state_10060;var statearr_10081_10156 = state_10060__$1;(statearr_10081_10156[2] = inst_10044);
(statearr_10081_10156[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 7))
{var inst_10056 = (state_10060[2]);var state_10060__$1 = state_10060;var statearr_10082_10157 = state_10060__$1;(statearr_10082_10157[2] = inst_10056);
(statearr_10082_10157[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 39))
{var inst_10023 = (state_10060[7]);var inst_10040 = (state_10060[2]);var inst_10041 = cljs.core.next.call(null,inst_10023);var inst_10003 = inst_10041;var inst_10004 = null;var inst_10005 = 0;var inst_10006 = 0;var state_10060__$1 = (function (){var statearr_10083 = state_10060;(statearr_10083[18] = inst_10040);
(statearr_10083[8] = inst_10004);
(statearr_10083[9] = inst_10005);
(statearr_10083[10] = inst_10006);
(statearr_10083[11] = inst_10003);
return statearr_10083;
})();var statearr_10084_10158 = state_10060__$1;(statearr_10084_10158[2] = null);
(statearr_10084_10158[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 8))
{var inst_9947 = (state_10060[12]);var inst_9946 = (state_10060[13]);var inst_9949 = (inst_9947 < inst_9946);var inst_9950 = inst_9949;var state_10060__$1 = state_10060;if(cljs.core.truth_(inst_9950))
{var statearr_10085_10159 = state_10060__$1;(statearr_10085_10159[1] = 10);
} else
{var statearr_10086_10160 = state_10060__$1;(statearr_10086_10160[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 40))
{var inst_10032 = (state_10060[16]);var inst_10033 = (state_10060[2]);var inst_10034 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10035 = cljs.core.async.untap_STAR_.call(null,m,inst_10032);var state_10060__$1 = (function (){var statearr_10087 = state_10060;(statearr_10087[19] = inst_10034);
(statearr_10087[20] = inst_10033);
return statearr_10087;
})();var statearr_10088_10161 = state_10060__$1;(statearr_10088_10161[2] = inst_10035);
(statearr_10088_10161[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 9))
{var inst_9992 = (state_10060[2]);var state_10060__$1 = state_10060;var statearr_10089_10162 = state_10060__$1;(statearr_10089_10162[2] = inst_9992);
(statearr_10089_10162[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 41))
{try{var inst_9935 = (state_10060[6]);var inst_10032 = (state_10060[16]);var inst_10038 = cljs.core.async.put_BANG_.call(null,inst_10032,inst_9935,done);var state_10060__$1 = state_10060;var statearr_10092_10163 = state_10060__$1;(statearr_10092_10163[2] = inst_10038);
(statearr_10092_10163[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e10090){if((e10090 instanceof Object))
{var ex__5398__auto__ = e10090;var statearr_10091_10164 = state_10060;(statearr_10091_10164[1] = 40);
(statearr_10091_10164[2] = ex__5398__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10090;
} else
{return null;
}
}
}} else
{if((state_val_10061 === 10))
{var inst_9947 = (state_10060[12]);var inst_9945 = (state_10060[14]);var inst_9953 = cljs.core._nth.call(null,inst_9945,inst_9947);var inst_9954 = cljs.core.nth.call(null,inst_9953,0,null);var inst_9955 = cljs.core.nth.call(null,inst_9953,1,null);var state_10060__$1 = (function (){var statearr_10093 = state_10060;(statearr_10093[21] = inst_9954);
return statearr_10093;
})();if(cljs.core.truth_(inst_9955))
{var statearr_10094_10165 = state_10060__$1;(statearr_10094_10165[1] = 13);
} else
{var statearr_10095_10166 = state_10060__$1;(statearr_10095_10166[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 42))
{var inst_10053 = (state_10060[2]);var state_10060__$1 = (function (){var statearr_10096 = state_10060;(statearr_10096[22] = inst_10053);
return statearr_10096;
})();var statearr_10097_10167 = state_10060__$1;(statearr_10097_10167[2] = null);
(statearr_10097_10167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 11))
{var inst_9944 = (state_10060[15]);var inst_9964 = (state_10060[23]);var inst_9964__$1 = cljs.core.seq.call(null,inst_9944);var state_10060__$1 = (function (){var statearr_10098 = state_10060;(statearr_10098[23] = inst_9964__$1);
return statearr_10098;
})();if(inst_9964__$1)
{var statearr_10099_10168 = state_10060__$1;(statearr_10099_10168[1] = 16);
} else
{var statearr_10100_10169 = state_10060__$1;(statearr_10100_10169[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 12))
{var inst_9990 = (state_10060[2]);var state_10060__$1 = state_10060;var statearr_10101_10170 = state_10060__$1;(statearr_10101_10170[2] = inst_9990);
(statearr_10101_10170[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 13))
{var inst_9954 = (state_10060[21]);var inst_9957 = cljs.core.async.close_BANG_.call(null,inst_9954);var state_10060__$1 = state_10060;var statearr_10105_10171 = state_10060__$1;(statearr_10105_10171[2] = inst_9957);
(statearr_10105_10171[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 14))
{var state_10060__$1 = state_10060;var statearr_10106_10172 = state_10060__$1;(statearr_10106_10172[2] = null);
(statearr_10106_10172[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 15))
{var inst_9947 = (state_10060[12]);var inst_9946 = (state_10060[13]);var inst_9945 = (state_10060[14]);var inst_9944 = (state_10060[15]);var inst_9960 = (state_10060[2]);var inst_9961 = (inst_9947 + 1);var tmp10102 = inst_9946;var tmp10103 = inst_9945;var tmp10104 = inst_9944;var inst_9944__$1 = tmp10104;var inst_9945__$1 = tmp10103;var inst_9946__$1 = tmp10102;var inst_9947__$1 = inst_9961;var state_10060__$1 = (function (){var statearr_10107 = state_10060;(statearr_10107[12] = inst_9947__$1);
(statearr_10107[13] = inst_9946__$1);
(statearr_10107[14] = inst_9945__$1);
(statearr_10107[15] = inst_9944__$1);
(statearr_10107[24] = inst_9960);
return statearr_10107;
})();var statearr_10108_10173 = state_10060__$1;(statearr_10108_10173[2] = null);
(statearr_10108_10173[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 16))
{var inst_9964 = (state_10060[23]);var inst_9966 = cljs.core.chunked_seq_QMARK_.call(null,inst_9964);var state_10060__$1 = state_10060;if(inst_9966)
{var statearr_10109_10174 = state_10060__$1;(statearr_10109_10174[1] = 19);
} else
{var statearr_10110_10175 = state_10060__$1;(statearr_10110_10175[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 17))
{var state_10060__$1 = state_10060;var statearr_10111_10176 = state_10060__$1;(statearr_10111_10176[2] = null);
(statearr_10111_10176[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 18))
{var inst_9988 = (state_10060[2]);var state_10060__$1 = state_10060;var statearr_10112_10177 = state_10060__$1;(statearr_10112_10177[2] = inst_9988);
(statearr_10112_10177[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 19))
{var inst_9964 = (state_10060[23]);var inst_9968 = cljs.core.chunk_first.call(null,inst_9964);var inst_9969 = cljs.core.chunk_rest.call(null,inst_9964);var inst_9970 = cljs.core.count.call(null,inst_9968);var inst_9944 = inst_9969;var inst_9945 = inst_9968;var inst_9946 = inst_9970;var inst_9947 = 0;var state_10060__$1 = (function (){var statearr_10113 = state_10060;(statearr_10113[12] = inst_9947);
(statearr_10113[13] = inst_9946);
(statearr_10113[14] = inst_9945);
(statearr_10113[15] = inst_9944);
return statearr_10113;
})();var statearr_10114_10178 = state_10060__$1;(statearr_10114_10178[2] = null);
(statearr_10114_10178[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 20))
{var inst_9964 = (state_10060[23]);var inst_9974 = cljs.core.first.call(null,inst_9964);var inst_9975 = cljs.core.nth.call(null,inst_9974,0,null);var inst_9976 = cljs.core.nth.call(null,inst_9974,1,null);var state_10060__$1 = (function (){var statearr_10115 = state_10060;(statearr_10115[25] = inst_9975);
return statearr_10115;
})();if(cljs.core.truth_(inst_9976))
{var statearr_10116_10179 = state_10060__$1;(statearr_10116_10179[1] = 22);
} else
{var statearr_10117_10180 = state_10060__$1;(statearr_10117_10180[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 21))
{var inst_9985 = (state_10060[2]);var state_10060__$1 = state_10060;var statearr_10118_10181 = state_10060__$1;(statearr_10118_10181[2] = inst_9985);
(statearr_10118_10181[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 22))
{var inst_9975 = (state_10060[25]);var inst_9978 = cljs.core.async.close_BANG_.call(null,inst_9975);var state_10060__$1 = state_10060;var statearr_10119_10182 = state_10060__$1;(statearr_10119_10182[2] = inst_9978);
(statearr_10119_10182[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 23))
{var state_10060__$1 = state_10060;var statearr_10120_10183 = state_10060__$1;(statearr_10120_10183[2] = null);
(statearr_10120_10183[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 24))
{var inst_9964 = (state_10060[23]);var inst_9981 = (state_10060[2]);var inst_9982 = cljs.core.next.call(null,inst_9964);var inst_9944 = inst_9982;var inst_9945 = null;var inst_9946 = 0;var inst_9947 = 0;var state_10060__$1 = (function (){var statearr_10121 = state_10060;(statearr_10121[12] = inst_9947);
(statearr_10121[26] = inst_9981);
(statearr_10121[13] = inst_9946);
(statearr_10121[14] = inst_9945);
(statearr_10121[15] = inst_9944);
return statearr_10121;
})();var statearr_10122_10184 = state_10060__$1;(statearr_10122_10184[2] = null);
(statearr_10122_10184[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 25))
{var inst_10005 = (state_10060[9]);var inst_10006 = (state_10060[10]);var inst_10008 = (inst_10006 < inst_10005);var inst_10009 = inst_10008;var state_10060__$1 = state_10060;if(cljs.core.truth_(inst_10009))
{var statearr_10123_10185 = state_10060__$1;(statearr_10123_10185[1] = 27);
} else
{var statearr_10124_10186 = state_10060__$1;(statearr_10124_10186[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 26))
{var inst_10051 = (state_10060[2]);var state_10060__$1 = (function (){var statearr_10125 = state_10060;(statearr_10125[27] = inst_10051);
return statearr_10125;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10060__$1,42,dchan);
} else
{if((state_val_10061 === 27))
{var inst_10004 = (state_10060[8]);var inst_10006 = (state_10060[10]);var inst_10011 = cljs.core._nth.call(null,inst_10004,inst_10006);var state_10060__$1 = (function (){var statearr_10126 = state_10060;(statearr_10126[5] = inst_10011);
return statearr_10126;
})();var statearr_10127_10187 = state_10060__$1;(statearr_10127_10187[2] = null);
(statearr_10127_10187[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 28))
{var inst_10003 = (state_10060[11]);var inst_10023 = (state_10060[7]);var inst_10023__$1 = cljs.core.seq.call(null,inst_10003);var state_10060__$1 = (function (){var statearr_10131 = state_10060;(statearr_10131[7] = inst_10023__$1);
return statearr_10131;
})();if(inst_10023__$1)
{var statearr_10132_10188 = state_10060__$1;(statearr_10132_10188[1] = 33);
} else
{var statearr_10133_10189 = state_10060__$1;(statearr_10133_10189[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 29))
{var inst_10049 = (state_10060[2]);var state_10060__$1 = state_10060;var statearr_10134_10190 = state_10060__$1;(statearr_10134_10190[2] = inst_10049);
(statearr_10134_10190[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 30))
{var inst_10004 = (state_10060[8]);var inst_10005 = (state_10060[9]);var inst_10006 = (state_10060[10]);var inst_10003 = (state_10060[11]);var inst_10019 = (state_10060[2]);var inst_10020 = (inst_10006 + 1);var tmp10128 = inst_10004;var tmp10129 = inst_10005;var tmp10130 = inst_10003;var inst_10003__$1 = tmp10130;var inst_10004__$1 = tmp10128;var inst_10005__$1 = tmp10129;var inst_10006__$1 = inst_10020;var state_10060__$1 = (function (){var statearr_10135 = state_10060;(statearr_10135[28] = inst_10019);
(statearr_10135[8] = inst_10004__$1);
(statearr_10135[9] = inst_10005__$1);
(statearr_10135[10] = inst_10006__$1);
(statearr_10135[11] = inst_10003__$1);
return statearr_10135;
})();var statearr_10136_10191 = state_10060__$1;(statearr_10136_10191[2] = null);
(statearr_10136_10191[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 31))
{var inst_10011 = (state_10060[5]);var inst_10012 = (state_10060[2]);var inst_10013 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10014 = cljs.core.async.untap_STAR_.call(null,m,inst_10011);var state_10060__$1 = (function (){var statearr_10137 = state_10060;(statearr_10137[29] = inst_10013);
(statearr_10137[30] = inst_10012);
return statearr_10137;
})();var statearr_10138_10192 = state_10060__$1;(statearr_10138_10192[2] = inst_10014);
(statearr_10138_10192[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_10140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10140[0] = state_machine__5405__auto__);
(statearr_10140[1] = 1);
return statearr_10140;
});
var state_machine__5405__auto____1 = (function (state_10060){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_10060);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_10060){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_10060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_10141 = f__5418__auto__.call(null);(statearr_10141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto___10142);
return statearr_10141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10194 = {};return obj10194;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10300 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10300 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10301){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10301 = meta10301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10300.cljs$lang$type = true;
cljs.core.async.t10300.cljs$lang$ctorStr = "cljs.core.async/t10300";
cljs.core.async.t10300.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10300");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10300.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10300.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10300.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10300.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10300.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10300.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10300.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10302){var self__ = this;
var _10302__$1 = this;return self__.meta10301;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10302,meta10301__$1){var self__ = this;
var _10302__$1 = this;return (new cljs.core.async.t10300(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10301__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10300 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10300(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10301){return (new cljs.core.async.t10300(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10301));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10300(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5417__auto___10405 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_10367){var state_val_10368 = (state_10367[1]);if((state_val_10368 === 1))
{var inst_10306 = (state_10367[5]);var inst_10306__$1 = calc_state.call(null);var inst_10307 = cljs.core.seq_QMARK_.call(null,inst_10306__$1);var state_10367__$1 = (function (){var statearr_10369 = state_10367;(statearr_10369[5] = inst_10306__$1);
return statearr_10369;
})();if(inst_10307)
{var statearr_10370_10406 = state_10367__$1;(statearr_10370_10406[1] = 2);
} else
{var statearr_10371_10407 = state_10367__$1;(statearr_10371_10407[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 2))
{var inst_10306 = (state_10367[5]);var inst_10309 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10306);var state_10367__$1 = state_10367;var statearr_10372_10408 = state_10367__$1;(statearr_10372_10408[2] = inst_10309);
(statearr_10372_10408[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 3))
{var inst_10306 = (state_10367[5]);var state_10367__$1 = state_10367;var statearr_10373_10409 = state_10367__$1;(statearr_10373_10409[2] = inst_10306);
(statearr_10373_10409[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 4))
{var inst_10306 = (state_10367[5]);var inst_10312 = (state_10367[2]);var inst_10313 = cljs.core.get.call(null,inst_10312,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10314 = cljs.core.get.call(null,inst_10312,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10315 = cljs.core.get.call(null,inst_10312,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10316 = inst_10306;var state_10367__$1 = (function (){var statearr_10374 = state_10367;(statearr_10374[6] = inst_10313);
(statearr_10374[7] = inst_10314);
(statearr_10374[8] = inst_10315);
(statearr_10374[9] = inst_10316);
return statearr_10374;
})();var statearr_10375_10410 = state_10367__$1;(statearr_10375_10410[2] = null);
(statearr_10375_10410[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 5))
{var inst_10316 = (state_10367[9]);var inst_10319 = cljs.core.seq_QMARK_.call(null,inst_10316);var state_10367__$1 = state_10367;if(inst_10319)
{var statearr_10376_10411 = state_10367__$1;(statearr_10376_10411[1] = 7);
} else
{var statearr_10377_10412 = state_10367__$1;(statearr_10377_10412[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 6))
{var inst_10365 = (state_10367[2]);var state_10367__$1 = state_10367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10367__$1,inst_10365);
} else
{if((state_val_10368 === 7))
{var inst_10316 = (state_10367[9]);var inst_10321 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10316);var state_10367__$1 = state_10367;var statearr_10378_10413 = state_10367__$1;(statearr_10378_10413[2] = inst_10321);
(statearr_10378_10413[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 8))
{var inst_10316 = (state_10367[9]);var state_10367__$1 = state_10367;var statearr_10379_10414 = state_10367__$1;(statearr_10379_10414[2] = inst_10316);
(statearr_10379_10414[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 9))
{var inst_10324 = (state_10367[10]);var inst_10324__$1 = (state_10367[2]);var inst_10325 = cljs.core.get.call(null,inst_10324__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10326 = cljs.core.get.call(null,inst_10324__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10327 = cljs.core.get.call(null,inst_10324__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10367__$1 = (function (){var statearr_10380 = state_10367;(statearr_10380[10] = inst_10324__$1);
(statearr_10380[11] = inst_10326);
(statearr_10380[12] = inst_10327);
return statearr_10380;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10367__$1,10,inst_10325);
} else
{if((state_val_10368 === 10))
{var inst_10332 = (state_10367[13]);var inst_10331 = (state_10367[14]);var inst_10330 = (state_10367[2]);var inst_10331__$1 = cljs.core.nth.call(null,inst_10330,0,null);var inst_10332__$1 = cljs.core.nth.call(null,inst_10330,1,null);var inst_10333 = (inst_10331__$1 == null);var inst_10334 = cljs.core._EQ_.call(null,inst_10332__$1,change);var inst_10335 = (inst_10333) || (inst_10334);var state_10367__$1 = (function (){var statearr_10381 = state_10367;(statearr_10381[13] = inst_10332__$1);
(statearr_10381[14] = inst_10331__$1);
return statearr_10381;
})();if(cljs.core.truth_(inst_10335))
{var statearr_10382_10415 = state_10367__$1;(statearr_10382_10415[1] = 11);
} else
{var statearr_10383_10416 = state_10367__$1;(statearr_10383_10416[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 11))
{var inst_10331 = (state_10367[14]);var inst_10337 = (inst_10331 == null);var state_10367__$1 = state_10367;if(cljs.core.truth_(inst_10337))
{var statearr_10384_10417 = state_10367__$1;(statearr_10384_10417[1] = 14);
} else
{var statearr_10385_10418 = state_10367__$1;(statearr_10385_10418[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 12))
{var inst_10332 = (state_10367[13]);var inst_10346 = (state_10367[15]);var inst_10327 = (state_10367[12]);var inst_10346__$1 = inst_10327.call(null,inst_10332);var state_10367__$1 = (function (){var statearr_10386 = state_10367;(statearr_10386[15] = inst_10346__$1);
return statearr_10386;
})();if(cljs.core.truth_(inst_10346__$1))
{var statearr_10387_10419 = state_10367__$1;(statearr_10387_10419[1] = 17);
} else
{var statearr_10388_10420 = state_10367__$1;(statearr_10388_10420[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 13))
{var inst_10363 = (state_10367[2]);var state_10367__$1 = state_10367;var statearr_10389_10421 = state_10367__$1;(statearr_10389_10421[2] = inst_10363);
(statearr_10389_10421[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 14))
{var inst_10332 = (state_10367[13]);var inst_10339 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10332);var state_10367__$1 = state_10367;var statearr_10390_10422 = state_10367__$1;(statearr_10390_10422[2] = inst_10339);
(statearr_10390_10422[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 15))
{var state_10367__$1 = state_10367;var statearr_10391_10423 = state_10367__$1;(statearr_10391_10423[2] = null);
(statearr_10391_10423[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 16))
{var inst_10342 = (state_10367[2]);var inst_10343 = calc_state.call(null);var inst_10316 = inst_10343;var state_10367__$1 = (function (){var statearr_10392 = state_10367;(statearr_10392[9] = inst_10316);
(statearr_10392[16] = inst_10342);
return statearr_10392;
})();var statearr_10393_10424 = state_10367__$1;(statearr_10393_10424[2] = null);
(statearr_10393_10424[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 17))
{var inst_10346 = (state_10367[15]);var state_10367__$1 = state_10367;var statearr_10394_10425 = state_10367__$1;(statearr_10394_10425[2] = inst_10346);
(statearr_10394_10425[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 18))
{var inst_10332 = (state_10367[13]);var inst_10326 = (state_10367[11]);var inst_10327 = (state_10367[12]);var inst_10349 = cljs.core.empty_QMARK_.call(null,inst_10327);var inst_10350 = inst_10326.call(null,inst_10332);var inst_10351 = cljs.core.not.call(null,inst_10350);var inst_10352 = (inst_10349) && (inst_10351);var state_10367__$1 = state_10367;var statearr_10395_10426 = state_10367__$1;(statearr_10395_10426[2] = inst_10352);
(statearr_10395_10426[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 19))
{var inst_10354 = (state_10367[2]);var state_10367__$1 = state_10367;if(cljs.core.truth_(inst_10354))
{var statearr_10396_10427 = state_10367__$1;(statearr_10396_10427[1] = 20);
} else
{var statearr_10397_10428 = state_10367__$1;(statearr_10397_10428[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 20))
{var inst_10331 = (state_10367[14]);var state_10367__$1 = state_10367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10367__$1,23,out,inst_10331);
} else
{if((state_val_10368 === 21))
{var state_10367__$1 = state_10367;var statearr_10398_10429 = state_10367__$1;(statearr_10398_10429[2] = null);
(statearr_10398_10429[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 22))
{var inst_10324 = (state_10367[10]);var inst_10360 = (state_10367[2]);var inst_10316 = inst_10324;var state_10367__$1 = (function (){var statearr_10399 = state_10367;(statearr_10399[17] = inst_10360);
(statearr_10399[9] = inst_10316);
return statearr_10399;
})();var statearr_10400_10430 = state_10367__$1;(statearr_10400_10430[2] = null);
(statearr_10400_10430[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10368 === 23))
{var inst_10357 = (state_10367[2]);var state_10367__$1 = state_10367;var statearr_10401_10431 = state_10367__$1;(statearr_10401_10431[2] = inst_10357);
(statearr_10401_10431[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_10403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10403[0] = state_machine__5405__auto__);
(statearr_10403[1] = 1);
return statearr_10403;
});
var state_machine__5405__auto____1 = (function (state_10367){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_10367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_10367){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_10367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_10404 = f__5418__auto__.call(null);(statearr_10404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto___10405);
return statearr_10404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10433 = {};return obj10433;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3403__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3403__auto__,mults){
return (function (p1__10434_SHARP_){if(cljs.core.truth_(p1__10434_SHARP_.call(null,topic)))
{return p1__10434_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10434_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10558 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10559){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10559 = meta10559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10558.cljs$lang$type = true;
cljs.core.async.t10558.cljs$lang$ctorStr = "cljs.core.async/t10558";
cljs.core.async.t10558.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10558");
});})(mults,ensure_mult))
;
cljs.core.async.t10558.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10558.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10558.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10558.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10558.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10558.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10560){var self__ = this;
var _10560__$1 = this;return self__.meta10559;
});})(mults,ensure_mult))
;
cljs.core.async.t10558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10560,meta10559__$1){var self__ = this;
var _10560__$1 = this;return (new cljs.core.async.t10558(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10559__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10558 = ((function (mults,ensure_mult){
return (function __GT_t10558(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10559){return (new cljs.core.async.t10558(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10559));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10558(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5417__auto___10681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_10633){var state_val_10634 = (state_10633[1]);if((state_val_10634 === 1))
{var state_10633__$1 = state_10633;var statearr_10635_10682 = state_10633__$1;(statearr_10635_10682[2] = null);
(statearr_10635_10682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 2))
{var state_10633__$1 = state_10633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10633__$1,4,ch);
} else
{if((state_val_10634 === 3))
{var inst_10631 = (state_10633[2]);var state_10633__$1 = state_10633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10633__$1,inst_10631);
} else
{if((state_val_10634 === 4))
{var inst_10563 = (state_10633[5]);var inst_10563__$1 = (state_10633[2]);var inst_10564 = (inst_10563__$1 == null);var state_10633__$1 = (function (){var statearr_10636 = state_10633;(statearr_10636[5] = inst_10563__$1);
return statearr_10636;
})();if(cljs.core.truth_(inst_10564))
{var statearr_10637_10683 = state_10633__$1;(statearr_10637_10683[1] = 5);
} else
{var statearr_10638_10684 = state_10633__$1;(statearr_10638_10684[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 5))
{var inst_10570 = cljs.core.deref.call(null,mults);var inst_10571 = cljs.core.vals.call(null,inst_10570);var inst_10572 = cljs.core.seq.call(null,inst_10571);var inst_10573 = inst_10572;var inst_10574 = null;var inst_10575 = 0;var inst_10576 = 0;var state_10633__$1 = (function (){var statearr_10639 = state_10633;(statearr_10639[6] = inst_10575);
(statearr_10639[7] = inst_10574);
(statearr_10639[8] = inst_10573);
(statearr_10639[9] = inst_10576);
return statearr_10639;
})();var statearr_10640_10685 = state_10633__$1;(statearr_10640_10685[2] = null);
(statearr_10640_10685[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 6))
{var inst_10613 = (state_10633[10]);var inst_10563 = (state_10633[5]);var inst_10611 = (state_10633[11]);var inst_10611__$1 = topic_fn.call(null,inst_10563);var inst_10612 = cljs.core.deref.call(null,mults);var inst_10613__$1 = cljs.core.get.call(null,inst_10612,inst_10611__$1);var state_10633__$1 = (function (){var statearr_10641 = state_10633;(statearr_10641[10] = inst_10613__$1);
(statearr_10641[11] = inst_10611__$1);
return statearr_10641;
})();if(cljs.core.truth_(inst_10613__$1))
{var statearr_10642_10686 = state_10633__$1;(statearr_10642_10686[1] = 19);
} else
{var statearr_10643_10687 = state_10633__$1;(statearr_10643_10687[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 7))
{var inst_10629 = (state_10633[2]);var state_10633__$1 = state_10633;var statearr_10644_10688 = state_10633__$1;(statearr_10644_10688[2] = inst_10629);
(statearr_10644_10688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 8))
{var inst_10575 = (state_10633[6]);var inst_10576 = (state_10633[9]);var inst_10578 = (inst_10576 < inst_10575);var inst_10579 = inst_10578;var state_10633__$1 = state_10633;if(cljs.core.truth_(inst_10579))
{var statearr_10648_10689 = state_10633__$1;(statearr_10648_10689[1] = 10);
} else
{var statearr_10649_10690 = state_10633__$1;(statearr_10649_10690[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 9))
{var inst_10609 = (state_10633[2]);var state_10633__$1 = state_10633;var statearr_10650_10691 = state_10633__$1;(statearr_10650_10691[2] = inst_10609);
(statearr_10650_10691[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 10))
{var inst_10575 = (state_10633[6]);var inst_10574 = (state_10633[7]);var inst_10573 = (state_10633[8]);var inst_10576 = (state_10633[9]);var inst_10581 = cljs.core._nth.call(null,inst_10574,inst_10576);var inst_10582 = cljs.core.async.muxch_STAR_.call(null,inst_10581);var inst_10583 = cljs.core.async.close_BANG_.call(null,inst_10582);var inst_10584 = (inst_10576 + 1);var tmp10645 = inst_10575;var tmp10646 = inst_10574;var tmp10647 = inst_10573;var inst_10573__$1 = tmp10647;var inst_10574__$1 = tmp10646;var inst_10575__$1 = tmp10645;var inst_10576__$1 = inst_10584;var state_10633__$1 = (function (){var statearr_10651 = state_10633;(statearr_10651[6] = inst_10575__$1);
(statearr_10651[7] = inst_10574__$1);
(statearr_10651[8] = inst_10573__$1);
(statearr_10651[9] = inst_10576__$1);
(statearr_10651[12] = inst_10583);
return statearr_10651;
})();var statearr_10652_10692 = state_10633__$1;(statearr_10652_10692[2] = null);
(statearr_10652_10692[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 11))
{var inst_10573 = (state_10633[8]);var inst_10587 = (state_10633[13]);var inst_10587__$1 = cljs.core.seq.call(null,inst_10573);var state_10633__$1 = (function (){var statearr_10653 = state_10633;(statearr_10653[13] = inst_10587__$1);
return statearr_10653;
})();if(inst_10587__$1)
{var statearr_10654_10693 = state_10633__$1;(statearr_10654_10693[1] = 13);
} else
{var statearr_10655_10694 = state_10633__$1;(statearr_10655_10694[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 12))
{var inst_10607 = (state_10633[2]);var state_10633__$1 = state_10633;var statearr_10656_10695 = state_10633__$1;(statearr_10656_10695[2] = inst_10607);
(statearr_10656_10695[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 13))
{var inst_10587 = (state_10633[13]);var inst_10589 = cljs.core.chunked_seq_QMARK_.call(null,inst_10587);var state_10633__$1 = state_10633;if(inst_10589)
{var statearr_10657_10696 = state_10633__$1;(statearr_10657_10696[1] = 16);
} else
{var statearr_10658_10697 = state_10633__$1;(statearr_10658_10697[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 14))
{var state_10633__$1 = state_10633;var statearr_10659_10698 = state_10633__$1;(statearr_10659_10698[2] = null);
(statearr_10659_10698[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 15))
{var inst_10605 = (state_10633[2]);var state_10633__$1 = state_10633;var statearr_10660_10699 = state_10633__$1;(statearr_10660_10699[2] = inst_10605);
(statearr_10660_10699[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 16))
{var inst_10587 = (state_10633[13]);var inst_10591 = cljs.core.chunk_first.call(null,inst_10587);var inst_10592 = cljs.core.chunk_rest.call(null,inst_10587);var inst_10593 = cljs.core.count.call(null,inst_10591);var inst_10573 = inst_10592;var inst_10574 = inst_10591;var inst_10575 = inst_10593;var inst_10576 = 0;var state_10633__$1 = (function (){var statearr_10661 = state_10633;(statearr_10661[6] = inst_10575);
(statearr_10661[7] = inst_10574);
(statearr_10661[8] = inst_10573);
(statearr_10661[9] = inst_10576);
return statearr_10661;
})();var statearr_10662_10700 = state_10633__$1;(statearr_10662_10700[2] = null);
(statearr_10662_10700[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 17))
{var inst_10587 = (state_10633[13]);var inst_10596 = cljs.core.first.call(null,inst_10587);var inst_10597 = cljs.core.async.muxch_STAR_.call(null,inst_10596);var inst_10598 = cljs.core.async.close_BANG_.call(null,inst_10597);var inst_10599 = cljs.core.next.call(null,inst_10587);var inst_10573 = inst_10599;var inst_10574 = null;var inst_10575 = 0;var inst_10576 = 0;var state_10633__$1 = (function (){var statearr_10663 = state_10633;(statearr_10663[6] = inst_10575);
(statearr_10663[7] = inst_10574);
(statearr_10663[8] = inst_10573);
(statearr_10663[14] = inst_10598);
(statearr_10663[9] = inst_10576);
return statearr_10663;
})();var statearr_10664_10701 = state_10633__$1;(statearr_10664_10701[2] = null);
(statearr_10664_10701[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 18))
{var inst_10602 = (state_10633[2]);var state_10633__$1 = state_10633;var statearr_10665_10702 = state_10633__$1;(statearr_10665_10702[2] = inst_10602);
(statearr_10665_10702[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 19))
{var state_10633__$1 = state_10633;var statearr_10666_10703 = state_10633__$1;(statearr_10666_10703[2] = null);
(statearr_10666_10703[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 20))
{var state_10633__$1 = state_10633;var statearr_10667_10704 = state_10633__$1;(statearr_10667_10704[2] = null);
(statearr_10667_10704[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 21))
{var inst_10626 = (state_10633[2]);var state_10633__$1 = (function (){var statearr_10668 = state_10633;(statearr_10668[15] = inst_10626);
return statearr_10668;
})();var statearr_10669_10705 = state_10633__$1;(statearr_10669_10705[2] = null);
(statearr_10669_10705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 22))
{var inst_10623 = (state_10633[2]);var state_10633__$1 = state_10633;var statearr_10670_10706 = state_10633__$1;(statearr_10670_10706[2] = inst_10623);
(statearr_10670_10706[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 23))
{var inst_10611 = (state_10633[11]);var inst_10615 = (state_10633[2]);var inst_10616 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10611);var state_10633__$1 = (function (){var statearr_10671 = state_10633;(statearr_10671[16] = inst_10615);
return statearr_10671;
})();var statearr_10672_10707 = state_10633__$1;(statearr_10672_10707[2] = inst_10616);
(statearr_10672_10707[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10634 === 24))
{try{var inst_10613 = (state_10633[10]);var inst_10563 = (state_10633[5]);var inst_10619 = cljs.core.async.muxch_STAR_.call(null,inst_10613);var state_10633__$1 = state_10633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10633__$1,25,inst_10619,inst_10563);
}catch (e10673){if((e10673 instanceof Object))
{var ex__5398__auto__ = e10673;var statearr_10674_10708 = state_10633;(statearr_10674_10708[1] = 23);
(statearr_10674_10708[2] = ex__5398__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10673;
} else
{return null;
}
}
}} else
{if((state_val_10634 === 25))
{try{var inst_10621 = (state_10633[2]);var state_10633__$1 = state_10633;var statearr_10677_10709 = state_10633__$1;(statearr_10677_10709[2] = inst_10621);
(statearr_10677_10709[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e10675){if((e10675 instanceof Object))
{var ex__5398__auto__ = e10675;var statearr_10676_10710 = state_10633;(statearr_10676_10710[1] = 23);
(statearr_10676_10710[2] = ex__5398__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10675;
} else
{return null;
}
}
}} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_10679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10679[0] = state_machine__5405__auto__);
(statearr_10679[1] = 1);
return statearr_10679;
});
var state_machine__5405__auto____1 = (function (state_10633){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_10633);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_10633){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_10633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_10680 = f__5418__auto__.call(null);(statearr_10680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto___10681);
return statearr_10680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,java.util.Arrays.copyOf.call(null,rets,cnt));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5417__auto___10841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_10813){var state_val_10814 = (state_10813[1]);if((state_val_10814 === 1))
{var state_10813__$1 = state_10813;var statearr_10815_10842 = state_10813__$1;(statearr_10815_10842[2] = null);
(statearr_10815_10842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 2))
{var inst_10777 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10778 = 0;var state_10813__$1 = (function (){var statearr_10816 = state_10813;(statearr_10816[5] = inst_10778);
(statearr_10816[6] = inst_10777);
return statearr_10816;
})();var statearr_10817_10843 = state_10813__$1;(statearr_10817_10843[2] = null);
(statearr_10817_10843[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 3))
{var inst_10811 = (state_10813[2]);var state_10813__$1 = state_10813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10813__$1,inst_10811);
} else
{if((state_val_10814 === 4))
{var inst_10778 = (state_10813[5]);var inst_10780 = (inst_10778 < cnt);var state_10813__$1 = state_10813;if(cljs.core.truth_(inst_10780))
{var statearr_10818_10844 = state_10813__$1;(statearr_10818_10844[1] = 6);
} else
{var statearr_10819_10845 = state_10813__$1;(statearr_10819_10845[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 5))
{var inst_10797 = (state_10813[2]);var state_10813__$1 = (function (){var statearr_10820 = state_10813;(statearr_10820[7] = inst_10797);
return statearr_10820;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10813__$1,12,dchan);
} else
{if((state_val_10814 === 6))
{var state_10813__$1 = state_10813;var statearr_10821_10846 = state_10813__$1;(statearr_10821_10846[2] = null);
(statearr_10821_10846[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 7))
{var state_10813__$1 = state_10813;var statearr_10822_10847 = state_10813__$1;(statearr_10822_10847[2] = null);
(statearr_10822_10847[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 8))
{var inst_10795 = (state_10813[2]);var state_10813__$1 = state_10813;var statearr_10823_10848 = state_10813__$1;(statearr_10823_10848[2] = inst_10795);
(statearr_10823_10848[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 9))
{var inst_10778 = (state_10813[5]);var inst_10790 = (state_10813[2]);var inst_10791 = (inst_10778 + 1);var inst_10778__$1 = inst_10791;var state_10813__$1 = (function (){var statearr_10824 = state_10813;(statearr_10824[5] = inst_10778__$1);
(statearr_10824[8] = inst_10790);
return statearr_10824;
})();var statearr_10825_10849 = state_10813__$1;(statearr_10825_10849[2] = null);
(statearr_10825_10849[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 10))
{var inst_10782 = (state_10813[2]);var inst_10783 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10813__$1 = (function (){var statearr_10826 = state_10813;(statearr_10826[9] = inst_10782);
return statearr_10826;
})();var statearr_10827_10850 = state_10813__$1;(statearr_10827_10850[2] = inst_10783);
(statearr_10827_10850[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 11))
{try{var inst_10778 = (state_10813[5]);var inst_10786 = chs__$1.call(null,inst_10778);var inst_10787 = done.call(null,inst_10778);var inst_10788 = cljs.core.async.take_BANG_.call(null,inst_10786,inst_10787);var state_10813__$1 = state_10813;var statearr_10830_10851 = state_10813__$1;(statearr_10830_10851[2] = inst_10788);
(statearr_10830_10851[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e10828){if((e10828 instanceof Object))
{var ex__5398__auto__ = e10828;var statearr_10829_10852 = state_10813;(statearr_10829_10852[1] = 10);
(statearr_10829_10852[2] = ex__5398__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10828;
} else
{return null;
}
}
}} else
{if((state_val_10814 === 12))
{var inst_10799 = (state_10813[10]);var inst_10799__$1 = (state_10813[2]);var inst_10800 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10799__$1);var state_10813__$1 = (function (){var statearr_10831 = state_10813;(statearr_10831[10] = inst_10799__$1);
return statearr_10831;
})();if(cljs.core.truth_(inst_10800))
{var statearr_10832_10853 = state_10813__$1;(statearr_10832_10853[1] = 13);
} else
{var statearr_10833_10854 = state_10813__$1;(statearr_10833_10854[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 13))
{var inst_10802 = cljs.core.async.close_BANG_.call(null,out);var state_10813__$1 = state_10813;var statearr_10834_10855 = state_10813__$1;(statearr_10834_10855[2] = inst_10802);
(statearr_10834_10855[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 14))
{var inst_10799 = (state_10813[10]);var inst_10804 = cljs.core.apply.call(null,f,inst_10799);var state_10813__$1 = state_10813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10813__$1,16,out,inst_10804);
} else
{if((state_val_10814 === 15))
{var inst_10809 = (state_10813[2]);var state_10813__$1 = state_10813;var statearr_10835_10856 = state_10813__$1;(statearr_10835_10856[2] = inst_10809);
(statearr_10835_10856[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 16))
{var inst_10806 = (state_10813[2]);var state_10813__$1 = (function (){var statearr_10836 = state_10813;(statearr_10836[11] = inst_10806);
return statearr_10836;
})();var statearr_10837_10857 = state_10813__$1;(statearr_10837_10857[2] = null);
(statearr_10837_10857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_10839 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10839[0] = state_machine__5405__auto__);
(statearr_10839[1] = 1);
return statearr_10839;
});
var state_machine__5405__auto____1 = (function (state_10813){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_10813);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_10813){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_10813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_10840 = f__5418__auto__.call(null);(statearr_10840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto___10841);
return statearr_10840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5417__auto___10957 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_10937){var state_val_10938 = (state_10937[1]);if((state_val_10938 === 1))
{var inst_10908 = cljs.core.vec.call(null,chs);var inst_10909 = inst_10908;var state_10937__$1 = (function (){var statearr_10939 = state_10937;(statearr_10939[5] = inst_10909);
return statearr_10939;
})();var statearr_10940_10958 = state_10937__$1;(statearr_10940_10958[2] = null);
(statearr_10940_10958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10938 === 2))
{var inst_10909 = (state_10937[5]);var inst_10911 = cljs.core.count.call(null,inst_10909);var inst_10912 = (inst_10911 > 0);var state_10937__$1 = state_10937;if(cljs.core.truth_(inst_10912))
{var statearr_10941_10959 = state_10937__$1;(statearr_10941_10959[1] = 4);
} else
{var statearr_10942_10960 = state_10937__$1;(statearr_10942_10960[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10938 === 3))
{var inst_10935 = (state_10937[2]);var state_10937__$1 = state_10937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10937__$1,inst_10935);
} else
{if((state_val_10938 === 4))
{var inst_10909 = (state_10937[5]);var state_10937__$1 = state_10937;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10937__$1,7,inst_10909);
} else
{if((state_val_10938 === 5))
{var inst_10931 = cljs.core.async.close_BANG_.call(null,out);var state_10937__$1 = state_10937;var statearr_10943_10961 = state_10937__$1;(statearr_10943_10961[2] = inst_10931);
(statearr_10943_10961[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10938 === 6))
{var inst_10933 = (state_10937[2]);var state_10937__$1 = state_10937;var statearr_10944_10962 = state_10937__$1;(statearr_10944_10962[2] = inst_10933);
(statearr_10944_10962[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10938 === 7))
{var inst_10916 = (state_10937[6]);var inst_10917 = (state_10937[7]);var inst_10916__$1 = (state_10937[2]);var inst_10917__$1 = cljs.core.nth.call(null,inst_10916__$1,0,null);var inst_10918 = cljs.core.nth.call(null,inst_10916__$1,1,null);var inst_10919 = (inst_10917__$1 == null);var state_10937__$1 = (function (){var statearr_10945 = state_10937;(statearr_10945[6] = inst_10916__$1);
(statearr_10945[7] = inst_10917__$1);
(statearr_10945[8] = inst_10918);
return statearr_10945;
})();if(cljs.core.truth_(inst_10919))
{var statearr_10946_10963 = state_10937__$1;(statearr_10946_10963[1] = 8);
} else
{var statearr_10947_10964 = state_10937__$1;(statearr_10947_10964[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10938 === 8))
{var inst_10909 = (state_10937[5]);var inst_10916 = (state_10937[6]);var inst_10917 = (state_10937[7]);var inst_10918 = (state_10937[8]);var inst_10921 = (function (){var c = inst_10918;var v = inst_10917;var vec__10914 = inst_10916;var cs = inst_10909;return ((function (c,v,vec__10914,cs,inst_10909,inst_10916,inst_10917,inst_10918,state_val_10938){
return (function (p1__10858_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__10858_SHARP_);
});
;})(c,v,vec__10914,cs,inst_10909,inst_10916,inst_10917,inst_10918,state_val_10938))
})();var inst_10922 = cljs.core.filterv.call(null,inst_10921,inst_10909);var inst_10909__$1 = inst_10922;var state_10937__$1 = (function (){var statearr_10948 = state_10937;(statearr_10948[5] = inst_10909__$1);
return statearr_10948;
})();var statearr_10949_10965 = state_10937__$1;(statearr_10949_10965[2] = null);
(statearr_10949_10965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10938 === 9))
{var inst_10917 = (state_10937[7]);var state_10937__$1 = state_10937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10937__$1,11,out,inst_10917);
} else
{if((state_val_10938 === 10))
{var inst_10929 = (state_10937[2]);var state_10937__$1 = state_10937;var statearr_10951_10966 = state_10937__$1;(statearr_10951_10966[2] = inst_10929);
(statearr_10951_10966[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10938 === 11))
{var inst_10909 = (state_10937[5]);var inst_10926 = (state_10937[2]);var tmp10950 = inst_10909;var inst_10909__$1 = tmp10950;var state_10937__$1 = (function (){var statearr_10952 = state_10937;(statearr_10952[5] = inst_10909__$1);
(statearr_10952[9] = inst_10926);
return statearr_10952;
})();var statearr_10953_10967 = state_10937__$1;(statearr_10953_10967[2] = null);
(statearr_10953_10967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_10955 = [null,null,null,null,null,null,null,null,null,null];(statearr_10955[0] = state_machine__5405__auto__);
(statearr_10955[1] = 1);
return statearr_10955;
});
var state_machine__5405__auto____1 = (function (state_10937){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_10937);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_10937){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_10937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_10956 = f__5418__auto__.call(null);(statearr_10956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto___10957);
return statearr_10956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
