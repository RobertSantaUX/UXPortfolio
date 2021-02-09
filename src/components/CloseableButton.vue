<template>
  <label>
    <input v-bind:checked="!closed" type="checkbox" v-on:change="$emit('click')">
    <span class="closeable-btn">
      <span class="unchecked-btn">{{ text }}</span>
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 20 20"
           preserveAspectRatio="none"
           width="29px" height="29px"
           class="checked-btn">
        <path d="M 1,1 L 19,19 M 19,1 L 1,19"
              stroke="#DE0000"
              stroke-width="1px"
              fill="none"
              vector-effect="non-scaling-stroke"
        />
      </svg>
    </span>
  </label>
</template>

<script>
export default {
  name: "CloseableButton",
  props: {
    'text': { type: String },
    'closed': { type: Boolean }
  },
  mounted: function () {
    // if (!document.getElementById('keyframeAnimations')) {
    //   const keyframeAnimations = document.createElement('style');
    //   keyframeAnimations.id = 'keyframeAnimations';
    //   keyframeAnimations.setAttribute('type', 'text/css')
    //   keyframeAnimations.textContent = createKeyframeAnimation();
    //   document.head.appendChild(keyframeAnimations);
    // }
  }
}

// function calculateCollapsedScale () {
//   const collapsed = document
//       .getElementsByClassName('checked-btn')[0]
//       .getBoundingClientRect();
//
//   const expanded = document
//       .getElementsByClassName('unchecked-btn')[0]
//       .getBoundingClientRect();
// console.log(collapsed, expanded)
//   return {
//     x: collapsed.width / expanded.width,
//     y: expanded.height / expanded.height
//   };
// }
//
// function ease (v, pow=1) {
//   return 1 - Math.pow(1 - v, pow);
// }
//
// function createKeyframeAnimation () {
//   let {x, y} = calculateCollapsedScale();
//   let animation = '';
//   let inverseAnimation = '';
//   console.log(x, y)
//   for (let step = 0; step <= 100; step++) {
//     let easedStep = ease(step / 100);
//
//     const xScale = x + (1 - x) * easedStep;
//     const yScale = y + (1 - y) * easedStep;
//
//     animation += `${step}% {
//       transform: scale(${xScale}, ${yScale});
//     }`;
//
//     // const invXScale = 1 / xScale;
//     // const invYScale = 1 / yScale;
//     // inverseAnimation += `${step}% {
//     //   transform: scale(${invXScale}, ${invYScale});
//     // }`;
//
//     inverseAnimation += `${100 - step}% {
//       transform: scale(${xScale}, ${yScale});
//       display: none;
//     }`;
//   }
//
//   return `
//   @keyframes menuAnimation {
//     ${animation}
//   }
//
//   @keyframes menuContentsAnimation {
//     ${inverseAnimation}
//   }`;
// }
</script>

<style scoped>
label {
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 24px;
  line-height: 35px;
}

input {
  position: absolute;
  visibility: hidden;
}

.closeable-btn {
  width: auto;
  display: flex;
  background-color: #4B006E;
  color: #E6E6E6;
  box-shadow: 0 0 7px #00000091;
  border: 1px solid transparent;
  border-radius: 10px;
  outline: 0;
  padding: 0.4em 0.3em;
  overflow: hidden;
  /*transform: scaleX(1);*/
  transition: background-color 200ms ease-in-out, border 200ms ease-in-out;

  /*
  animation-name: open;
  animation-duration: 1s;
  animation-direction: backwards;
  animation-fill-mode: forwards;
  white-space: nowrap;*/
/*
  animation-name: menuAnimation;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;*/
}

.unchecked-btn {
  overflow: hidden;
  width: 100%;
  flex-grow: 1;
  transition: flex-grow 0.5s;
/*
  animation-name: menuAnimation;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  */
}

.closeable-btn:hover
/*.unchecked-button:hover*/ {
  background-color: #2A2A2A;
  border: 1px solid #FFFFFF;
}

input:checked ~ .closeable-btn
/*.checked-button*/ {
  background-color: transparent;
  border: 1px solid #2A2A2A;
  border-radius: 2em;
  padding: 0.4em;
/*
  animation-name: close;
  animation-duration: 1s;
  animation-direction: normal;
  overflow: hidden;
  white-space: nowrap;
  */

  /*
  transform: scaleX(1);*/
/*
  transition: background-color 200ms ease-in-out 0ms, border 200ms ease-in-out 0ms;*/
/*
  animation-name: menuContentsAnimation;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;*/
}

input:checked ~ .closeable-btn:hover
/*.checked-button:hover*/ {
  background-color: #2A2A2A;
}

.checked-btn {
  margin: 3px;
}

.unchecked-btn,
input:checked ~ .closeable-btn .checked-btn {
  display: block;
  transition: max-width 200ms ease-in-out;
}

.checked-btn,
input:checked ~ .closeable-btn .unchecked-btn {
  display: none;
}
/*
input:checked ~ .unchecked-button {
  animation-name: menuContentsAnimation;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
*/

@keyframes open {
  0% { max-width: 2em }
  100% { max-width: 100% }
}
@keyframes close {
  0% { max-width: 100% }
  100% { max-width: 2em }
}

</style>
