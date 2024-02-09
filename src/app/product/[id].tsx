import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation, Redirect } from "expo-router"
import { Feather } from "@expo/vector-icons";
import { useCartStore } from "@/stores/cartStore";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/formatCurrency";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/linkButton";

export default function Product() {
  const { id } = useLocalSearchParams();
  const cartStore = useCartStore();
  const navigation = useNavigation();

  const product = PRODUCTS.find((item) => item.id === id);
  
  if (!product) {
    return <Redirect href="/" />
  }

  const handleAddToCart = () => {
    cartStore.add(product);
    navigation.goBack();
  };

  return (
    <View className="flex-1 mt-12">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-3 flex-1 justify-between">

        <View>  
          <Text className="text-white text-xl font-heading">
            {product.title}
          </Text>
          <Text className="text-lime-400 text-2xl font-heading my-2">
            {formatCurrency(product.price)}
          </Text>

          <Text className="text-slate-400 font-body text-base leading-6 mb-6">
            {product.description}
          </Text>

          {product.ingredients.map((ingredient) => (
            <Text
              key={ingredient}
              className="text-slate-400 font-body text-base leading-6"
            >
              {"\u2022"} {ingredient}
            </Text>
          ))}
        </View>

        <View className="p-5 pb-8 gap-5">
          <Button onPress={handleAddToCart}>
            <Button.Text>Adicionar ao pedido</Button.Text>

            <Button.Icon>
              <Feather name="plus-circle" size={20} />
            </Button.Icon>
          </Button>

          <LinkButton title="Voltar ao cardápio" href="/" />
        </View>
      </View>
    </View>
  )
}