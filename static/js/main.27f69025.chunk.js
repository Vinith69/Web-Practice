(this["webpackJsonpkalajagatthu-creation"]=this["webpackJsonpkalajagatthu-creation"]||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),i=a(42),r=a.n(i),o=(a(52),a(19),a(3)),l=a(4),j=a(2),d=a(43),h=a.n(d);var u=function(e){var t=e.color,a=Object(s.useState)(!0),n=Object(j.a)(a,2),i=n[0],r=n[1],l=Object(s.useState)(!1),d=Object(j.a)(l,2),h=d[0],u=d[1],b=function(){var e=window.scrollY;u(e>100)};return Object(s.useEffect)((function(){window.addEventListener("scroll",b)}),[]),Object(c.jsxs)("div",{className:"nav-bar ".concat(h&&"sticky"," ").concat(t&&t," "),children:[Object(c.jsx)(o.b,{to:"/",activeClassName:"",className:"nav-logo",children:Object(c.jsxs)("h1",{children:["K ",Object(c.jsx)("span",{children:"C"})]})}),Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)("i",{className:"fa fa-bars","aria-hidden":"true",onClick:function(e){r(!i)}}),Object(c.jsxs)("ul",{className:"collapsed ".concat(i?"is-expanded":""),children:[Object(c.jsx)(o.b,{activeClassName:"active",exact:!0,to:"/",children:Object(c.jsx)("li",{children:"Home"})}),Object(c.jsx)(o.b,{activeClassName:"active",to:"/about",children:Object(c.jsx)("li",{children:"About"})}),Object(c.jsx)(o.b,{activeClassName:"active",to:"/videos",children:Object(c.jsx)("li",{children:"Videos"})}),Object(c.jsx)(o.b,{exact:!0,activeClassName:"active",to:"/programs",children:Object(c.jsx)("li",{children:"Programs"})}),Object(c.jsx)(o.b,{activeClassName:"active notDisplay",className:"notDisplay",to:"/contact",children:Object(c.jsx)("li",{children:"Contact"})})]})]}),Object(c.jsx)(o.b,{activeClassName:"active",className:"btn ".concat(!i&&"is-expanded"),to:"/donation",children:Object(c.jsx)("li",{children:"Donation"})})]})};a(74);var b=function(e){var t=e.color;return Object(c.jsxs)("footer",{className:"footer ".concat(t&&"normal"),children:[Object(c.jsxs)("section",{children:[Object(c.jsxs)("div",{className:"contact-section row",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("span",{children:"Quick "}),Object(c.jsx)("span",{className:"light",children:"Links"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/donation",children:"Donation"}),Object(c.jsx)(o.b,{to:"/videos",children:"Videos"}),Object(c.jsx)(o.b,{to:"/about",children:"About"}),Object(c.jsx)(o.b,{to:"/programs",children:"Programs"})]})]}),Object(c.jsxs)("div",{className:"contact-section",children:[Object(c.jsxs)("h2",{className:"contact-title",children:[Object(c.jsx)("span",{children:"Contact "}),Object(c.jsx)("span",{className:"light",children:"Us"})]}),Object(c.jsxs)("div",{className:"contact-details",children:[Object(c.jsx)("p",{children:"Kalajagatthu Creations"}),Object(c.jsxs)("p",{children:["Address: Swarta tirtha, 1st floor, Badagupete, Udupi"," "]}),Object(c.jsx)("p",{children:"Tel: 7777777777, 9999999999"}),Object(c.jsx)("p",{children:"Email: dinchakPooja@gmail.com"})]})]}),Object(c.jsxs)("div",{className:"sociallMedia contact-section row",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("span",{children:"Social "}),Object(c.jsx)("span",{className:"light",children:"Media"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{target:"Hello",href:"https://www.instagram.com/vinith_nayak/",children:Object(c.jsx)("i",{class:"fab fa-youtube",children:" Youtube"})}),Object(c.jsx)("a",{href:"",target:"heludilla",children:Object(c.jsx)("i",{class:"fab fa-instagram",children:" Instagram"})}),Object(c.jsx)("a",{href:"",target:"heludilla",children:Object(c.jsx)("i",{class:"fab fa-facebook-f",children:" Facebook"})}),Object(c.jsx)("a",{href:"",target:"heludilla",children:Object(c.jsx)("i",{class:"fab fa-twitter",children:" Twitter"})})]})]})]}),Object(c.jsxs)("div",{className:"rights",children:[Object(c.jsx)("p",{children:"\xa92020 Kalajagatthu Creations. All Rights Reserved."}),Object(c.jsxs)("p",{className:"my-link",children:["Designed By ",Object(c.jsx)("span",{children:"Vineeth P Nayak"})]})]})]})},O=a(11),p=a.n(O);function m(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var x=a(45),g=a.n(x);var f=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(420),r=Object(j.a)(i,2),o=r[0],l=r[1],d=Object(s.useState)(320),O=Object(j.a)(d,2),x=O[0],f=O[1],v=function(){var e=Object(s.useState)(m()),t=Object(j.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){function e(){c(m())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),w=(v.height,v.width),N=Object(s.useState)(!0),y=Object(j.a)(N,2),k=y[0],S=y[1];return Object(s.useEffect)((function(){!function(){S(!0);p.a.get("http://localhost:5000/addLinks").then((function(e){console.log(e),n(e.data)})),setTimeout((function(){S(!1)}),1500)}(),w>500?(l(420),f(320)):(l(320),f(220))}),[w]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{color:"add"}),k?Object(c.jsx)("div",{className:"isLoading",children:Object(c.jsx)(g.a,{type:"bars",color:"black"})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"designs",style:{backgroundPosition:"4rem 1rem",padding:"2rem"}}),Object(c.jsx)("div",{className:"video-title",children:Object(c.jsx)("h1",{children:"Videos"})}),Object(c.jsx)("div",{className:"video",children:a.map((function(e){return Object(c.jsxs)("div",{className:"video-container",children:[Object(c.jsx)(h.a,{className:"video-player",width:o,height:x,url:e.link,controls:!0}),Object(c.jsx)("h5",{children:e.title}),Object(c.jsx)("p",{children:e.description})]},e.link)}))}),Object(c.jsx)("div",{className:"designs",style:{backgroundPosition:"4rem 1rem",padding:"2rem"}})]}),Object(c.jsx)(b,{color:"normal"})]})};var v=function(){return Object(c.jsxs)("div",{className:"notFound",children:[Object(c.jsx)("h1",{children:"Whoa looks like you're lost... Click on the link below to go to Home Page"}),Object(c.jsx)(o.b,{to:"/",children:"Home"})]})},w=a(12),N=a.n(w),y=a(14),k=a(46),S=a.n(k),C=(a(93),a.p+"static/media/logo1.f61ef4cd.png"),P=a(21),E=a.n(P);a(41);var I=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(y.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000/homeProgramImage",e.next=3,p.a.get("http://localhost:5000/homeProgramImage").then((function(e){console.log(e),n(e.data)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),setTimeout((function(){}),5e3),S.a.init({duration:2e3})}),[]),Object(c.jsxs)("div",{className:"Home",children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"image-slider",children:[Object(c.jsxs)("h1",{"data-aos":"fade-up",children:["Kalajagatthu ",Object(c.jsx)("span",{children:"Creations"})]}),Object(c.jsxs)(E.a,{disableButtonsControls:!0,autoPlay:!0,autoPlayInterval:"2000",infinite:!0,className:"carousel",children:[Object(c.jsx)("img",{className:"slidermig",alt:"",src:"https://cdn.shopify.com/s/files/1/1969/3881/products/8_Dancers_Who_Shaped_Indian_Classical_Dance_As_We_Know_It_Today_7ef605fc8dba5425d6965fbd4c8fbe1f_1024x1024.jpg?v=1510119583"}),Object(c.jsx)("img",{src:"https://svpudupi.org/wp-content/uploads/2020/09/slide3.jpg",className:"sliderimg",alt:""}),Object(c.jsx)("img",{src:"http://svpudupi.org/wp-content/uploads/2020/09/slide1.jpg",className:"sliderimg",alt:""}),Object(c.jsx)("img",{src:"http://svpudupi.org/wp-content/uploads/2020/09/slide4.jpg",className:"sliderimg",alt:""}),Object(c.jsx)("img",{src:"http://svpudupi.org/wp-content/uploads/2020/09/slide5.jpg",className:"sliderimg",alt:""})]})]}),Object(c.jsxs)("section",{className:"about-section",children:[Object(c.jsxs)("div",{className:"about","data-aos":"fade-right","data-aos-easing":"ease-in-out","data-aos-offset":"200",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("span",{children:"About "}),Object(c.jsx)("span",{className:"about-title",children:"Kalajagatthu Creations"})]}),Object(c.jsx)("h4",{children:"Samskruti Vishwa Pratistana, Udupi"}),Object(c.jsx)("p",{children:"Our trust Samskruthi Vishwa Prathistana Udupi was founded on 16th September 2019. The very purpose behind building this organisation is Vishwanth Shenoy. He is a pure devotee of art and culture. Entire his life he has spent most of his time and hard-earned money on encouragement and in support of art and culture. Which is merely noticed by the public. His enthusiasm, dedication, love towards art and culture has motivated to take us to weave this organisation."}),Object(c.jsx)(o.b,{to:"/about",children:Object(c.jsx)("h3",{children:"Read More"})})]}),Object(c.jsx)("img",{src:C,className:"about-logo","data-aos":"fade-bottom","data-aos-offset":"200"})]}),Object(c.jsxs)("section",{className:"programs-section",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("span",{children:"About "}),Object(c.jsx)("span",{className:"programs-title",children:"Programs"})]}),Object(c.jsx)("div",{className:"image-section",children:a.map((function(e){return Object(c.jsx)(o.b,{to:"/programs/".concat(e.id),children:Object(c.jsxs)("div",{className:"image-container","data-aos":"fade-right","data-aos-easing":"ease-in-out","data-aos-offset":"00",children:[Object(c.jsx)("img",{src:"/image-page/".concat(e.image),width:"400",height:"auto",alt:"heludilla"}),Object(c.jsx)("h5",{children:e.title}),Object(c.jsxs)("p",{children:[e.description.substring(0,500),"......"]}),Object(c.jsx)("span",{children:e.date})]})},e.id)}))})]}),Object(c.jsx)(b,{})]})};a(126);var T=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),r=Object(j.a)(i,2),o=r[0],l=r[1],d=Object(s.useState)(""),h=Object(j.a)(d,2),u=h[0],b=h[1],O=Object(s.useState)(!0),m=Object(j.a)(O,2),x=m[0],g=m[1],f=Object(s.useState)("Enter EveryThing Correctly"),v=Object(j.a)(f,2),w=v[0],k=v[1],S=function(){var e=Object(y.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),"http://localhost:5000/addLinks",e.next=4,p.a.post("http://localhost:5000/addLinks",{link:a,title:o,description:u}).then((function(e){console.log(e),1===e.data.affectedRows?k("Inserted sucessfully"):k(" Something went wrong try again")}));case 4:setTimeout((function(){g(!1)}),2e4);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){g(""===a||""===u||""===o)}),[a,o,u]),Object(c.jsxs)("div",{className:"Admin",children:[Object(c.jsxs)("h1",{children:["Status:",w]}),Object(c.jsx)("input",{type:"text",placeholder:"Youtube Link",onChange:function(e){return n(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"Title",onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("textarea",{placeholder:"Description",onChange:function(e){return b(e.target.value)}}),Object(c.jsx)("button",{type:"submit",onClick:S,disabled:x,children:"Submit"})]})};a(127);var D=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),r=Object(j.a)(i,2),o=r[0],l=r[1],d=Object(s.useState)(""),h=Object(j.a)(d,2),u=h[0],b=h[1],O=Object(s.useState)(""),m=Object(j.a)(O,2),x=m[0],g=m[1],f=Object(s.useState)(!0),v=Object(j.a)(f,2),w=v[0],k=v[1],S=Object(s.useState)("Enter EveryThing Correctly"),C=Object(j.a)(S,2),P=C[0],E=C[1],I=function(){var e=Object(y.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),k(!0),"http://localhost:5000/addImage",(c=new FormData).append("myFile",o),c.append("title",a),c.append("description",u),c.append("date",x),e.next=11,p.a.post("http://localhost:5000/addImage",c,{headers:{"Content-Type":"multipart/form-data; "}}).then((function(e){1===e.data.affectedRows?E("Inserted sucessfully"):E(" Something went wrong try again")}));case 11:setTimeout((function(){k(!1)}),2e4);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){""===x||""===u||""===a?k(!0):u.length>2e3?(k(!0),E("Description has "+u.length+" characters, it must be less than 2000 characters ")):(k(!1),E("Ready to insert"))}),[x,a,u]),Object(c.jsxs)("div",{className:"addImage",children:[Object(c.jsx)("h1",{children:P}),Object(c.jsx)("input",{type:"text",placeholder:"title",onChange:function(e){return n(e.target.value)}}),Object(c.jsx)("input",{type:"file",name:"myFile",accept:"image/*",onChange:function(e){l(e.target.files[0]),console.log(o)}}),Object(c.jsx)("textarea",{type:"text",placeholder:"description",className:"description",onChange:function(e){return b(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"date DD/MM/YYY",onChange:function(e){return g(e.target.value)}}),Object(c.jsx)("button",{type:"submit",onClick:I,disabled:w,children:"Submit"})]})};a(128);var F=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{color:"add"}),Object(c.jsx)("section",{className:"aboutUs-section",children:Object(c.jsxs)("div",{className:"aboutUs-info",children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:"https://svpudupi.org/wp-content/uploads/2020/09/slide3.jpg",alt:""})}),Object(c.jsx)("p",{children:"Our trust Samskruthi Vishwa Prathistana Udupi was founded on 16th September 2019. The very purpose behind building this organisation is Vishwanth Shenoy. He is a pure devotee of art and culture. Entire his life he has spent most of his time and hard-earned money on encouragement and in support of art and culture. Which is merely noticed by the public. His enthusiasm, dedication, love towards art and culture has motivated to take us to weave this organisation. With his guidance, inspiration and will, there are many cultural and social activities which are conducted in our organisation."}),Object(c.jsxs)("p",{children:[" ","Our organisation focuses majorly on organising the cultural activities, as our institution is situated in culturally rich temple city Udupi. The influence of the city\u2019s cultural richness, we proudly present our organisation \u201cSamskruti Vishwa Prathistana (R) Udupi\u201d, which was inaugurated by Padmashri Dr. Salumarada Timmakka."]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h3",{children:Object(c.jsx)("strong",{children:"Cultural and Social perspectives:"})}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[" ","Focuses on different forms of art and culture."]}),Object(c.jsx)("li",{children:"Creating platform for interested artists and public to participate and grow along with us."}),Object(c.jsx)("li",{children:"Performances, productions and various types of cultural activities."}),Object(c.jsx)("li",{children:"Recognising the achievers, senior artists and giving them to exhibit and educate us their excellences."}),Object(c.jsx)("li",{children:"Encouraging the young talents artists to come forward and take part in our activities."}),Object(c.jsx)("li",{children:"Motivating future generation."}),Object(c.jsx)("li",{children:"Documenting old and useful art and culture."}),Object(c.jsx)("li",{children:"Involving in social activities"}),Object(c.jsx)("li",{children:"Creating viewers."}),Object(c.jsx)("li",{children:"Social awareness and commitment."})]})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h3",{children:Object(c.jsx)("strong",{children:"Objectives:"})}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"To impart, promote and spread education in art, literature, science, commerce, ancient sciences, philosophies and culture of the land."}),Object(c.jsx)("li",{children:"Preserve and protect nature and environment."}),Object(c.jsx)("li",{children:"Short films, theatrical productions, workshops, lectures seminars, Completion, conference."}),Object(c.jsx)("li",{children:"Programs and performances."}),Object(c.jsx)("li",{children:"Cinema, audio-visual programs, artistic performances, cultural activities"}),Object(c.jsx)("li",{children:"Youth encouragement programs."})]})]})]})}),Object(c.jsx)("div",{className:"designs"}),Object(c.jsx)(b,{color:"normal"})]})};var U=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){p.a.get("http://localhost:5000/addImage").then((function(e){n(e.data)}))}),[]),Object(c.jsxs)("div",{className:"programs",children:[Object(c.jsx)(u,{color:"add"}),Object(c.jsx)("div",{className:"prgm-title",children:Object(c.jsx)("h1",{children:"Programs"})}),Object(c.jsx)("div",{className:"image",children:a.map((function(e){return Object(c.jsx)(o.b,{to:"/programs/".concat(e.id),children:Object(c.jsxs)("div",{className:"image-container",children:[Object(c.jsx)("img",{src:"/image-page/".concat(e.image),width:"420",height:"auto",alt:"heludilla"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:e.title}),Object(c.jsxs)("p",{children:[e.description.substring(0,70),"......"]}),Object(c.jsx)("span",{children:e.date})]})]})},e.id)}))}),Object(c.jsx)(b,{color:"normal"})]})};a(129);var _=function(){var e=Object(l.g)().image,t=Object(s.useState)([]),a=Object(j.a)(t,2),i=a[0],r=a[1],o=Object(s.useState)(!0),d=Object(j.a)(o,2),h=d[0],O=d[1];return Object(s.useEffect)((function(){(function(){var t=Object(y.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),"http://localhost:5000/specificImage",t.next=4,p.a.get("http://localhost:5000/specificImage",{params:{id:e}}).then((function(e){r(e.data)}));case 4:O(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{color:"add"}),!h&&!i.length&&Object(c.jsx)(l.a,{to:"/"}),Object(c.jsx)("div",{className:"image-program",children:Object(c.jsx)("div",{children:i.map((function(e){return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)("img",{src:"/image-page/".concat(e.image),width:"420",height:"350",alt:"heludilla"}),Object(c.jsx)("h5",{children:e.title}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("span",{children:e.date})]},e.id)}))})}),Object(c.jsx)(b,{color:"normal"})]})};a(130);var V=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Testing"}),Object(c.jsx)("div",{className:"test",children:Object(c.jsxs)(E.a,{disableButtonsControls:!0,autoHeight:!0,autoPlay:!0,autoPlayInterval:"2000",infinite:!0,children:[Object(c.jsx)("img",{src:"https://svpudupi.org/wp-content/uploads/2020/09/slide3.jpg",className:"sliderimg",alt:""}),Object(c.jsx)("img",{src:"http://svpudupi.org/wp-content/uploads/2020/09/slide1.jpg",className:"sliderimg",alt:""}),Object(c.jsx)("img",{src:"http://svpudupi.org/wp-content/uploads/2020/09/slide4.jpg",className:"sliderimg",alt:""}),Object(c.jsx)("img",{src:"http://svpudupi.org/wp-content/uploads/2020/09/slide5.jpg",className:"sliderimg",alt:""})]})})]})};var A=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{color:"add"}),Object(c.jsxs)("div",{className:"contactUsPage",children:[Object(c.jsxs)("section",{className:"donation",children:[Object(c.jsx)("h1",{children:"Support Us By Donating"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"We the non-profit organization named \u2018Samskrti Vishwa Pratistana (Reg.)\u2019 which literally translate to \u2018Cultural World Establishment\u2019 focused on social and cultural activities from last one year. In the time of pandemic also we are continuing our activity through our social media platform."}),Object(c.jsx)("p",{children:"If you\u2019re able, we\u2019d love it if you could make a donation to help us achieve our mission."})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Bank Details"}),"Name: ",Object(c.jsx)("b",{children:"Samskruti Vishwa Pratistana"}),Object(c.jsx)("br",{}),"Account No:",Object(c.jsx)("b",{children:" 8032000100052501 "}),Object(c.jsx)("br",{}),"IFSC Code: ",Object(c.jsx)("b",{children:"KARB0000803"}),Object(c.jsx)("br",{}),"Branch:",Object(c.jsx)("b",{children:" Kunjibettu"})]})]}),Object(c.jsxs)("section",{className:"contactUsPageSection",children:[Object(c.jsx)("h1",{children:"Contact Us"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("strong",{children:"Chayanat"})," ",Object(c.jsx)("br",{}),"Budnaru Road",Object(c.jsx)("br",{}),"kunjibettu, Udupi \u2013 576102",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"+91 9845240309, +91 8073958961",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"samskruthi.vishwa@gmail.com",Object(c.jsx)("p",{})]})]})]}),Object(c.jsx)(b,{color:"normal"})]})};var B=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/test",component:V}),Object(c.jsx)(l.b,{path:"/addlinks",component:T}),Object(c.jsx)(l.b,{path:"/addimage",component:D}),Object(c.jsx)(l.b,{path:"/contact",component:A}),Object(c.jsx)(l.b,{path:"/donation",component:A}),Object(c.jsx)(l.b,{path:"/about",component:F}),Object(c.jsx)(l.b,{path:"/programs/:image",component:_}),Object(c.jsx)(l.b,{exact:!0,path:"/programs",component:U}),Object(c.jsx)(l.b,{path:"/videos",component:f}),Object(c.jsx)(l.b,{exact:!0,path:"/Web-Practice",component:I}),Object(c.jsx)(l.b,{exact:!0,path:"/",component:I}),Object(c.jsx)(l.b,{component:v})]})})};var H=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(B,{})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,132)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(H,{})}),document.getElementById("root")),L()},19:function(e,t,a){},52:function(e,t,a){},74:function(e,t,a){}},[[131,1,2]]]);
//# sourceMappingURL=main.27f69025.chunk.js.map