// Compiled by ClojureScript 0.0-2156
goog.provide('khroma.runtime');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('khroma.log');
goog.require('khroma.log');
khroma.runtime.available_QMARK_ = !((chrome.runtime == null));
khroma.runtime.manifest = (new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return cljs.core.js__GT_clj.call(null,chrome.runtime.getManifest());
})));
khroma.runtime.options__GT_jsparams = (function options__GT_jsparams(options){return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),options)));
});
khroma.runtime.chan = cljs.core.partial.call(null,cljs.core.async.chan,100);
khroma.runtime.IChromePort = (function (){var obj8911 = {};return obj8911;
})();
khroma.runtime.port_name = (function port_name(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.khroma$runtime$IChromePort$port_name$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.khroma$runtime$IChromePort$port_name$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (khroma.runtime.port_name[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (khroma.runtime.port_name["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChromePort.port-name",this$);
}
}
})().call(null,this$);
}
});
khroma.runtime.channel_from_port = (function channel_from_port(port){var in$ = khroma.runtime.chan.call(null);var out = khroma.runtime.chan.call(null);var c__5417__auto___8996 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_8970){var state_val_8971 = (state_8970[1]);if((state_val_8971 === 8))
{var inst_8962 = (state_8970[2]);var inst_8956 = inst_8962;var state_8970__$1 = (function (){var statearr_8972 = state_8970;(statearr_8972[5] = inst_8956);
return statearr_8972;
})();var statearr_8973_8997 = state_8970__$1;(statearr_8973_8997[2] = null);
(statearr_8973_8997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8971 === 7))
{var inst_8966 = (state_8970[2]);var state_8970__$1 = state_8970;var statearr_8974_8998 = state_8970__$1;(statearr_8974_8998[2] = inst_8966);
(statearr_8974_8998[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8971 === 6))
{var state_8970__$1 = state_8970;var statearr_8975_8999 = state_8970__$1;(statearr_8975_8999[2] = null);
(statearr_8975_8999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8971 === 5))
{var inst_8956 = (state_8970[5]);var inst_8959 = cljs.core.clj__GT_js.call(null,inst_8956);var inst_8960 = port.postMessage(inst_8959);var state_8970__$1 = (function (){var statearr_8976 = state_8970;(statearr_8976[6] = inst_8960);
return statearr_8976;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8970__$1,8,out);
} else
{if((state_val_8971 === 4))
{var inst_8968 = (state_8970[2]);var state_8970__$1 = state_8970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8970__$1,inst_8968);
} else
{if((state_val_8971 === 3))
{var inst_8956 = (state_8970[5]);var state_8970__$1 = state_8970;if(cljs.core.truth_(inst_8956))
{var statearr_8977_9000 = state_8970__$1;(statearr_8977_9000[1] = 5);
} else
{var statearr_8978_9001 = state_8970__$1;(statearr_8978_9001[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8971 === 2))
{var inst_8955 = (state_8970[2]);var inst_8956 = inst_8955;var state_8970__$1 = (function (){var statearr_8979 = state_8970;(statearr_8979[5] = inst_8956);
return statearr_8979;
})();var statearr_8980_9002 = state_8970__$1;(statearr_8980_9002[2] = null);
(statearr_8980_9002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8971 === 1))
{var state_8970__$1 = state_8970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8970__$1,2,out);
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
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_8982 = [null,null,null,null,null,null,null];(statearr_8982[0] = state_machine__5405__auto__);
(statearr_8982[1] = 1);
return statearr_8982;
});
var state_machine__5405__auto____1 = (function (state_8970){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_8970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_8970){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_8970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_8983 = f__5418__auto__.call(null);(statearr_8983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto___8996);
return statearr_8983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
port.onMessage.addListener((function (message,sender,response_fn){var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_8988){var state_val_8989 = (state_8988[1]);if((state_val_8989 === 2))
{var inst_8986 = (state_8988[2]);var state_8988__$1 = state_8988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8988__$1,inst_8986);
} else
{if((state_val_8989 === 1))
{var inst_8984 = cljs.core.js__GT_clj.call(null,message);var state_8988__$1 = state_8988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8988__$1,2,in$,inst_8984);
} else
{return null;
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_8991 = [null,null,null,null,null];(statearr_8991[0] = state_machine__5405__auto__);
(statearr_8991[1] = 1);
return statearr_8991;
});
var state_machine__5405__auto____1 = (function (state_8988){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_8988);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_8988){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_8988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_8992 = f__5418__auto__.call(null);(statearr_8992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_8992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
}));
port.onDisconnect.addListener((function (){cljs.core.async.close_BANG_.call(null,in$);
return cljs.core.async.close_BANG_.call(null,out);
}));
if(typeof khroma.runtime.t8993 !== 'undefined')
{} else
{
/**
* @constructor
*/
khroma.runtime.t8993 = (function (out,in$,port,channel_from_port,meta8994){
this.out = out;
this.in$ = in$;
this.port = port;
this.channel_from_port = channel_from_port;
this.meta8994 = meta8994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
khroma.runtime.t8993.cljs$lang$type = true;
khroma.runtime.t8993.cljs$lang$ctorStr = "khroma.runtime/t8993";
khroma.runtime.t8993.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"khroma.runtime/t8993");
});
khroma.runtime.t8993.prototype.khroma$runtime$IChromePort$ = true;
khroma.runtime.t8993.prototype.khroma$runtime$IChromePort$port_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.port.name;
});
khroma.runtime.t8993.prototype.cljs$core$async$impl$protocols$Channel$ = true;
khroma.runtime.t8993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.close_BANG_.call(null,self__.in$);
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.out);
return self__.port.disconnect();
});
khroma.runtime.t8993.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
khroma.runtime.t8993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,message,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.out,message,handler);
});
khroma.runtime.t8993.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
khroma.runtime.t8993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.in$,handler);
});
khroma.runtime.t8993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8995){var self__ = this;
var _8995__$1 = this;return self__.meta8994;
});
khroma.runtime.t8993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8995,meta8994__$1){var self__ = this;
var _8995__$1 = this;return (new khroma.runtime.t8993(self__.out,self__.in$,self__.port,self__.channel_from_port,meta8994__$1));
});
khroma.runtime.__GT_t8993 = (function __GT_t8993(out__$1,in$__$1,port__$1,channel_from_port__$1,meta8994){return (new khroma.runtime.t8993(out__$1,in$__$1,port__$1,channel_from_port__$1,meta8994));
});
}
return (new khroma.runtime.t8993(out,in$,port,channel_from_port,null));
});
/**
* @param {...*} var_args
*/
khroma.runtime.connect = (function() { 
var connect__delegate = function (options){return khroma.runtime.channel_from_port.call(null,(function (){var map__9004 = cljs.core.apply.call(null,cljs.core.hash_map,options);var map__9004__$1 = ((cljs.core.seq_QMARK_.call(null,map__9004))?cljs.core.apply.call(null,cljs.core.hash_map,map__9004):map__9004);var connectInfo = cljs.core.get.call(null,map__9004__$1,new cljs.core.Keyword(null,"connectInfo","connectInfo",2737553450));var extensionId = cljs.core.get.call(null,map__9004__$1,new cljs.core.Keyword(null,"extensionId","extensionId",756417836));return chrome.runtime.connect.apply(chrome.runtime,khroma.runtime.options__GT_jsparams.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [extensionId,connectInfo], null)));
})());
};
var connect = function (var_args){
var options = null;if (arguments.length > 0) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return connect__delegate.call(this,options);};
connect.cljs$lang$maxFixedArity = 0;
connect.cljs$lang$applyTo = (function (arglist__9005){
var options = cljs.core.seq(arglist__9005);
return connect__delegate(options);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
khroma.runtime.connections = (function connections(){var c = khroma.runtime.chan.call(null);chrome.runtime.onConnect.addListener((function (port){var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_9019){var state_val_9020 = (state_9019[1]);if((state_val_9020 === 2))
{var inst_9017 = (state_9019[2]);var state_9019__$1 = state_9019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9019__$1,inst_9017);
} else
{if((state_val_9020 === 1))
{var inst_9015 = khroma.runtime.channel_from_port.call(null,port);var state_9019__$1 = state_9019;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9019__$1,2,c,inst_9015);
} else
{return null;
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_9022 = [null,null,null,null,null];(statearr_9022[0] = state_machine__5405__auto__);
(statearr_9022[1] = 1);
return statearr_9022;
});
var state_machine__5405__auto____1 = (function (state_9019){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_9019);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_9019){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_9019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_9023 = f__5418__auto__.call(null);(statearr_9023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_9023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
}));
return c;
});
khroma.runtime.message_event = (function message_event(message,sender,response_fn){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",1968829305),cljs.core.js__GT_clj.call(null,message),new cljs.core.Keyword(null,"sender","sender",4402908583),cljs.core.js__GT_clj.call(null,sender),new cljs.core.Keyword(null,"response-fn","response-fn",2861408582),response_fn], null);
});
khroma.runtime.messages = (function messages(){var ch = khroma.runtime.chan.call(null);chrome.runtime.onMessage.addListener((function (message,sender,reply_fn){var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_9037){var state_val_9038 = (state_9037[1]);if((state_val_9038 === 2))
{var inst_9035 = (state_9037[2]);var state_9037__$1 = state_9037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9037__$1,inst_9035);
} else
{if((state_val_9038 === 1))
{var inst_9033 = khroma.runtime.message_event.call(null,message,sender,reply_fn);var state_9037__$1 = state_9037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9037__$1,2,ch,inst_9033);
} else
{return null;
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_9040 = [null,null,null,null,null];(statearr_9040[0] = state_machine__5405__auto__);
(statearr_9040[1] = 1);
return statearr_9040;
});
var state_machine__5405__auto____1 = (function (state_9037){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_9037);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_9037){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_9037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_9041 = f__5418__auto__.call(null);(statearr_9041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_9041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
}));
return ch;
});
/**
* @param {...*} var_args
*/
khroma.runtime.send_message = (function() { 
var send_message__delegate = function (message,options){var map__9043 = cljs.core.apply.call(null,cljs.core.hash_map,options);var map__9043__$1 = ((cljs.core.seq_QMARK_.call(null,map__9043))?cljs.core.apply.call(null,cljs.core.hash_map,map__9043):map__9043);var responseCallback = cljs.core.get.call(null,map__9043__$1,new cljs.core.Keyword(null,"responseCallback","responseCallback",2026421016));var options__$1 = cljs.core.get.call(null,map__9043__$1,new cljs.core.Keyword(null,"options","options",4059396624));var extensionId = cljs.core.get.call(null,map__9043__$1,new cljs.core.Keyword(null,"extensionId","extensionId",756417836));return chrome.runtime.sendMessage.apply(chrome.runtime,khroma.runtime.options__GT_jsparams.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [extensionId,message,options__$1,responseCallback], null)));
};
var send_message = function (message,var_args){
var options = null;if (arguments.length > 1) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return send_message__delegate.call(this,message,options);};
send_message.cljs$lang$maxFixedArity = 1;
send_message.cljs$lang$applyTo = (function (arglist__9044){
var message = cljs.core.first(arglist__9044);
var options = cljs.core.rest(arglist__9044);
return send_message__delegate(message,options);
});
send_message.cljs$core$IFn$_invoke$arity$variadic = send_message__delegate;
return send_message;
})()
;
