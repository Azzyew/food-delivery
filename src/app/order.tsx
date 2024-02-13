import { ActivityIndicator, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import { Header } from "@/components/header";
import { useOrderQuery } from "@/queries/order";
import colors from "tailwindcss/colors";

export default function Order() {
  const { id } = useLocalSearchParams();
  const { data, isLoading } = useOrderQuery(); 

  const PROVIDER_GOOGLE = "google";

  return (
    <View className="flex-1 pt-12">
      <Header title={`Número do seu pedido: ${id}`} />

      <View className="p-5 flex-1">
        {isLoading || !data
          ?
            <ActivityIndicator className="flex-1" size="large" color={colors.lime[400]} />
          :
          <MapView
            className="flex-1"
            region={{
              latitude: data.rest_coord.lat,
              longitude: data.rest_coord.lon,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05
            }}
            provider={PROVIDER_GOOGLE}
          >
            <Marker
              title="Restaurante"
              coordinate={{ latitude: data.rest_coord.lat, longitude: data.rest_coord.lon }}
					  >
              <Callout>
                <View style={{ padding: 10 }}>
                  <Text className="text-slate-900">Restaurante</Text>
                </View>
              </Callout>
            </Marker>
            <Marker
              title="Endereço de entrega"
              coordinate={{ latitude: data.order_coord.lat, longitude: data.order_coord.lon }}
					  />
            <Polyline
              coordinates={[
                { latitude: data.rest_coord.lat, longitude: data.rest_coord.lon },
                { latitude: data.order_coord.lat, longitude: data.order_coord.lon },
              ]}
              strokeWidth={3}
            />
          </MapView>
        }
        
      </View>
    </View>
  );
}