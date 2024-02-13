import { Slot } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter';
import { Loading } from "@/components/loading";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Default() {
  const queryClient = new QueryClient();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className="flex-1 bg-slate-900">
        <Slot />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
