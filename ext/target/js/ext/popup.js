// Compiled by ClojureScript 0.0-2156
goog.provide('ext.popup');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('khroma.log');
goog.require('khroma.log');
goog.require('khroma.runtime');
goog.require('khroma.runtime');
ext.popup.init = (function init(){var bg = khroma.runtime.connect.call(null);var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_7777){var state_val_7778 = (state_7777[1]);if((state_val_7778 === 3))
{var inst_7774 = (state_7777[2]);var inst_7775 = khroma.log.log.call(null,"Background said: ",inst_7774);var state_7777__$1 = state_7777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7777__$1,inst_7775);
} else
{if((state_val_7778 === 2))
{var inst_7772 = (state_7777[2]);var state_7777__$1 = (function (){var statearr_7779 = state_7777;(statearr_7779[5] = inst_7772);
return statearr_7779;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7777__$1,3,bg);
} else
{if((state_val_7778 === 1))
{var state_7777__$1 = state_7777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7777__$1,2,bg,new cljs.core.Keyword(null,"lol-i-am-a-popup","lol-i-am-a-popup",951455481));
} else
{return null;
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_7781 = [null,null,null,null,null,null];(statearr_7781[0] = state_machine__5405__auto__);
(statearr_7781[1] = 1);
return statearr_7781;
});
var state_machine__5405__auto____1 = (function (state_7777){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_7777);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_7777){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_7777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_7782 = f__5418__auto__.call(null);(statearr_7782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_7782;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
});
