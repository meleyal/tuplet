(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var o=t(1),a=(t(0),t(140));const r={title:"Timing"},c={id:"music/timing",title:"Timing",description:"The next step is to look at rhythm/tempo. Or how to play our notes over time. If",source:"@site/docs/music/timing.md",permalink:"/tuplet/docs/music/timing",sidebar:"main",previous:{title:"Scales",permalink:"/tuplet/docs/music/scales"},next:{title:"Sequencing",permalink:"/tuplet/docs/music/sequencing"}},i=[{value:"Timing models",id:"timing-models",children:[{value:"Standard JavaScript timing",id:"standard-javascript-timing",children:[]},{value:"Web Audio API timing",id:"web-audio-api-timing",children:[]}]},{value:"Metronome",id:"metronome",children:[{value:"Version 1",id:"version-1",children:[]},{value:"Version 2",id:"version-2",children:[]},{value:"Version 3",id:"version-3",children:[]},{value:"Note length",id:"note-length",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],s={rightToc:i};function l({components:e,...n}){return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The next step is to look at rhythm/tempo. Or how to play our notes over time. If\nwe think of music in terms of axes, pitch is on the y axis, with time stretching\nout ahead on the x axis. This gives us the building block of rhythm, which is a\nfoundation of melody."),Object(a.b)("h2",{id:"timing-models"},"Timing models"),Object(a.b)("h3",{id:"standard-javascript-timing"},"Standard JavaScript timing"),Object(a.b)("p",null,"JS has ",Object(a.b)("inlineCode",{parentName:"p"},"setInterval")," & ",Object(a.b)("inlineCode",{parentName:"p"},"setTimeout"),"."),Object(a.b)("p",null,"To repeat a note we ",Object(a.b)("em",{parentName:"p"},"could")," do the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// Repeat every 1 second\nsetInterval(() => {\n  const sourceNode = context.createBufferSource()\n  sourceNode.buffer = audioBuffer\n  sourceNode.connect(context.destination)\n  sourceNode.start()\n}, 1000)\n")),Object(a.b)("p",null,"The problem with JavaScript's standard ",Object(a.b)("inlineCode",{parentName:"p"},"setInterval")," and ",Object(a.b)("inlineCode",{parentName:"p"},"setTimeout")," functions\nis that they are not guaranteed to run exactly on schedule. Depending what else\nis happening on the page, they may be delayed while the browser catches up. This\nis fine for most use-cases, where millisecond delays in e.g. showing a\nnotification would be unnoticeable, but with music these lags can be very\nobvious."),Object(a.b)("h3",{id:"web-audio-api-timing"},"Web Audio API timing"),Object(a.b)("p",null,"Instead, the Web Audio API has the concept of scheduling. When you create an\n",Object(a.b)("inlineCode",{parentName:"p"},"AudioContext"),", it begins counting from 0. We can check it's current time as\nfollows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\n\nconsole.log(context.currentTime) // => 0\n\nsetTimeout(() => {\n  console.log(context.currentTime) // => 0.9984580498866213\n}, 1000)\n")),Object(a.b)("blockquote",null,Object(a.b)("h4",Object(o.a)({parentName:"blockquote"},{id:"contextcurrenttime-uses-seconds-not-milliseconds"}),Object(a.b)("inlineCode",{parentName:"h4"},"context.currentTime")," uses seconds ",Object(a.b)("em",{parentName:"h4"},"not")," milliseconds"),Object(a.b)("p",{parentName:"blockquote"},"Unlike most timing-related features in JavaScript, the audio clock uses\nseconds, not milliseconds, with all scheduling happening relative to\n",Object(a.b)("inlineCode",{parentName:"p"},"currentTime"),".")),Object(a.b)("p",null,"We can't control this internal clock, but we can schedule events relative to it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\nconst now = context.currentTime\n\n// Play immediately\nconst sourceNode1 = context.createBufferSource()\nsourceNode1.buffer = audioBuffer\nsourceNode1.connect(context.destination)\nsourceNode1.start(now)\n\n// Play after 1 second\nconst sourceNode2 = context.createBufferSource()\nsourceNode2.buffer = audioBuffer\nsourceNode2.connect(context.destination)\nsourceNode2.start(now + 1)\n\n// Play after 2 seconds\nconst sourceNode3 = context.createBufferSource()\nsourceNode3.buffer = audioBuffer\nsourceNode3.connect(context.destination)\nsourceNode3.start(now + 2)\n")),Object(a.b)("blockquote",null,Object(a.b)("h4",Object(o.a)({parentName:"blockquote"},{id:"audiobuffersourcenodes-can-only-be-played-once"}),Object(a.b)("inlineCode",{parentName:"h4"},"AudioBufferSourceNode"),"s can only be played once"),Object(a.b)("p",{parentName:"blockquote"},"It's worthing noting that in the above code we create three separate\n",Object(a.b)("inlineCode",{parentName:"p"},"sourceNode"),"s, each using the same ",Object(a.b)("inlineCode",{parentName:"p"},"audioBuffer"),". Once started, an\n",Object(a.b)("inlineCode",{parentName:"p"},"AudioBufferSourceNode")," cannot be played again. The expensive part of working\nwith samples is loading and decoding them, so the idea is to keep around\n",Object(a.b)("inlineCode",{parentName:"p"},"AudioBuffer"),"s, while freely creating and discarding ",Object(a.b)("inlineCode",{parentName:"p"},"AudioBufferSourceNode"),'s.\nThey are intended to be "fire and forget", and are automatically garbage\ncollected when they finish playing.')),Object(a.b)("h2",{id:"metronome"},"Metronome"),Object(a.b)("p",null,"Most music-making apps have some form of metronome, something that emits a\nsteady pulse given a BPM (beats per minute). Instruments and effects sync to\nthis pulse, ensuring that everything plays back in time."),Object(a.b)("h3",{id:"version-1"},"Version 1"),Object(a.b)("p",null,"We can create a basic metronome that emits a sound every beat using an\n",Object(a.b)("inlineCode",{parentName:"p"},"OscillatorNode")," and taking advantage of its\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/onended"}),Object(a.b)("inlineCode",{parentName:"a"},"onended")),"\nevent. Passing in a callback, we can then schedule anything we want relative to\nthe beat."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\n\nconst metronome = (bpm = 60, callback, currentBeat = 0) => {\n  const now = context.currentTime\n\n  // How many beats fit in a single second at the given bpm? e.g.\n  // 60 bpm = 1 beat per second\n  // 120 bpm = 2 beats per second\n  // 240 bpm = 4 beats per second\n  const beatsPerSecond = bpm / 60.0\n\n  // Our base unit is a quarter note. This defines how many quarter notes fit\n  // in a single bar. For now let's use common 4/4 time.\n  const quarterBeatsPerBar = 4\n\n  // Multiplying the number of beats in 1 second by the number of quarter\n  // beats in a bar, we get the actual number of beats we want in a single bar e.g.\n  // 1 beat per second * 4 = 4 beats per bar\n  // 2 beat per second * 4 = 8 beats per bar\n  // 4 beat per second * 4 = 16 beats per bar\n  const beatsPerBar = beatsPerSecond * quarterBeatsPerBar\n\n  // Dividing the number of quarter beats by our actual beats per bar gives us\n  // the length of a single beat in milliseconds.\n  const beatLength = quarterBeatsPerBar / beatsPerBar\n\n  // console.log(beatsPerSecond, beatsPerBar, beatLength)\n  // return\n\n  const freq = currentBeat % beatsPerBar == 1 ? 440 : 880\n  const zero = 0\n  const gainNode = context.createGain()\n  const osc = context.createOscillator()\n  gainNode.connect(context.destination)\n  osc.connect(gainNode)\n\n  gainNode.gain.linearRampToValueAtTime(zero, now + beatLength / 16)\n\n  osc.frequency.value = freq\n  osc.start(now)\n  osc.stop(now + beatLength)\n\n  callback(now)\n\n  osc.onended = () => {\n    metronome(bpm, callback, (currentBeat += 1))\n    osc = null\n    gainNode = null\n  }\n}\n\nmetronome(60, (now) => {\n  // Here we can trigger any audio we want\n  console.log('boop!', now)\n})\n// metronome(120)\n// metronome(240)\n")),Object(a.b)("p",null,"For more details on how we derive the note length from the BPM, refer to the\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../primers/music#rhythm"}),"Music Primer")," chapter, which breaks this down with\nillustrations."),Object(a.b)("h3",{id:"version-2"},"Version 2"),Object(a.b)("p",null,"Currently our metronome only enables us to schedule notes to occur exactly on\nthe beat. To increase our options we need to increase the resolution of the\nevents the metronome emits."),Object(a.b)("p",null,"If we think of time as the x axis of a grid, resolution means how we subdivide\nthat grid."),Object(a.b)("p",null,"As we saw in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../primers/music"}),"Music chapter"),', in traditional music\nnotation we might call these divisions a "half note" or "quarter note", (or\n"minim" or "crotchet"), while in a pattern sequencer they are usually\nrepresented as fractions. Both refer to the same thing: how to subdivide a bar.'),Object(a.b)("p",null,"Common subdivisions are 1/2, 1/4, 1/8, 1/16, 1/32, 1/64 and 1/128 (plus some\ntriplet divisions which we'll ignore for now)."),Object(a.b)("p",null,"If we presume a time signature of 4/4 (4 beats per bar), these resolutions break\ndown as follows:"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/tuplet/img/sequencer/resolution.svg",alt:null}))),Object(a.b)("p",null,"Rather than passing in a callback to be triggered on the beat, we can instead\nextend our metronome to emit events at each subdivision and listen for those."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const metronome = (context, bpm = 60, options = { audible: false }) => {\n  const secondsPerBeat = 60.0 / bpm\n  const beatsPerBar = 4\n\n  const wholeNote = secondsPerBeat * beatsPerBar\n  const sixtyFourthNote = wholeNote / 64\n\n  const gainNode = context.createGain()\n  gainNode.connect(context.destination)\n  let osc\n\n  const tick = (currentBeat = 1, wholeBeat = 1) => {\n    const resolution = sixtyFourthNote\n    const now = context.currentTime\n\n    gainNode.gain.value = 0\n\n    osc = context.createOscillator()\n    osc.connect(gainNode)\n    osc.start()\n    osc.stop(now + resolution)\n\n    if (currentBeat === 1 || currentBeat % 16 === 0) {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 400\n      callbacks['beat'](wholeBeat)\n      wholeBeat += 1\n      // callbacks['beat/4'](currentBeat)\n    } else if (currentBeat % 8 === 0) {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 800\n      callbacks['beat/8']()\n    } else if (currentBeat % 4 === 0) {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 1600\n      callbacks['beat/16']()\n    } else if (currentBeat % 2 === 0) {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 3200\n      callbacks['beat/32']()\n    } else {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 6400\n      callbacks['beat/64']()\n    }\n\n    osc.onended = () => {\n      tick((currentBeat += 1), wholeBeat)\n    }\n  }\n\n  const stop = () => {\n    osc.onended = null\n    osc = null\n  }\n\n  const callbacks = {\n    beat: () => null,\n    'beat/4': () => null,\n    'beat/8': () => null,\n    'beat/16': () => null,\n    'beat/32': () => null,\n    'beat/64': () => null,\n  }\n\n  const on = (event, fn) => {\n    callbacks[event] = fn\n  }\n\n  return {\n    start: tick,\n    stop,\n    on,\n  }\n}\n\nconst context = new AudioContext()\n\nconst metro = metronome(context, 60)\n\nmetro.on('beat', (beat) => {\n  console.log('beat', beat)\n})\n\n// metro.on('beat/64', beat => {\n//   console.log('beat/64')\n// })\n\nmetro.start()\n\nsetTimeout(() => {\n  metro.stop()\n}, 4000)\n")),Object(a.b)("h3",{id:"version-3"},"Version 3"),Object(a.b)("p",null,"Async: Callbacks, Promises, Event Emitters, Observables"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null})),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Sync"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Async"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Single"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Variable"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Promise")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Collection"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Array"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Observable")))),Object(a.b)("p",null,"Observable (spec, RxJS)"),Object(a.b)("h3",{id:"note-length"},"Note length"),Object(a.b)("p",null,"If our metronome is ticking away at 60 bpm, we know that each beat lasts 1\nsecond. A bar of 4 beats will therefore last 4 seconds. Knowing this, we just\nneed to divide the bar length by the resolution to give us our note length."),Object(a.b)("p",null,"We can encapsulate this knowledge into a ",Object(a.b)("inlineCode",{parentName:"p"},"resolution()")," function that given a\nbpm and resolution, returns the length of our note:"),Object(a.b)("p",null,"Our ",Object(a.b)("inlineCode",{parentName:"p"},"metronome()")," function tells us the current bpm at each tick..."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const resolution = (bpm, res) => {\n  const beat = bpm / 60 // 1 second\n  const bar = beat * 4 // 4 seconds\n  return bar / res\n}\nconst bpm = 60\n\nresolution(bpm, 1) // => 4 seconds\nresolution(bpm, 2) // => 2 seconds\nresolution(bpm, 4) // => 1 second\nresolution(bpm, 8) // => 0.5 seconds\nresolution(bpm, 16) // => 0.25 seconds\nresolution(bpm, 32) // => 0.125 seconds\nresolution(bpm, 64) // => 0.0625 seconds\nresolution(bpm, 128) // => 0.03125 seconds\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const bpm = 60\nconst beat = bpm / 60 // 1 second\nconst bar = beat * 4 // 4 seconds\n\nbar / 1 // => 4 seconds\nbar / 2 // => 2 seconds\nbar / 4 // => 1 second\nbar / 8 // => 0.5 seconds\nbar / 16 // => 0.25 seconds\nbar / 32 // => 0.125 seconds\nbar / 64 // => 0.0625 seconds\nbar / 128 // => 0.03125 seconds\n")),Object(a.b)("p",null,"##\xa0Learning"),Object(a.b)("p",null,"TODO: ",Object(a.b)("inlineCode",{parentName:"p"},"metronome")," is part of Tuplet package, see API docs."),Object(a.b)("p",null,"While the musical results are less than inspiring, we now have a way to generate\ntwo key aspects of music: notes/pitch and rhythm/time, which combined can give\nus melody. With that in mind, we're ready to move on to a more interesting\nexample."),Object(a.b)("h2",{id:"further-reading"},"Further Reading"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.html5rocks.com/en/tutorials/audio/scheduling/"}),"A Tale of Two Clocks - Scheduling Web Audio with Precision"))))}l.isMDXComponent=!0},140:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(t),m=o,p=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?a.a.createElement(p,i({ref:n},l,{components:t})):a.a.createElement(p,i({ref:n},l))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);