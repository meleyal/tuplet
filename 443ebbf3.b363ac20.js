(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),o=(n(0),n(178)),i={title:"Music"},c={id:"primers/music",title:"Music",description:"> TODO",source:"@site/docs/primers/music.md",permalink:"/docs/primers/music",sidebar:"main",previous:{title:"Generative",permalink:"/docs/primers/generative"},next:{title:"JavaScript",permalink:"/docs/primers/javascript"}},l=[{value:"Scales",id:"scales",children:[]},{value:"Definitions",id:"definitions",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TODO")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Remember, music consists of sequences (i.e., lists) of events.")),Object(o.b)("p",null,"Here we explain the building blocks of music: melody, harmony and rhythm."),Object(o.b)("p",null,"Melody, harmony, rhythm, compare with functions + primitives."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Scales"),Object(o.b)("li",{parentName:"ul"},"Chords"),Object(o.b)("li",{parentName:"ul"},"Rhythm"),Object(o.b)("li",{parentName:"ul"},"Tempo/BPM/beat"),Object(o.b)("li",{parentName:"ul"},"Human heart beat"),Object(o.b)("li",{parentName:"ul"},"Signature BPMs (house 120, hip hop 90, dnb 140)"),Object(o.b)("li",{parentName:"ul"},"Time signature"),Object(o.b)("li",{parentName:"ul"},"Note lengths"),Object(o.b)("li",{parentName:"ul"},"Instruments")),Object(o.b)("h2",{id:"scales"},"Scales"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Western classical 12 note scale (do re me fa so la ti do)"),Object(o.b)("li",{parentName:"ul"},"Major, minor"),Object(o.b)("li",{parentName:"ul"},"Other scales (Dorian etc, church, jazz)"),Object(o.b)("li",{parentName:"ul"},"Non-western"),Object(o.b)("li",{parentName:"ul"},"Microtonal")),Object(o.b)("h2",{id:"definitions"},"Definitions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Pitch: a pitch consists of a pitch class and an octave. For example, A4\nrepresents the pitch class A in the fourth octave."),Object(o.b)("li",{parentName:"ul"},"Pitch Class: the pitch class A consists of the As in all octaves."),Object(o.b)("li",{parentName:"ul"},"Note: a note is a pitch combined with a duration"),Object(o.b)("li",{parentName:"ul"},"Rest:"),Object(o.b)("li",{parentName:"ul"},"Score:"),Object(o.b)("li",{parentName:"ul"},"Part:"),Object(o.b)("li",{parentName:"ul"},"Phrase:"),Object(o.b)("li",{parentName:"ul"},"Octave:")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"where a piece of music is represented as a score, that score has several parts\n(e.g., a flute part and a percussion part), each part contains phrases (e.g.,\nmelodies, riffs, grooves, sequences, patterns), and each phrase is made up of\na series of one or more notes (individual sound events).")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The collection of notes from one pitch to the next one of the same name, say\nC4 to C5, is an octave. All the notes within an octave (including sharps or\nflats) make up the notes of the \u201cchromatic\u201d scale (12 notes).")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A note in Python consists of pitch, duration, dynamic (volume), and panning\nposition")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In music theory, a phrase refers to a grouping of consecutive notes. A phrase\ntypically contains a melody\u2014a linear list of notes that acts as a musical\nunit.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For convenience, Python also defines meaningful names (constants) for pitches.\nPitch constants consist of a letter (C, D, E, F, G, A, or B) followed by the\noctave (or register) of the pitch. For example, middle C is C4.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In Python, dynamic values are integers. They range from 0 to 127. This follows\nthe MIDI standard, which represents dynamics (or velocity) from 0 (silence) to\n127 (loudest).")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Creating Notes The most basic musical structure in the Python music library is\na note. Python notes have the following attributes: \u2022 pitch\u2014an integer from 0\n(low) to 127 (high) \u2022 duration\u2014a positive real number (quarter note is 1.0) \u2022\ndynamic\u2014(or volume) an integer from 0 (silent) to 127 (loudest) \u2022 panning\u2014a\nreal number from 0.0 (left) to 1.0 (right) To create a note, we specify its\npitch, duration, dynamic, and panning position, as follows: Note(pitch,\nduration, dynamic, panning) where dynamic and panning are optional. If\nomitted, dynamic is set to 85 and panning to 0.5 (center).")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Distinctive parameters for notes are pitch, duration and velocity;")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In most computer music systems of algorithmic composition, the parameters\npitch, duration, and dynamics may be manipulated;")))}u.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(h,c({ref:t},s,{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);