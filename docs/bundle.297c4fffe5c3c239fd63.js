(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var a=n(0);var o=f(a);var i=n(16);var u=f(i);var l=n(18);var s=f(l);n(19);function f(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function d(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}window.marked=u.default;var h=function(e){p(t,e);function t(e){c(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.getInput=function(e){n.setState({text:e.target.value})};n.renderPreview=function(){return{__html:(0,u.default)(n.state.text)}};t.displayName="App";var r={text:s.default.dummyText};n.state=r;return n}r(t,[{key:"render",value:function e(){var t=this.state.text;return o.default.createElement(o.default.StrictMode,null,o.default.createElement("div",{className:"column-left"},o.default.createElement("textarea",{id:"editor",value:t,onChange:this.getInput})),o.default.createElement("div",{className:"column-right"},o.default.createElement("p",{id:"preview",dangerouslySetInnerHTML:this.renderPreview()})))}}]);return t}(o.default.PureComponent);t.default=h},18:function(e,t,n){"use strict";e.exports={dummyText:"# Welcome to my React Markdown Previewer!\n\n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n\n  Heres some code, `<div></div>`, between 2 backticks.\n\n  ```\n  // this is multi-line code:\n\n  function anotherExample(firstLine, lastLine) {\n    if (firstLine == '```' && lastLine == '```') {\n      return multiLineCode;\n    }\n  }\n  ```\n\n  You can also make text **bold**... whoa!\n  Or _italic_.\n  Or... wait for it... **_both!_**\n  And feel free to go crazy ~~crossing stuff out~~.\n\n  There's also [links](https://www.freecodecamp.com), and\n  > Block Quotes!\n\n  And if you want to get really crazy, even tables:\n\n  Wild Header | Crazy Header | Another Header?\n  ------------ | ------------- | -------------\n  Your content can | be here, and it | can be here....\n  And here. | Okay. | I think we get it.\n\n  - And of course there are lists.\n    - Some are bulleted.\n       - With different indentation levels.\n          - That look like this.\n\n\n  1. And there are numbered lists too.\n  1. Use just 1s if you want!\n  1. But the list goes on...\n  - Even if you use dashes or asterisks.\n  * And last but not least, let's not forget embedded images:\n\n  ![React Logo w/ Text](https://goo.gl/Umyytc)"}},19:function(e,t,n){},5:function(e,t,n){"use strict";var r=n(0);var a=s(r);var o=n(7);var i=s(o);var u=n(15);var l=s(u);function s(e){return e&&e.__esModule?e:{default:e}}i.default.render(a.default.createElement(l.default,null),document.getElementById("app"))}},[[5,1]]]);
//# sourceMappingURL=bundle.297c4fffe5c3c239fd63.js.map