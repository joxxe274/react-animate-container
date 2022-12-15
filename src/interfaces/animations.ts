export enum AnimationType {
  bounce = 'bounce',
  flash = 'flash',
  pulse = 'pulse',
  rubberBand = 'rubberBand',
  shakeX = 'shakeX',
  shakeY = 'shakeY',
  headShake = 'headShake',
  swing = 'swing',
  tada = 'tada',
  wobble = 'wobble',
  jello = 'jello',
  heartBeat = 'heartBeat',
  backInDown = 'backInDown',
  backInLeft = 'backInLeft',
  backInRight = 'backInRight',
  backInUp = 'backInUp',
  backOutDown = 'backOutDown',
  backOutLeft = 'backOutLeft',
  backOutRight = 'backOutRight',
  backOutUp = 'backOutUp',
  bounceIn = 'bounceIn',
  bounceInDown = 'bounceInDown',
  bounceInLeft = 'bounceInLeft',
  bounceInRight = 'bounceInRight',
  bounceInUp = 'bounceInUp',
  bounceOut = 'bounceOut',
  bounceOutDown = 'bounceOutDown',
  bounceOutLeft = 'bounceOutLeft',
  bounceOutRight = 'bounceOutRight',
  bounceOutUp = 'bounceOutUp',
  fadeIn = 'fadeIn',
  fadeInDown = 'fadeInDown',
  fadeInLeft = 'fadeInLeft',
  fadeInRight = 'fadeInRight',
  fadeInUp = 'fadeInUp',
  fadeInTopLeft = 'fadeInTopLeft',
  fadeInTopRight = 'fadeInTopRight',
  fadeInBottomLeft = 'fadeInBottomLeft',
  fadeInBottomRight = 'fadeInBottomRight',
  fadeOut = 'fadeOut',
  fadeOutDown = 'fadeOutDown',
  fadeOutLeft = 'fadeOutLeft',
  fadeOutRight = 'fadeOutRight',
  fadeOutUp = 'fadeOutUp',
  fadeOutTopLeft = 'fadeOutTopLeft',
  fadeOutTopRight = 'fadeOutTopRight',
  fadeOutBottomRight = 'fadeOutBottomRight',
  fadeOutBottomLeft = 'fadeOutBottomLeft',
  flip = 'flip',
  flipInX = 'flipInX',
  flipInY = 'flipInY',
  flipOutX = 'flipOutX',
  flipOutY = 'flipOutY',
}

export interface AnimationProps {
  refEl?: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
  className?: string;
  beforeAnimationClassName?: string;
  duration?: number;
  delay?: number;
  delayAfter?: number;
  threshold?: number;
  afterAnimationClassName?: string;
  setOpacityNone?: boolean;
  setOpacityNoneAfter?: boolean;
  manualActive?: boolean;
  active?: boolean;
  iterationCount?: number | 'infinite';
  getRef?: (ref: React.RefObject<HTMLDivElement>) => void;
}

export type AnimationFunction = (props: AnimationProps) => React.ReactElement;

export type AnimateContainerOpject = {
  [key in AnimationType]: AnimationFunction;
};
