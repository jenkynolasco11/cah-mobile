import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    minWidth: 60,
  },
  text: {
    fontSize: 20,
  },
})

function Button({ text, onPress, styles }) {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
      <View style={styles.container}>
        <Text style={[ styles.text, styles ]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  styles: PropTypes.object,
}

Button.defaultProps = {
  onPress() {},
  text: 'Press Me',
  styles: {},
}

export default React.memo(Button)
