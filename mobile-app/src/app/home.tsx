import { View, Text, Alert } from 'react-native';
import { api } from "@/services/api"
import { useEffect } from 'react';

export default function Home() {
  // const [categories, setCategories] = useState<CategoriesProps>([])
  // const [category, setCategory] = useState("")

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")
      console.log({data})
      // setCategories(data)
      // setCategory(data[0].id)
    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}