(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[11],{122:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));var a="max-width: 599px",r="max-width: 899px"},207:function(e,n,t){e.exports=t.p+"static/media/merchantIcon.2c7f1dbe.png"},208:function(e,n,t){e.exports={"button--filled":"styles_button--filled__16Y8a","button--red-filled":"styles_button--red-filled__sRJHB","button--outlined":"styles_button--outlined__2pif3","button--redfilled":"styles_button--redfilled__3tD5R","modalButton--back":"styles_modalButton--back__1kkBt","modalButton--outlined":"styles_modalButton--outlined__3CkBB","modalButton--filled":"styles_modalButton--filled__NieE7","modalButton--nonfunctional":"styles_modalButton--nonfunctional__LNjxO","modalButton--selected":"styles_modalButton--selected__3g0D5","modalButton--outline":"styles_modalButton--outline__3DhHE","closeButton--close":"styles_closeButton--close__1w-9E","modalForm--form":"styles_modalForm--form__1yJgq","modalInput--input":"styles_modalInput--input__2aMz4","filterable-table-container":"styles_filterable-table-container__1F8BK","header-row":"styles_header-row__25U4F","filter-container":"styles_filter-container__3HvnW","filter-input":"styles_filter-input__1aTps","clear-filter":"styles_clear-filter__1B0kZ","record-count":"styles_record-count__193Dz",fa:"styles_fa__J4CcS",active:"styles_active__204GO",disabled:"styles_disabled__DEvuJ",container:"styles_container__2WJAK",storeInfoContainer:"styles_storeInfoContainer__2EkUd",merchantsContainer:"styles_merchantsContainer__13vzx",overlayContainer:"styles_overlayContainer__3upFs",nycMap:"styles_nycMap__qHmku",contentContainer:"styles_contentContainer__1Wz03",textArea:"styles_textArea__3id8d",ownerPanel:"styles_ownerPanel__3Sxji",storeInfo:"styles_storeInfo__1g3Wp",merchantInfoContainer:"styles_merchantInfoContainer__2Hjf_",flyerContainer:"styles_flyerContainer__1NZRv",redLink:"styles_redLink__3Remy"}},246:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return me}));var a=t(40);var r=t(52);function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t(106),i=t.n(l),c=t(107),s=t(14),u=t(0),m=t(114),d=t(3),p=t(4),f=t(103);function h(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 500px;\n  margin-bottom: 50px;\n\n  @media (max-width: 599px) {\n    margin: 25px 0;\n  }\n\n  @media (max-width: 450px) {\n    display: none;\n  }\n"]);return h=function(){return e},e}var b=function(e){var n=e.filterStoreType,t=Object(f.a)().t,a=Object(u.useState)("all"),r=Object(s.a)(a,2),o=r[0],l=r[1],i=[{value:"all",text:t("merchantNavBar.all")},{value:"Brooklyn",text:t("merchantNavBar.brooklyn")},{value:"New York",text:t("merchantNavBar.manhattan")},{value:"Floral Park",text:t("merchantNavBar.queens")}];return u.createElement(u.Fragment,null,u.createElement(_,null,i.map((function(e){return u.createElement("div",{key:e.value},u.createElement("button",{className:o===e.value?"modalButton--filled":"modalButton--back",onClick:function(t){return function(e,t){t.preventDefault(),l(e),n(e)}(e.value,t)}},e.text.toUpperCase()))}))))},_=p.a.div(h()),g=t(30),v=t(145),y=t(122);function x(){var e=Object(d.a)(["\n  position: relative;\n  width: 100%;\n  border: 1px solid #e5e5e5;\n  border-radius: 15px;\n"]);return x=function(){return e},e}function E(){var e=Object(d.a)(["\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 16px;\n  color: #1e1e1e;\n"]);return E=function(){return e},e}function w(){var e=Object(d.a)(["\n    height: 475px;\n    width: 350px;\n    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);\n    padding: 25px;\n    font-size: 14px;\n    background-color: white;\n    &.descriptionBox {\n        width: 430px;\n        height: 475px;\n        text-align: center;\n        margin: 0 auto;\n    }\n    @media (",") {\n        margin: 30px;\n        width: 85vw;\n        &.descriptionBox {\n            width: 85vw;\n            height: auto;\n    }\n"]);return w=function(){return e},e}function j(){var e=Object(d.a)(["\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 61px;\n"]);return j=function(){return e},e}function B(){var e=Object(d.a)(["\n  font-weight: bolder;\n  color: #1e7c9a;\n  font-size: 15px;\n"]);return B=function(){return e},e}var O=function(e){var n=e.storeInfo,t="",a="";return n.locations&&n.locations[0]&&(t=n.locations[0].city,a=n.locations[0].state),u.createElement(u.Fragment,null,u.createElement(g.a,{to:"/".concat(n.seller_id),style:{textDecoration:"none",color:"black"}},u.createElement(N,null,u.createElement(P,{src:n.hero_image_url,alt:"Logo"}),u.createElement(k,null,t,", ",a),u.createElement(I,null,n.name),u.createElement(C,null,n.summary||n.story),u.createElement("br",null),u.createElement(v.a,{amountRaised:n.amount_raised,targetAmount:n.target_amount,progressBarColor:n.progress_bar_color,numContributions:n.num_contributions,numDonations:n.num_donations,numGiftCards:n.num_gift_cards,donationAmount:n.donation_amount,giftCardAmount:n.gift_card_amount}))))},k=p.a.h4(B()),C=p.a.div(j()),N=p.a.div(w(),y.a),I=p.a.h3(E()),P=p.a.img(x()),S=t(207),D=t.n(S);function A(){var e=Object(d.a)(["\n  text-align: left;\n  padding: 5px 0;\n"]);return A=function(){return e},e}function F(){var e=Object(d.a)(["\n  padding: 0 5px 0 20px;\n"]);return F=function(){return e},e}function H(){var e=Object(d.a)(["\n  width: 35%;\n"]);return H=function(){return e},e}var z=function(){var e=Object(f.a)().t;return u.createElement(N,{className:"descriptionBox"},u.createElement(M,{src:D.a,alt:"target-merchant-img"}),u.createElement("h3",null,e("descriptionBox.header")),u.createElement(L,null,u.createElement(J,null,e("descriptionBox.bullet1")),u.createElement(J,null,e("descriptionBox.bullet2")),u.createElement(J,null,e("descriptionBox.bullet3")),u.createElement(J,null,e("descriptionBox.bullet4")),u.createElement(J,null,e("descriptionBox.bullet5"))))},M=p.a.img(H()),L=p.a.ul(F()),J=p.a.li(A());function W(){var e=Object(d.a)(["\n  font-size: 17px;\n  font-weight: bold;\n  margin: 15px 0;\n"]);return W=function(){return e},e}function R(){var e=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return R=function(){return e},e}function T(){var e=Object(d.a)(["\n  border-radius: 25px;\n  height: 25px;\n  z-index: 5;\n  width: 100%;\n  margin-bottom: 15px;\n"]);return T=function(){return e},e}function G(){var e=Object(d.a)(["\n  font-size: 13px;\n"]);return G=function(){return e},e}var q=function(e){var n,t,a=e.totalDonations,r=e.totalGiftCards,o=Object(f.a)().t;return u.createElement(U,null,u.createElement(K,null,o("contributionBar.header"),": $",Math.floor((a+r)/100).toLocaleString()),u.createElement(Y,{style:{background:"linear-gradient(-45deg, #dd678a ".concat((n=a,t=a+r,n<t?n/t*100:100),"%, #F6B917 0%)")}}),u.createElement($,null,u.createElement("span",null,o("contributionBar.vouchers"),":"," ",u.createElement("b",null,"$",(Math.floor(r)/100).toLocaleString())),u.createElement("span",null,o("contributionBar.donations"),":"," ",u.createElement("b",null,"$",(Math.floor(a)/100).toLocaleString()))),u.createElement("p",null,o("contributionBar.footer")))},U=p.a.div(G()),Y=p.a.div(T()),$=p.a.div(R()),K=p.a.div(W()),Z=t(208),V=t.n(Z),Q=t(49),X=t(144),ee=t(18),ne=t(48),te=t(46),ae=t.n(te);function re(){var e=Object(d.a)(["\n  width: 48%;\n  height: auto;\n  object-fit: cover;\n  @media (",") {\n    width: 100%;\n  }\n"]);return re=function(){return e},e}function oe(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 2rem 1.5rem;\n\n  @media (",") {\n    > span {\n      margin: 2.5px 0;\n    }\n\n    > button {\n      width: 100%;\n    }\n  }\n"]);return oe=function(){return e},e}function le(){var e=Object(d.a)(["\n  border: 1px solid #e5e5e5;\n  display: flex;\n  max-height: 230px;\n  object-fit: cover;\n  margin: 35px 0 55px;\n  justify-content: space-between;\n\n  @media (max-width: 1350px) {\n    margin: 35px 35px 55px;\n  }\n\n  @media (",") {\n    max-height: 300px;\n  }\n\n  @media (",") {\n    flex-direction: column-reverse;\n    margin-top: 0;\n    max-height: 500px;\n  }\n"]);return le=function(){return e},e}var ie=function(){var e={merchantHero:"https://storage.googleapis.com/sendchinatownlove-assets/public/assets/general/merchant-directory-hero.png",skyline:"https://storage.googleapis.com/sendchinatownlove-assets/public/assets/general/skyline-hero.png",gamHero:"https://storage.googleapis.com/sendchinatownlove-assets/public/assets/general/gam-hero.png",donationPoolHero:"https://storage.googleapis.com/sendchinatownlove-assets/public/assets/general/donation-pool-hero.png"},n=Object(f.a)().t,t=Object(ne.b)();return u.createElement("div",null,u.createElement(ce,null,u.createElement(se,null,u.createElement("h2",{style:{margin:"10px 0",fontWeight:"bolder"}},n("donationPool.header")),u.createElement("span",null,n("donationPool.description1")),u.createElement("span",null,n("donationPool.description2"))," ",u.createElement("br",null),u.createElement("button",{className:"button--red-filled",onClick:function(e){ae.a.trackCustom("DonationPoolButtonClick",{}),e.preventDefault(),t({type:ee.e,payload:0})}},n("donationPool.button"))),u.createElement(ue,{src:e.skyline,alt:"banner"}),u.createElement(X.a,{purchaseType:"donation",sellerId:"send-chinatown-love",sellerName:"Send Chinatown Love Fund",costPerMeal:0})))},ce=p.a.div(le(),y.b,y.a),se=p.a.div(oe(),y.b),ue=p.a.img(re(),y.a);ae.a.trackCustom("MerchantsPageView",{});var me=function(e){var n={merchantHero:"https://storage.googleapis.com/sendchinatownlove-assets/public/assets/general/merchant-directory-hero.png",skyline:"https://storage.googleapis.com/sendchinatownlove-assets/public/assets/general/skyline-hero.png",gamHero:"https://storage.googleapis.com/sendchinatownlove-assets/public/assets/general/gam-hero.png",donationPoolHero:"https://storage.googleapis.com/sendchinatownlove-assets/public/assets/general/donation-pool-hero.png"},t=Object(f.a)(),a=t.t,r=t.i18n,l=Object(u.useState)(),d=Object(s.a)(l,2),p=d[0],h=d[1],_=Object(u.useState)(),g=Object(s.a)(_,2),v=g[0],y=g[1],x=Object(u.useState)(0),E=Object(s.a)(x,2),w=E[0],j=E[1],B=Object(u.useState)(0),k=Object(s.a)(B,2),C=k[0],N=k[1],I=function(){var e=Object(c.a)(i.a.mark((function e(n){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.getSellers)(n);case 2:t=e.sent,a=t.data,r=a.reduce((function(e,n){return[e[0]+n.donation_amount,e[1]+n.gift_card_amount]}),[0,0]),h(a),y(a),j(r[0]),N(r[1]);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){I(r.language)}),[r.language]);return u.createElement("div",{className:V.a.container,style:{display:e.menuOpen?"none":"inherit"}},v?u.createElement(u.Fragment,null,u.createElement("div",{className:V.a.overlayContainer},u.createElement("img",{src:n.merchantHero,className:V.a.nycMap,alt:"NYC MAP"}),u.createElement("div",{className:V.a.contentContainer},u.createElement("div",{className:V.a.textArea},u.createElement("h2",{style:{fontWeight:"bolder"}},a("merchantsPage.platformInfoHeader")),u.createElement("br",null),u.createElement("p",null,a("merchantsPage.platformInfoDescription")),u.createElement("p",null,a("merchantsPage.platformInfoAction"))),u.createElement("div",{className:V.a.storeInfo},u.createElement(q,{totalDonations:w,totalGiftCards:C})),u.createElement("div",{className:V.a.ownerPanel},u.createElement(z,null)))),u.createElement("div",{className:V.a.merchantInfoContainer},u.createElement(ie,null),u.createElement("div",{className:V.a.storeInfoContainer},u.createElement(b,{filterStoreType:function(e){if("all"===e)y(p);else{var n=p.filter((function(n){return n.locations.length>0&&n.locations[0].city===e}));if("Floral Park"===e){var t=p.filter((function(e){return e.locations.length>0&&"Flushing"===e.locations[0].city}));n.push.apply(n,o(t))}y(n)}}}),u.createElement("div",{className:V.a.merchantsContainer},v.map((function(e){return"send-chinatown-love"!==e.seller_id?u.createElement(O,{key:e.seller_id,storeInfo:e}):null}))))),u.createElement("div",{className:V.a.flyerContainer},u.createElement("p",null,a("merchantsPage.flyerAsk")+" ",u.createElement("a",{className:V.a.redLink,download:!0,href:"./assets/send-chinatown-love-flyers.zip"},a("merchantsPage.flyerDownload"))))):u.createElement(Q.a,null))}}}]);
//# sourceMappingURL=11.a08a847f.chunk.js.map