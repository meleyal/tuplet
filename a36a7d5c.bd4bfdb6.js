(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(9),a=(t(0),t(178)),c={title:"Metronome"},i={id:"examples/metronome",title:"Metronome",description:"```js",source:"@site/docs/examples/metronome.md",permalink:"/docs/examples/metronome"},s=[],u={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\nconst bpm = 60.0\n\n// The beat we're currently scheduling\nlet beatNumber = 0\n\n// When the next beat is due (sec)\nlet nextBeatTime = 0.0\n\nconst play = () => {\n  // First beat is due immediately\n  nextBeatTime = context.currentTime\n\n  // Kick off scheduler\n  scheduler()\n}\n\n/**\n * # Scheduler\n *\n * An analogy for understanding the scheduler function is to imagine we're\n * creating the path ahead of us as we're walking.\n *\n * We don't need to know everything that's ahead, we just need to lay enough\n * path to take the next step or two, but not too much in case we want to\n * change direction (or in our case, change bpm).\n *\n * The faster we're moving, the faster we'll need to lay down the path. If we're\n * walking at a slow pace (e.g. at 60 bpm), we have 1 second to look ahead and\n * lay down our next bit of path. If we're running (e.g. at 120 bpm), we have\n * only 0.5 seconds to plan our next step.\n *\n * By using a tiny lookahead (0.00025 of a second), we can theoretically handle\n * up to 4000 bpm given perfect `setTimeout` accuracy. Because `setTimeout` is\n * running in the main thread, it won't be absolutely accurate, as the browser\n * may delay its execution while it's busy with other stuff, but we can still\n * safely handle all practical bpms.\n *\n * ## How it works:\n *\n * The scheduler function slices time into 0.25ms chunks:\n *\n *    | 0.25 | 0.25 | 0.25 | 0.25 | ...\n *\n * `setTimeout` is used to repeatedly call the scheduler roughly every 0.25ms.\n * Accuracy is not important here, just that it's called regularly enough to\n * respond to bpm changes within the next tick.\n *\n * At each tick of the scheduler, we get the current time and look 100ms ahead.\n * This is our scheduling window:\n *\n *    |-- 100ms ----------------|\n *    ^ now\n *\n * If the next beat is inside the schedule window, its scheduled for playing:\n *\n *    <- past   |-- 100ms --------------------|\n *    ----------|---------------------1---------------|\n *              ^ now                 ^ beat due\n *\n * This advances the beat and starts the process over. If the next beat is\n * outside the schedule window, there's nothing to do and it will be\n * scheduled in a future tick:\n *\n *    <- past    |-- 100ms -------------------|\n *    ---1-------|---------------------------------2---------------|\n *               ^ now                             ^ beat due\n *\n */\nconst scheduler = () => {\n  // How long is a beat at current bpm? e.g. 60/60 = 1s per beat\n  const secondsPerBeat = 60.0 / bpm\n\n  // How far ahead to schedule audio (sec)\n  const lookahead = 0.1\n\n  // console.log('scheduler', nextBeatTime, context.currentTime)\n\n  // Trigger all the beats within the schedule window\n  //\n  // Example:\n  //\n  //  Pass #1\n  //  -------\n  //  nextBeatTime = 0\n  //  context.currentTime = 0\n  //\n  //  0 < 0 + 0.1 => true\n  //    beep(0, 0)\n  //    nextBeatTime = 0 + 1\n  //    beatNumber = 1\n  //\n  //  Pass #2\n  //  -------\n  //  nextBeatTime = 1\n  //  context.currentTime = 0.058...\n  //\n  //  1 < 0.158 => false\n  //    noop\n  //\n  //  ---later---\n  //\n  //  Pass #40\n  //  --------\n  //  nextBeatTime = 1\n  //  context.currentTime = 0.905...\n  //\n  //  1 < 1.005 => true\n  //    beep(1, 1)\n  //    nextBeatTime = 1 + 1\n  //    beatNumber = 2\n  //\n  while (nextBeatTime < context.currentTime + lookahead) {\n    beep(beatNumber, nextBeatTime)\n    nextBeatTime += secondsPerBeat\n    beatNumber += 1\n  }\n\n  // Repeatedly call the scheduler every 0.25ms\n  setTimeout(scheduler, 0.25)\n}\n\nconst beep = (beat, time) => {\n  const beepLength = 0.05 // sec\n\n  const osc = context.createOscillator()\n  osc.connect(context.destination)\n\n  if (beat % 16 === 0) {\n    osc.frequency.value = 880.0 // beat 0 == low pitch\n    console.log('beep:start')\n  } else if (beat % 4 === 0) {\n    osc.frequency.value = 440.0 // quarter notes = medium pitch\n    console.log('beep:bar')\n  } else {\n    osc.frequency.value = 220.0 // other 16th notes = high pitch\n    console.log('beep:beat')\n  }\n\n  osc.start(time)\n  osc.stop(time + beepLength)\n}\n\nplay()\n")))}l.isMDXComponent=!0},178:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||a;return t?o.a.createElement(m,i({ref:n},u,{components:t})):o.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);