import { View } from "react-native"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export const CategoriesSkeleton = () => {
  const opacity = useSharedValue(.5);

  opacity.value = withRepeat(
    withTiming(1, { duration: 1200, easing: Easing.ease }),
    -1,
    true
  );

  const style = useAnimatedStyle(() => ({ opacity: opacity.value }), []);

  return (
    <Animated.View style={style} className="flex-row h-14 mt-5 px-5">
      <View className="bg-slate-700 rounded-md h-10 w-24 mr-3" />
      <View className="bg-slate-700 rounded-md h-10 w-24 mr-3" />
      <View className="bg-slate-700 rounded-md h-10 w-24 mr-3" />
      <View className="bg-slate-700 rounded-md h-10 w-24" />
    </Animated.View>
  )
}
