(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function f(){l=t(s.map((function(t){return t.props}))),T.canUseDOM?e(l):n&&(l=n(l))}var T=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=l;return l=void 0,s=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!i(t,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},c.render=function(){return a.createElement(r,this.props)},o}(o.Component);return c(T,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(T,"canUseDOM",u),T}}},Bl7J:function(t,e,n){"use strict";n("f3/d");var r=n("orhg"),o=n("q1tI"),a=n.n(o),i=n("JrHD"),c=n("Wbzz"),u=n("hayY"),l=n.n(u),s=n("RMl1"),f=n.n(s),T=n("PEbK"),p=n.n(T),d=n("pKBR"),E=n.n(d),A=function(t){var e=t.title,n=t.location,r=i.data.site.siteMetadata,u=r.author,s=r.social;return"/"===n.pathname?a.a.createElement("header",{style:{backgroundImage:"url("+E.a+")",backgroundSize:"cover",backgroundPosition:"center top",color:"white",width:"100%",padding:"108px 0"}},a.a.createElement("div",{style:{margin:"0 auto",width:"calc(100% - 48px)",maxWidth:480,textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.4)",padding:"16px 6px"}},a.a.createElement("img",{src:l.a,style:{width:108,borderRadius:99999,border:"2px solid white"}}),a.a.createElement("div",{style:{marginTop:6}},a.a.createElement("div",{style:{fontSize:18,fontWeight:"bold"}},u.name),a.a.createElement("div",{style:{fontSize:16,marginTop:2,marginBottom:8}},u.summary),a.a.createElement("div",{style:{fontSize:14}},[{url:"https://twitter.com/"+s.twitter,icon:f.a,name:"Twitter"},{url:"https://qiita.com/"+s.qiita,icon:p.a,name:"Qiita"}].map((function(t,e){return a.a.createElement(o.Fragment,null,0!==e&&"/",a.a.createElement("div",{key:e,style:{display:"inline-block",margin:"0 4px"}},a.a.createElement("a",{href:t.url,style:{color:"white"}},t.name)))})))))):a.a.createElement("header",{style:{textAlign:"center",padding:"20px 0",backgroundColor:"blue"}},a.a.createElement(c.Link,{style:{textDecoration:"none",fontSize:36,color:"white"},to:"/"},e))};e.a=function(t){var e=t.location,n=t.title,o=t.children,i=r.data.site.siteMetadata,c=i.author.name,u=i.social.twitter;return a.a.createElement("div",{style:{width:"100%"}},a.a.createElement(A,{title:n,location:e}),a.a.createElement("main",{style:{maxWidth:768,width:"100%",margin:"0 auto"}},a.a.createElement("div",{style:{padding:"0 8px"}},o)),a.a.createElement("footer",{style:{textAlign:"center",padding:"32px 0"}},"© ",(new Date).getFullYear()," ",a.a.createElement("a",{href:"https://twitter.com/"+u},c)))}},Gytx:function(t,e,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),u=0;u<a.length;u++){var l=a[u];if(!c(l))return!1;var s=t[l],f=e[l];if(!1===(o=n?n.call(r,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},"HAE/":function(t,e,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},IUVq:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"kazztech","description":"kazzのTechプロフィールサイトです","social":{"twitter":"kzkzkazz"}}}}}')},JrHD:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"name":"kazz","summary":"名古屋でWebエンジニアやってます"},"social":{"twitter":"kzkzkazz","qiita":"kazzzzzz"}}}}}')},Oyvg:function(t,e,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,i=n("kJMx").f,c=n("quPj"),u=n("C/va"),l=r.RegExp,s=l,f=l.prototype,T=/a/g,p=/a/g,d=new l(T)!==T;if(n("nh4g")&&(!d||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,l(T)!=T||l(p)==p||"/a/i"!=l(T,"i")})))){l=function(t,e){var n=this instanceof l,r=c(t),a=void 0===e;return!n&&r&&t.constructor===l&&a?t:o(d?new s(r&&!a?t.source:t,e):s((r=t instanceof l)?t.source:t,r&&a?u.call(t):e),n?this:f,l)};for(var E=function(t){t in l||a(l,t,{configurable:!0,get:function(){return s[t]},set:function(e){s[t]=e}})},A=i(s),h=0;A.length>h;)E(A[h++]);f.constructor=l,l.prototype=f,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},PEbK:function(t,e,n){t.exports=n.p+"static/Qiita_Logo-1f573e70d5784336d6dd9b615393d76a.png"},RMl1:function(t,e,n){t.exports=n.p+"static/Twitter_Logo_Blue-34478ad8dbc7cd56f16d54a15bd6e4ab.png"},TJpk:function(t,e,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=f(n("q1tI")),i=f(n("17x9")),c=f(n("8+s/")),u=f(n("bmMU")),l=n("v1p5"),s=n("hFT/");function f(t){return t&&t.__esModule?t:{default:t}}function T(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var E,A,h,m=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(E=m,h=A=function(t){function e(){return p(this,e),d(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,u.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case s.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,a=t.newChildProps,i=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,a=t.newProps,i=t.newChildProps,c=t.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},a,((e={})[o.type]=c,e.titleAttributes=r({},i),e));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return a.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=T(o,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(t,a),t.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=T(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),a.default.createElement(E,o)},o(e,null,[{key:"canUseDOM",set:function(t){E.canUseDOM=t}}]),e}(a.default.Component),A.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=E.peek,A.rewind=function(){var t=E.rewind();return t||(t=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},h);y.renderStatic=y.rewind,e.Helmet=y,e.default=y},bmMU:function(t,e,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,u,l,s=r(e),f=r(n);if(s&&f){if((u=e.length)!=n.length)return!1;for(c=u;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(s!=f)return!1;var T=e instanceof Date,p=n instanceof Date;if(T!=p)return!1;if(T&&p)return e.getTime()==n.getTime();var d=e instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return e.toString()==n.toString();var A=o(e);if((u=A.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!a.call(n,A[c]))return!1;if(i&&e instanceof Element&&n instanceof Element)return e===n;for(c=u;0!=c--;)if(!("_owner"===(l=A[c])&&e.$$typeof||t(e[l],n[l])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(t,e,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},"hFT/":function(t,e,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(e.VALID_TAG_NAMES=Object.keys(r).map((function(t){return r[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(o).reduce((function(t,e){return t[o[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},hayY:function(t,e,n){t.exports=n.p+"static/profile-pic-ffc139fb28829bbadbcbeb9690015b06.jpg"},orhg:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"name":"kazz"},"social":{"twitter":"kzkzkazz"}}}}}')},pKBR:function(t,e,n){t.exports=n.p+"static/bg-3bcb10abea9789547c0cb559a266ec9a.jpg"},v1p5:function(t,e,n){(function(t){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=u(n("q1tI")),i=u(n("MgzW")),c=n("hFT/");function u(t){return t&&t.__esModule?t:{default:t}}var l,s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(t){var e=A(t,c.TAG_NAMES.TITLE),n=A(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=A(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},T=function(t){return A(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},d=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==t.indexOf(a)&&n[a])return e.concat(n)}return e}),[])},E=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&b("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();-1===e.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===t[l].toLowerCase()||(n=l),-1===e.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(r),u=0;u<a.length;u++){var l=a[u],s=(0,i.default)({},o[l],r[l]);o[l]=s}return t}),[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},h=(l=Date.now(),function(t){var e=Date.now();e-l>16?(l=e,t(e)):setTimeout((function(){h(t)}),0)}),m=function(t){return clearTimeout(t)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:t.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:t.cancelAnimationFrame||m,b=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},g=null,v=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,l=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,T=t.title,p=t.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,o),R(T,p);var d={baseTag:O(c.TAG_NAMES.BASE,n),linkTags:O(c.TAG_NAMES.LINK,a),metaTags:O(c.TAG_NAMES.META,i),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,u),scriptTags:O(c.TAG_NAMES.SCRIPT,s),styleTags:O(c.TAG_NAMES.STYLE,f)},E={},A={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(A[t]=d[t].oldTags)})),e&&e(),l(t,E,A)},_=function(t){return Array.isArray(t)?t.join(""):t},R=function(t,e){void 0!==t&&document.title!==t&&(document.title=_(t)),P(c.TAG_NAMES.TITLE,e)},P=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),u=0;u<i.length;u++){var l=i[u],s=e[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=a.indexOf(l);-1!==f&&a.splice(f,1)}for(var T=a.length-1;T>=0;T--)n.removeAttribute(a[T]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},O=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return i=e,n.isEqualNode(t)}))?o.splice(i,1):a.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},M=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},I=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,o=w(n,r),[a.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=M(n),a=_(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(e)},toString:function(){return M(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),a.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+s(r[e],n)+'"';return t?t+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){g&&S(g),t.defer?g=y((function(){v(t,(function(){g=null}))})):(v(t),g=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,l=t.scriptTags,s=t.styleTags,f=t.title,T=void 0===f?"":f,p=t.titleAttributes;return{base:I(c.TAG_NAMES.BASE,e,r),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,o,r),link:I(c.TAG_NAMES.LINK,a,r),meta:I(c.TAG_NAMES.META,i,r),noscript:I(c.TAG_NAMES.NOSCRIPT,u,r),script:I(c.TAG_NAMES.SCRIPT,l,r),style:I(c.TAG_NAMES.STYLE,s,r),title:I(c.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}},e.reducePropsToState=function(t){return{baseTag:d([c.TAG_PROPERTIES.HREF],t),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,t),defer:A(t,c.HELMET_PROPS.DEFER),encode:A(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,t),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:T(t),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:f(t),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=y,e.warn=b}).call(this,n("yLpj"))},vrFN:function(t,e,n){"use strict";var r=n("IUVq"),o=n("q1tI"),a=n.n(o),i=n("TJpk"),c=function(t){var e=t.description,n=t.lang,o=t.meta,c=t.title,u=r.data.site,l=e||u.siteMetadata.description;return a.a.createElement(i.Helmet,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.social.twitter},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(o)})};c.defaultProps={lang:"en",meta:[],description:""},e.a=c},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=400e642eacc5c2eefe93b1c92cb7cfa3b3a8dd42-f91440a1a8df5a7f230e.js.map