(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1dde":function(t,e,s){var a=s("d039"),c=s("b622"),r=s("2d00"),n=c("species");t.exports=function(t){return r>=51||!a((function(){var e=[],s=e.constructor={};return s[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,s){var a=s("861d"),c=s("e8b5"),r=s("b622"),n=r("species");t.exports=function(t,e){var s;return c(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!c(s.prototype)?a(s)&&(s=s[n],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},8418:function(t,e,s){"use strict";var a=s("c04e"),c=s("9bf2"),r=s("5c6c");t.exports=function(t,e,s){var n=a(e);n in t?c.f(t,n,r(0,s)):t[n]=s}},"99af":function(t,e,s){"use strict";var a=s("23e7"),c=s("d039"),r=s("e8b5"),n=s("861d"),o=s("7b0b"),i=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),b=s("b622"),v=s("2d00"),h=b("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",m=v>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),x=u("concat"),y=function(t){if(!n(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},w=!m||!x;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,s,a,c,r,n=o(this),u=d(n,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?n:arguments[e],y(r)){if(c=i(r.length),b+c>f)throw TypeError(p);for(s=0;s<c;s++,b++)s in r&&l(u,b,r[s])}else{if(b>=f)throw TypeError(p);l(u,b++,r)}return u.length=b,u}})},"9ff7":function(t,e,s){},c1cd:function(t,e,s){"use strict";var a=s("9ff7"),c=s.n(a);c.a},e8b5:function(t,e,s){var a=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},f820:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("це зовсім не абаут сторінка gg vp ")])])}],r=s("2877"),n={},o=Object(r["a"])(n,a,c,!1,null,null,null);e["default"]=o.exports},f91f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"inputBox"},[s("h2",[t._v("Random Password Generator App")]),s("div",{staticClass:"lenght"},[s("h3",[t._v("Password Length")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordLenght,expression:"passwordLenght"}],staticClass:"password",attrs:{type:"number"},domProps:{value:t.passwordLenght},on:{input:function(e){e.target.composing||(t.passwordLenght=e.target.value)}}}),s("h3",[t._v("Variant")]),s("div",{staticClass:"checkbox__container"},[s("div",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cb1.state,expression:"cb1.state"}],attrs:{type:"checkbox",id:"cb1"},domProps:{checked:Array.isArray(t.cb1.state)?t._i(t.cb1.state,null)>-1:t.cb1.state},on:{change:function(e){var s=t.cb1.state,a=e.target,c=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.cb1,"state",s.concat([r])):n>-1&&t.$set(t.cb1,"state",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.cb1,"state",c)}}}),s("label",{attrs:{for:"cb1"}},[t._v(t._s(t.cb1.value))])]),s("div",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cb2.state,expression:"cb2.state"}],attrs:{type:"checkbox",id:"cb2"},domProps:{checked:Array.isArray(t.cb2.state)?t._i(t.cb2.state,null)>-1:t.cb2.state},on:{change:function(e){var s=t.cb2.state,a=e.target,c=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.cb2,"state",s.concat([r])):n>-1&&t.$set(t.cb2,"state",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.cb2,"state",c)}}}),s("label",{attrs:{for:"cb2"}},[t._v(t._s(t.cb2.value))])]),s("div",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cb3.state,expression:"cb3.state"}],attrs:{type:"checkbox",id:"cb3"},domProps:{checked:Array.isArray(t.cb3.state)?t._i(t.cb3.state,null)>-1:t.cb3.state},on:{change:function(e){var s=t.cb3.state,a=e.target,c=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.cb3,"state",s.concat([r])):n>-1&&t.$set(t.cb3,"state",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.cb3,"state",c)}}}),s("label",{attrs:{for:"cb3"}},[t._v(t._s(t.cb3.value))])]),s("div",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cb4.state,expression:"cb4.state"}],attrs:{type:"checkbox",id:"cb4"},domProps:{checked:Array.isArray(t.cb4.state)?t._i(t.cb4.state,null)>-1:t.cb4.state},on:{change:function(e){var s=t.cb4.state,a=e.target,c=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.cb4,"state",s.concat([r])):n>-1&&t.$set(t.cb4,"state",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.cb4,"state",c)}}}),s("label",{attrs:{for:"cb4"}},[t._v(t._s(t.cb4.value))])])])]),s("input",{staticClass:"password",attrs:{type:"text",name:"",placeholder:"Create Password",id:"pass",readonly:""},domProps:{value:t.password}}),s("div",{staticClass:"btn",on:{click:function(e){return t.passRand()}}},[t._v("Generate Password")]),s("div",{staticClass:"btn btn_second",on:{click:function(e){return t.copyPassword()}}},[t._v("Copy")])])])},c=[],r=(s("99af"),{data:function(){return{passwordLenght:16,password:"",cb1:{value:"0123456789",state:!0},cb2:{value:"qwertyuiopasdfghjklzxcvbnm",state:!0},cb3:{value:"QWERTYUIOPASDFGHJKLZXCVBNM",state:!0},cb4:{value:"!@#$%^&*()_+?><:{}[]",state:!0},x:""}},methods:{passRand:function(){this.password="",this.x="",1==this.cb1.state?this.x=this.x.concat(this.cb1.value):this.x=this.x.concat(""),1==this.cb2.state?this.x=this.x.concat(this.cb2.value):this.x=this.x.concat(""),1==this.cb3.state?this.x=this.x.concat(this.cb3.value):this.x=this.x.concat(""),1==this.cb4.state?this.x=this.x.concat(this.cb4.value):this.x=this.x.concat("");for(var t=0;t<this.passwordLenght;t++){var e=Math.floor(Math.random()*this.x.length);this.password+=this.x.substring(e,e+1)}},copyPassword:function(){var t=document.getElementById("pass");t.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()}}}),n=r,o=(s("c1cd"),s("2877")),i=Object(o["a"])(n,a,c,!1,null,"61eba893",null);e["default"]=i.exports}}]);
//# sourceMappingURL=about.e5e89cb6.js.map