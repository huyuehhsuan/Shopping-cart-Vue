(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["log_in"],{"0cb2":function(t,a,e){var i=e("e330"),n=e("7b0b"),o=Math.floor,r=i("".charAt),s=i("".replace),c=i("".slice),d=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,m=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,a,e,i,l,v){var u=e+t.length,f=i.length,x=m;return void 0!==l&&(l=n(l),x=d),s(v,x,(function(n,s){var d;switch(r(s,0)){case"$":return"$";case"&":return t;case"`":return c(a,0,e);case"'":return c(a,u);case"<":d=l[c(s,1,-1)];break;default:var m=+s;if(0===m)return n;if(m>f){var v=o(m/10);return 0===v?n:v<=f?void 0===i[v-1]?r(s,1):i[v-1]+r(s,1):n}d=i[m-1]}return void 0===d?"":d}))}},"107c":function(t,a,e){var i=e("d039"),n=e("da84"),o=n.RegExp;t.exports=i((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,a,e){var i=e("da84"),n=e("c65b"),o=e("825a"),r=e("1626"),s=e("c6b6"),c=e("9263"),d=i.TypeError;t.exports=function(t,a){var e=t.exec;if(r(e)){var i=n(e,t,a);return null!==i&&o(i),i}if("RegExp"===s(t))return n(c,t,a);throw d("RegExp#exec called on incompatible receiver")}},"155d":function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,".form[data-v-97ea4198]{width:350px;display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-97ea4198]{height:2.5rem;border:0;border-bottom:1px solid var(--first-color-lighter);font-size:var(--normal-font-size);font-weight:var(--font-medium);color:#797a9e;letter-spacing:.11em}input[data-v-97ea4198]::-moz-placeholder{color:#c3c3d8;font-weight:var(--font-medium)}input[data-v-97ea4198]:-ms-input-placeholder{color:#c3c3d8;font-weight:var(--font-medium)}input[data-v-97ea4198]::placeholder{color:#c3c3d8;font-weight:var(--font-medium)}input[data-v-97ea4198]:focus{outline:0;border-bottom:1px solid var(--first-color);transition:all .6s ease}.color-button[data-v-97ea4198]{width:80%;height:30px;margin-top:2rem}",""]),t.exports=a},2438:function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,".product[data-v-147ee2ce]{display:flex;padding:2rem;justify-content:space-evenly}@media screen and (max-width:576px){.product[data-v-147ee2ce]{flex-direction:column;padding:.5rem}}.product-img[data-v-147ee2ce]{width:50%}@media screen and (max-width:576px){.product-img[data-v-147ee2ce]{width:100%}}.product-data[data-v-147ee2ce]{padding:2rem;justify-content:space-between;display:flex;flex-direction:column;width:50%}@media screen and (max-width:576px){.product-data[data-v-147ee2ce]{padding:.5rem;width:100%}}@media screen and (max-width:576px){.product-data h1[data-v-147ee2ce]{font-size:20px}}.color-button[data-v-147ee2ce]{border-radius:.5rem}.num[data-v-147ee2ce]{display:inline-block;margin:0 .5rem}#snackbar[data-v-147ee2ce],.text-center[data-v-147ee2ce]{text-align:center}#snackbar[data-v-147ee2ce]{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#a4a4a4;color:#fff;border-radius:6px;padding:16px;position:fixed;z-index:1;left:50%;top:50%}#snackbar.show[data-v-147ee2ce]{visibility:visible;-webkit-animation:fadein-data-v-147ee2ce .5s,fadeout-data-v-147ee2ce .5s 2.5s;animation:fadein-data-v-147ee2ce .5s,fadeout-data-v-147ee2ce .5s 2.5s}@-webkit-keyframes fadein-data-v-147ee2ce{0%{top:0;opacity:0}to{top:50%;opacity:1}}@keyframes fadein-data-v-147ee2ce{0%{top:0;opacity:0}to{top:50%;opacity:1}}@-webkit-keyframes fadeout-data-v-147ee2ce{0%{top:50%;opacity:1}to{top:0;opacity:0}}@keyframes fadeout-data-v-147ee2ce{0%{top:50%;opacity:1}to{top:0;opacity:0}}",""]),t.exports=a},"2ddb":function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,"@media screen and (max-width:576px){.text-carousal[data-v-49110fed]{display:none}}h1[data-v-49110fed]{width:900px;font-size:100px;color:#424242;line-height:1.5;font-family:monospace}.mask[data-v-49110fed]{height:150px;position:relative;overflow:hidden}.mask span[data-v-49110fed]{display:block;position:absolute;top:150px;background-size:100%;background-clip:text;-webkit-background-clip:text;background-repeat:no-repeat;-webkit-text-fill-color:transparent}.mask span[data-show][data-v-49110fed]{transform:translateY(-100%);transition:.5s}.mask span[data-up][data-v-49110fed]{transform:translateY(-200%);transition:.5s}.mask span[data-v-49110fed]:first-child{background-image:linear-gradient(45deg,#020024,#090979 35%,#00d4ff)}.mask span[data-v-49110fed]:nth-child(2){background-image:linear-gradient(45deg,#fff300 21%,red)}.mask span[data-v-49110fed]:nth-child(3){background-image:linear-gradient(45deg,#ff00f5 21%,#ffa600)}.mask span[data-v-49110fed]:nth-child(4){background-image:linear-gradient(45deg,#0005ff 21%,#00ff6e)}",""]),t.exports=a},3062:function(t,a,e){"use strict";e("ee5a")},"439b":function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,".carousel[data-v-647f725e]{width:100%;height:100%;position:relative}.carousel>li[data-v-647f725e]{background-position:50%;background-repeat:no-repeat;background-size:150% auto;position:absolute;top:0;left:0;-webkit-animation-name:carouselanimate-data-v-647f725e;animation-name:carouselanimate-data-v-647f725e;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.carousel>li[data-v-647f725e],.change[data-v-647f725e]{width:100%;height:100%}.change[data-v-647f725e]{position:relative}.change>li[data-v-647f725e]{width:100%;height:100%;background-position:50%;background-repeat:no-repeat;background-size:150% auto;position:absolute;top:0;left:0;-webkit-animation-name:change-data-v-647f725e;animation-name:change-data-v-647f725e;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-duration:5s;animation-duration:5s}.box[data-v-647f725e]{width:300px;height:300px;overflow:hidden;margin:auto}.box1[data-v-647f725e]{background-color:#dab88b}.box3[data-v-647f725e]{width:300px;height:300px;background-color:#ffd2ff;background:radial-gradient(closest-side,#b7cadb,rgba(253,246,236,0)),radial-gradient(closest-side,#dab88b,rgba(145,229,246,0)),radial-gradient(closest-side,#f3e9dd,rgba(89,165,216,0)),radial-gradient(closest-side,#fdf6ec,rgba(56,111,164,0)),radial-gradient(closest-side,#f5ee9e,rgba(245,238,158,0));background-size:130vmax 130vmax,110vmax 110vmax,90vmax 90vmax,100vmax 100vmax,80vmax 80vmax;background-position:-100vmax -130vmax,-80vmax -80vmax,10vmax 10vmax,30vmax 30vmax,130vmax 130vmax;background-repeat:no-repeat;-webkit-animation:movement-data-v-647f725e 5s linear infinite;animation:movement-data-v-647f725e 5s linear infinite}.box4[data-v-647f725e]{background:linear-gradient(-45deg,#dab88b,#f3e9dd,#fdf6ec,#f68989);background-size:400% 400%;-webkit-animation:gradient-data-v-647f725e 5s ease infinite;animation:gradient-data-v-647f725e 5s ease infinite;height:100%}.box5 li[data-v-647f725e]{width:300px;height:300px}.box6[data-v-647f725e]{background-image:url(https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=387);background-position:50%}@-webkit-keyframes carouselanimate-data-v-647f725e{0%{transform:translateX(100%)}25%{transform:translateX(0)}50%{transform:translateX(0)}75%{transform:translateX(-100%)}to{transform:translateX(-100%)}}@keyframes carouselanimate-data-v-647f725e{0%{transform:translateX(100%)}25%{transform:translateX(0)}50%{transform:translateX(0)}75%{transform:translateX(-100%)}to{transform:translateX(-100%)}}@-webkit-keyframes movement-data-v-647f725e{0%,to{background-size:130vmax 130vmax,110vmax 110vmax,90vmax 90vmax,100vmax 100vmax,80vmax 80vmax;background-position:-100vmax -100vmax,-80vmax -80vmax,10vmax 10vmax,30vmax 30vmax,130vmax 130vmax}25%{background-size:120vmax 120vmax,130vmax 130vmax,80vmax 80vmax,110vmax 110vmax,70vmax 70vmax;background-position:-110vmax -110vmax,-70vmax -70vmax,20vmax 20vmax,20vmax 20vmax,120vmax 120vmax}50%{background-size:110vmax 110vmax,140vmax 140vmax,70vmax 70vmax,120vmax 120vmax,60vmax 60vmax;background-position:-120vmax -120vmax,-60vmax -60vmax,30vmax 30vmax,10vmax 10vmax,110vmax 110vmax}75%{background-size:120vmax 120vmax,130vmax 130vmax,80vmax 80vmax,110vmax 110vmax,70vmax 70vmax;background-position:-110vmax -110vmax,-70vmax -70vmax,20vmax 20vmax,20vmax 20vmax,120vmax 120vmax}}@keyframes movement-data-v-647f725e{0%,to{background-size:130vmax 130vmax,110vmax 110vmax,90vmax 90vmax,100vmax 100vmax,80vmax 80vmax;background-position:-100vmax -100vmax,-80vmax -80vmax,10vmax 10vmax,30vmax 30vmax,130vmax 130vmax}25%{background-size:120vmax 120vmax,130vmax 130vmax,80vmax 80vmax,110vmax 110vmax,70vmax 70vmax;background-position:-110vmax -110vmax,-70vmax -70vmax,20vmax 20vmax,20vmax 20vmax,120vmax 120vmax}50%{background-size:110vmax 110vmax,140vmax 140vmax,70vmax 70vmax,120vmax 120vmax,60vmax 60vmax;background-position:-120vmax -120vmax,-60vmax -60vmax,30vmax 30vmax,10vmax 10vmax,110vmax 110vmax}75%{background-size:120vmax 120vmax,130vmax 130vmax,80vmax 80vmax,110vmax 110vmax,70vmax 70vmax;background-position:-110vmax -110vmax,-70vmax -70vmax,20vmax 20vmax,20vmax 20vmax,120vmax 120vmax}}@-webkit-keyframes change-data-v-647f725e{0%{opacity:0}25%{opacity:0}50%{opacity:1}75%{opacity:1}to{opacity:0}}@keyframes change-data-v-647f725e{0%{opacity:0}25%{opacity:0}50%{opacity:1}75%{opacity:1}to{opacity:0}}@-webkit-keyframes gradient-data-v-647f725e{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}@keyframes gradient-data-v-647f725e{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}",""]),t.exports=a},5319:function(t,a,e){"use strict";var i=e("2ba4"),n=e("c65b"),o=e("e330"),r=e("d784"),s=e("d039"),c=e("825a"),d=e("1626"),m=e("5926"),l=e("50c4"),v=e("577e"),u=e("1d80"),f=e("8aa5"),x=e("dc4a"),p=e("0cb2"),b=e("14c3"),g=e("b622"),h=g("replace"),k=Math.max,y=Math.min,w=o([].concat),_=o([].push),C=o("".indexOf),$=o("".slice),M=function(t){return void 0===t?t:String(t)},S=function(){return"$0"==="a".replace(/./,"$0")}(),E=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),I=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,a,e){var o=E?"$":"$0";return[function(t,e){var i=u(this),o=void 0==t?void 0:x(t,h);return o?n(o,t,i,e):n(a,v(i),t,e)},function(t,n){var r=c(this),s=v(t);if("string"==typeof n&&-1===C(n,o)&&-1===C(n,"$<")){var u=e(a,r,s,n);if(u.done)return u.value}var x=d(n);x||(n=v(n));var g=r.global;if(g){var h=r.unicode;r.lastIndex=0}var S=[];while(1){var E=b(r,s);if(null===E)break;if(_(S,E),!g)break;var I=v(E[0]);""===I&&(r.lastIndex=f(s,l(r.lastIndex),h))}for(var T="",D=0,j=0;j<S.length;j++){E=S[j];for(var A=v(E[0]),z=k(y(m(E.index),s.length),0),L=[],Y=1;Y<E.length;Y++)_(L,M(E[Y]));var q=E.groups;if(x){var H=w([A],L,z,s);void 0!==q&&_(H,q);var B=v(i(n,void 0,H))}else B=p(A,s,z,L,q,n);z>=D&&(T+=$(s,D,z)+B,D=z+A.length)}return T+$(s,D)}]}),!I||!S||E)},"54de":function(t,a,e){"use strict";e("7128")},6510:function(t,a,e){"use strict";e("98a9")},7128:function(t,a,e){var i=e("2ddb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("499e").default;n("0a6bcc7d",i,!0,{sourceMap:!1,shadowMode:!1})},"76ce":function(t,a,e){"use strict";e("e7f9")},"8aa5":function(t,a,e){"use strict";var i=e("6547").charAt;t.exports=function(t,a,e){return a+(e?i(t,a).length:1)}},9263:function(t,a,e){"use strict";var i=e("c65b"),n=e("e330"),o=e("577e"),r=e("ad6d"),s=e("9f7f"),c=e("5692"),d=e("7c73"),m=e("69f3").get,l=e("fce3"),v=e("107c"),u=c("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,x=f,p=n("".charAt),b=n("".indexOf),g=n("".replace),h=n("".slice),k=function(){var t=/a/,a=/b*/g;return i(f,t,"a"),i(f,a,"a"),0!==t.lastIndex||0!==a.lastIndex}(),y=s.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],_=k||w||y||l||v;_&&(x=function(t){var a,e,n,s,c,l,v,_=this,C=m(_),$=o(t),M=C.raw;if(M)return M.lastIndex=_.lastIndex,a=i(x,M,$),_.lastIndex=M.lastIndex,a;var S=C.groups,E=y&&_.sticky,I=i(r,_),T=_.source,D=0,j=$;if(E&&(I=g(I,"y",""),-1===b(I,"g")&&(I+="g"),j=h($,_.lastIndex),_.lastIndex>0&&(!_.multiline||_.multiline&&"\n"!==p($,_.lastIndex-1))&&(T="(?: "+T+")",j=" "+j,D++),e=new RegExp("^(?:"+T+")",I)),w&&(e=new RegExp("^"+T+"$(?!\\s)",I)),k&&(n=_.lastIndex),s=i(f,E?e:_,j),E?s?(s.input=h(s.input,D),s[0]=h(s[0],D),s.index=_.lastIndex,_.lastIndex+=s[0].length):_.lastIndex=0:k&&s&&(_.lastIndex=_.global?s.index+s[0].length:n),w&&s&&s.length>1&&i(u,s[0],e,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)})),s&&S)for(s.groups=l=d(null),c=0;c<S.length;c++)v=S[c],l[v[0]]=s[v[1]];return s}),t.exports=x},"98a9":function(t,a,e){var i=e("cd99");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("499e").default;n("777f276d",i,!0,{sourceMap:!1,shadowMode:!1})},9928:function(t,a,e){var i=e("2438");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("499e").default;n("99648728",i,!0,{sourceMap:!1,shadowMode:!1})},"9ddf":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("router-link",{staticClass:"back",attrs:{to:"/"}},[t._v("< 回上一頁")]),e("LoginInput")],1)},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("登入")]),e("div",{staticClass:"form box-border"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.account,expression:"user.account"}],attrs:{type:"text",id:"account",placeholder:"Account"},domProps:{value:t.user.account},on:{input:function(a){a.target.composing||t.$set(t.user,"account",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(a){a.target.composing||t.$set(t.user,"password",a.target.value)}}}),e("button",{staticClass:"color-button",on:{click:t.login}},[t._v("登入")])])])},r=[],s={data:function(){return{user:{account:"",password:""}}},methods:{login:function(){this.$store.commit({type:"setUserData",userData:this.user}),this.$router.push("/")}}},c=s,d=(e("3062"),e("0c7c")),m=Object(d["a"])(c,o,r,!1,null,"97ea4198",null),l=m.exports,v={name:"LogIn",components:{LoginInput:l}},u=v,f=Object(d["a"])(u,i,n,!1,null,null,null);a["default"]=f.exports},"9f7f":function(t,a,e){var i=e("d039"),n=e("da84"),o=n.RegExp,r=i((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),s=r||i((function(){return!o("a","y").sticky})),c=r||i((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:s,UNSUPPORTED_Y:r}},ac1f:function(t,a,e){"use strict";var i=e("23e7"),n=e("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(t,a,e){"use strict";var i=e("825a");t.exports=function(){var t=i(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},cd99:function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,"section[data-v-700338bc]{display:flex;justify-content:center;align-items:center}section[data-v-700338bc]:first-child{color:var(--first-color-second)}section[data-v-700338bc]:nth-child(2){color:#42455a;background:#ffd9be}section[data-v-700338bc]:nth-child(3){color:var(--first-color-second)}section[data-v-700338bc]:nth-child(4){color:#42455a;background:#ffd9be}section .container[data-v-700338bc]{margin:100px}@media screen and (max-width:576px){section .container[data-v-700338bc]{margin:0}}section h1[data-v-700338bc]{font-size:3rem;margin:20px}section span[data-v-700338bc]{display:inline-block;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-delay:var(--delay);animation-delay:var(--delay)}section .text-jump span[data-v-700338bc]{-webkit-animation-name:text-jump-data-v-700338bc;animation-name:text-jump-data-v-700338bc}section .text-pop span[data-v-700338bc]{-webkit-animation-name:text-pop-data-v-700338bc;animation-name:text-pop-data-v-700338bc}section .text-flip span[data-v-700338bc]{-webkit-animation-name:text-flip-data-v-700338bc;animation-name:text-flip-data-v-700338bc}section .text-blink span[data-v-700338bc]{-webkit-animation-name:text-blink-data-v-700338bc;animation-name:text-blink-data-v-700338bc}section h2[data-v-700338bc]{font-size:40px;text-align:center;text-transform:uppercase}section .text-container[data-v-700338bc]{display:flex}section .text-container .text-box[data-v-700338bc]{margin:20px;padding:20px;background:var(--body-color)}section .text-container .text-box h3[data-v-700338bc]{font-size:30px;text-align:center;text-transform:uppercase;margin-bottom:10px}@media(max-width:900px){section h1[data-v-700338bc]{font-size:2rem;text-align:center}section .text-container[data-v-700338bc]{flex-direction:column}}.reveal[data-v-700338bc]{position:relative;opacity:0}.reveal.active[data-v-700338bc]{opacity:1}.active.fade-bottom[data-v-700338bc]{-webkit-animation:fade-bottom-data-v-700338bc 1s ease-in;animation:fade-bottom-data-v-700338bc 1s ease-in}.active.fade-left[data-v-700338bc]{-webkit-animation:fade-left-data-v-700338bc 1s ease-in;animation:fade-left-data-v-700338bc 1s ease-in}.active.fade-right[data-v-700338bc]{-webkit-animation:fade-right-data-v-700338bc 1s ease-in;animation:fade-right-data-v-700338bc 1s ease-in}.active.text-jump[data-v-700338bc]{-webkit-animation:text-jump-data-v-700338bc .4s ease-in;animation:text-jump-data-v-700338bc .4s ease-in}@-webkit-keyframes fade-bottom-data-v-700338bc{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes fade-bottom-data-v-700338bc{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}@-webkit-keyframes fade-left-data-v-700338bc{0%{transform:translateX(-100px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes fade-left-data-v-700338bc{0%{transform:translateX(-100px);opacity:0}to{transform:translateX(0);opacity:1}}@-webkit-keyframes fade-right-data-v-700338bc{0%{transform:translateX(100px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes fade-right-data-v-700338bc{0%{transform:translateX(100px);opacity:0}to{transform:translateX(0);opacity:1}}@-webkit-keyframes text-jump-data-v-700338bc{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes text-jump-data-v-700338bc{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}@-webkit-keyframes text-pop-data-v-700338bc{0%,to{transform:scale(1)}50%{transform:scale(1.15)}}@keyframes text-pop-data-v-700338bc{0%,to{transform:scale(1)}50%{transform:scale(1.15)}}@-webkit-keyframes text-flip-data-v-700338bc{0%,to{transform:rotateY(0deg)}50%{transform:rotateY(90deg)}}@keyframes text-flip-data-v-700338bc{0%,to{transform:rotateY(0deg)}50%{transform:rotateY(90deg)}}@-webkit-keyframes text-blink-data-v-700338bc{0%,to{color:inherit}50%{color:#ff0}}@keyframes text-blink-data-v-700338bc{0%,to{color:inherit}50%{color:#ff0}}",""]),t.exports=a},d784:function(t,a,e){"use strict";e("ac1f");var i=e("e330"),n=e("6eeb"),o=e("9263"),r=e("d039"),s=e("b622"),c=e("9112"),d=s("species"),m=RegExp.prototype;t.exports=function(t,a,e,l){var v=s(t),u=!r((function(){var a={};return a[v]=function(){return 7},7!=""[t](a)})),f=u&&!r((function(){var a=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[d]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return a=!0,null},e[v](""),!a}));if(!u||!f||e){var x=i(/./[v]),p=a(v,""[t],(function(t,a,e,n,r){var s=i(t),c=a.exec;return c===o||c===m.exec?u&&!r?{done:!0,value:x(a,e,n)}:{done:!0,value:s(e,a,n)}:{done:!1}}));n(String.prototype,t,p[0]),n(m,v,p[1])}l&&c(m[v],"sham",!0)}},e7f9:function(t,a,e){var i=e("439b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("499e").default;n("479ddbc2",i,!0,{sourceMap:!1,shadowMode:!1})},ee5a:function(t,a,e){var i=e("155d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("499e").default;n("72250db8",i,!0,{sourceMap:!1,shadowMode:!1})},efc6:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("router-link",{staticClass:"back",attrs:{to:"/"}},[t._v("< 回上一頁")]),e("div",{staticClass:"product"},[e("div",{staticClass:"product-img"},[e("img",{attrs:{src:t.img,alt:""}})]),e("div",{staticClass:"product-data"},[e("h1",[t._v(t._s(t.itemData.name))]),e("p",[t._v(t._s(t.itemData.description))]),e("p",[t._v("價格:"+t._s(t.itemData.price))]),e("div",{staticClass:"text-center"},[e("button",{on:{click:t.reduce}},[t._v("-")]),e("span",{staticClass:"num"},[t._v(t._s(t.num))]),e("button",{on:{click:t.add}},[t._v("+")])]),e("div",{staticClass:"text-center"},[e("button",{staticClass:"color-button",on:{click:t.addItemsToCart}},[t._v(" 加入購物車 ")])]),e("div",{attrs:{id:"snackbar"}},[t._v("已加入購物車")])])])],1)},n=[],o=(e("ac1f"),e("5319"),e("c7a5")),r={name:"ProductDetial",data:function(){return{itemList:o["a"],itemData:{},num:0}},mounted:function(){this.$route.query.Id?this.itemData=this.itemList[this.$route.query.Id-1]:this.itemData=this.itemList[0]},computed:{product_total:function(){return this.$store.getters.productQuantity(this.itemData)},img:function(){return"".concat(this.itemData.img)}},methods:{add:function(){this.num++,this.itemData.quantity=this.num},reduce:function(){this.num>0&&(this.num--,this.itemData.quantity=this.num)},addItemsToCart:function(){var t=this;if(this.$store.state.user.isLogin){if(this.num>0){this.$store.commit("addItemsToCart",this.itemData);var a=document.getElementById("snackbar");a.className="show",setTimeout((function(){a.className=a.className.replace("show","")}),2e3)}}else alert("please login"),setTimeout((function(){t.$router.push({path:"/LogIn"})}),1e3)},removeFromCart:function(){var t=this;this.$store.state.user.isLogin?this.$store.commit("removeFromCart",this.itemData):(alert("please login"),setTimeout((function(){t.$router.push({path:"/LogIn"})}),1e3))}}},s=r,c=(e("f44e"),e("0c7c")),d=Object(c["a"])(s,i,n,!1,null,"147ee2ce",null);a["default"]=d.exports},f44e:function(t,a,e){"use strict";e("9928")},f820:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("router-link",{staticClass:"back",attrs:{to:"/"}},[t._v("< 回上一頁")]),e("h1",[t._v("ABOUT US")]),e("div",{staticClass:"container"},[e("Boxes")],1),e("TextCarousal")],1),e("Scroll")],1)},n=[],o=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",[e("div",{staticClass:"container reveal fade-bottom"},[e("h2",[t._v("起源")]),e("div",{staticClass:"text-container"},[e("div",{staticClass:"text-box"},[e("h3",[t._v("Section Text")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste. ")])]),e("div",{staticClass:"text-box"},[e("h3",[t._v("Section Text")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste. ")])]),e("div",{staticClass:"text-box"},[e("h3",[t._v("Section Text")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste. ")])])])])]),e("section",[e("div",{staticClass:"container reveal fade-left"},[e("h2",[t._v("Caption")]),e("div",{staticClass:"text-container"},[e("div",{staticClass:"text-box"},[e("h3",[t._v("Section Text")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste. ")])]),e("div",{staticClass:"text-box"},[e("h3",[t._v("Section Text")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste. ")])]),e("div",{staticClass:"text-box"},[e("h3",[t._v("Section Text")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste. ")])])])])])])}],s=(e("ac1f"),e("5319"),e("d3b7"),e("159b"),{name:"Scroll",mounted:function(){window.addEventListener("scroll",this.reveal);var t=document.querySelector(".text-jump");t.innerHTML=t.textContent.replace(/\S/g,"<span>$&</span>"),document.querySelectorAll(".text-jump span").forEach((function(t,a){t.style.setProperty("--delay","".concat(.1*a,"s"))}));var a=document.querySelector(".text-pop");a.innerHTML=a.textContent.replace(/\S/g,"<span>$&</span>"),document.querySelectorAll(".text-pop span").forEach((function(t,a){t.style.setProperty("--delay","".concat(.1*a,"s"))}));var e=document.querySelector(".text-flip");e.innerHTML=e.textContent.replace(/\S/g,"<span>$&</span>"),document.querySelectorAll(".text-flip span").forEach((function(t,a){t.style.setProperty("--delay","".concat(.1*a,"s"))}));var i=document.querySelector(".text-blink");i.innerHTML=i.textContent.replace(/\S/g,"<span>$&</span>"),document.querySelectorAll(".text-blink span").forEach((function(t,a){t.style.setProperty("--delay","".concat(.1*a,"s"))}))},methods:{reveal:function(){for(var t=document.querySelectorAll(".reveal"),a=0;a<t.length;a++){var e=window.innerHeight,i=t[a].getBoundingClientRect().top,n=150;i<e-n?t[a].classList.add("active"):t[a].classList.remove("active")}}}}),c=s,d=(e("6510"),e("0c7c")),m=Object(d["a"])(c,o,r,!1,null,"700338bc",null),l=m.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"grid"},[e("div",{staticClass:"box box1"}),e("div",{staticClass:"box box2"},[e("ul",{staticClass:"carousel"},t._l(t.list,(function(a){return e("li",{key:a.id,style:t.img(a)})})),0)]),e("div",{staticClass:"box box3"}),e("div",{staticClass:"box box4"}),t._m(0),e("div",{staticClass:"box box6"})])},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box box5"},[e("ul",{staticClass:"change"},[e("li",{staticStyle:{"background-image":"url(https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"}}),e("li",{staticStyle:{"animation-delay":"2.5s","background-image":"url(https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80)"}})])])}],f={name:"Boxes",data:function(){return{list:[{id:1,url:"https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},{id:2,url:"https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"}]}},methods:{img:function(t){return{backgroundImage:"url(".concat(t.url,")"),animationDelay:"".concat(2.5*(t.id-1),"s"),animationDuration:"5s"}}}},x=f,p=(e("76ce"),Object(d["a"])(x,v,u,!1,null,"647f725e",null)),b=p.exports,g=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-carousal"},[e("h1",[t._v(" Sweets Make You "),e("div",{staticClass:"mask"},[e("span",{attrs:{"data-show":""}},[t._v("Happy")]),e("span",[t._v("Satisfied")]),e("span",[t._v("Beautiful")]),e("span",[t._v("Smile")])])])])}],k={name:"TextCarousal",mounted:function(){setInterval((function(){var t=document.querySelector("span[data-show]"),a=t.nextElementSibling||document.querySelector("span:first-child"),e=document.querySelector("span[data-up]");e&&e.removeAttribute("data-up"),t.removeAttribute("data-show"),t.setAttribute("data-up",""),a.setAttribute("data-show","")}),2e3)}},y=k,w=(e("54de"),Object(d["a"])(y,g,h,!1,null,"49110fed",null)),_=w.exports,C={name:"About",components:{Scroll:l,Boxes:b,TextCarousal:_}},$=C,M=Object(d["a"])($,i,n,!1,null,null,null);a["default"]=M.exports},fce3:function(t,a,e){var i=e("d039"),n=e("da84"),o=n.RegExp;t.exports=i((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=log_in.be6df251.js.map