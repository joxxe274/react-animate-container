import React from 'react';

import styles from './styles/style.module.scss';
import { AnimateContainerOpject, AnimationType, AnimationProps, AnimationFunction } from './interfaces/animations';
import { useIntersected } from './hooks/intersected';
import { slowAnimations } from './const/consts';

const CreateAnimateComponent = (type: string) => {
  const Component: React.FC<AnimationProps> = ({
    refEl,
    children,
    className = [''],
    duration = slowAnimations.includes(type) ? 1.1 : 0.75,
    delay = 0,
    delayAfter = 0,
    threshold = 0.5,
    beforeAnimationClassName = '',
    afterAnimationClassName = '',
    setOpacityNone = false,
    setOpacityNoneAfter = false,
    manualActive = false,
    active = false,
    iterationCount = 1,
    getRef,
  }) => {
    const thisRef = React.useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLInputElement>;
    const [isIntersected] = useIntersected({
      ref: (refEl as React.MutableRefObject<HTMLInputElement>) || thisRef,
      threshold,
    });
    const [showAnimation, setShowAnimation] = React.useState(false);
    const [showAfterClasses, setShowAfterClasses] = React.useState(false);
    const containerClasses = [
      styles['animate-container'],
      setOpacityNone && !showAnimation ? styles['animate-container__opacity-none'] : '',
      showAnimation ? styles[`animate-container__${type}`] : beforeAnimationClassName,
      showAfterClasses ? afterAnimationClassName : '',
      setOpacityNoneAfter && showAfterClasses ? styles['animate-container__opacity-none'] : '',
      className,
    ].join(' ');

    React.useEffect(() => {
      if (isIntersected && !manualActive) {
        setTimeout(() => {
          setShowAnimation(true);
        }, delay);
      }
    }, [delay, isIntersected, manualActive]);

    React.useEffect(() => {
      if (manualActive) {
        if (active) {
          setTimeout(() => setShowAnimation(true), delay);
        } else {
          setTimeout(() => setShowAnimation(false), delayAfter);
        }
      }
    }, [active, manualActive, delay, delayAfter]);

    React.useEffect(() => {
      if (getRef) {
        getRef(thisRef);
      }
    }, [thisRef, getRef]);

    React.useEffect(() => {
      if (showAnimation) {
        setTimeout(() => {
          setShowAfterClasses(true);
        }, duration * 1000);
      }
    }, [showAnimation, duration]);

    return (
      <div
        style={{
          animationDuration: `${duration}s`,
          animationIterationCount: iterationCount,
        }}
        ref={thisRef}
        className={containerClasses}
      >
        {children}
      </div>
    );
  };

  return Component;
};

const components = {} as AnimateContainerOpject;

Object.keys(AnimationType).forEach((key) => {
  const name = key as AnimationType;
  components[name] = CreateAnimateComponent(key) as AnimationFunction;
});

export const AnimateContainer: AnimateContainerOpject = components;
