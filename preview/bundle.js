!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e,i){var n=i(1);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};i(3)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,i){var n=i(2);(e=t.exports=n(!1)).push([t.i,"@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);"]),e.push([t.i,"body{margin:50px}.email-modal{user-select:none;font-family:'Open Sans', sans-serif;min-width:500px;height:300px;background:#FFFFFF;border-radius:8px;box-shadow:0px 8px 20px rgba(0,0,0,0.2);margin-bottom:50px}.email-modal__title{font-size:20px;margin-bottom:24px}.email-modal__content{width:100%;height:204px;background:#F8F8F7;border-radius:8px 8px 0 0;padding:32px 50px 24px 50px;box-sizing:border-box}.email-modal__footer{padding:24px 50px 32px 50px}.email-modal .emails-editor{height:96px;background:#FFFFFF;border:1px solid #C3C2CF;box-sizing:border-box;border-radius:4px;padding:8px 7px;overflow:hidden;overflow-y:auto}.email-modal .emails-editor__inner{display:flex;flex-wrap:wrap;height:min-content}.email-modal .emails-editor__item{height:24px;border-radius:100px;display:flex;padding:0 0 0 10px;margin-right:8px;margin-bottom:3px;overflow:hidden}.email-modal .emails-editor__item-inner-text{font-size:14px;line-height:24px;flex-flow:row;width:calc(100% - 24px);text-overflow:ellipsis;overflow:hidden}.email-modal .emails-editor__item-inner-text_wrong{border-bottom:1px dashed #d14836}.email-modal .emails-editor__item-remove-button{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB0SURBVHgBbY7LDYAwDEPTD3cGYBCObEK7ARu1bAI3ruzAFkgUR2pEQFRyGz1bdVxDfXLUtRcdO6kDPoJPFvMKZQbaZMaeqSDgSVCoGTbjSVvWXwaoVEmQrKotf7P/dEapACNUzF6b0smmhAwuhstroWfx4QZwGyJ6a2JpCQAAAABJRU5ErkJggg==\");width:24px;height:24px;background-repeat:no-repeat;background-position:center;cursor:pointer}.email-modal .emails-editor__item_correct{background:rgba(102,153,255,0.2)}.email-modal .emails-editor__input{position:relative;min-width:150px}.email-modal .emails-editor__input-placeholder{position:absolute;color:#C3C2CF;top:0;z-index:1}.email-modal .emails-editor__input-inner{color:#4d4d4d;opacity:0;font-size:inherit !important}.email-modal .emails-editor__input input{border:none;outline:none;font-size:inherit !important;color:#4d4d4d;width:100%;position:absolute;top:0}.email-modal .button-list{display:flex}.email-modal .button-list__item{height:40px;background:#4262FF;border-radius:6px;padding:8px 15px 8px 16px;margin-right:16px;color:white;cursor:pointer;font-size:14px;line-height:24px;font-style:normal;font-weight:normal;box-sizing:border-box}.email-modal .button-list__item:hover{background:#455bed}.email-modal .button-list__item:active{background:#3d51d4}.email-modal .button-list__item:last-child{margin-right:0}\n",""])},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(a=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[i].concat(r).concat([o]).join("\n")}var a,s,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n=0;n<t.length;n++){var o=[].concat(t[n]);i&&(o[2]?o[2]="".concat(i," and ").concat(o[2]):o[2]=i),e.push(o)}},e}},function(t,e,i){"use strict";var n,o={},r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}();function s(t,e){for(var i=[],n={},o=0;o<t.length;o++){var r=t[o],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};n[a]?n[a].parts.push(s):i.push(n[a]={id:a,parts:[s]})}return i}function l(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=o[n.id],a=0;if(r){for(r.refs++;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(E(n.parts[a],e))}else{for(var s=[];a<n.parts.length;a++)s.push(E(n.parts[a],e));o[n.id]={id:n.id,refs:1,parts:s}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=i.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(i){e.setAttribute(i,t.attributes[i])})),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function m(t,e,i){var n=i.css,o=i.media,r=i.sourceMap;if(o&&t.setAttribute("media",o),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f=null,h=0;function E(t,e){var i,n,o;if(e.singleton){var r=h++;i=f||(f=c(e)),n=p.bind(null,i,r,!1),o=p.bind(null,i,r,!0)}else i=c(e),n=m.bind(null,i,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r());var i=s(t,e);return l(i,e),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r],c=o[a.id];c&&(c.refs--,n.push(c))}t&&l(s(t,e),e);for(var d=0;d<n.length;d++){var u=n[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete o[u.id]}}}}},function(t,e,i){"use strict";i.r(e);var n,o=function(){function t(){this.subscriptions={},this.contexts={}}return t.prototype.on=function(t,e,i){this.subscriptions[t]||(this.subscriptions[t]=[],this.contexts[t]=[]),this.subscriptions[t].push(e),this.contexts[t].push(i)},t.prototype.off=function(t,e){var i=this.subscriptions[t],n=this.contexts[t];if(i){var o=this.subscriptions[t].indexOf(e,0);o>-1&&(i.splice(o,1),n.splice(o,1)),0===i.length&&(delete this.subscriptions[t],delete this.contexts[t])}},t.prototype.emit=function(t,e){var i=this.subscriptions[t],n=this.contexts[t];i&&i.forEach((function(t,i){var o=n[i];t.call(o,e)}))},t}(),r=/[, ]/,a=function(){function t(e){if(!(this instanceof t))return new t(e);this.$refs={},this.$event=new o,this.options=e,this.emails=new Map,this.render()}return t.prototype.on=function(t,e){this.$event.on(t,e)},t.prototype.off=function(t,e){this.$event.off(t,e)},t.prototype.createElement=function(t,e){var i=this;void 0===e&&(e={});for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];e||(e={});var r=document.createElement(t),a=Object.keys(e);return a.forEach((function(t){if("o"===t[0]&&"n"===t[1]){var n=t.substring(2);r.addEventListener(n,(function(n){e[t].call(i,n)}))}else if("className"===t){e[t].split(" ").forEach((function(t){r.classList.add(t)}))}else if("ref"===t){var o=e[t];i.$refs[o]=r}})),n.forEach((function(t){Array.isArray(t)?t.forEach((function(t){r.append(t)})):r.append(t)})),r},t.prototype.onBlurTextInput=function(t){var e=t.target.value;this.addEmail(e)},t.prototype.addEmail=function(t){var e=this,i=this.$refs,n=i.emailsEditorInnerEL,o=i.emailsEditorInputWrapperEl,a=this.emails,s=!1;t.split(r).forEach((function(t){if(t&&!a.get(t)){var i=e.prepareEmail(t);e.emails.set(t,i),n.insertBefore(i.el,o),s=!0}})),s&&this.$event.emit("onEmailListChanged",this.getEmails())},t.prototype.removeEmail=function(t){var e=this.$refs.emailsEditorInnerEL,i=this.emails,n=!1;t.split(r).forEach((function(t){var o=i.get(t);t&&o&&(e.removeChild(o.el),i.delete(t),n=!0)})),n&&this.$event.emit("onEmailListChanged",this.getEmails())},t.prototype.prepareEmail=function(t){var e=this,i=function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}(t)?n.CORRECT:n.WRONG,o={id:Symbol(),status:i,value:t},r=i===n.CORRECT?"emails-editor__item_correct":"emails-editor__item_wrong",a=i===n.CORRECT?"emails-editor__item-inner-text_correct":"emails-editor__item-inner-text_wrong",s=this.createElement("div",{className:"emails-editor__item "+r},this.createElement("div",{className:"emails-editor__item-inner-text "+a},t),this.createElement("div",{className:"emails-editor__item-remove-button",onclick:function(){e.onEmailBlockRemoveButtonClick(o)}}));return o.el=s,o},t.prototype.onEmailBlockRemoveButtonClick=function(t){this.removeEmail(t.value)},t.prototype.getEmails=function(){var t=[];return this.emails.forEach((function(e){e.status===n.CORRECT&&t.push(e.value)})),t},t.prototype.onEmailsEditorClick=function(){this.$refs.emailsEditorInputEl.focus()},t.prototype.onEmailsEditorInputBlur=function(){var t=this.$refs.emailsEditorInputEl.value;this.clearEmailsInput(),this.showEmailsEditorPlaceholder(),this.addEmail(t)},t.prototype.onEmailsEditorInputKeyDown=function(t){var e=this.$refs,i=e.emailsEditorInputEl,n=e.emailsEditorInputInnerEL,o=i.value;n.innerText=o,o?"insertText"===t.inputType?this.hideEmailsEditorPlaceholder():"insertFromPaste"===t.inputType&&(this.addEmail(o),this.clearEmailsInput()):this.showEmailsEditorPlaceholder()},t.prototype.onEmailsEditorInputKeyUp=function(t){var e=this.$refs.emailsEditorInputEl,i=e.value;["Enter","NumpadEnter","Comma","Space"].indexOf(t.code)>-1&&i&&(this.clearEmailsInput(),this.addEmail(i),e.focus())},t.prototype.hideEmailsEditorPlaceholder=function(){this.$refs.emailsEditorInputPlaceholder.style.display="none"},t.prototype.showEmailsEditorPlaceholder=function(){this.$refs.emailsEditorInputPlaceholder.style.display=""},t.prototype.clearEmailsInput=function(){var t=this.$refs,e=t.emailsEditorInputEl,i=t.emailsEditorInputInnerEL;e.value="",i.innerText=""},t.prototype.render=function(){var t=this,e=this.options,i=e.rootEl,n=e.buttons;i.innerText="";var o=n.map((function(e){return t.createElement("div",{className:"button-list__item",onclick:e.onclick},e.text)})),r=t.createElement("div",{className:"email-modal"},t.createElement("div",{className:"email-modal__content"},t.createElement("div",{className:"email-modal__title"},"Share ",t.createElement("b",null,"Board name")," with others"),t.createElement("div",{className:"emails-editor",onclick:this.onEmailsEditorClick},t.createElement("div",{ref:"emailsEditorInnerEL",className:"emails-editor__inner"},t.createElement("div",{ref:"emailsEditorInputWrapperEl",className:"emails-editor__input"},t.createElement("div",{ref:"emailsEditorInputPlaceholder",className:"emails-editor__input-placeholder"},"add more people…"),t.createElement("div",{ref:"emailsEditorInputInnerEL",className:"emails-editor__input-inner"}),t.createElement("input",{ref:"emailsEditorInputEl",type:"text",oninput:this.onEmailsEditorInputKeyDown,onkeyup:this.onEmailsEditorInputKeyUp,onblur:this.onEmailsEditorInputBlur}))))),t.createElement("div",{className:"email-modal__footer"},t.createElement("div",{className:"button-list"},o)));this.options.rootEl.append(r)},t}();!function(t){t.CORRECT="correct",t.WRONG="wrong"}(n||(n={}));i(0);new a({rootEl:document.getElementById("emails-editor"),buttons:[{text:"Add email",onclick:function(){var t;this.addEmail((t=3,Math.random().toString(36).substring(2,t+2)+"@mira.com"))}},{text:"Get emails list",onclick:function(){var t=this.getEmails();console.log(t)}}]}).$event.on("onEmailListChanged",(function(t){console.log(t)}))}]);