// Compiled by ClojureScript 0.0-2156
goog.provide('ext.background');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('khroma.runtime');
goog.require('khroma.runtime');
goog.require('khroma.log');
goog.require('khroma.log');
ext.background.init = (function init(){var c__5417__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5418__auto__ = (function (){var switch__5404__auto__ = (function (state_7811){var state_val_7812 = (state_7811[1]);if((state_val_7812 === 4))
{var inst_7808 = (state_7811[2]);var inst_7809 = init.call(null);var state_7811__$1 = (function (){var statearr_7813 = state_7811;(statearr_7813[5] = inst_7808);
return statearr_7813;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7811__$1,inst_7809);
} else
{if((state_val_7812 === 3))
{var inst_7803 = (state_7811[6]);var inst_7805 = (state_7811[2]);var inst_7806 = khroma.log.log.call(null,"Content script said: ",inst_7805);var state_7811__$1 = (function (){var statearr_7814 = state_7811;(statearr_7814[7] = inst_7806);
return statearr_7814;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7811__$1,4,inst_7803,new cljs.core.Keyword(null,"fml-i-am-the-background-script","fml-i-am-the-background-script",1972665259));
} else
{if((state_val_7812 === 2))
{var inst_7803 = (state_7811[6]);var inst_7803__$1 = (state_7811[2]);var state_7811__$1 = (function (){var statearr_7815 = state_7811;(statearr_7815[6] = inst_7803__$1);
return statearr_7815;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7811__$1,3,inst_7803__$1);
} else
{if((state_val_7812 === 1))
{var inst_7801 = khroma.runtime.connections.call(null);var state_7811__$1 = state_7811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7811__$1,2,inst_7801);
} else
{return null;
}
}
}
}
});return ((function (switch__5404__auto__){
return (function() {
var state_machine__5405__auto__ = null;
var state_machine__5405__auto____0 = (function (){var statearr_7817 = [null,null,null,null,null,null,null,null];(statearr_7817[0] = state_machine__5405__auto__);
(statearr_7817[1] = 1);
return statearr_7817;
});
var state_machine__5405__auto____1 = (function (state_7811){while(true){
var result__5406__auto__ = switch__5404__auto__.call(null,state_7811);if(cljs.core.keyword_identical_QMARK_.call(null,result__5406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5406__auto__;
}
break;
}
});
state_machine__5405__auto__ = function(state_7811){
switch(arguments.length){
case 0:
return state_machine__5405__auto____0.call(this);
case 1:
return state_machine__5405__auto____1.call(this,state_7811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5405__auto____0;
state_machine__5405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5405__auto____1;
return state_machine__5405__auto__;
})()
;})(switch__5404__auto__))
})();var state__5419__auto__ = (function (){var statearr_7818 = f__5418__auto__.call(null);(statearr_7818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5417__auto__);
return statearr_7818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5419__auto__);
}));
return c__5417__auto__;
});
