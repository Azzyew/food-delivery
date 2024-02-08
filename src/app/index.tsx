import { View, FlatList } from 'react-native';
import { CategoryButton } from '@/components/category-button';
import { Header } from '@/components/header';
import { CATEGORIES } from '@/utils/data/products';
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  return (
    <View className="pt-12">
      <Header title="Cardápio" cartQuantityItems={1} />

      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            onPress={() => setSelectedCategory(item)}
            isSelected={item === selectedCategory}
          />
        )}
        horizontal
        className='max-h-10 mt-5'
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
