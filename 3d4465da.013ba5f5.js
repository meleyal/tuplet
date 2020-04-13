(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(1),a=n(9),r=(n(0),n(178)),o={title:"Generative"},s={id:"primers/generative",title:"Generative",description:"> I make art about what confuses me.",source:"@site/docs/primers/generative.md",permalink:"/docs/primers/generative",sidebar:"main",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Music",permalink:"/docs/primers/music"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Concepts",id:"concepts",children:[]},{value:"In Music",id:"in-music",children:[]},{value:"Evaluating",id:"evaluating",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"I make art about what confuses me."),Object(r.b)("p",{parentName:"blockquote"},"\u2013 ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://lauren-mccarthy.com/"}),"Lauren McCarthy"))),Object(r.b)("p",null,'In this chapter, we\'ll attempt to pin down what we mean by the elusive term\n"generative", and specifically what it means in the context of creating music.'),Object(r.b)("h2",{id:"definition"},"Definition"),Object(r.b)("p",null,'We probably have an intuitive sense of what "generative" means, which we might\nphrase as follows:'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Generative")," \u2013\xa0A process or system that produces something.")),Object(r.b)("p",null,"We can refine this further with a trip to the dictionary:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Generative")," \u2013\xa0Having the power of generating, originating, producing, or\nreproducing.")),Object(r.b)("p",null,'This suggests that something "generative" is able to create things, possibly\nwith some degree of autonomy. The "things" produced may be copies, versions, or\nsomething entirely new.'),Object(r.b)("p",null,"In the context of this book, we can be more specific and say that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'"Generative" is shorthand for ',Object(r.b)("em",{parentName:"p"},"generative system"),", a process that generates a\nresult.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Our generative system will be a computer program, written in JavaScript, that\nruns in a web browser.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The result (or output) of our system will be music, and we're primarily\ninterested in originating ",Object(r.b)("em",{parentName:"p"},"new")," music."))),Object(r.b)("p",null,'With these in mind, our working definition of "generative" expands to:'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Generative music system")," \u2013 A program that creates new music.")),Object(r.b)("h2",{id:"concepts"},"Concepts"),Object(r.b)("p",null,"With this working definition in hand, let's examine some of the concepts it\nencapsulates in more detail."),Object(r.b)("p",null,"Let's imagine we've written a program that plays ",Object(r.b)("em",{parentName:"p"},"Happy Birthday"),"."),Object(r.b)("p",null,'In programming, we call the the "thing" produced by a program its ',Object(r.b)("em",{parentName:"p"},"output"),"."),Object(r.b)("p",null,"In that sense, we could say that a program that plays ",Object(r.b)("em",{parentName:"p"},"Happy Birthday")," every\ntime you run it, is generative."),Object(r.b)("p",null,"But something's missing. In a creative context, generative implies creative,\nsome complex process that results in something novel or surprising."),Object(r.b)("p",null,"In an ideal (or dystopian?) world, we could click a button and the computer\nwould give us (or generate) our desired outcome, or some unkown outcome that\nsurprises or delights us."),Object(r.b)("p",null,"But, in the real world, we need to give computers rules, or procedures (machine\nlearning is changing this, but we're getting ahead of ourselves) to tell them\nwhat we want to create. These procedures are known as algorithms, which is just\na term to describe a sequence of steps we want the computer to perform, not\ndissimilar to a cooking recipe. Extracting variables from our code gives us a\nset of values (or heuristics) we can tweak to influence the output or satisfy\nsome set of contraints."),Object(r.b)("p",null,"You might also come across the terms algorithmic music, or procedural music.\nThese are essentially the same thing, though generative music is perhaps more\nexpressive as it emphasises what is happening rather than how it's implemented."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the imitation of nature (mimesis), or Biomimicry")),Object(r.b)("p",null,"Define Generative vs. algorithmic vs. procedural"),Object(r.b)("p",null,"Generative: relating to or capable of production or reproduction. Having the\npower or function of generating, originating, producing, or reproducing.\nDenoting an approach to any field of linguistics that involves applying a finite\nset of rules to linguistic input in order to produce all and only the\nwell-formed items of a language."),Object(r.b)("p",null,"Algorithmic: expressed as or using an algorithm or computational procedure. A\nset of rules for solving a problem in a finite number of steps. A sequence of\ninstructions, typically to solve a class of problems or perform a computation."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Algorithmic composition is the process of designing an algorithm (or\nheuristic) for generating music.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Another typical approach to algorithmic composition is to specify some\nconstraints on the solution space and then generate lots of solutions that\nsatisfy those constraints.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u2013 The Haskell School of Music: From Signals to Symphonies")),Object(r.b)("p",null,"For our purposes / working definition: A (predetermined?) process/rules we\ndefine to create, outcome is unknown?"),Object(r.b)("p",null,"Different forms:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the imitation of nature (mimesis), or Biomimicry"),Object(r.b)("li",{parentName:"ul"},"Rules (e.g. Reas rules:\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://drive.google.com/file/d/0B9h469--G5OwOGVfVmUxZUQ5VzA/view"}),"https://drive.google.com/file/d/0B9h469--G5OwOGVfVmUxZUQ5VzA/view"),")")),Object(r.b)("p",null,"Genetic algorithms as a particular class of evolutionary algorithms, i.e.\nstrategies modeled on natural systems, are stochastic search techniques."),Object(r.b)("p",null,"Artificial neural networks are used in numerous applications; depending on the\ntype of ANN, they are often applied in pattern recognition, prediction,\noptimization and automatic classification."),Object(r.b)("h2",{id:"in-music"},"In Music"),Object(r.b)("p",null,"Musician as generator: The score is the rules, the performance is generative\nwith infinite range of variables. Less restrictive rules = more options to\nexplore the possiblity space."),Object(r.b)("p",null,"Not new!"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Micrologus, 1026 \u2013",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Micrologus"}),"https://en.wikipedia.org/wiki/Micrologus")),Object(r.b)("li",{parentName:"ul"},"Ars Magna, 1305 \u2013 ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Ramon_Llull#Ars_Magna"}),"https://en.wikipedia.org/wiki/Ramon_Llull#Ars_Magna"))),Object(r.b)("p",null,"Processes"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"In general, procedures of algorithmic composition may be divided into\nknowledge-based and non-knowledge-based methods. Knowledge-based approaches\ngenerate their outputs often on the basis of a rule-based system which is\nformulated by if then conditions and/or constraints. Non-knowledge-based\nmethods are able to autonomously derive rules from an underlying corpus and\nproduce outputs that, in supervised learning, are additionally evaluated by a\nsuperior instance.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Minimalism: Minimalist music usually employs repetition and layering of simple\nmusical patterns to generating intricate musical textures and structures.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Chance music, also known as aleatoric music, is a compositional technique that\nintroduces elements of randomness (or indeterminism) into the compositional\nprocess.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Serialism: Serialism involves using deterministic rules to control choices\nwithin the compositional process.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Stochastic music refers to music whose various aspects are guided by\nprobability."))),Object(r.b)("p",null,"Minimalism: Minimalist music usually employs repetition and layering of simple\nmusical patterns to generating intricate musical textures and structures."),Object(r.b)("p",null,"Chance music, also known as aleatoric music, is a compositional technique that\nintroduces elements of randomness (or indeterminism) into the compositional\nprocess. Essential parts of chaos theory include the behavior of complex\nsystems, their attractors as well as different forms of self-similar structures,\nabove all of fractals. In a mathematical and physical context, particular states\nof a system that are difficult to predict are called \u201cchaotic.\u201d"),Object(r.b)("p",null,"Serialism: Serialism involves using deterministic rules to control choices\nwithin the compositional process."),Object(r.b)("p",null,"Stochastic music refers to music whose various aspects are guided by\nprobability. The field of stochastics comprises probability calculus and\nstatistics. Stochastic processes are used to describe a sequence of random\nevents dependent on the time parameter (t)."),Object(r.b)("h2",{id:"evaluating"},"Evaluating"),Object(r.b)("p",null,"It's worth taking a moment to think about how to evaluate the output of\ngenerative systems. What makes good generative art? Is the process important, or\njust the result? If we can generate something at the push of a button, what\nvalue does it have?"),Object(r.b)("p",null,"Unlike most programs, there are no real 'correct' answers if we're making art.\nWe're constantly evaluating and making choices about the results, and tweaking\nthe program to nudge it closer to what we desire, or confound it to produce\nsomething unexpected."),Object(r.b)("p",null,"One way to think about this is the idea of exploring a 'possiblity space'.\nWithout any rules, the possiblities are infinite (i.e. chaos). By defining rules\n(heuristics), we can constrain and expore this space. A computer can draw many\nmillions of circles in the time it takes us to draw one. In this way, the\ncomputer can 'explore' the possiblity space much faster, guided by our\nselection/curation in a feedback loop."),Object(r.b)("p",null,"This seeking is a worthy goal in and of itself, but part of our process might be\nto try and express the internal logic of our programs, or the data we're working\nwith, making it possible to understand and connect with on a deeper level."),Object(r.b)("p",null,"In the end, this is both the draw and the value of generative art, exploring the\nunknown, and hopefully finding something illuminating along the way."),Object(r.b)("h2",{id:"further-reading"},"Further Reading"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Generative_systems"}),"Generative Systems - Wikipedia")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://natureofcode.com/"}),"The Nature of Code \u2013\xa0Daniel Shiffman")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.artnome.com/news/2018/8/8/why-love-generative-art"}),"Why Love Generative Art? \u2013 Artnome")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.springer.com/gp/book/9783211755396"}),"Algorithmic Composition \u2013\xa0Gerhard Nierhaus"))))}u.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(o,".").concat(m)]||p[m]||b[m]||r;return n?a.a.createElement(h,s({ref:t},l,{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);