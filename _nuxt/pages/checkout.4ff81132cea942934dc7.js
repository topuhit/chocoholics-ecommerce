webpackJsonp([1],{Cl1F:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".modal[data-v-3f9ab082]{width:90%;position:fixed;max-width:720px;height:60px;background-color:hsla(0,0%,100%,.88);bottom:8px;padding:15px;border-radius:3px;-webkit-box-shadow:2px 2px 7px rgba(55,55,55,.3);box-shadow:2px 2px 7px rgba(55,55,55,.3);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:7px solid #1b8a96;z-index:8}.modal img[data-v-3f9ab082]{height:30px}.per--item[data-v-3f9ab082]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.per--item p[data-v-3f9ab082]{font-size:15.2px;font-size:.95rem;font-family:Josefin Slab,sans-serif}.ccv[data-v-3f9ab082],.exp[data-v-3f9ab082]{width:50%}.thankyou[data-v-3f9ab082]{margin:25px auto;text-align:center;font-family:Josefin Slab,sans-serif;font-weight:700;font-size:16px;font-size:1rem}.checkout[data-v-3f9ab082]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:25px auto;min-height:200px;font-family:Abril Fatface}form[data-v-3f9ab082]{width:100%;font-family:serif}input[data-v-3f9ab082],label[data-v-3f9ab082],select[data-v-3f9ab082]{width:100%;height:37px;margin:4px auto}.button--container[data-v-3f9ab082]{width:100%;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.btn--continue[data-v-3f9ab082]{margin-top:18px;display:block;padding:15px 10px;position:relative;right:0;width:50%}input[data-v-3f9ab082]{padding-left:10px;-webkit-box-shadow:inset 0 1px 5px rgba(12,12,13,.1);box-shadow:inset 0 1px 5px rgba(12,12,13,.1);border:1px solid rgba(12,12,13,.1)}.btn--checkout[data-v-3f9ab082]{margin-top:18px;display:block;padding:15px 10px;position:relative;right:0;width:50%}.checkout--process[data-v-3f9ab082]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;margin-bottom:18px;font-size:11.2px;font-size:.7rem;text-transform:uppercase}.on--step3[data-v-3f9ab082]{font-family:Josefin Slab,serif;font-size:17.6px;font-size:1.1rem;font-weight:300;width:100%}.confirm[data-v-3f9ab082]{padding:10px 10% 20px;margin-left:-10%;margin-right:-10%;background-color:#96281b;color:#fff;line-height:1.4;letter-spacing:.78px}.success[data-v-3f9ab082]{font-family:Abril Fatface,serif;text-align:center;text-transform:uppercase;letter-spacing:2.1px;padding:20px auto;background-color:hsla(0,0%,100%,.88)}@media screen and (min-width:800px){.checkout[data-v-3f9ab082]{max-width:720px;margin:0 auto}.checkout--process[data-v-3f9ab082]{font-size:1.2rem}.success[data-v-3f9ab082]{background-color:#f7931e;min-width:100%;margin-left:-25%;margin-right:-25%;color:#fff;text-shadow:0 2px 2px rgba(12,12,13,.1);padding:5% 0}.confirm[data-v-3f9ab082]{min-width:100%;padding-left:25%;margin-left:-25%;margin-right:-25%;padding-top:10%;padding-bottom:10%}}",""])},NuFM:function(t,e,a){"use strict";e.a={data:function(){return{step1:!0,step2:!1,step3:!1,checked1:!1,checked2:!1,firstName:"Cookie",lastName:"Monster",addr1:"123 Sesame Street",addr2:"",city:"New Yloork City",state:"NY",country:"United States",zipCode:"12345",phone:""}},methods:{payment:function(){this.step1=!1,this.step2=!0,this.checked1=!0},confirm:function(){this.step2=!1,this.step3=!0,this.step3&&(this.checked2=!0,this.checked1=!0,this.checked3=!0)}}}},"P/uT":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkout"},[i("div",{staticClass:"checkout--process"},[i("p",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.checked1,expression:"checked1"}],staticClass:"icon-check"}),t._v(" Shipping")]),i("p",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.checked2,expression:"checked2"}],staticClass:"icon-check"}),t._v(" Payment")]),i("p",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"icon-check"}),t._v(" Confirmation")])]),1==t.step1?i("div",{staticClass:"step1"},[i("h2",[t._v("Shipping Address")]),i("form",{attrs:{action:"",method:"GET"}},[i("label",{attrs:{for:"country"}},[t._v("Country:")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.country=e.target.multiple?a:a[0]}}},[i("option",{attrs:{value:"Default"}},[t._v("Please Select One")]),i("option",{attrs:{value:"United States"}},[t._v("United States")]),i("option",{attrs:{value:"Canada"}},[t._v("Canada")])]),i("label",{attrs:{for:"firstName"}},[t._v("First Name:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text",name:"firstName"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),i("label",{attrs:{for:"lastName"}},[t._v("Last Name:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text",name:"lastName"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),i("label",{attrs:{for:"address1"}},[t._v("Address Line 1:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addr1,expression:"addr1"}],attrs:{type:"text",name:"address1"},domProps:{value:t.addr1},on:{input:function(e){e.target.composing||(t.addr1=e.target.value)}}}),i("label",{attrs:{for:"address2"}},[t._v("Address Line 2 (Optional):")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addr2,expression:"addr2"}],attrs:{type:"text",name:"address2"},domProps:{value:t.addr2},on:{input:function(e){e.target.composing||(t.addr2=e.target.value)}}}),i("label",{attrs:{for:"city"}},[t._v("City:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],attrs:{type:"text",name:"city"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),i("label",{attrs:{for:"state"}},[t._v("State:")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],attrs:{name:"state"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.state=e.target.multiple?a:a[0]}}},[i("option",{attrs:{value:"Default"}},[t._v("Please Select One")]),i("option",{attrs:{value:"AL"}},[t._v("Alabama")]),i("option",{attrs:{value:"AK"}},[t._v("Alaska")]),i("option",{attrs:{value:"AZ"}},[t._v("Arizona")]),i("option",{attrs:{value:"AR"}},[t._v("Arkansas")]),i("option",{attrs:{value:"CA"}},[t._v("California")]),i("option",{attrs:{value:"CO"}},[t._v("Colorado")]),i("option",{attrs:{value:"CT"}},[t._v("Connecticut")]),i("option",{attrs:{value:"DE"}},[t._v("Delaware")]),i("option",{attrs:{value:"DC"}},[t._v("District Of Columbia")]),i("option",{attrs:{value:"FL"}},[t._v("Florida")]),i("option",{attrs:{value:"GA"}},[t._v("Georgia")]),i("option",{attrs:{value:"HI"}},[t._v("Hawaii")]),i("option",{attrs:{value:"ID"}},[t._v("Idaho")]),i("option",{attrs:{value:"IL"}},[t._v("Illinois")]),i("option",{attrs:{value:"IN"}},[t._v("Indiana")]),i("option",{attrs:{value:"IA"}},[t._v("Iowa")]),i("option",{attrs:{value:"KS"}},[t._v("Kansas")]),i("option",{attrs:{value:"KY"}},[t._v("Kentucky")]),i("option",{attrs:{value:"LA"}},[t._v("Louisiana")]),i("option",{attrs:{value:"ME"}},[t._v("Maine")]),i("option",{attrs:{value:"MD"}},[t._v("Maryland")]),i("option",{attrs:{value:"MA"}},[t._v("Massachusetts")]),i("option",{attrs:{value:"MI"}},[t._v("Michigan")]),i("option",{attrs:{value:"MN"}},[t._v("Minnesota")]),i("option",{attrs:{value:"MS"}},[t._v("Mississippi")]),i("option",{attrs:{value:"MO"}},[t._v("Missouri")]),i("option",{attrs:{value:"MT"}},[t._v("Montana")]),i("option",{attrs:{value:"NE"}},[t._v("Nebraska")]),i("option",{attrs:{value:"NV"}},[t._v("Nevada")]),i("option",{attrs:{value:"NH"}},[t._v("New Hampshire")]),i("option",{attrs:{value:"NJ"}},[t._v("New Jersey")]),i("option",{attrs:{value:"NM"}},[t._v("New Mexico")]),i("option",{attrs:{value:"NY"}},[t._v("New York")]),i("option",{attrs:{value:"NC"}},[t._v("North Carolina")]),i("option",{attrs:{value:"ND"}},[t._v("North Dakota")]),i("option",{attrs:{value:"OH"}},[t._v("Ohio")]),i("option",{attrs:{value:"OK"}},[t._v("Oklahoma")]),i("option",{attrs:{value:"OR"}},[t._v("Oregon")]),i("option",{attrs:{value:"PA"}},[t._v("Pennsylvania")]),i("option",{attrs:{value:"RI"}},[t._v("Rhode Island")]),i("option",{attrs:{value:"SC"}},[t._v("South Carolina")]),i("option",{attrs:{value:"SD"}},[t._v("South Dakota")]),i("option",{attrs:{value:"TN"}},[t._v("Tennessee")]),i("option",{attrs:{value:"TX"}},[t._v("Texas")]),i("option",{attrs:{value:"UT"}},[t._v("Utah")]),i("option",{attrs:{value:"VT"}},[t._v("Vermont")]),i("option",{attrs:{value:"VA"}},[t._v("Virginia")]),i("option",{attrs:{value:"WA"}},[t._v("Washington")]),i("option",{attrs:{value:"WV"}},[t._v("West Virginia")]),i("option",{attrs:{value:"WI"}},[t._v("Wisconsin")]),i("option",{attrs:{value:"WY"}},[t._v("Wyoming")])]),i("label",{attrs:{for:"zipCode"}},[t._v("Postal Code:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.zipCode,expression:"zipCode"}],attrs:{type:"text",name:"zipCode"},domProps:{value:t.zipCode},on:{input:function(e){e.target.composing||(t.zipCode=e.target.value)}}}),i("label",{attrs:{for:"phone"}},[t._v("Phone Number: (Optional)")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"tel",name:"phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),i("div",{staticClass:"button--container"},[i("button",{staticClass:"btn btn--checkout",on:{click:function(e){t.payment()}}},[t._v("Continue")])])]):t._e(),1==t.step2?i("div",{staticClass:"on--step2"},[i("h2",[t._v("Secure Payment")]),t._m(0),i("div",{staticClass:"button--container"},[i("button",{staticClass:"btn btn--continue",on:{click:function(e){t.confirm()}}},[t._v("Continue")])])]):t._e(),1==t.step3?i("div",{staticClass:"on--step3"},[i("h2",{staticClass:"success"},[t._v("confirmed")]),i("div",{staticClass:"confirm"},[t._m(1),i("p",[t._v("Your order is on the way to: ")]),i("p",[t._v(t._s(t.firstName+" "+t.lastName))]),i("p",[t._v(t._s(t.addr1+" "+t.addr2))]),i("p",[t._v(t._s(t.city+", "+t.state))]),i("p",[t._v(t._s(t.zipCode+", "+t.country))]),t.phone?i("p",[t._v(t._s("("+t.phone.slice(0,3)+")-"+t.phone.slice(3,6)+"-"+t.phone.slice(6,11)))]):i("p",[t._v(t._s(t.phone=""))])]),t._m(2)]):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.step3,expression:"!step3"}],staticClass:"modal"},[i("img",{attrs:{src:a("UR34"),alt:"Dark Chocolate Caramel Crunch Bar"}}),t._m(3),i("h4",[t._v("$11.25")])])])};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("form",[e("label",{attrs:{for:"ccCard"}},[this._v("Credit Card Number")]),e("input",{attrs:{type:"text",name:"ccCard"}}),e("label",{staticClass:"exp",attrs:{for:"expDate"}},[this._v("Exp Date")]),e("input",{attrs:{type:"text",name:"expDate"}}),e("label",{staticClass:"ccv",attrs:{for:"ccv"}},[this._v("CCV")]),e("input",{attrs:{type:"text",name:"ccv"}}),e("label",{attrs:{for:"name"}},[this._v("Name on Card")]),e("input",{attrs:{type:"text",name:"name"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Order Number:")]),this._v(" 192A2-GA001")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"thankyou"},[e("p",[this._v("Thank you for shopping with us")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"per--item"},[e("h4",[this._v("3 Items")]),e("p",[this._v("Show Details")])])}]};e.a=o},UR34:function(t,e,a){t.exports=a.p+"img/caramel-crunch.221a9ca.png"},eC7D:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("NuFM"),o=a("P/uT"),s=!1;var n=function(t){s||a("iCpK")},r=a("VU/8")(i.a,o.a,!1,n,"data-v-3f9ab082",null);r.options.__file="pages/checkout.vue",e.default=r.exports},iCpK:function(t,e,a){var i=a("Cl1F");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("2e3c3b24",i,!1,{sourceMap:!1})}});