import { useState, useRef } from 'react';
import { View, FlatList, SectionList, Text } from 'react-native';
import { Link } from 'expo-router';
import { CategoryButton } from '@/components/categoryButton';
import { Header } from '@/components/header';
import { CATEGORIES, MENU } from '@/utils/data/products';
import { Product } from '@/components/product';
import { useCartStore } from '@/stores/cartStore';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const cartStore = useCartStore();

  const sectionListRef = useRef<SectionList>(null);

  const cartQuantityItems = cartStore.products.reduce((total, product) => total +
    product.quantity, 0);

  const handleCategorySelect = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);

    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory);

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  }

  return (
    <View className="pt-12">
      <Header title="Cardápio" cartQuantityItems={cartQuantityItems} />

      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            onPress={() => handleCategorySelect(item)}
            isSelected={item === selectedCategory}
          />
        )}
        horizontal
        className="h-14 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild >
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title }}) => 
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        }
        className="p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    </View>
  );
}
