(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1096:function(t,e,s){"use strict";var a=s(322);s.n(a).a},1097:function(t,e,s){(t.exports=s(7)(!1)).push([t.i,"[dir] #profile-tabs .vs-tabs--content {\n  padding: 0;\n}",""])},1529:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{username:"johny_01",name:this.$store.state.AppActiveUser.displayName,email:"john@admin.com",company:"SnowMash Technologies Pvt Ltd"}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},l=s(0),n=Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"flex flex-wrap items-center mb-base"},[s("vs-avatar",{staticClass:"mr-4 mb-4",attrs:{src:t.activeUserInfo.photoURL,size:"70px"}}),t._v(" "),s("div",[s("vs-button",{staticClass:"mr-4 sm:mb-0 mb-2"},[t._v("Upload photo")]),t._v(" "),s("vs-button",{attrs:{type:"border",color:"danger"}},[t._v("Remove")]),t._v(" "),s("p",{staticClass:"text-sm mt-2"},[t._v("Allowed JPG, GIF or PNG. Max size of 800kB")])],1)],1),t._v(" "),s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),s("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("vs-alert",{staticClass:"h-full my-4",attrs:{"icon-pack":"feather",icon:"icon-info",color:"warning"}},[s("span",[t._v("Your account is not verified. "),s("a",{staticClass:"hover:underline",attrs:{href:"#"}},[t._v("Resend Confirmation")])])]),t._v(" "),s("vs-input",{staticClass:"w-full my-base",attrs:{"label-placeholder":"Company"},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}),t._v(" "),s("div",{staticClass:"flex flex-wrap items-center justify-end"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),t._v(" "),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)}),[],!1,null,null,null).exports,i={data:function(){return{old_password:"",new_password:"",confirm_new_password:""}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},o=Object(l.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Old Password"},model:{value:t.old_password,callback:function(e){t.old_password=e},expression:"old_password"}}),t._v(" "),s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"New Password"},model:{value:t.new_password,callback:function(e){t.new_password=e},expression:"new_password"}}),t._v(" "),s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Confirm Password"},model:{value:t.confirm_new_password,callback:function(e){t.confirm_new_password=e},expression:"confirm_new_password"}}),t._v(" "),s("div",{staticClass:"flex flex-wrap items-center justify-end"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),t._v(" "),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)}),[],!1,null,null,null).exports,c=s(44),r=s.n(c),v=(s(105),s(33)),u=s.n(v),m={components:{flatPickr:r.a,vSelect:u.a},data:function(){return{bio:this.$store.state.AppActiveUser.about,dob:null,country:"USA",lang_known:["English","Russian"],gender:"male",mobile:"",website:"",countryOptions:[{label:"Australia",value:"australia"},{label:"France",value:"france"},{label:"Germany",value:"germany"},{label:"India",value:"india"},{label:"Jordan",value:"jordan"},{label:"Morocco",value:"morocco"},{label:"Portuguese",value:"portuguese"},{label:"Syria",value:"syria"},{label:"USA",value:"usa"}],langOptions:[{label:"English",value:"english"},{label:"Spanish",value:"spanish"},{label:"French",value:"french"},{label:"Russian",value:"russian"},{label:"German",value:"german"},{label:"Arabic",value:"arabic"},{label:"Sanskrit",value:"sanskrit"}]}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},d={data:function(){return{twitter:"https://twitter.com/adoptionism744",facebook:"https://www.facebook.com/adoptionism664",instagram:"https://www.instagram.com/adopt-ionism744/",github:"https://github.com/madop818",linkedin:"https://codepen.io/adoptism243",slack:"@adoptionism744"}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},b={data:function(){return{old_password:"",new_password:"",confirm_new_password:""}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},p={data:function(){return{comment:!0,answer:!0,follow:!1,news:!1,product_update:!1,blog:!0}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},f={components:{UserSettingsGeneral:n,UserSettingsChangePassword:o,UserSettingsInfo:Object(l.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("vs-textarea",{attrs:{label:"Bio",placeholder:"Your bio..."},model:{value:t.bio,callback:function(e){t.bio=e},expression:"bio"}}),t._v(" "),s("div",{staticClass:"mt-8"},[s("label",{staticClass:"text-sm"},[t._v("Birth Date")]),t._v(" "),s("flat-pickr",{staticClass:"w-full",attrs:{config:{dateFormat:"d F Y"}},model:{value:t.dob,callback:function(e){t.dob=e},expression:"dob"}})],1),t._v(" "),s("div",{staticClass:"mt-8"},[s("label",{staticClass:"text-sm"},[t._v("Country")]),t._v(" "),s("v-select",{attrs:{options:t.countryOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),t._v(" "),s("div",{staticClass:"mt-8"},[s("label",{staticClass:"text-sm"},[t._v("Languages")]),t._v(" "),s("v-select",{attrs:{multiple:"",closeOnSelect:!1,options:t.langOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.lang_known,callback:function(e){t.lang_known=e},expression:"lang_known"}})],1),t._v(" "),s("vs-input",{staticClass:"w-full mt-8",attrs:{type:"number","label-placeholder":"Mobile"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),s("vs-input",{staticClass:"w-full mt-8",attrs:{"label-placeholder":"Website"},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}}),t._v(" "),s("div",{staticClass:"mt-8 mb-base"},[s("label",{staticClass:"text-sm"},[t._v("Gender")]),t._v(" "),s("div",{staticClass:"mt-2"},[s("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"male"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("Male")]),t._v(" "),s("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"female"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("Female")]),t._v(" "),s("vs-radio",{attrs:{"vs-value":"other"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("Other")])],1)]),t._v(" "),s("div",{staticClass:"flex flex-wrap items-center justify-end"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),t._v(" "),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)}),[],!1,null,null,null).exports,UserSettingsSocialLinks:Object(l.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-twitter",label:"GitHub","icon-no-border":""},model:{value:t.twitter,callback:function(e){t.twitter=e},expression:"twitter"}}),t._v(" "),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-facebook",label:"GitHub","icon-no-border":""},model:{value:t.facebook,callback:function(e){t.facebook=e},expression:"facebook"}}),t._v(" "),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-instagram",label:"GitHub","icon-no-border":""},model:{value:t.instagram,callback:function(e){t.instagram=e},expression:"instagram"}}),t._v(" "),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-github",label:"GitHub","icon-no-border":""},model:{value:t.github,callback:function(e){t.github=e},expression:"github"}}),t._v(" "),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-linkedin",label:"GitHub","icon-no-border":""},model:{value:t.linkedin,callback:function(e){t.linkedin=e},expression:"linkedin"}}),t._v(" "),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-slack",label:"GitHub","icon-no-border":""},model:{value:t.slack,callback:function(e){t.slack=e},expression:"slack"}}),t._v(" "),s("div",{staticClass:"flex flex-wrap items-center justify-end"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),t._v(" "),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)}),[],!1,null,null,null).exports,UserSettingsConnections:Object(l.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"flex flex-wrap justify-between items-center mb-8"},[s("div",[s("p",[t._v("Account is connected with Google.")]),t._v(" "),s("p",{staticClass:"font-medium mb-4"},[t._v("john@gmail.com")])]),t._v(" "),s("vs-button",{attrs:{type:"border",color:"danger"}},[t._v("Disconnect")])],1),t._v(" "),s("div",{staticClass:"flex flex-wrap justify-between items-center mb-base"},[s("div",[s("p",[t._v("Account is connected with facebook.")]),t._v(" "),s("p",{staticClass:"font-medium mb-4"},[t._v("@pixinvents")])]),t._v(" "),s("vs-button",{attrs:{type:"border",color:"danger"}},[t._v("Disconnect")])],1),t._v(" "),s("vs-button",{staticClass:"mb-6 ml-auto",attrs:{color:"#00aaff","icon-pack":"feather",icon:"icon-twitter"}},[t._v("Connected To Twitter")]),t._v(" "),s("vs-button",{staticClass:"ml-auto",attrs:{color:"#405DE6","icon-pack":"feather",icon:"icon-instagram"}},[t._v("Connected To Instagram")])],1)}),[],!1,null,null,null).exports,UserSettingsNotifications:Object(l.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"mb-base"},[s("h6",{staticClass:"mb-4"},[t._v("Activity")]),t._v(" "),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),t._v(" "),s("span",{staticClass:"ml-4"},[t._v("Email me when someone comments onmy article")])],1),t._v(" "),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),t._v(" "),s("span",{staticClass:"ml-4"},[t._v("Email me when someone answers on my form")])],1),t._v(" "),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.follow,callback:function(e){t.follow=e},expression:"follow"}}),t._v(" "),s("span",{staticClass:"ml-4"},[t._v("Email me hen someone follows me")])],1)]),t._v(" "),s("div",[s("h6",{staticClass:"mb-4"},[t._v("Application")]),t._v(" "),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.news,callback:function(e){t.news=e},expression:"news"}}),t._v(" "),s("span",{staticClass:"ml-4"},[t._v("News and announcements")])],1),t._v(" "),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.product_update,callback:function(e){t.product_update=e},expression:"product_update"}}),t._v(" "),s("span",{staticClass:"ml-4"},[t._v("Weekly product updates")])],1),t._v(" "),s("div",{staticClass:"flex items-center"},[s("vs-switch",{model:{value:t.blog,callback:function(e){t.blog=e},expression:"blog"}}),t._v(" "),s("span",{staticClass:"ml-4"},[t._v("Weekly blog digest")])],1)]),t._v(" "),s("div",{staticClass:"flex flex-wrap items-center justify-end mt-base"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),t._v(" "),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)])}),[],!1,null,null,null).exports},data:function(){return{}},computed:{isSmallerScreen:function(){return this.$store.state.windowWidth<768}}},_=(s(1096),Object(l.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vs-tabs",{key:t.isSmallerScreen,staticClass:"tabs-shadow-none",attrs:{position:t.isSmallerScreen?"top":"left",id:"profile-tabs"}},[s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-user",label:t.isSmallerScreen?"":"General"}},[s("div",{staticClass:"tab-general md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-general")],1)]),t._v(" "),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-lock",label:t.isSmallerScreen?"":"Change Password"}},[s("div",{staticClass:"tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-change-password")],1)]),t._v(" "),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-info",label:t.isSmallerScreen?"":"Info"}},[s("div",{staticClass:"tab-info md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-info")],1)]),t._v(" "),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-github",label:t.isSmallerScreen?"":"Social Links"}},[s("div",{staticClass:"tab-social-links md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-social-links")],1)]),t._v(" "),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-link-2",label:t.isSmallerScreen?"":"Connections"}},[s("div",{staticClass:"tab-text md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-connections")],1)]),t._v(" "),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-bell",label:t.isSmallerScreen?"":"Notifications"}},[s("div",{staticClass:"tab-text md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-notifications")],1)])],1)}),[],!1,null,null,null));e.default=_.exports},322:function(t,e,s){var a=s(1097);"string"==typeof a&&(a=[[t.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};s(8)(a,l);a.locals&&(t.exports=a.locals)}}]);