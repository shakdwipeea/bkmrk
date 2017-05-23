// Compiled by ClojureScript 0.0-2156
goog.provide('ext.content');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('khroma.log');
goog.require('khroma.log');
goog.require('khroma.runtime');
goog.require('khroma.runtime');
ext.content.init = (function init(){var bg = khroma.runtime.connect.call(null);var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_7837){var state_val_7838 = (state_7837[1]);if((state_val_7838 === 3))
{var inst_7834 = (state_7837[2]);var inst_7835 = khroma.log.log.call(null,"Background said: ",inst_7834);var state_7837__$1 = state_7837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7837__$1,inst_7835);
} else
{if((state_val_7838 === 2))
{var inst_7832 = (state_7837[2]);var state_7837__$1 = (function (){var statearr_7839 = state_7837;(statearr_7839[5] = inst_7832);
return statearr_7839;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7837__$1,3,bg);
} else
{if((state_val_7838 === 1))
{var state_7837__$1 = state_7837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7837__$1,2,bg,new cljs.core.Keyword(null,"lol-i-am-a-content-script","lol-i-am-a-content-script",4090235798));
} else
{return null;
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_7841 = [null,null,null,null,null,null];(statearr_7841[0] = state_machine__5405__auto__);
(statearr_7841[1] = 1);
return statearr_7841;
});
var state_machine__5405__auto____1 = (function (state_7837){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_7837);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_7837){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_7837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_7842 = f__5418__auto__.call(null);(statearr_7842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_7842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
});
