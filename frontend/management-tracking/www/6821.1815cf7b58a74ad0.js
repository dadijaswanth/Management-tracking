"use strict";(self.webpackChunkmanagement_tracking=self.webpackChunkmanagement_tracking||[]).push([[6821],{6821:(_,s,t)=>{t.r(s),t.d(s,{mdTransitionAnimation:()=>T});var a=t(7700),c=t(3435);const T=(O,i)=>{var o,r,l;const d="40px",g="back"===i.direction,u=i.leavingEl,E=(0,c.g)(i.enteringEl),f=E.querySelector("ion-toolbar"),n=(0,a.c)();if(n.addElement(E).fill("both").beforeRemoveClass("ion-page-invisible"),g?n.duration((null!==(o=i.duration)&&void 0!==o?o:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration((null!==(r=i.duration)&&void 0!==r?r:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${d})`,"translateY(0px)").fromTo("opacity",.01,1),f){const e=(0,a.c)();e.addElement(f),n.addAnimation(e)}if(u&&g){n.duration((null!==(l=i.duration)&&void 0!==l?l:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const e=(0,a.c)();e.addElement((0,c.g)(u)).onFinish(v=>{1===v&&e.elements.length>0&&e.elements[0].style.setProperty("display","none")}).fromTo("transform","translateY(0px)",`translateY(${d})`).fromTo("opacity",1,0),n.addAnimation(e)}return n}}}]);