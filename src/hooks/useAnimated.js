import { useRef, useState, useCallback, useEffect } from 'react'
import { Animated, Easing } from 'react-native'

const defaults = {
  value: 0,
  toValue: 1,
  delay: 500,
  easing: Easing.inOut(Easing.cubic),
  onAnimationEnd() {},
}

export default function useAnimated(vals = {}) {
  vals = { ...defaults, ...vals }

  const { value, toValue, delay, easing, onAnimationEnd } = vals

  const [ anim ] = useState(new Animated.Value(value))
  // const anim = useRef(new Animated.Value(value)).current

  const triggerAnimation = useCallback(() => {
    Animated.timing(anim, {
      toValue,
      delay,
      easing,
    }).start(onAnimationEnd)
  }, [])

  useEffect(() => {
    triggerAnimation()
  }, [])

  return anim
}
