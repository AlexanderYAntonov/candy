(this.webpackJsonpcandy=this.webpackJsonpcandy||[]).push([[0],{30:function(e,a,t){},38:function(e,a,t){},49:function(e,a,t){e.exports=t(65)},54:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),s=t(12),i=t(13),o=t(15),m=t(14),u=t(92),d=t(84),E=t(88),p=t(86),h=t(85),v=t(83),f=t(87),N=t(89),b=t(8),g=t(39),_=t.n(g),y=(t(54),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={intervalId:0},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=window.document.getElementById("scroll-top-button");window.addEventListener("scroll",(function(){e.hidden=0===window.pageYOffset}))}},{key:"scrollStep",value:function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)}},{key:"scrollToTop",value:function(){var e=setInterval(this.scrollStep.bind(this),this.props.delayInMs);this.setState({intervalId:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{id:"scroll-top-button",title:"\u041d\u0430\u0432\u0435\u0440\u0445",className:"scroll",onClick:function(){e.scrollToTop()}},r.a.createElement(_.a,{className:"scroll-top__icon"}))}}]),t}(r.a.Component)),j=(t(38),t(30),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).Preloader=function(){return r.a.createElement("div",{className:"lds-container"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},e.buildTemplate=function(){var a=e.props.list;return a.map((function(e){return r.a.createElement(v.a,{item:!0,key:e.id,xs:12,sm:12,md:6,xl:4,className:"albumGrid"},r.a.createElement(d.a,{className:"card"},r.a.createElement(h.a,{className:"cardMedia",image:"/candy/assets/images/"+e.imgSrc,title:e.title}),r.a.createElement(p.a,{className:"cardContent"},r.a.createElement(f.a,{gutterBottom:!0,variant:"h6",component:"h3",className:"cardTitle"},e.title),r.a.createElement(f.a,{className:"cardText"},e.shortDescription)),r.a.createElement(E.a,{className:"cardActions"},r.a.createElement(b.b,{to:"/details/"+e.id},r.a.createElement(u.a,{size:"small",className:"cardButton"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")),r.a.createElement(b.b,{to:"/order"},r.a.createElement(u.a,{size:"small",className:"cardButton"},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c")))))}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("div",{className:"hero-content"},r.a.createElement("div",{className:"heroButtons"},r.a.createElement(b.b,{to:"/order"},r.a.createElement(u.a,{variant:"contained",className:"mainButton"},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"))),r.a.createElement("div",{className:"hero-title"},"\u0414\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u043a\u043e\u043d\u0434\u0438\u0442\u0435\u0440 - \u0432\u044b\u043f\u0435\u0447\u043a\u0430 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437")),r.a.createElement(N.a,{className:"cardGrid",maxWidth:"md"},r.a.createElement(v.a,{container:!0,spacing:4},e?this.Preloader():this.buildTemplate()))),r.a.createElement(y,{scrollStepInPx:"50",delayInMs:"16.66"}))}}]),t}(r.a.Component)),O=t(91),w=t(33),k=t.n(w),x=t(90),I=t(20),S=(t(61),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;if(e){var a=e||{},t=a.title,n=a.fullDescription,c=a.imgSrc;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"details__container"},r.a.createElement(d.a,{className:"details__card shadow-drop-2-center scale-up-center"},r.a.createElement(h.a,{className:"details__image",image:"/candy/assets/images/"+c,title:t}),r.a.createElement("div",{className:"details__text"},r.a.createElement(p.a,{className:"details__content"},r.a.createElement(f.a,{gutterBottom:!0,variant:"h6",component:"h3",className:"details__title"},t),r.a.createElement(f.a,{className:"details__description"},n)),r.a.createElement(E.a,{className:"details__actions"},r.a.createElement(b.b,{to:"/"},r.a.createElement(u.a,{size:"small",className:"details__card-btn"},"\u041d\u0430\u0437\u0430\u0434")),r.a.createElement(b.b,{to:"/order"},r.a.createElement(u.a,{size:"small",className:"details__card-btn"},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c")))))))}return r.a.createElement(r.a.Fragment,null)}}]),t}(r.a.Component)),T=t(28),B=t.n(T),L=(t(62),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"notFound"},r.a.createElement("div",{className:"hero-content not-found__hero"},r.a.createElement("div",{className:"hero-title"},"404")),r.a.createElement(N.a,{maxWidth:"md",className:"not-found__container"},r.a.createElement("h3",null,"\u0423\u043f\u0441, \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0448\u043b\u0430\u0441\u044c..."),r.a.createElement(b.b,{to:"/",className:"icon-link"},r.a.createElement(B.a,{className:"icon"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0432\u044b\u0431\u043e\u0440\u0443 \u0442\u043e\u0440\u0442\u0438\u043a\u0430"))))}}]),t}(r.a.Component)),W=(t(63),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"order__main"},r.a.createElement("div",{className:"hero-content order__hero"},r.a.createElement("div",{className:"hero-title"},"\u041a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437")),r.a.createElement(N.a,{maxWidth:"md",className:"order__container"},r.a.createElement("p",null,"\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u0440\u0442, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0438\u043b\u0438 \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c \u0432 Whatsapp 8-913-123-45-67. \u041c\u044b \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u043c\u0441\u044f \u043e \u0432\u0435\u0441\u0435 \u0442\u043e\u0440\u0442\u0430 \u0438 \u0441\u0440\u043e\u043a\u0430\u0445 \u0435\u0433\u043e \u0432\u044b\u043f\u0435\u0447\u043a\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0431\u0440\u0430\u0442\u044c \u0442\u043e\u0440\u0442 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443: \u043d\u0430\u0448 \u0430\u0434\u0440\u0435\u0441."),r.a.createElement(b.b,{to:"/",className:"icon-link"},r.a.createElement(B.a,{className:"icon"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0432\u044b\u0431\u043e\u0440\u0443 \u0442\u043e\u0440\u0442\u0438\u043a\u0430"))))}}]),t}(r.a.Component));t(64);function C(){return r.a.createElement(f.a,{variant:"body2",align:"center"},"\xa9 \u0414\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u043a\u043e\u043d\u0434\u0438\u0442\u0435\u0440 ",(new Date).getFullYear(),".")}var D=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={list:[],isLoading:!1},e.DetailsWrapper=function(a){var t=a.match.params.id,n=e.state.list.filter((function(e){return e.id===t}));return n.length>0?r.a.createElement(S,{data:n[0],key:t}):r.a.createElement(L,null)},e.RouterTemplate=function(a,t){return r.a.createElement("div",{className:"switch"},r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,{list:a,isLoading:t})}}),r.a.createElement(I.a,{path:"/details/:id",component:e.DetailsWrapper}),r.a.createElement(I.a,{path:"/order",component:W}),r.a.createElement(I.a,{component:L})))},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/candy/assets/json/cakesList.json").then((function(e){return e.json()})).then((function(a){e.setState({isLoading:!1,list:a})})).catch((function(a){console.error(a),e.setState({isLoading:!1,list:[]})}))}},{key:"render",value:function(){var e=this.state,a=e.list,t=e.isLoading;return r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{position:"fixed",id:"appbar"},r.a.createElement(O.a,{className:"toolbar"},r.a.createElement(k.a,{className:"icon"}),r.a.createElement(f.a,{variant:"h6",color:"inherit",noWrap:!0},"8-913-123-45-67"))),this.RouterTemplate(a,t),r.a.createElement("footer",{className:"footer"},r.a.createElement(f.a,{variant:"subtitle1",align:"center",component:"p",className:"footerText"},r.a.createElement(k.a,{className:"icon"})," 8-913-123-45-56"),r.a.createElement(C,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.9c82a6f5.chunk.js.map