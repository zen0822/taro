(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{1758:function(e,t,n){"use strict";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var b in n)Object.prototype.hasOwnProperty.call(n,b)&&(e[b]=n[b])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return b}))},1759:function(e,t,n){"use strict";function b(e,t){if(null==e)return{};var n,b,r={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return b}))},1760:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var b=n(0),r=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,b,r=function(e,t){if(null==e)return{};var n,b,r={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),O=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=O(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=O(n),u=b,p=d["".concat(c,".").concat(u)]||d[u]||j[u]||a;return n?r.a.createElement(p,l(l({ref:t},i),{},{components:n})):r.a.createElement(p,l({ref:t},i))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1761:function(e,t,n){"use strict";function b(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(r&&(r+=" "),r+=t);return r}},1762:function(e,t,n){"use strict";var b=n(0),r=n(1763);t.a=function(){var e=Object(b.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1763:function(e,t,n){"use strict";var b=n(0),r=Object(b.createContext)(void 0);t.a=r},1764:function(e,t,n){"use strict";var b=n(0),r=n.n(b),a=n(1762),c=n(1761),l=n(51),o=n.n(l),i=37,O=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,d=e.defaultValue,j=e.values,u=e.groupId,p=e.className,s=Object(a.a)(),m=s.tabGroupChoices,g=s.setTabGroupChoices,f=Object(b.useState)(d),N=f[0],y=f[1];if(null!=u){var v=m[u];null!=v&&v!==N&&j.some((function(e){return e.value===v}))&&y(v)}var h=function(e){y(e),null!=u&&g(u,e)},A=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},j.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case O:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(A,e.target,e)},onFocus:function(){return h(t)},onClick:function(){h(t)}},n)}))),t?Object(b.cloneElement)(l.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(b.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},1765:function(e,t,n){"use strict";var b=n(1758),r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",Object(b.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},694:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return j}));var b=n(1758),r=n(1759),a=(n(0),n(1760)),c=n(1764),l=n(1765),o={title:"Audio",sidebar_label:"Audio"},i={unversionedId:"components/media/audio",id:"components/media/audio",isDocsHomePage:!1,title:"Audio",description:"\u97f3\u9891\u30021.6.0\u7248\u672c\u5f00\u59cb\uff0c\u8be5\u7ec4\u4ef6\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 Taro.createInnerAudioContext \u63a5\u53e3",source:"@site/docs/components/media/audio.md",slug:"/components/media/audio",permalink:"/taro/docs/next/components/media/audio",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/media/audio.md",version:"current",sidebar_label:"Audio",sidebar:"components",previous:{title:"Navigator",permalink:"/taro/docs/next/components/navig/navigator"},next:{title:"Image",permalink:"/taro/docs/next/components/media/image"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"AudioProps",id:"audioprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]},{value:"onTimeUpdateEventDetail",id:"ontimeupdateeventdetail",children:[]},{value:"MediaError",id:"mediaerror",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],d={rightToc:O};function j(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u97f3\u9891\u30021.6.0\u7248\u672c\u5f00\u59cb\uff0c\u8be5\u7ec4\u4ef6\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 Taro.createInnerAudioContext \u63a5\u53e3"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<AudioProps>\n")),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)(c.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"React",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Audio\n          src='https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'\n          controls={true}\n          autoplay={false}\n          loop={false}\n          muted={true}\n          initialTime='30'\n          id='video'\n        />\n      </View>\n    )\n  }\n}\n"))),Object(a.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <audio\n      src="http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"\n      controls="true"\n      autoplay="false"\n      loop="false"\n      muted="true"\n      id="video"\n    />\n  </view>\n</template>\n')))),Object(a.b)("h2",{id:"audioprops"},"AudioProps"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"id"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"audio \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26")),Object(a.b)("tr",null,Object(a.b)("td",null,"src"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u8981\u64ad\u653e\u97f3\u9891\u7684\u8d44\u6e90\u5730\u5740")),Object(a.b)("tr",null,Object(a.b)("td",null,"loop"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u662f\u5426\u5faa\u73af\u64ad\u653e")),Object(a.b)("tr",null,Object(a.b)("td",null,"muted"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u9759\u97f3\u64ad\u653e",Object(a.b)("br",null),Object(a.b)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),Object(a.b)("tr",null,Object(a.b)("td",null,"controls"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u662f\u5426\u663e\u793a\u9ed8\u8ba4\u63a7\u4ef6")),Object(a.b)("tr",null,Object(a.b)("td",null,"poster"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u9ed8\u8ba4\u63a7\u4ef6\u4e0a\u7684\u97f3\u9891\u5c01\u9762\u7684\u56fe\u7247\u8d44\u6e90\u5730\u5740\uff0c\u5982\u679c controls \u5c5e\u6027\u503c\u4e3a false \u5219\u8bbe\u7f6e poster \u65e0\u6548")),Object(a.b)("tr",null,Object(a.b)("td",null,"name"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"\u672a\u77e5\u97f3\u9891"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u9ed8\u8ba4\u63a7\u4ef6\u4e0a\u7684\u97f3\u9891\u540d\u5b57\uff0c\u5982\u679c controls \u5c5e\u6027\u503c\u4e3a false \u5219\u8bbe\u7f6e name \u65e0\u6548")),Object(a.b)("tr",null,Object(a.b)("td",null,"author"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"\u672a\u77e5\u4f5c\u8005"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u9ed8\u8ba4\u63a7\u4ef6\u4e0a\u7684\u4f5c\u8005\u540d\u5b57\uff0c\u5982\u679c controls \u5c5e\u6027\u503c\u4e3a false \u5219\u8bbe\u7f6e author \u65e0\u6548")),Object(a.b)("tr",null,Object(a.b)("td",null,"onError"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = ","{errMsg: MediaError.code}")),Object(a.b)("tr",null,Object(a.b)("td",null,"onPlay"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<any>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5f53\u5f00\u59cb/\u7ee7\u7eed\u64ad\u653e\u65f6\u89e6\u53d1play\u4e8b\u4ef6")),Object(a.b)("tr",null,Object(a.b)("td",null,"onPause"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<any>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5f53\u6682\u505c\u64ad\u653e\u65f6\u89e6\u53d1 pause \u4e8b\u4ef6")),Object(a.b)("tr",null,Object(a.b)("td",null,"onTimeUpdate"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onTimeUpdateEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5f53\u64ad\u653e\u8fdb\u5ea6\u6539\u53d8\u65f6\u89e6\u53d1 timeupdate \u4e8b\u4ef6\uff0cdetail = ","{currentTime, duration}")),Object(a.b)("tr",null,Object(a.b)("td",null,"onEnded"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<any>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5f53\u64ad\u653e\u5230\u672b\u5c3e\u65f6\u89e6\u53d1 ended \u4e8b\u4ef6")))),Object(a.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.id"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.src"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.loop"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.muted"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.controls"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.poster"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.name"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.author"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onError"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onPlay"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onPause"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onTimeUpdate"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onEnded"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(a.b)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"errMsg"),Object(a.b)("td",null,Object(a.b)("code",null,"1 | 2 | 3 | 4"))))),Object(a.b)("h3",{id:"ontimeupdateeventdetail"},"onTimeUpdateEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"currentTime"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u5f53\u524d\u65f6\u95f4")),Object(a.b)("tr",null,Object(a.b)("td",null,"duration"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u6301\u7eed\u65f6\u95f4")))),Object(a.b)("h3",{id:"mediaerror"},"MediaError"),Object(a.b)("h4",{id:"code"},"code"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"1"),Object(a.b)("td",null,"\u83b7\u53d6\u8d44\u6e90\u88ab\u7528\u6237\u7981\u6b62")),Object(a.b)("tr",null,Object(a.b)("td",null,"2"),Object(a.b)("td",null,"\u7f51\u7edc\u9519\u8bef")),Object(a.b)("tr",null,Object(a.b)("td",null,"3"),Object(a.b)("td",null,"\u89e3\u7801\u9519\u8bef")),Object(a.b)("tr",null,Object(a.b)("td",null,"4"),Object(a.b)("td",null,"\u4e0d\u5408\u9002\u8d44\u6e90")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Audio"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}j.isMDXComponent=!0}}]);