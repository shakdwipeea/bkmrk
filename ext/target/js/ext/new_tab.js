// Compiled by ClojureScript 0.0-2156
goog.provide('ext.new_tab');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('khroma.log');
goog.require('khroma.log');
goog.require('khroma.runtime');
goog.require('khroma.runtime');
ext.new_tab.init = (function init(){var bg = khroma.runtime.connect.call(null);var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_7861){var state_val_7862 = (state_7861[1]);if((state_val_7862 === 3))
{var inst_7858 = (state_7861[2]);var inst_7859 = khroma.log.log.call(null,"Background said to a new tab: ",inst_7858);var state_7861__$1 = state_7861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7861__$1,inst_7859);
} else
{if((state_val_7862 === 2))
{var inst_7856 = (state_7861[2]);var state_7861__$1 = (function (){var statearr_7863 = state_7861;(statearr_7863[5] = inst_7856);
return statearr_7863;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7861__$1,3,bg);
} else
{if((state_val_7862 === 1))
{var state_7861__$1 = state_7861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7861__$1,2,bg,new cljs.core.Keyword(null,"lol-i-am-a-new-tab","lol-i-am-a-new-tab",3368182133));
} else
{return null;
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_7865 = [null,null,null,null,null,null];(statearr_7865[0] = state_machine__5405__auto__);
(statearr_7865[1] = 1);
return statearr_7865;
});
var state_machine__5405__auto____1 = (function (state_7861){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_7861);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_7861){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_7861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_7866 = f__5418__auto__.call(null);(statearr_7866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_7866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
});
