(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/xGv":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("q1tI"),n=a.n(r),o=a("qkpv"),i="row";t.b=function(e){var t=e.children,a=e.className,r=void 0===a?"":a,s=e.mode,l=void 0===s?"column":s,c=e.link,m="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-48 bg-cover bg-gray-200 overflow-hidden block "+r+" "+(c&&c.url?"cursor-pointer":""),u=l===i?m+" sm:h-full sm:w-2/5 lg:w-1/4":m+" mb-2",d=c&&c.url?n.a.createElement(o.a,{link:c,formatted:!1},t):t;return n.a.createElement("div",{className:u},d)}},"4kfo":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=function(e){var t=e.children,a=e.className;if(!t)return null;var r="bg-gray-200 px-1 rounded text-xs "+(void 0===a?"":a);return n.a.createElement("div",{className:r},t)}},"5oMZ":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI"),n=a.n(r),o="list";t.b=function(e){var t=e.children,a=e.mode;if(!t)return null;var r="grid"===(void 0===a?"grid":a)?"grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3":"grid gap-12 grid-cols-1";return n.a.createElement("div",{className:r},t)}},"7guj":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("czJ/"),i=a("qkpv");t.a=function(e){var t=e.children,a=e.link;if(!t)return null;var r=n.a.createElement(o.a,{level:o.b.h3},t),s=a?n.a.createElement(i.a,{link:a},r):null;return n.a.createElement("div",{className:"mb-3"},s||r)}},"7q/7":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI"),n=a.n(r),o="row";t.b=function(e){var t=e.children,a=e.mode;if(!t)return null;var r="transition duration-200 ease-in-out shadow-card rounded-md overflow-hidden bg-white flex flex-col",i=(void 0===a?"column":a)===o?r+" sm:flex-row":""+r;return n.a.createElement("div",{className:i},t)}},UFYH:function(e,t,a){var r=a("BPHJ").GenIcon;e.exports.FiStar=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(e)}},bwOt:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI"),n=a.n(r),o="row";t.b=function(e){var t=e.children,a=e.className,r=void 0===a?"":a,i=e.mode;if(!t)return null;var s="p-6 "+r,l=(void 0===i?"column":i)===o?s+" sm:w-3/5 lg:w-3/4":""+s;return n.a.createElement("div",{className:l,style:{flex:1}},t)}},c7vF:function(e,t,a){var r=a("BPHJ").GenIcon;e.exports.FiArchive=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"21 8 21 21 3 21 3 8"}},{tag:"rect",attr:{x:"1",y:"3",width:"22",height:"5"}},{tag:"line",attr:{x1:"10",y1:"12",x2:"14",y2:"12"}}]})(e)}},gZkK:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("ty9m"),i=a("Gejk"),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=function(e){return s[e.getMonth()]+" "+e.getFullYear()},c=function(e){var t=e.startDate,a=e.endDate,r=e.className,o=void 0===r?"":r;if(!t&&!a)return null;var i=t?l(new Date(t)):null,s=t&&a?" → ":null,c=a?l(new Date(a)):null;return n.a.createElement("div",{className:o},i,s,c)},m=a("7q/7"),u=a("bwOt"),d=a("/xGv"),h=a("tSKC"),p=a("3dWQ"),g=a("7guj"),v=a("ov7Q"),b=function(e){var t=e.children;if(!t)return null;return n.a.createElement("div",{className:"px-6 pb-6"},n.a.createElement(v.a,null,t))};var f=a("qkpv"),y=function(e){var t=e.className,a=e.hoverClassName,r=void 0===a?"":a,o=e.children,i=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["className","hoverClassName","children"]),s="hover:bg-black hover:text-white "+r,l=t+" bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray-300";return n.a.createElement(f.a,Object.assign({},i,{className:l,hoverClassName:s}),o)},w=a("c7vF"),k=function(){return n.a.createElement("div",{title:"Project has been archived and is currently not active",className:"transition duration-200 ease-in-out py-2 px-3 text-red-500 border border-red-500 rounded border-solid hover:bg-red-500 hover:text-white rounded cursor-not-allowed"},n.a.createElement(v.a,null,n.a.createElement("div",{className:"mr-2"},n.a.createElement(w.FiArchive,null)),n.a.createElement("div",null,"Archived")))},x=a("UFYH"),E=function(e){var t=e.stars,a=void 0===t?0:t,r=e.className,o=void 0===r?"":r,i=e.link;if("number"!=typeof a)return null;var s=n.a.createElement(n.a.Fragment,null,n.a.createElement(x.FiStar,{size:14}),n.a.createElement("div",{className:"ml-1 text-xs font-light"},a)),l=i?n.a.createElement(f.a,{link:i},s):s;return n.a.createElement(v.a,{className:o},l)},j=a("yJYX");var L=function(e){var t=e.project;if(!t)return null;var a=null!=t&&t.tags?n.a.createElement("div",null,n.a.createElement(h.a,{tags:t.tags,numToShow:3})):null,r=n.a.createElement(c,{startDate:t.startDate,endDate:t.endDate,className:"text-xs text-gray-500 font-light"}),s=function(e){var t,a=function(e){var t,a;return e&&null!=e&&e.gitHubRepo&&null!=e&&null!==(t=e.gitHubRepo)&&void 0!==t&&t.repo&&null!=e&&null!==(a=e.gitHubRepo)&&void 0!==a&&a.owner?e.gitHubRepo.owner+"/"+e.gitHubRepo.repo:null}(e);return a&&j&&a in j&&(null===(t=j[a])||void 0===t?void 0:t.stars)||null}(t),l="number"==typeof s?n.a.createElement(E,{stars:s,link:t.srcURL,className:"text-xs text-gray-500 font-light"}):null,f=t.summary?t.summary.map((function(e,t){return n.a.createElement("p",{key:t},e)})):null,w=f?n.a.createElement("div",{className:"mb-3 font-light"},f):null,x=t.archived?void 0:t.demoURL||t.srcURL,L=t.demoURL&&!t.archived?n.a.createElement(y,{link:t.demoURL,startEnhancer:n.a.createElement(o.IoPlay,null),className:"mr-4"},"Demo"):null,D=t.srcURL&&!t.archived?n.a.createElement(y,{link:t.srcURL,startEnhancer:n.a.createElement(i.FaGithub,null)},"Source Code"):null,R=t.cover?n.a.createElement(p.a,{image:t.cover}):null,P=null!=t&&t.archived?n.a.createElement(b,null,n.a.createElement(k,null)):null,S=L||D?n.a.createElement(b,null,L,D):null;return n.a.createElement(m.b,null,n.a.createElement(d.b,{link:x},R),n.a.createElement(u.b,null,n.a.createElement(g.a,{link:x},t.name),n.a.createElement(v.a,{className:"mb-3 justify-between"},n.a.createElement("div",null,r),n.a.createElement("div",null,l)),w,a),S,P)},D=a("5oMZ"),R=function(e){var t=e.projects.map((function(e){return n.a.createElement(L,{project:e,key:null==e?void 0:e.name})}));return n.a.createElement(D.b,null,t)},P=a("0Vgw"),S=a("zv+I"),N=a("4kfo"),A=a("YTP0"),I=function(e){var t=e.projects,a=t.length;return n.a.createElement(P.a,null,n.a.createElement(A.a,{title:"Projects",description:"Projects and experiments that help people learn"}),n.a.createElement(v.a,null,n.a.createElement(S.a,null,"Projects"),n.a.createElement(N.a,{className:"ml-3 self-start"},a)),n.a.createElement(R,{projects:t}))},J=[{name:"📖 👆🏻 Printed Links Detector",srcURL:{url:"https://github.com/trekhleb/links-detector"},demoURL:{url:"https://trekhleb.dev/links-detector/"},cover:{srcPath:"projects/links-detector/cover.png"},startDate:"2020-10-01",endDate:"2020-12-01",summary:["Links Detector makes printed links clickable via your smartphone camera. No need to type a link in, just scan and click on it."],description:["Links Detector makes printed links clickable via your smartphone camera. No need to type a link in, just scan and click on it."],tags:[{name:"ML"},{name:"AI"},{name:"Machine Learning"},{name:"TensorFlow"},{name:"Tesseract"},{name:"Python"},{name:"TypeScript"},{name:"React"},{name:"OCR"},{name:"Computer Vision"},{name:"Object Detection"}],gitHubRepo:{owner:"trekhleb",repo:"links-detector"}},{name:"🤖 Interactive Machine Learning Experiments",srcURL:{url:"https://github.com/trekhleb/machine-learning-experiments"},demoURL:{url:"https://trekhleb.dev/machine-learning-experiments/"},cover:{srcPath:"projects/machine-learning-experiments/cover.png"},startDate:"2020-01-01",endDate:"2020-05-01",summary:["Interactive Machine Learning experiments: models training + models demo"],description:["This is a collection of interactive machine-learning experiments. Each experiment consists of Jupyter/Colab notebook (to see how a model was trained) and demo page (to see a model in action right in your browser)."],tags:[{name:"ML"},{name:"AI"},{name:"Machine Learning"},{name:"TensorFlow"},{name:"Python"},{name:"JavaScript"},{name:"React"}],gitHubRepo:{owner:"trekhleb",repo:"machine-learning-experiments"}},{name:"📈 Coronavirus (COVID-19) Dashboard",srcURL:{url:"https://github.com/trekhleb/covid-19/"},demoURL:{url:"https://trekhleb.dev/covid-19/"},cover:{srcPath:"projects/covid-dashboard/cover.png"},startDate:"2020-03-01",endDate:"2020-04-01",summary:["Coronavirus (COVID-19) dashboard to show the dynamics of Сoronavirus distribution per country"],description:["Coronavirus (COVID-19) dashboard to show the dynamics of Coronavirus distribution per country"],tags:[{name:"COVID-19"},{name:"React"}],gitHubRepo:{owner:"trekhleb",repo:"covid-19"}},{name:"🤖 NanoNeuron",srcURL:{url:"https://github.com/trekhleb/nano-neuron"},cover:{srcPath:"projects/nano-neuron/cover.png"},startDate:"2019-12-01",endDate:"2020-01-01",summary:['NanoNeuron is 7 simple JavaScript functions that will give you a feeling of how machines can actually "learn".'],description:['NanoNeuron is 7 simple JavaScript functions that will give you a feeling of how machines can actually "learn".'],tags:[{name:"AI"},{name:"ML"},{name:"Machine Learning"},{name:"JavaScript"},{name:"Algorithms"}],gitHubRepo:{owner:"trekhleb",repo:"nano-neuron"}},{name:"🌍 usePosition: React hook for fetching and following a browser geolocation",srcURL:{url:"https://github.com/trekhleb/use-position"},demoURL:{url:"https://trekhleb.dev/use-position"},cover:{srcPath:"projects/use-position/cover.png"},startDate:"2019-01-01",endDate:"2019-02-01",summary:["React hook usePosition() for fetching and following a browser geolocation"],description:["React hook usePosition() allows you to fetch client's browser geolocation and/or subscribe to all further geolocation changes."],tags:[{name:"JavaScript"},{name:"React"},{name:"Geolocation"},{name:"React Hooks"}],gitHubRepo:{owner:"trekhleb",repo:"use-position"}},{name:"📘 JavaScript Algorithms Book",demoURL:{url:"https://www.newline.co/javascript-algorithms"},cover:{srcPath:"projects/javascript-algorithms-book/cover-1.png"},startDate:"2018-09-01",endDate:"2019-09-01",summary:["The book about basic algorithms and datastructures implemented in JavaScript"],description:["Pass your algorithms interview with confidence by learning data structures and algorithms in JavaScript. We've been working on this JavaScript Algorithms book for a long time. The book should help engineers to better prepare for tech interviews."],tags:[{name:"JavaScript"},{name:"Algorithms"},{name:"Book"}]},{name:"🤖 Homemade Machine Learning",srcURL:{url:"https://github.com/trekhleb/homemade-machine-learning"},startDate:"2018-12-01",endDate:"2019-01-01",cover:{srcPath:"projects/homemade-machine-learning/cover.png"},summary:["Python examples of popular machine learning algorithms with interactive Jupyter demos and math being explained"],description:["The project contains examples of popular machine learning algorithms implemented in Python with the mathematics behind them is explained. Each algorithm has an interactive Jupyter Notebook demo that allows you to play with training data, algorithms configurations and immediately see the results, charts, and predictions right in your browser.",'This 13K+ stars project has been counted as "The most trending repository of the day" on GitHub as of December 27th, 2018.'],tags:[{name:"AI"},{name:"ML"},{name:"Machine Learning"},{name:"Algorithms"},{name:"Python"},{name:"Jupyter Notebook"}],gitHubRepo:{owner:"trekhleb",repo:"homemade-machine-learning"}},{name:"📝 JavaScript Algorithms and Data-Structures",srcURL:{url:"https://github.com/trekhleb/javascript-algorithms"},startDate:"2018-02-01",cover:{srcPath:"projects/javascript-algorithms/cover.png"},summary:["Algorithms and data structures implemented in JavaScript with explanations and links to further readings"],description:["I've created an open-source repository with ES6 based JavaScript examples of classic data structures and algorithms for learning purposes. Each data-structure and algorithm has its own README description. All code is 100% covered with unit-tests. The repository also contains a simple playground where users may practice/test different data-structures and algorithmic approaches. It also has a link on the YouTube playlist with all data-structures and algorithms related videos being gathered in one place.",'This 90k ★️ project was "The most trending repository of the week" on GitHub (as of May 25th, 2018) and "The most trending repository of the month" (as of June 15th, 2018) with a peak of 5000 stars per day!',"The project has been counted as a 2nd among “Top 10 projects open-sourced in 2018” based on the number of the stars during their first 28 days after the launch by @github (https://blog.github.com/2018-12-13-new-open-source-projects/)"],tags:[{name:"JavaScript"},{name:"Jest"},{name:"Algorithms"},{name:"Data Structures"}],gitHubRepo:{owner:"trekhleb",repo:"javascript-algorithms"}},{name:"🤖 Machine Learning in MatLab/Octave",srcURL:{url:"https://github.com/trekhleb/machine-learning-octave"},startDate:"2018-10-01",endDate:"2018-11-01",cover:{srcPath:"projects/machine-learning-octave/cover.png"},summary:["MatLab/Octave examples of popular machine learning algorithms with code examples and mathematics being explained"],description:["Examples of popular machine learning algorithms (neural networks, linear/logistic regression, K-Means, etc.) with code examples and mathematics being explained."],tags:[{name:"AI"},{name:"ML"},{name:"Machine Learning"},{name:"MatLab"},{name:"Octave"}],gitHubRepo:{owner:"trekhleb",repo:"machine-learning-octave"}},{name:"📚 Playground and cheatsheet for learning Python",srcURL:{url:"https://github.com/trekhleb/learn-python"},startDate:"2018-08-01",endDate:"2018-09-01",cover:{srcPath:"projects/learn-python/cover-2.jpg"},summary:["Playground and cheatsheet for learning Python. Collection of Python scripts that are split by topics and contain code examples with explanations"],description:["Collection of Python scripts that are split by topics and contain code examples with explanations, different use cases and links to further readings.",'This 3K+ stars repository was "The most trending Python repository of the day" on GitHub (August 31st, 2018)'],tags:[{name:"Python"}],gitHubRepo:{owner:"trekhleb",repo:"learn-python"}},{name:"➡️ Aggregatus | Data Aggregation Service",demoURL:{url:"https://aggregatus.io/"},startDate:"2017-01-01",endDate:"2018-01-01",archived:!0,cover:{srcPath:"projects/aggregatus/cover-1.png"},summary:["Service that helps you to aggregate information of the same meaning but from the different websites and makes it searchable, filterable, and sortable as if it all was from the one website"],description:["Aggregatus is a service that helps you to aggregate information of the same meaning but from different websites, and makes it searchable, filterable, and sortable as if it all was from the one website.","I've launched this project in my spare time to fill the possible gaps in aggregation SaaS tools and also to learn new technologies."],tags:[{name:"Nginx"},{name:"React"},{name:"Lumen"},{name:"MySQL"},{name:"Elasticsearch"},{name:"Scrapy"},{name:"Splash"},{name:"Docker Swarm"}]},{name:"🌾 Angular-library-seed",srcURL:{url:"https://github.com/trekhleb/angular-library-seed"},cover:{srcPath:"projects/angular-library-seed/cover.png"},startDate:"2017-01-01",endDate:"2018-01-01",summary:["Seed project for Angular libraries that are AOT/JIT compatible and that use external SCSS-styles and HTML-templates"],description:["Seed project for Angular libraries that are AOT/JIT compatible and that use external SCSS-styles and HTML-templates. The project contains a reusable environment for the libraries that allows to build, test, lint, document, explore, and publish them.","I've launched this open-source project since I was trying to create Angular library (Elasticsearch client dashboard) and I found out that there was a lack of appropriate documentation and examples in this area."],tags:[{name:"TypeScript"},{name:"WebPack"},{name:"Angular"}],gitHubRepo:{owner:"trekhleb",repo:"angular-library-seed"}},{name:"📕 AllBible.info",demoURL:{url:"https://allbible.info/"},startDate:"2010-02-01",endDate:"2017-02-01",cover:{srcPath:"projects/allbible/cover.png"},summary:["Online Bible study web-service that gives users possibility to study Bible by reading it in 4 modern translations, comparing verses to theirs Greek and Hebrew originals, investigating cross-linked verses, making a cross-Bible search, listening to audio Bible, using different Bible study plans and more"],description:["Online Bible study web-service that gives users possibility to study Bible by reading it in 4 modern translations, comparing verses to theirs Greek and Hebrew originals, investigating cross-linked verses, making a cross-Bible search, listening to audio Bible, using different Bible study plans (chronological, topical and so on), exploring Bible geographic maps and using a lot more other features.","I have created this project after I realized that different Bible study methods exist here and there but at that moment there was no consolidated web-service that would give users to use all of those study methods in one place.","Project has 100K+ users monthly."],tags:[{name:"JavaScript"},{name:"PHP"},{name:"MySQL"},{name:"Bible"}]},{name:"🧶 Hook&Thread",demoURL:{url:"http://hook-and-thread.com/"},cover:{srcPath:"projects/hook-and-thread/cover-2.png"},startDate:"2016-11-01",endDate:"2016-12-01",archived:!0,summary:["Web-shop of knitted accessories.","We've launched this project with my wife to get an online selling platform for knitted accessories she was producing at that time.","The project was running on WordPress with the great support of the WooCommerce module."],description:["Hook&Thread is a web-shop of knitted accessories.","We've launched this project with my wife to get an online selling platform for knitted accessories she was producing at that time."],tags:[{name:"Wordpress"},{name:"WooCommerce"}]},{name:"🕸 SiteProm Web Studio",demoURL:{url:"http://site-prom.com/"},cover:{srcPath:"projects/siteprom/cover-1.png"},startDate:"2008-01-01",endDate:"2011-12-01",archived:!0,summary:["The web-studio that was created by my friend and I where we were specialized on providing a full-support during website creation"],description:['My friend and I created a web-studio that was specialized on providing a full-support during website creation starting from understanding customer requirements and ending with web-site promotion. We\'ve been working mostly with the Ukrainian market. Among our clients: "KIA-Motors Ukraine", "Andre TAN", "КОСМО", "Ичня", "Химлаборрекатив", "ЛабЭксперт" and others.'],tags:[{name:"PHP"},{name:"MySQL"},{name:"JavaScript"}]}];t.default=function(){return n.a.createElement(I,{projects:J})}},tSKC:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=function(e){var t=e.tag;return n.a.createElement("span",{key:t.name,className:"inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0"},t.name)},i=a("zp9D");t.a=function(e){var t=e.tags,a=e.className,r=void 0===a?"":a,s=e.numToShow,l=void 0===s?1/0:s;if(!t)return null;var c=" "+r;return n.a.createElement("div",{className:c},n.a.createElement(i.a,{items:t,toHide:function(e,t){return t>=l},onRender:function(e){return n.a.createElement(o,{key:e.name,tag:e})},itemClassName:"mr-2 mb-2"}))}},ty9m:function(e,t,a){var r=a("BPHJ").GenIcon;e.exports.IoPlay=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"}}]})(e)}},yJYX:function(e){e.exports=JSON.parse('{"trekhleb/links-detector":{"stars":100,"updatedAt":1613065328702},"trekhleb/machine-learning-experiments":{"stars":800,"updatedAt":1613065328853},"trekhleb/covid-19":{"stars":247,"updatedAt":1613065328944},"trekhleb/nano-neuron":{"stars":1863,"updatedAt":1613065329032},"trekhleb/use-position":{"stars":230,"updatedAt":1613065329126},"trekhleb/homemade-machine-learning":{"stars":16928,"updatedAt":1613065329227},"trekhleb/javascript-algorithms":{"stars":95868,"updatedAt":1613065329314},"trekhleb/machine-learning-octave":{"stars":632,"updatedAt":1613065329390},"trekhleb/learn-python":{"stars":6778,"updatedAt":1613065329478},"trekhleb/angular-library-seed":{"stars":198,"updatedAt":1613065329562}}')},"zv+I":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("czJ/");t.a=function(e){var t=e.children,a=e.className,r="mb-6 uppercase font-extrabold "+(void 0===a?"":a);return n.a.createElement(o.a,{level:o.b.h1,className:r},t)}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-e3394b116f0ce2854989.js.map