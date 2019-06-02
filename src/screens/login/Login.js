import React from 'react'
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import { Button } from '../../components/buttons'
import useAnimated from '../../hooks/useAnimated'

const { width: w, height: h } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  titleContainer: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    height: h * 0.5,
    width: w * 0.6,
  },
  textWrapper: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  startContainer: {
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  startText: {
    color: 'white',
    fontSize: 20,
  },
})

function TransitionalText({ text, delay = 500 }) {
  const [ firstLetter, ...rest ] = text

  const anim = useAnimated({ delay })

  const left = anim.interpolate({
    inputRange: [ 0, 1 ],
    outputRange: [ -20, 0 ],
  })

  return (
    <View style={styles.textWrapper}>
      <Text style={styles.text} allowFontScaling={false}>
        {firstLetter}
      </Text>
      <Animated.Text
        style={[ styles.text, { opacity: anim, left } ]}
        allowFontScaling={false}
      >
        {rest.join('')}
      </Animated.Text>
    </View>
  )
}

function StartButton() {
  const anim = useAnimated({ delay: 2000 })

  return (
    <Animated.View style={[ styles.startContainer, { opacity: anim } ]}>
      <Button styles={styles.startText} text="Start" onPress={() => {}} />
    </Animated.View>
  )
}

function Unofficial() {
  return <Text style={[ styles.text, { fontSize: 14 } ]}>Unofficial</Text>
}

const MemoTransitionalText = React.memo(TransitionalText)
const MemoStartButton = React.memo(StartButton)
const MemoUnofficial = React.memo(Unofficial)

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MemoUnofficial />
        <MemoTransitionalText text="Cards" />
        <MemoTransitionalText text="Against" delay={800} />
        <MemoTransitionalText text="Humanity" delay={1000} />
      </View>
      <MemoStartButton />
    </View>
  )
}

export default React.memo(Login)
