(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});n(2791);var i=n(1523),r=n(6842),s=n(7892),a=n.n(s),o=n(184),c=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("a",{href:e.link,children:(0,o.jsx)("h1",{children:e.title})}),(0,o.jsxs)("time",{className:"published",style:{fontSize:"15px"},children:[a()(e.date1).format("MMMM, YYYY")," - ",a()(e.date2).format("MMMM, YYYY")]}),(0,o.jsx)("h5",{children:e.desc})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})})]})})},u=[{title:"Emotion AWARE - Comprehension of emotions in Natural languages",link:"/project_pages/aware",image:"/images/projects/aware.png",date1:"2021-11-1",date2:"2022-05-1",desc:"An Artificial Intelligence Framework for the Elicitation of Adaptable, Robust, and Explainable Multi-Granular Emotion Assembles"},{title:"Cooee: Artificial Intelligence Chatbot",link:"/project_pages/cooee",image:"/images/projects/cooee.png",date:"2015-05-15",desc:"Artificial intelligence chatbot for complex and dynamic energy environments."},{title:"Call recording analysis of Cancer Council Victoria(CCV)",link:"/project_pages/ccv",image:"/images/projects/ccv.png",date:"2015-06-28",desc:"An Artificial Intelligence Framework for emotion and insight extraction from patient calls received to cancer council Victoria."},{title:"Emotion analysis of financial transcripts",link:"/project_pages/fin",image:"/images/projects/fin.png",date:"2015-06-28",desc:"Analysing emotions of financial transcripts to study correlation with market variables."},{title:"LEAD Generation Pipeline",subtitle:"2015 BVP Hackathon",image:"/images/projects/armitage.png",link:"/project_pages/armitage",date:"2015-11-20",desc:"AI framework that builds organization profiles with web scraping and information extraction."}],l=function(){return(0,o.jsx)(r.Z,{title:"Projects",description:"Learn about Gihan Gamage's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})})})}),u.map((function(t){return(0,o.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",c="week",u="month",l="quarter",h="year",f="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},M={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+p(i,2,"0")+":"+p(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,u),s=n-r<0,a=e.clone().add(i+(s?-1:1),u);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:f,h:a,m:s,s:r,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=g;var D=function(t){return t instanceof x},w=function t(e,n,i){var r;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(r=s),n&&(y[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,r=o}return!i&&r&&(v=r),r||!i&&v},j=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},S=M;S.l=w,S.i=D,S.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function g(t){this.$L=w(t.locale,null,!0),this.parse(t)}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return S},p.isValid=function(){return!(this.$d.toString()===d)},p.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return j(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<j(t)},p.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,i=!!S.u(e)||e,l=S.p(t),d=function(t,e){var r=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,g=this.$M,p=this.$D,M="set"+(this.$u?"UTC":"");switch(l){case h:return i?d(1,0):d(31,11);case u:return i?d(1,g):d(0,g+1);case c:var v=this.$locale().weekStart||0,y=($<v?$+7:$)-v;return d(i?p-y:p+(6-y),g);case o:case f:return m(M+"Hours",0);case a:return m(M+"Minutes",1);case s:return m(M+"Seconds",2);case r:return m(M+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,c=S.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[o]=l+"Date",n[f]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[r]=l+"Seconds",n[i]=l+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var $=this.clone().set(f,1);$.$d[d](m),$.init(),this.$d=$.set(f,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[S.p(t)]()},p.add=function(i,l){var f,d=this;i=Number(i);var m=S.p(l),$=function(t){var e=j(d);return S.w(e.date(e.date()+Math.round(t*i)),d)};if(m===u)return this.set(u,this.$M+i);if(m===h)return this.set(h,this.$y+i);if(m===o)return $(1);if(m===c)return $(7);var g=(f={},f[s]=e,f[a]=n,f[r]=t,f)[m]||1,p=this.$d.getTime()+i*g;return S.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},h=function(t){return S.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:S.s(s,2,"0"),h:h(1),hh:h(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:r};return i.replace($,(function(t,e){return e||m[t]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,f,d){var m,$=S.p(f),g=j(i),p=(g.utcOffset()-this.utcOffset())*e,M=this-g,v=S.m(this,g);return v=(m={},m[h]=v/12,m[u]=v,m[l]=v/3,m[c]=(M-p)/6048e5,m[o]=(M-p)/864e5,m[a]=M/n,m[s]=M/e,m[r]=M/t,m)[$]||M,d?v:S.a(v)},p.daysInMonth=function(){return this.endOf(u).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return S.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),_=x.prototype;return j.prototype=_,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",u],["$y",h],["$D",f]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,x,j),t.$i=!0),j},j.locale=w,j.isDayjs=D,j.unix=function(t){return j(1e3*t)},j.en=y[v],j.Ls=y,j.p={},j}()}}]);
//# sourceMappingURL=161.2e60f4a1.chunk.js.map