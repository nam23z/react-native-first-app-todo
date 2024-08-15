import { useState } from "react";
import { Text, View, StyleSheet, Pressable, FlatList, Button, TextInput } from "react-native";
import { useNavigation } from 'expo-router';
import { GlobalStyles } from "@/constants/font";
import { NavigationProp } from "@react-navigation/native";
import CreateModal from "@/components/modal/create.modal";
import Feather from '@expo/vector-icons/Feather';
import DeleteModal from "@/components/modal/delete.modal";
import filter from 'lodash.filter';

interface IReview {
  id: number;
  title: string;
  content: string;
  rating: number;
};
export default function Home() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = useState<IReview[]>([
    { id: 1, title: 'Nam', content: 'Developer', rating: 5 },
    { id: 2, title: 'Cla', content: 'MMO', rating: 5 },
    { id: 3, title: 'John', content: 'Game', rating: 4 },
    { id: 4, title: 'Alice', content: 'Card Game', rating: 3 },
    { id: 5, title: 'Bob', content: 'Board Game', rating: 4 },
    { id: 6, title: 'Eve', content: 'Strategy Game', rating: 5 },
    { id: 7, title: 'Tom', content: 'Racing Game', rating: 4 },
    { id: 8, title: 'Emily', content: 'Platformer', rating: 3 },
    { id: 9, title: 'Michael', content: 'Adventure Game', rating: 4 },
  ]);

  const [modalVisibleCreate, setModalVisibleCreate] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // cach 1
  // const handleFilter = (searchTerm: string) => {
  //   setReviews(
  //     reviews.filter((review)=>{
  //     review.title.toLowerCase().includes(searchTerm.toLowerCase());
  //   }))
  // }

  //cach2
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(reviews, (item)=>{
      return contains(item, formattedQuery)
    });
    setReviews(filteredData);
  }
  const contains = (item: IReview, query: string) => {
    const title = item.title;
    const content = item.content;

    if(title.includes(query) || content.includes(query)){
      return true;
    }
    return false;
  }

  
  const addNew = (item: IReview) => {
    setReviews([...reviews, item]);
    setModalVisibleCreate(false);
  }
  const deleteItem = (id: number) => {
    const newRev = reviews.filter(item => item.id !== id);
    setReviews(newRev);
    // setModalVisibleDel(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Text style={[styles.h1, GlobalStyles.globalFontFamily]}>Review List:</Text>
        <TextInput 
        placeholder="Search" 
        clearButtonMode="always" 
        style={styles.searchBox} 
        autoCapitalize="none"
        autoCorrect={false} 
        onChangeText={(query) => handleSearch(query)}
        />
        <Feather name="plus-square" size={24} color="black" onPress={() => setModalVisibleCreate(true)} />
      </View>
      {/* <Button title="add" onPress={()=> setModalVisible(true)} /> */}
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <View style={styles.list}>
                <Pressable style={styles.mainItem} android_ripple={{color:"grey", borderless:true}} onPress={() => navigation.navigate("details", item)}>
                  <Text style={styles.name} >{item.title}</Text>
                  <Text>{item.content}</Text>
                </Pressable>
                <Feather onPress={() => deleteItem(item.id)} name="trash-2" size={24} color="black" />
              </View>
            )
          }}
        />
      </View>
      <View>
      </View>
      <CreateModal
        modalVisibleCreate={modalVisibleCreate}
        setModalVisibleCreate={setModalVisibleCreate}
        addNew={addNew}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainItem: {
    flex: 1,
  },
  h1: {
    fontSize: 20,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    backgroundColor: "#ccc",
    margin: 15,
    elevation: 5
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  searchBox:{
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  }
});