(window.webpackJsonp=window.webpackJsonp||[]).push([[15,10],{293:function(t,e,r){t.exports=r.p+"img/ansible.fb092fc.svg"},294:function(t,e,r){t.exports=r.p+"img/azure.f58d5d0.svg"},295:function(t,e,r){t.exports=r.p+"img/ui-project-2.d289191.jpg"},296:function(t,e,r){t.exports=r.p+"img/mobile-project-2.a5aae78.jpg"},304:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:r(293)},{id:2,title:"Web Application",img:r(294)},{id:3,title:"UI Design",img:r(295)},{id:4,title:"Kabul Mobile App UI",img:r(296)}]}}}},l=r(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    mt-10\n    pt-10\n    sm:pt-14 sm:mt-20\n    border-t-2 border-primary-light\n    dark:border-secondary-dark\n  "},[r("p",{staticClass:"\n      font-general-regular\n      text-primary-dark\n      dark:text-primary-light\n      text-3xl\n      font-bold\n      mb-10\n      sm:mb-14\n      text-left\n    "},[t._v("\n    "+t._s(t.relatedProject.relatedProjectsHeading)+"\n  ")]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-4 gap-10"},t._l(t.relatedProject.relatedProjects,(function(t){return r("div",{key:t.id},[r("img",{staticClass:"rounded-xl cursor-pointer",attrs:{src:t.img,alt:t.title}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,r){"use strict";r.r(e);r(20),r(36);var n=r(31),l=r.n(n),o={scrollToTop:!0,data:function(){return{}},computed:{project:function(){return this.$store.getters.getProjectById(this.$route.params.id)}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()},components:{ProjectRelatedProjects:r(304).default}},c=r(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto"},[t.project?r("div",[r("div",[r("p",{staticClass:"\n          font-general-medium\n          text-left text-3xl\n          sm:text-4xl\n          font-bold\n          text-primary-dark\n          dark:text-primary-light\n          mt-14\n          sm:mt-20\n          mb-7\n        "},[t._v("\n        "+t._s(t.project.title)+"\n      ")]),t._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"flex items-center mr-10"},[r("i",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"clock"}}),t._v(" "),r("span",{staticClass:"\n              font-general-medium\n              ml-2\n              leading-none\n              text-primary-dark\n              dark:text-primary-light\n            "},[t._v(t._s(t.project.publishDate))])]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("i",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"tag"}}),t._v(" "),r("span",{staticClass:"\n              font-general-medium\n              ml-2\n              leading-none\n              text-primary-dark\n              dark:text-primary-light\n            "},[t._v(t._s(t.project.tag))])])])]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},t._l(t.project.projectImages,(function(t){return r("div",{key:t.id,staticClass:"mb-10 sm:mb-0"},[r("img",{staticClass:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",attrs:{src:t.img}})])})),0),t._v(" "),r("div",{staticClass:"block sm:flex gap-0 sm:gap-10 mt-14"},[r("div",{staticClass:"w-full sm:w-1/3 text-left"},[r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n              font-general-medium\n              text-2xl text-secondary-dark\n              dark:text-secondary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.clientTitle)+"\n          ")]),t._v(" "),r("ul",{staticClass:"leading-loose"},t._l(t.project.companyInfos,(function(e){return r("li",{key:e.id,staticClass:"\n                font-general-regular\n                text-ternary-dark\n                dark:text-ternary-light\n              "},[r("span",[t._v(t._s(e.title)+": ")]),t._v(" "),r("a",{class:"Website"==e.title||"Phone"==e.title?"hover:underline cursor-pointer":"",attrs:{href:"#","aria-label":"Project website and phone"}},[t._v(t._s(e.details))])])})),0)]),t._v(" "),r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n              font-general-medium\n              text-2xl text-ternary-dark\n              dark:text-ternary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.objectivesTitle)+"\n          ")]),t._v(" "),r("p",{staticClass:"\n              font-general-regular\n              text-primary-dark\n              dark:text-ternary-light\n            "},[t._v("\n            "+t._s(t.project.objectivesDetails)+"\n          ")])]),t._v(" "),r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n              font-general-medium\n              text-2xl text-ternary-dark\n              dark:text-ternary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.techTitle)+"\n          ")]),t._v(" "),r("p",{staticClass:"\n              font-general-regular\n              text-primary-dark\n              dark:text-ternary-light\n            "},[t._v("\n            "+t._s(t.project.technologies.join(", "))+"\n          ")])]),t._v(" "),r("div",[r("p",{staticClass:"\n              font-general-medium\n              text-2xl text-ternary-dark\n              dark:text-ternary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.socialTitle)+"\n          ")]),t._v(" "),r("div",{staticClass:"flex items-center gap-3 mt-5"},t._l(t.project.socialSharings,(function(t){return r("a",{key:t.id,staticClass:"\n                bg-ternary-light\n                dark:bg-ternary-dark\n                text-gray-400\n                hover:text-primary-dark\n                dark:hover:text-primary-light\n                p-2\n                rounded-lg\n                shadow-sm\n                duration-500\n              ",attrs:{href:t.url,target:"__blank","aria-label":"Share Project"}},[r("i",{staticClass:"w-4 lg:w-5 h-4 lg:h-5",attrs:{"data-feather":t.icon}})])})),0)])]),t._v(" "),r("div",{staticClass:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},[r("p",{staticClass:"\n            font-general-medium\n            text-primary-dark\n            dark:text-primary-light\n            text-2xl\n            font-bold\n            mb-7\n          "},[t._v("\n          "+t._s(t.project.detailsTitle)+"\n        ")]),t._v(" "),t._l(t.project.projectDetails,(function(e){return r("p",{key:e.id,staticClass:"\n            font-general-regular\n            mb-5\n            text-lg text-ternary-dark\n            dark:text-ternary-light\n          "},[t._v("\n          "+t._s(e.details)+"\n        ")])}))],2)]),t._v(" "),r("ProjectRelatedProjects")],1):r("div",{staticClass:"font-general-medium container mx-auto text-center"},[r("h1",[t._v("No projects yet")])])])}),[],!1,null,"22843643",null);e.default=component.exports}}]);