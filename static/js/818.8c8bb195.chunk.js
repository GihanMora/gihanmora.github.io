"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[818],{2018:function(e,i,t){var n=t(885),s=t(2791),a=t(184),o=function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/.test(e)||0===e.length},r=["hi","hello","hola","you-can-email-me-at-literally-anything! Really","well, not anything. But most things","like-this","or-this","but not this :(  ","you.can.also.email.me.with.specific.topics.like","just-saying-hi","please-work-for-us","help","admin","or-I-really-like-your-website","thanks"],c=function(e){var i=e.loopMessage,t=(0,s.useState)(0),c=(0,n.Z)(t,2),l=c[0],h=c[1],d=(0,s.useState)(r[l]),u=(0,n.Z)(d,2),m=u[0],g=u[1],p=(0,s.useState)(0),x=(0,n.Z)(p,2),j=x[0],f=x[1],b=(0,s.useState)(!0),w=(0,n.Z)(b,2),y=w[0],v=w[1];return function(e,i){var t=(0,s.useRef)();(0,s.useEffect)((function(){t.current=e}),[e]),(0,s.useEffect)((function(){if(i){var e=setInterval((function(){t.current()}),i);return function(){return clearInterval(e)}}return function(){}}),[i])}((function(){var e=l,t=j;j-50>=r[l].length&&(e+=1,t=0),e===r.length?i?(h(0),f(0)):v(!1):(g(r[e].slice(0,t)),h(e),f(t+1))}),y?50:null),(0,a.jsx)("div",{className:"inline-container",style:o(m)?{}:{color:"red"},onMouseEnter:function(){return v(!1)},onMouseLeave:function(){return l<r.length&&v(!0)},children:(0,a.jsxs)("a",{href:o(m)?"mailto:".concat(m,"@gmail.com"):"",children:[(0,a.jsx)("span",{children:m}),(0,a.jsx)("span",{children:" >> gihangamage2015@gmail.com"})]})})};c.defaultProps={loopMessage:!1},i.Z=c},2818:function(e,i,t){t.r(i);t(2791);var n=t(1523),s=t(6842),a=(t(2018),t(9314),t(184));i.default=function(){return(0,a.jsx)(s.Z,{title:"Armitage project",description:"Contact Gihan Gamage via email @ michael.l.dangelo@gmail.com",children:(0,a.jsxs)("article",{className:"post",id:"contact",children:[(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(n.rU,{to:"/contact",children:"Cooee: Artificial Intelligence Chatbot"})})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Introduction"}),(0,a.jsxs)("p",{children:["Traditionally most chatbots today we have is following hardwired routines(Ex: Ordering a pizza) or predefined question answering(FAQ). These chatbots are based on simple string-matching methods where inputs are matching with QnA data databases. But this is not applicable in highly dynamic data-insensitive environments. With Cooee we attempted to build a chatbot that can intelligently comprehend user queries and construct responses on the fly.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"We experimented with and evaluated Cooee Latrobe Energy Analytics Platform \u2013 LEAP. LEAP contains a billion data points belonging to modalities such as electricity consumption, gas consumption, and solar generation, and this data is streamed at 15-minute intervals. This complex multi-source data space contains more than 200 data tables."]}),(0,a.jsx)("h3",{children:"Framework"}),(0,a.jsx)("p",{children:"Following is the framework of Cooee."}),(0,a.jsx)("img",{width:1e3,src:"".concat("","/images/projects/cooee_framework.png")}),(0,a.jsx)("h3",{children:"How Cooee works."}),(0,a.jsxs)("p",{children:["Following is an example of Cooee works. Here it tries to understand user query, ",(0,a.jsx)("i",{children:"\u201cWhat is the total energy consumption of library last Monday?\u201d"})," It goes through various information extraction steps, converted to SQL query and compared against the database in order to extract the correct answers."]}),(0,a.jsx)("img",{width:1e3,src:"".concat("","/images/projects/cooee_example.png")}),(0,a.jsx)("h3",{children:"Cooee Implementation."}),(0,a.jsx)("p",{children:"We integrated cooee to leap as QnA dashboard as well as chat popup.. Chat pop-up is for conversational question answering and dashboard is for more comprehension question answering where it can also produce tabular outputs as answers."}),(0,a.jsx)("img",{width:1e3,src:"".concat("","/images/projects/cooee_implementation.png")}),(0,a.jsx)("h3",{children:"Higher order comprehension skills with Cooee."}),(0,a.jsx)("p",{children:"Cooee has some advanced comprehension skills. It can resolve ambiguates, resolve coreferences and infer incomplete information."}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["Resolve ambiguates",(0,a.jsxs)("p",{children:["Resolving ambiguities is one of the major challenges in natural languages. Cooee uses chat history to resolve this challenge.",(0,a.jsx)("br",{}),"For instance when Cooee is working in multi-campus setting asking a question like ",(0,a.jsx)("i",{children:(0,a.jsx)("b",{children:'"What is the total electricity consumption of library?"'})})," can be ambiguous. Where there are multiple libraries.. Such as the library of Bundoora campus, library of Bendigo campus etc.",(0,a.jsx)("br",{}),"So here what Cooee does is it will convert this ambiguous question to set of disambiguate questions such as..",(0,a.jsx)("i",{children:(0,a.jsxs)("b",{children:['"What is the total electricity consumption of the Library ',(0,a.jsx)("u",{children:"on the Bendigo campus?"}),'"']})}),",",(0,a.jsx)("i",{children:(0,a.jsxs)("b",{children:['"What is the total electricity consumption of the Library',(0,a.jsx)("u",{children:" on the Bundoora campus?"}),'"']})}),"and leverage previous chat history and natural language inference to pick the correct questions. So here as recent chat history is talking about Bendigo campus it gives higher probability for Bendigo campus\u2026"]}),(0,a.jsx)("img",{width:1e3,src:"".concat("","/images/projects/cooee_ambi.png")})]}),(0,a.jsxs)("li",{children:["Co-reference resolution and Answer incomplete questions.",(0,a.jsx)("p",{children:"Similar to resolving ambiguations, Cooee can resolve incomplete questions and co-references"}),(0,a.jsx)("img",{width:1e3,src:"".concat("","/images/projects/cooee_other.png")})]})]}),(0,a.jsx)("h3",{children:"Technologies and areas"}),(0,a.jsx)("p",{children:"Python, Deep learning - Language models(BERT), Text similarity matching, Token classification(NER), Regexes, Web development(ReactJS, Redux, HTML, JS, CSS)"}),(0,a.jsx)("h3",{children:"Team"}),(0,a.jsx)("p",{children:"Gihan Gamage(me), Nishan Mills, A. Prof. Daswin De Silva"}),(0,a.jsx)("h3",{children:"Publications"}),(0,a.jsx)("p",{children:"Publication in review"})]})]})})}}}]);
//# sourceMappingURL=818.8c8bb195.chunk.js.map