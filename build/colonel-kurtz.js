module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0,n(38);var o=n(16),a=r(o);e["default"]=a["default"],t.exports=e["default"]},function(t,e,n){t.exports=require("react")},function(t,e,n){function r(){for(var t,e="",n=0;n<arguments.length;n++)if(t=arguments[n])if("string"==typeof t||"number"==typeof t)e+=" "+t;else if("[object Array]"===Object.prototype.toString.call(t))e+=" "+r.apply(null,t);else if("object"==typeof t)for(var o in t)t.hasOwnProperty(o)&&t[o]&&(e+=" "+o);return e.substr(1)}"undefined"!=typeof t&&t.exports&&(t.exports=r)},function(t,e,n){"use strict";e.__esModule=!0;var r=n(13);e["default"]=r.tag({create:function(t,e,n){return{type:t,position:e,parent:n}},destroy:function(t){return t},update:function(t,e){return{id:t,content:e}},shift:function(t,e){return{id:t,delta:e}}}),t.exports=e["default"]},,,,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n};e.__esModule=!0;var a=n(1),u=r(a),i=n(42),s=r(i),l=u["default"].createClass({displayName:"Button",getDefaultProps:function(){return{className:"col-btn",hide:!1,tagName:"button",type:"button"}},render:function(){var t=this.props,e=t.children,n=t.hide,r=t.tagName,a=o(t,["children","hide","tagName"]);return n?null:u["default"].createElement(r,a,[u["default"].createElement(s["default"],{key:"__ink__"}),e])}});e["default"]=l,t.exports=e["default"]},,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(3),a=r(o),u=n(1),i=r(u),s=n(22),l=r(s),c=n(21),f=r(c),p=n(2),d=r(p);e["default"]=i["default"].createClass({displayName:"Switch",propTypes:{app:i["default"].PropTypes.object.isRequired},getInitialState:function(){return{open:!1}},componentWillReceiveProps:function(){this.setState({open:!1})},getTypes:function(){var t=this.props,e=t.app,n=t.parent,r=e.pull("blockTypes");if(!n)return r;var o=function(){var t=r.filter(function(t){return t.id===n.type})[0].types;return{v:r.filter(function(e){return t.indexOf(e.id)>-1})}}();return"object"==typeof o?o.v:void 0},render:function(){var t=this.props,e=t.app,n=t.forceOpen,r=t.parent,o=t.position,a=this.getTypes(),u=n||this.state.open;return a.length?i["default"].createElement("div",{className:d["default"]("col-switch",{"col-switch-open":u})},i["default"].createElement(l["default"],{onClick:this._onToggle,secondary:r,hide:u}),i["default"].createElement(f["default"],{app:e,blockTypes:a,parent:r,hide:!u,position:o})):null},_onToggle:function(){var t=this.getTypes();if(1===t.length){var e=this.props,n=e.app,r=e.position,o=e.parent;n.push(a["default"].create,t[0].id,r,o)}this.setState({open:!0})}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};e.__esModule=!0;var a=n(36),u=r(a),i=function(){function t(e){o(this,t),this.id=u["default"](),this.content=e.content,this.parent=e.parent,this.type=e.type}return t.prototype.valueOf=function(){return this.id},t}();e["default"]=i,t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]=function(t,e){var n=void 0===arguments[2]?"id":arguments[2],r=t.filter(function(t){return t[n]==e});if(r.length)return r[0];throw new Error("Unable to find record with "+n+" of "+e)},t.exports=e["default"]},function(t,e,n){"use strict";function r(t,e){return t.filter(e.parent?function(t){return t.parent===e.parent}:function(t){return!t.parent})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";e.__esModule=!0;var r=n(11);e.tag=r,e["default"]=n(4)},function(t,e,n){"use strict";function r(t,e){if(!t){var n=new Error(e);throw n.framesToPop=1,n}}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,n){"use strict";function r(t,e){var n=void 0===arguments[2]?{}:arguments[2],r=Object.keys(t);return r.reduce(function(n,r){return n[r]=e(t[r],r),n},n)}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(1),a=r(o);e["default"]={validate:function(t){a["default"]("function"==typeof t,"Action "+t+" is not callable, actions should be functions")}},t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};e.__esModule=!0;var u=n(3),i=r(u),s=n(12),l=r(s),c=n(5),f=r(c),p=n(6),d=r(p),h=n(1),v=r(h),m=n(7),g=r(m),_=n(8),y=r(_),b=n(9),x=r(b),k=n(2),M=r(k),w=n(10),T=r(w),O=function(){function t(){a(this,t),l["default"].decorate(this),this._state={},this._stores={},this._plugins=[]}return t.prototype.push=function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];i["default"].validate(t);var a=t.apply(void 0,r);return a instanceof Promise?a.then(function(n){return e.dispatch(t,n)}):this.dispatch(t,a)},t.prototype.pull=function(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;n>o;o++)r[o-2]=arguments[o];var a=y["default"](this._state,t);return"function"==typeof e?e.call.apply(e,[this,a].concat(r)):a},t.prototype.prepare=function(t){for(var e,n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];return i["default"].validate(t),(e=this.push).bind.apply(e,[this,t].concat(r))},t.prototype.replace=function(t){this.commit(this.deserialize(t))},t.prototype.commit=function(t){this._state=t,this.emit()},t.prototype.dispatch=function(t,e){var n=this,r=T["default"](this._stores,function(e){return t in e});return Object.keys(r).length>0&&!function(){var o=g["default"](n._state),a=M["default"](r,function(n){return n[t](o[n],e)},o);n.commit(a)}(),e},t.prototype.addPlugin=function(t,e){f["default"].validate(t),this._plugins.push([t,e])},t.prototype.addStore=function(t){var e=o({},d["default"],t);v["default"](!this._stores[t],'Tried to add "'+t+'" but it is not unique'),this._stores[e]=e},t.prototype.serialize=function(){var t=this;return M["default"](this._stores,function(e){return e.serialize(t.pull(e))})},t.prototype.deserialize=function(){var t=void 0===arguments[0]?{}:arguments[0];return M["default"](this._stores,function(e){return e.deserialize(t[e])})},t.prototype.toJSON=function(){return this.serialize()},t.prototype.toObject=function(){return T["default"](this._state,function(){return!0})},t.prototype.start=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];this._state=M["default"](this._stores,function(t){return t.getInitialState()}),x["default"](this._plugins,this,function(){e.forEach(function(t){return t()})})},t}();e["default"]=O,t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(1),a=r(o);e["default"]={validate:function(t){a["default"]("register"in t,"Plugins must have a register method.")}},t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]={getInitialState:function(){return void 0},serialize:function(t){return t},deserialize:function(){var t=void 0===arguments[0]?this.getInitialState():arguments[0];return t},toString:function(){throw new Error("Stores must implement a toString() method")}},t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]=function(t){return Object.create(t)},t.exports=e["default"]},function(t,e,n){"use strict";function r(t,e){for(var n=[].concat(e);n.length;)t=t[""+n.shift()];return t}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,n){"use strict";function r(t,e,n){var o=t[0],a=t.slice(1);if(!o)return n();var u=o[0],i=o[1];u.register(e,i,function(t){if(t)throw t;r(a,e,n)})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]=function(t,e){var n={};for(var r in t)e(t[r])&&(n[r]=t[r]);return n},t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return"function"==typeof t}function o(t,e){var n=t.bind(null),r="_"+e+"_"+s++;return n.toString=function(){return r},n}var a=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var u=n(2),i=a(u),s=0;e["default"]=function(t){return i["default"](t,function(t,e){return r(t)?o(t,e):t})},t.exports=e["default"]},function(t,e,r){t.exports=n(39)}])},function(t,e,n){t.exports=require("react/lib/ReactCSSTransitionGroup")},,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)};e.__esModule=!0;var u=n(27),i=r(u),s=n(28),l=r(s),c=n(13),f=r(c),p=n(1),d=(r(p),n(25)),h=r(d),v=n(26),m=r(v),g=function(t){function e(n){var r=n.el,a=n.blocks,u=n.blockTypes;o(this,e),t.call(this),this.addStore(l["default"]),this.addStore(i["default"]),this.addPlugin(h["default"],{blocks:a,blockTypes:u}),this.addPlugin(m["default"],{el:r})}return a(e,t),e.prototype.toJSON=function(){return this.serialize().blocks},e}(f["default"]);e["default"]=g,t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0;var a=n(14),u=r(a),i=n(19),s=r(i),l=n(1),c=r(l),f=n(9),p=r(f),d=n(34),h=r(d);e["default"]=c["default"].createClass({displayName:"App",propTypes:{app:c["default"].PropTypes.object.isRequired},getBlock:function(t,e){return c["default"].createElement(s["default"],o({key:t.id,block:t},this.props))},render:function(){var t=this.props.app;return c["default"].createElement("div",{className:"colonel"},c["default"].createElement(p["default"],{app:t}),c["default"].createElement(u["default"],{transitionName:"col-editor-block"},t.pull("blocks",h["default"]).map(this.getBlock)))}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(3),a=r(o),u=n(1),i=r(u),s=n(23),l=r(s),c=n(2),f=r(c),p=n(11),d=r(p);e["default"]=i["default"].createClass({displayName:"Block",propTypes:{app:i["default"].PropTypes.object.isRequired,block:i["default"].PropTypes.object.isRequired},getClassName:function(t){return f["default"]("col-block","col-block-"+t)},render:function(){var t=this.props,e=t.app,n=t.block,r=t.children,o=t.first,a=t.last,u=e.pull("blockTypes",d["default"],n.type),s=(u.id,u.component);return i["default"].createElement("div",{className:this.getClassName(n.type)},i["default"].createElement(s,{ref:"block",content:n.content,onChange:this._onChange},r),i["default"].createElement(l["default"],{app:e,block:n,first:o,last:a}))},_onChange:function(t){var e=this.props,n=e.app,r=e.block;n.push(a["default"].update,r,t)}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(14),a=r(o),u=n(18),i=r(u),s=n(9),l=r(s),c=n(1),f=r(c),p=n(31),d=r(p),h=f["default"].createClass({displayName:"EditorBlock",propTypes:{app:f["default"].PropTypes.object.isRequired,block:f["default"].PropTypes.object.isRequired},getBlock:function(t,e){return f["default"].createElement(h,{key:t.id,app:this.props.app,block:t})},render:function(){var t=this.props,e=t.app,n=t.block;return f["default"].createElement("div",{className:"col-editor-block"},f["default"].createElement(i["default"],{app:e,block:n},f["default"].createElement(l["default"],{app:e,parent:n}),f["default"].createElement(a["default"],{transitionName:"col-editor-block"},e.pull("blocks",d["default"],n).map(this.getBlock))),f["default"].createElement(l["default"],{app:e,position:n,parent:n.parent}))}});e["default"]=h,t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n};e.__esModule=!0;var a=n(7),u=r(a),i=n(1),s=r(i);e["default"]=s["default"].createClass({displayName:"MenuItem",propTypes:{label:s["default"].PropTypes.string.isRequired,onClick:s["default"].PropTypes.func.isRequired},getDefaultProps:function(){return{className:"col-menu-item",hide:!1,type:"button"}},render:function(){var t=this.props,e=t.hide,n=t.label,r=o(t,["hide","label"]);return e?null:s["default"].createElement(u["default"],r,n)}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(3),a=r(o),u=n(7),i=r(u),s=n(1),l=r(s);e["default"]=l["default"].createClass({displayName:"SwitchNav",propTypes:{app:l["default"].PropTypes.object.isRequired,blockTypes:l["default"].PropTypes.array.isRequired},getButton:function(t){var e=this,n=t.id,r=t.label;return l["default"].createElement(i["default"],{key:n,className:"col-switch-btn",onClick:function(){return e._onAdd(n)}},r)},render:function(){var t=this.props,e=(t.app,t.blockTypes),n=t.hide;return n?null:l["default"].createElement("nav",{className:"col-switch-nav",role:"navigation"},e.map(this.getButton))},_onAdd:function(t){var e=this.props,n=e.app,r=e.position,o=e.parent;n.push(a["default"].create,t,r,o)}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(7),a=r(o),u=n(1),i=r(u),s=n(2),l=r(s);e["default"]=i["default"].createClass({displayName:"SwitchToggle",propTypes:{onClick:i["default"].PropTypes.func.isRequired},getDefaultProps:function(){return{label:"Open block creation menu",hide:!1,secondary:!1,symbol:"+"}},render:function(){var t=this.props,e=t.label,n=t.hide,r=t.onClick,o=t.secondary,u=t.symbol,s=l["default"]("col-btn-fab",{"col-btn-fab-secondary":o});return i["default"].createElement(a["default"],{ref:"toggle",className:s,onClick:r,hide:n},i["default"].createElement("span",{className:"col-hidden"},e),i["default"].createElement("span",{"aria-hidden":"true"},u))}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(24),a=r(o),u=n(20),i=r(u),s=n(41),l=r(s),c=n(1),f=r(c),p=n(2),d=(r(p),n(12)),h=r(d),v=n(3);e["default"]=f["default"].createClass({displayName:"Toolbar",propTypes:{app:f["default"].PropTypes.object.isRequired,block:f["default"].PropTypes.object.isRequired},getInitialState:function(){return{open:!1}},getMenu:function(){var t=this.props,e=t.app,n=t.block,r=e.pull("blocks",h["default"],n),o=r[0]===n,a=r[r.length-1]===n;return this.state.open?f["default"].createElement(l["default"],{element:"nav",role:"navigation",className:"col-menu",onExit:this._onExit},f["default"].createElement(i["default"],{ref:"moveUp",label:"Move Up",onClick:e.prepare(v.shift,n.id,-1),hide:o}),f["default"].createElement(i["default"],{ref:"moveDown",label:"Move Down",onClick:e.prepare(v.shift,n.id,1),hide:a}),f["default"].createElement(i["default"],{ref:"destroy",label:"Remove",onClick:e.prepare(v.destroy,n.id)})):null},render:function(){return f["default"].createElement("div",{className:"col-toolbar"},f["default"].createElement(a["default"],{ref:"handle",onClick:this._onHandleClick}),this.getMenu())},_onExit:function(){this.setState({open:!1})},_onHandleClick:function(t){t.preventDefault(),this.setState({open:!this.state.open})}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0;var u=n(1),i=r(u),s=n(40),l=r(s);e["default"]=i["default"].createClass({displayName:"ToolbarHandle",getDefaultProps:function(){return{label:"Open the menu for this block",type:"button"}},render:function(){var t=this.props,e=t.label,n=o(t,["label"]);return i["default"].createElement("button",a({},n,{className:"col-toolbar-handle"}),i["default"].createElement("span",{className:"col-hidden"},e),i["default"].createElement("span",{"aria-hidden":"true",dangerouslySetInnerHTML:{__html:l["default"]}}))}}),t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]={register:function(t,e,n){var r=e.blocks,o=e.blockTypes;t.replace({blocks:r,blockTypes:o}),n()}},t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0;var a=n(17),u=r(a),i=n(1),s=r(i);e["default"]={render:function(t,e){s["default"].render(s["default"].createElement(u["default"],o({app:t},t.toObject())),e)},register:function(t,e,n){var r=this,o=e.el;this.render(t,o),t.listen(function(e){return r.render(t,o)}),n()}},t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0;var a=n(1),u=r(a);e["default"]={getInitialState:function(){return[]},deserialize:function(){var t=void 0===arguments[0]?[]:arguments[0];return t.map(function(t){var e=t.component;return"object"==typeof e&&(e=u["default"].createClass(e)),o({types:[]},t,{component:e})})},serialize:function(){return void 0},toString:function(){return"blockTypes"}},t.exports=e["default"]},function(t,e,n){"use strict";var r,o=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var a=n(3),u=o(a),i=n(10),s=o(i),l=n(29),c=o(l),f=n(32),p=o(f),d=n(11),h=o(d),v=n(33),m=o(v),g=n(12),_=o(g);e["default"]=(r={},r.getInitialState=function(){return[]},r.toString=function(){return"blocks"},r.serialize=n(30),r.deserialize=n(35),r[u["default"].create]=function(t,e){var n=e.type,r=e.parent,o=e.position,a=void 0===o?0:o,u=new s["default"]({parent:r,type:n});return a instanceof s["default"]&&(a=t.indexOf(a)+1),m["default"](t,u,a)},r[u["default"].destroy]=function(t,e){return p["default"](t,e)},r[u["default"].update]=function(t,e){var n=h["default"](t,e.id);return n.content=c["default"](n.content,e.content),t},r[u["default"].shift]=function(t,e){var n=e.id,r=e.delta,o=h["default"](t,n),a=_["default"](t,o),u=a.indexOf(o)+r,i=t.indexOf(a[u]),s=t.filter(function(t){return t!==o});return m["default"](s,o,i)},r),t.exports=e["default"]},function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0,e["default"]=function(t,e){return r({},t,e)},t.exports=e["default"]},function(t,e,n){"use strict";function r(t){function e(n){var r=t.filter(function(t){return t.parent===n});return{content:n.content,type:n.type,blocks:r.map(e)}}t=t||[];var n=t.filter(function(t){return!t.parent});return n.map(e)}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,n){"use strict";function r(t,e){return t.filter(function(t){return t.parent===e})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]=function(t,e){return t.filter(function(t){for(var n=t;n;n=n.parent)if(n.id==e)return!1;return!0})},t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t,e,n){return Math.max(e,Math.min(n,t))};e["default"]=function(t,e){var n=void 0===arguments[2]?t.length:arguments[2];return function(){var o=r(n,0,t.length),a=t.slice(0,o),u=t.slice(o);return a.concat(e,u)}()},t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]=function(t){return t.filter(function(t){return!t.parent})},t.exports=e["default"]},function(t,e,n){"use strict";function r(t,e){return t=t||[],t.reduce(function(t,n){var o=new i["default"](a({},n,{parent:e})),u=r(n.blocks,o);return t.concat(o,u)},[])}var o=function(t){return t&&t.__esModule?t:{"default":t}},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0,e["default"]=r;var u=n(10),i=o(u);t.exports=e["default"]},function(t,e,n){"use strict";var r=0,o=function(){return"c"+(r+=1)};t.exports=o},,function(t,e,n){},function(t,e,n){function r(t){var e=[],n=t;t=t||{};var r=function(){for(var n=0;n<e.length;n++)e[n].apply(t,arguments)};return t.listen=function(t){e=e.concat(t)},t.ignore=function(t){e=e.filter(function(e){return e!==t})},t.emit=function(){r.apply(t,arguments)},t.volley=function(){var o=arguments;e.length>0&&(cancelAnimationFrame(n),n=requestAnimationFrame(function(){r.apply(t,o)}))},t}t.exports=r(),t.exports.decorate=r},function(t,e,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>\n'},function(t,e,n){!function(e,r){t.exports=r(n(1))}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1),o=n(2);t.exports=o.createClass({displayName:"exports",mixins:[r],propTypes:{active:o.PropTypes.bool,onExit:o.PropTypes.func.isRequired,role:o.PropTypes.string.isRequired},getDefaultProps:function(){return{active:!0,className:"focus-trap-inner",element:"section",role:"dialog"}},getBackdrop:function(){return o.createElement("div",{className:"focus-trap-backdrop","aria-hidden":!0,onClick:this.props.onExit})},getInner:function(){var t=this.props,e=t.className,n=t.element,r=t.children;return o.createElement(n,{className:e},r)},render:function(){var t=this.props,e=t.active,n=t.role;return e?o.createElement("div",{className:"focus-trap",tabIndex:"0",role:n,onKeyUp:this._onKeyUp},this.getBackdrop(),this.getInner()):null},_onKeyUp:function(t){"Escape"===t.key&&this.props.onExit()}})},function(t,e,n){"use strict";t.exports={_pushFocus:function(){this.setState({previousFocus:document.activeElement}),this._focus()},_popFocus:function(){this.state.previousFocus&&(this.state.previousFocus.focus(),this._clearTrap())},_focus:function(){var t=this.getDOMNode();t&&t.focus()},_trapFocus:function(){this._focusTimer=setTimeout(this._focus,10)},_clearTrap:function(){clearTimeout(this._focusTimer)},componentDidMount:function(){var t=this.getDOMNode();t&&(t.addEventListener("focusin",this._clearTrap),t.addEventListener("focusout",this._trapFocus)),this._pushFocus()},componentWillUnmount:function(){var t=this.getDOMNode();this._popFocus(),t&&(t.removeEventListener("focusin",this._clearTrap),t.removeEventListener("focusout",this._trapFocus))}}},function(e,n,r){e.exports=t}])})},function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(4),a=0,u=n(5),i=n(8),s=n(2),l=n(7),c=i.PropTypes,f=2*Math.PI,p=n(1),d=n(6),h=i.createClass({displayName:"Ink",shouldComponentUpdate:d,propTypes:{background:c.bool,duration:c.number,opacity:c.number,radius:c.number,recenter:c.bool},getDefaultProps:function(){return{background:!0,duration:1e3,opacity:.25,radius:150,recenter:!0}},getInitialState:function(){return{store:l(this.tick),touchEvents:this.touchEvents()}},touchEvents:function(){return o?{onTouchStart:this._onPress,onTouchEnd:this._onRelease,onTouchCancel:this._onRelease,onTouchLeave:this._onRelease}:{onMouseDown:this._onPress,onMouseUp:this._onRelease,onMouseLeave:this._onRelease}},tick:function(){var t=this.state.ctx,e=this.state.color,n=this.state.density,r=this.state.height,o=this.state.width,a=this.state.store;t.save(),t.scale(n,n),t.clearRect(0,0,o,r),t.fillStyle=e,this.props.background&&(t.globalAlpha=a.getTotalOpacity(this.props.opacity),t.fillRect(0,0,o,r)),a.each(this.makeBlot,this),t.restore()},makeBlot:function(t){var e=this.state.ctx,n=this.state.height,r=this.state.width,o=t.x,a=t.y,u=t.radius;if(e.globalAlpha=p.getBlotOpacity(t,this.props.opacity),e.beginPath(),this.props.recenter){var i=Math.max(n,r);o+=p.getBlotShiftX(t,i,r),a+=p.getBlotShiftY(t,i,n)}e.arc(o,a,u*p.getBlotScale(t),0,f),e.closePath(),e.fill()},componentWillUnmount:function(){this.state.store.stop()},pushBlot:function(t,e,n){var r=this,o=this.getDOMNode(),a=o.getBoundingClientRect(),i=a.top,s=a.bottom,l=a.left,c=a.right,f=window.getComputedStyle(o),d=f.color,h=this.state.ctx||o.getContext("2d"),v=this.state.density||u(h),m=s-i,g=c-l,_=p.getMaxRadius(m,g,this.props.radius);this.setState({color:d,ctx:h,density:v,height:m,width:g},function(){r.state.store.add({duration:r.props.duration,mouseDown:t,mouseUp:0,radius:_,x:e-l,y:n-i})})},render:function(){var t=this.state.density,e=this.state.height,n=this.state.width,o=this.state.touchEvents;return i.createElement("canvas",r({className:"ink",style:r({},s,this.props.style),height:e*t,width:n*t,onDragOver:this._onRelease},o))},_onPress:function(t){var e=t.button,n=t.ctrlKey,r=t.clientX,o=t.clientY,u=t.changedTouches,i=Date.now();if(u)for(var s=0;s<u.length;s++){var l=u[s].clientX,c=u[s].clientY;this.pushBlot(i,l,c)}else e!==a||n||this.pushBlot(i,r,o)},_onRelease:function(){this.state.store.release(Date.now())}});t.exports=h},function(t,e,n){"use strict";function r(t){return c(t.duration,Date.now()-t.mouseDown)}function o(t){return t.mouseUp>0?Date.now()-t.mouseUp:0}function a(t){var e=t.duration,n=t.radius,a=.85*u(r(t),0,n,e),i=.15*u(o(t),0,n,e),c=.02*n*s(Date.now()/e);return l(0,a+i+c)}var u=n(3),i=Math.sqrt(2),s=Math.cos,l=Math.max,c=Math.min;t.exports={getMaxRadius:function(t,e,n){return c(.5*l(t,e),n)},getBlotOpacity:function(t,e){return u(o(t),e,-e,t.duration)},getBlotOuterOpacity:function(t,e){return c(this.getBlotOpacity(t,e),u(r(t),0,.3,3*t.duration))},getBlotShiftX:function(t,e,n){return c(1,a(t)/e*2/i)*(n/2-t.x)},getBlotShiftY:function(t,e,n){return c(1,a(t)/e*2/i)*(n/2-t.y)},getBlotScale:function(t){return a(t)/t.radius}}},function(t){"use strict";t.exports={borderRadius:"inherit",height:"100%",left:0,position:"absolute",top:0,width:"100%"}},function(t){"use strict";t.exports=function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e}},function(t){"use strict";var e=!1;"undefined"!=typeof window&&(e="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch),t.exports=e},function(t){"use strict";t.exports=function(t){var e=window.devicePixelRatio||1,n=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return e/n}},function(t){"use strict";function e(t,e){for(var n in t)if(this.props[n]!==t[n])return!0;for(var r in e)if(this.state[r]!==e[r])return!0;return!1}t.exports=e},function(t,e,n){"use strict";var r=n(1),o=function(t){var e=t.mouseUp,n=t.duration;return!e||Date.now()-e<n};t.exports=function(t){var e=[],n=!1,a=void 0,u={each:function(t,n){for(var r=0,o=e.length;o>r;r++)t.call(n,e[r])},play:function(){n||(n=!0,u.update())},stop:function(){n=!1,cancelAnimationFrame(a)},getTotalOpacity:function(t){for(var n=0,o=0,a=e.length;a>o;o++)n+=r.getBlotOuterOpacity(e[o],t);return n},update:function(){e=e.filter(o),e.length?(a=requestAnimationFrame(u.update),t()):u.stop()},add:function(t){e.push(t),u.play()},release:function(t){for(var n=e.length-1;n>=0;n--)if(!e[n].mouseUp)return e[n].mouseUp=t}};return u}},function(t){t.exports=n(1)}])}]);
//# sourceMappingURL=colonel-kurtz.js.map