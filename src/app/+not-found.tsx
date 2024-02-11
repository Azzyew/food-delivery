import { Button } from '@/components/button';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  const navigation = useNavigation();

  return (
    <>
      <View className='flex-1 pt-12 justify-center items-center'>
        <Text className='text-white font-heading text-lg'>Oops! 😯</Text>
        <Text className='text-white font-heading text-lg'>Essa tela não existe...</Text>
        
        <View className="p-5 pb-8 gap-5">
          <Button onPress={() => navigation.goBack()} className='p-2'>
            <Button.Text>Voltar para a página inicial</Button.Text>

            <Button.Icon>
              <Feather name="home" size={20} />
            </Button.Icon>
          </Button>
        </View>
      </View>
    </>
  );
}
