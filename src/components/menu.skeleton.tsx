import { View } from "react-native"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export const MenuSkeleton = () => {
  const opacity = useSharedValue(.5);

  opacity.value = withRepeat(
    withTiming(1, { duration: 1200, easing: Easing.ease }),
    -1,
    true
  );

  const style = useAnimatedStyle(() => ({ opacity: opacity.value }), []);

  return (
    <Animated.View style={style} className="mt-5 p-5">
      <View className="bg-slate-700 rounded-md h-7 w-36 mt-8 mb-4" />

      <View className="w-full flex-row items-center pb-4">
        <View className="bg-slate-700 w-20 h-20 rounded-md" />

        <View className="flex-1 ml-3">
          <View className="bg-slate-700 h-6 w-24 rounded-md" />
          <View className="bg-slate-700 h-12 w-48 mt-2 rounded-md" />
        </View>
      </View>

      <View className="w-full flex-row items-center pb-4">
        <View className="bg-slate-700 w-20 h-20 rounded-md" />

        <View className="flex-1 ml-3">
          <View className="bg-slate-700 h-6 w-24 rounded-md" />
          <View className="bg-slate-700 h-12 w-48 mt-2 rounded-md" />
        </View>
      </View>

      <View className="w-full flex-row items-center pb-4">
        <View className="bg-slate-700 w-20 h-20 rounded-md" />

        <View className="flex-1 ml-3">
          <View className="bg-slate-700 h-6 w-24 rounded-md" />
          <View className="bg-slate-700 h-12 w-48 mt-2 rounded-md" />
        </View>
      </View>

      <View className="bg-slate-700 rounded-md h-7 w-36 mt-8 mb-4" />

      <View className="w-full flex-row items-center pb-4">
        <View className="bg-slate-700 w-20 h-20 rounded-md" />

        <View className="flex-1 ml-3">
          <View className="bg-slate-700 h-6 w-24 rounded-md" />
          <View className="bg-slate-700 h-12 w-48 mt-2 rounded-md" />
        </View>
      </View>

      <View className="w-full flex-row items-center pb-4">
        <View className="bg-slate-700 w-20 h-20 rounded-md" />

        <View className="flex-1 ml-3">
          <View className="bg-slate-700 h-6 w-24 rounded-md" />
          <View className="bg-slate-700 h-12 w-48 mt-2 rounded-md" />
        </View>
      </View>

      <View className="w-full flex-row items-center pb-4">
        <View className="bg-slate-700 w-20 h-20 rounded-md" />

        <View className="flex-1 ml-3">
          <View className="bg-slate-700 h-6 w-24 rounded-md" />
          <View className="bg-slate-700 h-12 w-48 mt-2 rounded-md" />
        </View>
      </View>
    </Animated.View>
  )
}
