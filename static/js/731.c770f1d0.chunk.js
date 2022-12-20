"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[731],{2731:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var a=n(2791),r=n(1523),i=n(6842),o=n(184),c=function(e){var t=e.data;return(0,o.jsx)("article",{className:"degree-container",children:(0,o.jsxs)("header",{children:[(0,o.jsx)("img",{src:t.image,alt:"",style:{height:t.image_height,width:t.image_width,float:"right"}}),(0,o.jsx)("h3",{className:"degree",children:t.degree}),(0,o.jsx)("p",{className:"school",children:(0,o.jsx)("a",{href:t.link,children:t.school})}),(0,o.jsx)("p",{className:"school",children:t.year}),(0,o.jsx)("p",{className:"school",children:t.des})]})})},s=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"education",children:[(0,o.jsx)("div",{className:"link-to",id:"education"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,o.jsx)(c,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return(0,o.jsxs)("article",{className:"jobs-container",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("img",{src:t.image,alt:"",style:{height:t.image_height,width:t.image_width,float:"right"}}),(0,o.jsx)("h3",{children:t.position}),(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:t.link,children:t.company})}),(0,o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,o.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,o.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"experience"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,o.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var g=d;function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var h=n(9611);function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function f(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f(this,n)}}var v=n(4942),S=n(1413),j=function(e){var t=e.handleClick,n=e.active,a=e.label;return(0,o.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},x=function(e){var t=e.data,n=e.categories,a=t.category,r=t.competency,i=t.title,c={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},s=(0,S.Z)((0,S.Z)({},c),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return(0,o.jsxs)("div",{className:"skillbar clearfix",children:[(0,o.jsx)("div",{className:"skillbar-title",style:c,children:(0,o.jsx)("span",{children:i})}),(0,o.jsx)("div",{className:"skillbar-bar",style:s}),(0,o.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};x.defaultProps={categories:[]};var w=x,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,h.Z)(e,t)}(i,e);var t,n,a,r=b(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return(0,S.Z)((0,S.Z)({},n),{},(0,v.Z)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,S.Z)((0,S.Z)({},e),{},(0,v.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,o.jsx)(w,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,o.jsx)(j,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,o.jsxs)("div",{className:"skills",children:[(0,o.jsx)("div",{className:"link-to",id:"skills"}),(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h3",{children:"Skills"}),(0,o.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,o.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,o.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),a&&p(t,a),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.Component);k.defaultProps={skills:[],categories:[]};var D=k,P=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"education",children:[(0,o.jsx)("div",{className:"link-to",id:"awards"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Awards and Recognition"})}),t.map((function(e){return(0,o.jsx)(c,{data:e},e.school)}))]})};P.defaultProps={data:[]};var N=P,C=function(){return(0,o.jsxs)("div",{className:"references",children:[(0,o.jsx)("div",{className:"link-to",id:"references"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)(r.rU,{to:"/contact",children:(0,o.jsx)("h3",{children:"References are available upon request"})})})]})},A=[{school:"\u2013 For the paper titled \u201cAn Artificial Intelligence Framework for the detection of Emotion Transitions\n            in Telehealth Services\u201d",degree:"BEST PAPER AWARD \u2013 15TH IEEE INTERNATIONAL CONFERENCE ON HUMAN SYSTEM INTERACTION, Melbourne, Australia, 2022"},{school:"-For the paper titled \u201cAlignment-free Whole Genome Comparison Using k-mer Forests.",degree:"BEST PAPER AWARD \u2013 19th International Conference on Advances in ICT for\nEmerging Regions (ICTer), Colombo, Sri Lanka, 2019"},{school:"Department of Computer Science and Engineering, University of Moratuwa",degree:"DEAN'S LIST IN ALL ACADEMIC SEMESTERS",year:"Aug 2015 - Feb 2020"}];console.log("evn",{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0});var E=[{school:"Research Centre for Data Analytics and Cognition(CDAC), La Trobe University, Australia.",degree:"Doctor of Philosophy (PhD) (Reading) ",link:"https://www.latrobe.edu.au/cdac",year:"August 2021 - Present",image:"/images/cdac.jpg",image_width:"200px",image_height:"120px"},{school:"Department of Computer Science and Engineering, University of Moratuwa",degree:"BS.c. Computer Science and Engineering(Hons)",link:"http://www.cse.mrt.ac.lk/",year:"January 2015 - January 2020",image:"/images/uom.png",des:"Overall SGPA: 4.01 out od 4.20. Dean's list in all the semesters. 4th Highest GPA batch of 128",image_width:"120px",image_height:"120px"}],O=[{position:"Graduate Research Scientist",company:"Research Centre for Data Analytics and Cognition(CDAC), La Trobe University, Australia.",link:"https://www.latrobe.edu.au/cdachttps://www.latrobe.edu.au/cdac",daterange:"October 2021 - Present",points:["CDAC is a research laboratory in La Trobe University, Melbourne, Australia.","Engage in Research work in Natural Language Processing and Data Science.","Research Supervisors : Prof. Damminda Alahakoon, Prof. Daswin De Silva."],image:"/images/cdac.jpg",image_width:"200px",image_height:"120px"},{position:"Graduate Research Scientist",company:"Swinburne University of Technology, Melbourne Australia.",link:"https://www.swinburne.edu.au/",daterange:"February 2022 - August 2022",points:["Engage in Research work in Natural Language Processing and Data Science.","Modelling emotions in financial letters."],image:"/images/swin.png",image_width:"160px",image_height:"70px"},{position:"Contract Lecturer",company:"Department of Computer Science and Engineering, University of Moratuwa, Srilanka.",link:"http://cse.mrt.ac.lk/",daterange:"September 2020 - October 2021",points:["Worked as a contract lecturer and contributing to both academic and research work.","Lecturing for Modular Software Development - CS2832","Mentoring - Research and Development Project-CS4202"],image:"/images/uom.png",image_width:"120px",image_height:"120px"},{position:"Junior Consultant",company:"Department of Computer Science and Engineering, University of Moratuwa, Srilanka.",link:"http://cse.mrt.ac.lk/",daterange:"February 2020 - September 2020",points:["Worked as as a Junior Consultant and contributing to both academic and research work.","Teaching Assistant work for modules Programming Fundamentals-CS1032, Software Engineering Project-CS3202, Research and Development Project-CS4202, Machine Learning-CS4622"],image:"/images/uom.png",image_width:"120px",image_height:"120px"},{position:"Research Scientist",company:"Live Labs, Singapore Management University, Singapore.",link:"https://livelabs.smu.edu.sg/",daterange:"June 2018 - December 2018",points:["Live Labs is a research laboratory in the School of Information Systems, Singapore Management University (SMU), Singapore."," I worked with a project to build a crowdsourcing platform with advanced features which branched to areas such as Bayesian Machine Learning and Data Science and Analytics.","\xb7 Research Supervisor : Kotaro HARA, Ph.D. (Maryland, College Park) - Assistant Professor at the School of Information Systems, Singapore Management University, Singapore."],image:"/images/smu.png",image_width:"180px",image_height:"70px"}],L=n(907);var R=n(181);var T,_=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:4,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Flask/Django",competency:4,category:["Web Development","Python"]},{title:"Git",competency:4,category:["Tools"]},{title:"Azure services",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:4,category:["Data Science","Data Engineering","Python"]},{title:"Language Models",competency:4,category:["Data Science","NLP","Python"]},{title:"Information extraction",competency:4,category:["Data Science","NLP","Python"]},{title:"Primary NLP",competency:4,category:["Data Science","NLP","Python"]},{title:"Spacy/NLTK",competency:4,category:["Data Science","NLP","Python"]},{title:"Huggingface",competency:4,category:["Data Science","NLP","Python"]},{title:"Tensorflow + Keras",competency:4,category:["Data Science","Python"]},{title:"Google Colab, Jupyter",competency:4,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:5,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"Java",competency:3,category:["Languages"]},{title:"Android",competency:3,category:["Mobile Development"]},{title:"R",competency:3,category:["Languages"]},{title:"Data Visualization",competency:4,category:["Data Science","Javascript"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]}].map((function(e){return(0,S.Z)((0,S.Z)({},e),{},{category:e.category.sort()})})),M=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],I=(T=new Set(_.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,L.Z)(e)}(T)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(T)||(0,R.Z)(T)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:M[t]}})),U=["Education","Experience","Skills","Awards","References"],W=function(){return(0,o.jsx)(i.Z,{title:"Resume",description:"Gihan Gamage's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:(0,o.jsxs)("article",{className:"post",id:"resume",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(r.rU,{to:"resume",children:"Resume"})}),(0,o.jsx)("div",{className:"link-container",children:U.map((function(e){return(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,o.jsx)(l,{data:E}),(0,o.jsx)(g,{data:O}),(0,o.jsx)(D,{skills:_,categories:I}),(0,o.jsx)(N,{data:A}),(0,o.jsx)(C,{})]})})}},4942:function(e,t,n){function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return a}})},1413:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=731.c770f1d0.chunk.js.map