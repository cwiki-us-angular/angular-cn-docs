!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{fPy6:function(n,r,o){"use strict";o.r(r),o.d(r,"ContributorListModule",function(){return A});var c,i=o("ofXK"),u=o("NFeN"),a=o("fXoL"),s=o("lJxs"),b=o("qZ0a"),p=o("jn67"),f=o("tk/3"),l=p.a+"contributors.json",d=["Angular","Collaborators","GDE"],g=((c=function(){function n(e){t(this,n),this.http=e,this.contributors=this.getContributors()}return e(n,[{key:"getContributors",value:function(){var t=this.http.get(l).pipe(Object(s.a)(function(t){var n={};return Object.keys(t).forEach(function(e){var r=t[e];r.groups.forEach(function(t){(n[t]||(n[t]=[])).push(r)})}),n}),Object(s.a)(function(t){return Object.keys(t).map(function(n){var e=d.indexOf(n);return{name:n,order:-1===e?d.length:e,contributors:t[n].sort(m)}}).sort(v)}),Object(b.a)());return t.connect(),t}}]),n}()).\u0275fac=function(t){return new(t||c)(a.Xb(f.a))},c.\u0275prov=a.Kb({token:c,factory:c.\u0275fac}),c);function m(t,n){return t.name.toUpperCase()>n.name.toUpperCase()?1:-1}function v(t,n){return t.order===n.order?t.name>n.name?1:-1:t.order>n.order?1:-1}var k=o("/lUL");function h(t,n){1&t&&(a.Tb(0,"a",7),a.Ac(1," View Bio "),a.Sb())}function C(t,n){if(1&t&&(a.Tb(0,"a",8),a.ac("click",function(t){return t.stopPropagation()}),a.Pb(1,"mat-icon",9),a.Sb()),2&t){var e=a.ec();a.lc("href","https://twitter.com/",e.person.twitter,"",a.uc)}}function y(t,n){if(1&t&&(a.Tb(0,"a",8),a.ac("click",function(t){return t.stopPropagation()}),a.Tb(1,"mat-icon",10),a.Ac(2,"link"),a.Sb(),a.Sb()),2&t){var e=a.ec();a.kc("href",e.person.website,a.uc)}}function w(t,n){if(1&t){var e=a.Ub();a.Tb(0,"div",11),a.ac("click",function(){a.sc(e);var t=a.ec();return t.flipCard(t.person)})("keyup.enter",function(){a.sc(e);var t=a.ec();return t.flipCard(t.person)}),a.Tb(1,"h3"),a.Ac(2),a.Sb(),a.Tb(3,"p",12),a.Ac(4),a.Sb(),a.Sb()}if(2&t){var r=a.ec();a.Cb(2),a.Bc(r.person.name),a.Cb(2),a.Bc(r.person.bio)}}var S,j=function(t){return{flipped:t}},T=((S=function(){function n(){t(this,n),this.noPicture="_no-one.png",this.pictureBase=p.a+"images/bios/"}return e(n,[{key:"flipCard",value:function(t){t.isFlipped=!t.isFlipped}}]),n}()).\u0275fac=function(t){return new(t||S)},S.\u0275cmp=a.Ib({type:S,selectors:[["aio-contributor"]],inputs:{person:"person"},decls:10,vars:10,consts:[[1,"contributor-card",3,"ngClass"],[1,"card-front",3,"click","keyup.enter"],[1,"contributor-image"],[1,"contributor-info"],["mat-button","","class","info-item",4,"ngIf"],["mat-icon-button","","class","info-item icon","target","_blank",3,"href","click",4,"ngIf"],["class","card-back",3,"click","keyup.enter",4,"ngIf"],["mat-button","",1,"info-item"],["mat-icon-button","","target","_blank",1,"info-item","icon",3,"href","click"],["svgIcon","logos:twitter"],[1,"link-icon"],[1,"card-back",3,"click","keyup.enter"],[1,"contributor-bio"]],template:function(t,n){1&t&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.ac("click",function(){return n.flipCard(n.person)})("keyup.enter",function(){return n.flipCard(n.person)}),a.Tb(2,"h3"),a.Ac(3),a.Sb(),a.Tb(4,"div",2),a.Tb(5,"div",3),a.zc(6,h,2,0,"a",4),a.zc(7,C,2,1,"a",5),a.zc(8,y,3,1,"a",5),a.Sb(),a.Sb(),a.Sb(),a.zc(9,w,5,2,"div",6),a.Sb()),2&t&&(a.jc("ngClass",a.mc(8,j,n.person.isFlipped)),a.Cb(3),a.Bc(n.person.name),a.Cb(1),a.wc("background-image","url("+n.pictureBase+(n.person.picture||n.noPicture)+")"),a.Cb(2),a.jc("ngIf",n.person.bio),a.Cb(1),a.jc("ngIf",n.person.twitter),a.Cb(1),a.jc("ngIf",n.person.website),a.Cb(1),a.jc("ngIf",n.person.isFlipped))},directives:[i.i,i.k,u.a],encapsulation:2}),S);function O(t,n){if(1&t){var e=a.Ub();a.Tb(0,"a",3),a.ac("click",function(){a.sc(e);var t=n.$implicit;return a.ec().selectGroup(t)})("keyup.enter",function(){a.sc(e);var t=n.$implicit;return a.ec().selectGroup(t)}),a.Ac(1),a.Sb()}if(2&t){var r=n.$implicit,o=a.ec();a.Gb("selected",r==o.selectedGroup.name),a.Cb(1),a.Bc(r)}}function I(t,n){1&t&&a.Pb(0,"aio-contributor",7),2&t&&a.jc("person",n.$implicit)}function F(t,n){if(1&t&&(a.Tb(0,"section",4),a.Tb(1,"div",5),a.zc(2,I,1,1,"aio-contributor",6),a.Sb(),a.Sb()),2&t){var e=a.ec();a.Cb(2),a.jc("ngForOf",e.selectedGroup.contributors)}}var G,P,z=((P=function(){function n(e,r){t(this,n),this.contributorService=e,this.locationService=r}return e(n,[{key:"ngOnInit",value:function(){var t=this,n=this.locationService.search().group||"";this.contributorService.contributors.subscribe(function(e){t.groups=e,t.groupNames=e.map(function(t){return t.name}),t.selectGroup(n)})}},{key:"selectGroup",value:function(t){t=t.toLowerCase(),this.selectedGroup=this.groups.find(function(n){return n.name.toLowerCase()===t})||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}]),n}()).\u0275fac=function(t){return new(t||P)(a.Ob(g),a.Ob(k.a))},P.\u0275cmp=a.Ib({type:P,selectors:[["aio-contributor-list"]],decls:3,vars:2,consts:[[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click","keyup.enter",4,"ngFor","ngForOf"],["class","grid-fluid",4,"ngIf"],[1,"button","mat-button","filter-button",3,"click","keyup.enter"],[1,"grid-fluid"],[1,"contributor-group"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(t,n){1&t&&(a.Tb(0,"div",0),a.zc(1,O,2,3,"a",1),a.Sb(),a.zc(2,F,3,1,"section",2)),2&t&&(a.Cb(1),a.jc("ngForOf",n.groupNames),a.Cb(1),a.jc("ngIf",n.selectedGroup))},directives:[i.j,i.k,T],encapsulation:2}),P),A=((G=function n(){t(this,n),this.customElementComponent=z}).\u0275mod=a.Mb({type:G}),G.\u0275inj=a.Lb({factory:function(t){return new(t||G)},providers:[g],imports:[[i.c,u.b]]}),G)}}])}();
//# sourceMappingURL=contributor-contributor-list-module-es5.c8325875e1dc65af0dc6.js.map