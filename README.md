
# react-animate-contaienr

react-animate-container is a ready-to-use library, cross-browser animations for use in your react projects.


## Installation

Install react-animate-container with npm

```bash
  npm install react-animate-container
```
Install react-animate-container with yarn

```bash
  yarn add react-animate-container
```
    
## Usage/Examples

```javascript
import { AnimateContainer } from 'react-animate-container';

function App() {
  return (
      <AnimateContainer.fadeIn>
        <h2>react-animate-container</h2>
      </AnimateContainer.fadeIn>
  )
}
```


## How does it work:

There are two ways to trigger the animation:

#### Default:
It happens when an element ref is intersected, using an interection observer. 

This element ref by default container itself, but can be changed using the prop `refEl`

#### Manual active:
To trigger manually the animation, the prop `manualActive` should be true.

Then, the animation happens when the prop `active` is true.
## Animations

| Name | Usage     | 
| :-------- | :------- 
| `bounce` | `<AnimateContainer.bounce>`
| `flash` | `<AnimateContainer.flash>`
| `pulse` | `<AnimateContainer.pulse>`
| `rubberBand` | `<AnimateContainer.rubberBand>`
| `shakeX` | `<AnimateContainer.shakeX>`
| `shakeY` | `<AnimateContainer.shakeY>`
| `headShake` | `<AnimateContainer.headShake>`
| `swing` | `<AnimateContainer.swing>`
| `tada` | `<AnimateContainer.tada>`
| `wobble` | `<AnimateContainer.wobble>`
| `jello` | `<AnimateContainer.jello>`
| `heartBeat` | `<AnimateContainer.heartBeat>`
| `backInDown` | `<AnimateContainer.backInDown>`
| `backInLeft` | `<AnimateContainer.backInLeft>`
| `backInRight` | `<AnimateContainer.backInRight>`
| `backInUp` | `<AnimateContainer.backInUp>`
| `backOutDown` | `<AnimateContainer.backOutDown>`
| `backOutLeft` | `<AnimateContainer.backOutLeft>`
| `backOutRight` | `<AnimateContainer.backOutRight>`
| `backOutUp` | `<AnimateContainer.backOutUp>`
| `bounceIn` | `<AnimateContainer.bounceIn>`
| `bounceInDown` | `<AnimateContainer.bounceInDown>`
| `bounceInLeft` | `<AnimateContainer.bounceInLeft>`
| `bounceInRight` | `<AnimateContainer.bounceInRight>`
| `bounceInUp` | `<AnimateContainer.bounceInUp>`
| `bounceOut` | `<AnimateContainer.bounceOut>`
| `bounceOutDown` | `<AnimateContainer.bounceOutDown>`
| `bounceOutLeft` | `<AnimateContainer.bounceOutLeft>`
| `bounceOutRight` | `<AnimateContainer.bounceOutRight>`
| `bounceOutUp` | `<AnimateContainer.bounceOutUp>`
| `fadeIn` | `<AnimateContainer.fadeIn>`
| `fadeInDown` | `<AnimateContainer.fadeInDown>`
| `fadeInLeft` | `<AnimateContainer.fadeInLeft>`
| `fadeInRight` | `<AnimateContainer.fadeInRight>`
| `fadeInUp` | `<AnimateContainer.fadeInUp>`
| `fadeInTopLeft` | `<AnimateContainer.fadeInTopLeft>`
| `fadeInTopRight` | `<AnimateContainer.fadeInTopRight>`
| `fadeInBottomLeft` | `<AnimateContainer.fadeInBottomLeft>`
| `fadeInBottomRight` | `<AnimateContainer.fadeInBottomRight>`
| `fadeOut` | `<AnimateContainer.fadeOut>`
| `fadeOutDown` | `<AnimateContainer.fadeOutDown>`
| `fadeOutLeft` | `<AnimateContainer.fadeOutLeft>`
| `fadeOutRight` | `<AnimateContainer.fadeOutRight>`
| `fadeOutUp` | `<AnimateContainer.fadeOutUp>`
| `fadeOutTopLeft` | `<AnimateContainer.fadeOutTopLeft>`
| `fadeOutTopRight` | `<AnimateContainer.fadeOutTopRight>`
| `fadeOutBottomRight` | `<AnimateContainer.fadeOutBottomRight>`
| `fadeOutBottomLeft` | `<AnimateContainer.fadeOutBottomLeft>`
| `flip` | `<AnimateContainer.flip>`
| `flipInX` | `<AnimateContainer.flipInX>`
| `flipInY` | `<AnimateContainer.flipInY>`
| `flipOutX` | `<AnimateContainer.flipOutX>`
| `flipOutY` | `<AnimateContainer.flipOutY>`

## Props

| Name | Type  | Default | Description
| :-------- | :------- | :------- | :------- 
| `refEl` | `React.RefObject<HTMLDivElement>` | `this` | `(Optional) HTML element target to use for intersection observer`
| `children` | `React.ReactNode` | null | `Html elements to be animated`
| `className` | `string` |  | `(optional) Aditional CSS class for container`
| `beforeAnimationClassName` | `string` |  | `(optional) CSS class used before animation happens`
| `afterAnimationClassName` | `string` |  | `(optional) CSS class used after animation happens`
| `setOpacityNone` | `boolean` | false | `(optional) Set container opacity 0 before animation happens`
| `setOpacityNoneAfter` | `boolean` | false | `(optional) Set container opacity 0 after animation happens`
| `duration` | `number` | 1.1 - 0.75 | `(optional) Animation duration (in seconds)`
| `delay` | `number` | 0 | `(optional) Waiting time to show the animation once the event is called`
| `delayAfter` | `number` | 0 | `(optional - ONLY FOR MANUAL ACTIVE) Waiting time to remove the animation once the event is called`
| `threshold` | `number` | 0.5 | `(optional) Indicates at what percentage of the target's visibility the observer's callback should be executed.`
| `manualActive` | `boolean` | false | `(optional) Indicates the animation should happen when prop active is set to true`
| `active` | `boolean` | false | `(optional - ONLY WORKS WHEN manualActive IS TRUE) Indicates when the animation should happen`
| `iterationCount` | `number | "infinite"` | 1 | `(optional) Indicates how many times the animation should be repeated`
| `getRef` | `(ref: React.RefObject<HTMLDivElement>) => void` | null | `(optional) Returns the ref element once component is mounted`

## Author

- [@joxxe274](https://www.github.com/joxxe274)


## Tech Stack

**Client:** React, Typescript, SCSS


