(window.webpackJsonp=window.webpackJsonp||[]).push([[718],{1758:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1759:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return a}))},1760:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,j=d["".concat(l,".").concat(p)]||d[p]||O[p]||r;return n?c.a.createElement(j,o(o({ref:t},i),{},{components:n})):c.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<r;i++)l[i]=n[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},784:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(1758),c=n(1759),r=(n(0),n(1760)),l={title:"Taro.onLocationChange(callback)",sidebar_label:"onLocationChange"},o={unversionedId:"apis/location/onLocationChange",id:"version-3.x/apis/location/onLocationChange",isDocsHomePage:!1,title:"Taro.onLocationChange(callback)",description:"\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6\uff0c\u9700\u7ed3\u5408 Taro.startLocationUpdateBackground\u3001Taro.startLocationUpdate \u4f7f\u7528\u3002",source:"@site/versioned_docs/version-3.x/apis/location/onLocationChange.md",slug:"/apis/location/onLocationChange",permalink:"/taro/docs/apis/location/onLocationChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/location/onLocationChange.md",version:"3.x",sidebar_label:"onLocationChange",sidebar:"version-3.x/API",previous:{title:"Taro.openLocation(option)",permalink:"/taro/docs/apis/location/openLocation"},next:{title:"Taro.offLocationChange(callback)",permalink:"/taro/docs/apis/location/offLocationChange"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6\uff0c\u9700\u7ed3\u5408 Taro.startLocationUpdateBackground\u3001Taro.startLocationUpdate \u4f7f\u7528\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"callback"},"Callback"),Object(r.b)("p",null,"\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"result"),Object(r.b)("td",null,Object(r.b)("code",null,"CallbackResult"))))),Object(r.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"accuracy"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u4f4d\u7f6e\u7684\u7cbe\u786e\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"altitude"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u9ad8\u5ea6\uff0c\u5355\u4f4d m")),Object(r.b)("tr",null,Object(r.b)("td",null,"horizontalAccuracy"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u6c34\u5e73\u7cbe\u5ea6\uff0c\u5355\u4f4d m")),Object(r.b)("tr",null,Object(r.b)("td",null,"latitude"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u7eac\u5ea6\uff0c\u8303\u56f4\u4e3a -90~90\uff0c\u8d1f\u6570\u8868\u793a\u5357\u7eac")),Object(r.b)("tr",null,Object(r.b)("td",null,"longitude"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u7ecf\u5ea6\uff0c\u8303\u56f4\u4e3a -180~180\uff0c\u8d1f\u6570\u8868\u793a\u897f\u7ecf")),Object(r.b)("tr",null,Object(r.b)("td",null,"speed"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u901f\u5ea6\uff0c\u5355\u4f4d m/s")),Object(r.b)("tr",null,Object(r.b)("td",null,"verticalAccuracy"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u5782\u76f4\u7cbe\u5ea6\uff0c\u5355\u4f4d m\uff08Android \u65e0\u6cd5\u83b7\u53d6\uff0c\u8fd4\u56de 0\uff09")))),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const _locationChangeFn = function (res) {\n console.log('location change', res)\n}\nTaro.onLocationChange(_locationChangeFn)\nTaro.offLocationChange(_locationChangeFn)\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.onLocationChange"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);