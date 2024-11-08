import { useEffect, useRef } from "react"
import { StyleSheet, Animated, TouchableOpacity, Text, View } from "react-native"
import Material from 'react-native-vector-icons/FontAwesome'
import Colors from "./Colors"


export default ({ item, accessibilityState, onPress }) => {
  const animatedValues = {
    translate: useRef(new Animated.Value(0)).current,
    scale: useRef(new Animated.Value(0)).current,
  }

  const { translate, scale } = animatedValues

  useEffect(() => {
    handleAnimated()
  }, [accessibilityState.selected])

  const handleAnimated = () => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 400,
        useNativeDriver: false
      }),
      Animated.timing(scale, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 250,
        useNativeDriver: false
      })
    ]).start()
  }

  const translateStyles = {
    transform: [
      {
        translateY: translate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
          extrapolate: 'clamp'
        })
      }
    ]
  }

  const scaleStyles = {
    opacity: scale.interpolate({
      inputRange: [.5, 1],
      outputRange: [.5, 1],
      extrapolate: 'clamp'
    }),
    transform: [
      {
        scale: scale
      }
    ]
  }
  return (
    <TouchableOpacity
      style={styles.contMain}
      onPress={onPress}
    >
      <Animated.View
        style={[styles.contButton, translateStyles]}>
        <Animated.View
          style={[{ width: 50, height: 50, borderRadius: 100, position: 'absolute', backgroundColor: Colors.background },
            scaleStyles]} />
        <Material
          name={item.icon} color={accessibilityState.selected ? Colors.title : Colors.background} size={22} />
      </Animated.View>
      <Animated.Text style={[styles.contTitle, { opacity: scale }]}>{item.title}</Animated.Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  contMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    alignSelf: 'stretch',
  },
  contButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  contTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.background,
    position: 'absolute',
    bottom: 20,
  },
})



