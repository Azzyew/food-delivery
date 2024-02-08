import { ActivityIndicator, View } from "react-native";

export const Loading = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <ActivityIndicator color="white" />
    </View>
  );
}
