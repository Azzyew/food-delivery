import { useState, useRef } from 'react';
import { View, FlatList, SectionList, Text } from 'react-native';
import { Link } from 'expo-router';
import { CategoryButton } from '@/components/categoryButton';
import { Header } from '@/components/header';
import { Product } from '@/components/product';
import { useCartStore } from '@/stores/cartStore';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { ProductType } from '@/types/product';
import { useCategoryQuery } from '@/queries/categories';
import { useMenuQuery } from '@/queries/menu';
import { CategoriesSkeleton } from '@/components/categories.skeleton';
import { MenuSkeleton } from '@/components/menu.skeleton';

export default function Home() {
  const { data: categoryData, isLoading: isLoadingCategory } = useCategoryQuery();
  const { data, isLoading } = useMenuQuery();
  
  const [selectedCategory, setSelectedCategory] = useState((categoryData ?? [])[0] ?? "");
  const cartStore = useCartStore();

  const sectionListRef = useRef<SectionList<ProductType>>(null);

  const cartQuantityItems = cartStore.products.reduce((total, product) => total +
    product.quantity, 0);

  const handleCategorySelect = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);

    const sectionIndex = categoryData ? categoryData.findIndex((category) => category === selectedCategory) : 0;

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

      {isLoadingCategory
        ?
          <CategoriesSkeleton />
        :
          <FlatList 
            data={categoryData}
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
      }

      {isLoading || !data
        ?
          <MenuSkeleton />
        :
          <SectionList
            ref={sectionListRef}
            sections={data}
            keyExtractor={(item) => item.id}
            stickySectionHeadersEnabled={false}
            renderItem={({ item, index }) => (
              <Animated.View
                entering={FadeInRight.delay((index + 1) * 50).duration(300).springify()}
              >
                <Link href={`/product/${item.id}`} asChild >
                  <Product data={item} />
                </Link>
              </Animated.View>
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
      }
    </View>
  );
}
