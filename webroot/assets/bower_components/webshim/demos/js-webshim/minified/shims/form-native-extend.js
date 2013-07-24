webshims.register("form-native-extend",function(e,t,i,n){"use strict";var a=i.Modernizr;if(a.inputtypes,a.formvalidation&&!t.bugs.bustedValidity){var r=t.inputTypes,o=!1,s={},l=function(){var t,i=function(){e(this).prop("validity")},n=function(){e("input").each(i)};return function(){clearTimeout(t),t=setTimeout(n,9)}}();t.addInputType=function(i,n){r[i]=n,o=!0,e.isDOMReady&&a.formvalidation&&!t.bugs.bustedValidity&&l()},t.addValidityRule=function(e,t){s[e]=t},t.addValidityRule("typeMismatch",function(e,t,i,n){if(""===t)return!1;var a=n.typeMismatch;return"type"in i||(i.type=(e[0].getAttribute("type")||"").toLowerCase()),r[i.type]&&r[i.type].mismatch&&(a=r[i.type].mismatch(t,e)),a});var u=t.modules["form-number-date-api"],c=u.loaded&&!u.test(),d=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],p=["value"],f=[],h=function(t){if(t||o){var i=(t.getAttribute&&t.getAttribute("type")||t.type||"").toLowerCase();r[i]&&e.prop(t,"validity")}},m={};if(["input","textarea","select"].forEach(function(i){var n=t.defineNodeNameProperty(i,"setCustomValidity",{prop:{value:function(a){a+="";var r="input"==i?e(this).getNativeElement()[0]:this;n.prop._supvalue.call(r,a),c&&(t.data(r,"hasCustomError",!!a),h(r))}}});m[i]=n.prop._supvalue}),c&&(p.push("min"),p.push("max"),p.push("step"),f.push("input")),c){var v;if(f.forEach(function(i){var n=t.defineNodeNameProperty(i,"validity",{prop:{get:function(){if(!v){var a="input"==i?e(this).getNativeElement()[0]:this,o=n.prop._supget.call(a);if(!o)return o;var l={};if(d.forEach(function(e){l[e]=o[e]}),!e.prop(a,"willValidate"))return l;v=!0;var u,c=e(a),p={type:(a.getAttribute&&a.getAttribute("type")||"").toLowerCase(),nodeName:(a.nodeName||"").toLowerCase()},f=c.val(),h=!!t.data(a,"hasCustomError");if(v=!1,l.customError=h,l.valid&&l.customError)l.valid=!1;else if(!l.valid){var g=!0;e.each(l,function(e,t){return t?(g=!1,!1):undefined}),g&&(l.valid=!0)}return e.each(s,function(e,n){l[e]=n(c,f,p,l),l[e]&&(l.valid||!u)&&r[p.type]&&r[p.type].mismatch&&(m[i].call(a,t.createValidationMessage(a,e)),l.valid=!1,u=!0)}),l.valid&&(m[i].call(a,""),t.data(a,"hasCustomError",!1)),l}},writeable:!1}})}),p.forEach(function(e){t.onNodeNamesPropertyModify(f,e,function(){h(this)})}),n.addEventListener){var g,y=function(e){"form"in e.target&&(clearTimeout(g),h(e.target))};n.addEventListener("change",y,!0),n.addEventListener("input",function(e){clearTimeout(g),g=setTimeout(function(){h(e.target)},290)},!0)}var b=f.join(",");t.addReady(function(t,i){o&&e(b,t).add(i.filter(b)).each(function(){h(this)})})}t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,i=(e.getAttribute&&e.getAttribute("type")||"").toLowerCase();return t.inputTypes[i]?i:e.type}}})}});