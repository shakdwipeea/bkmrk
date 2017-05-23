// Compiled by ClojureScript 0.0-2156
goog.provide('khroma.log');
goog.require('cljs.core');
khroma.log.console_fn = (function console_fn(f){return (function() { 
var G__8908__delegate = function (args){return f.apply(console,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,args)));
};
var G__8908 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8908__delegate.call(this,args);};
G__8908.cljs$lang$maxFixedArity = 0;
G__8908.cljs$lang$applyTo = (function (arglist__8909){
var args = cljs.core.seq(arglist__8909);
return G__8908__delegate(args);
});
G__8908.cljs$core$IFn$_invoke$arity$variadic = G__8908__delegate;
return G__8908;
})()
;
});
khroma.log.assert = khroma.log.console_fn.call(null,console.assert);
khroma.log.clear = khroma.log.console_fn.call(null,console.clear);
khroma.log.count = khroma.log.console_fn.call(null,console.count);
khroma.log.debug = khroma.log.console_fn.call(null,console.debug);
khroma.log.dir = khroma.log.console_fn.call(null,console.dir);
khroma.log.dirxml = khroma.log.console_fn.call(null,console.dirxml);
khroma.log.error = khroma.log.console_fn.call(null,console.error);
khroma.log.group = khroma.log.console_fn.call(null,console.group);
khroma.log.group_collapsed = khroma.log.console_fn.call(null,console.groupCollapsed);
khroma.log.group_end = khroma.log.console_fn.call(null,console.groupEnd);
khroma.log.info = khroma.log.console_fn.call(null,console.info);
khroma.log.log = khroma.log.console_fn.call(null,console.log);
khroma.log.profile = khroma.log.console_fn.call(null,console.profile);
khroma.log.profile_end = khroma.log.console_fn.call(null,console.profileEnd);
khroma.log.time = khroma.log.console_fn.call(null,console.time);
khroma.log.time_end = khroma.log.console_fn.call(null,console.timeEnd);
khroma.log.time_stamp = khroma.log.console_fn.call(null,console.timeStamp);
khroma.log.trace = khroma.log.console_fn.call(null,console.trace);
khroma.log.warn = khroma.log.console_fn.call(null,console.warn);
