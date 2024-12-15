import { Button } from '@/components/Button';
import { Steps } from '@/components/Steps';
import { Welcome } from '@/components/Welcome';
import { View } from 'react-native';
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}