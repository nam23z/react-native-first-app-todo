import { useState } from "react";
import { Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import AppHeader from "../header/app.header";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "white"
  },
  headerModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000000",
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 10,
  },
  textHeaderModal: {
    fontSize: 18,
    fontWeight: "600",
  },
  groupInput: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  textBodyModal: {
    flex:0.6,
    fontSize: 18
  },
  inputBodyModal: {
    borderWidth: 1,
    borderColor:"#92d2f9",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    flex: 1,
  }
})

interface ModalPropsCreate {
  modalVisibleCreate: boolean,
  setModalVisibleCreate: (visible: boolean) => void,
  addNew: any;
  // other props...
}


const CreateModal = (props: ModalPropsCreate) => {

  const { modalVisibleCreate, setModalVisibleCreate, addNew } = props;

  const[title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [rating, setRating] = useState("");

  function randomNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleSubmitModal = () => {
    if(!title){
      Alert.alert("Name is required", "Ten khong duoc de trong");
      return;
    }
    if(!content){
      Alert.alert("Profession is required", "Chuyen nganh khong duoc de trong");
      return;
    }
    if(!rating){
      Alert.alert("Rating is required", "Rating khong duoc de trong");
      return;
    }
    addNew({
      id: randomNumber(10,1000),
      title,
      content,
      rating: parseFloat(rating),
    });
    setTitle("");
    setContent("");
    setRating("");
  }

  return (
    <Modal
      animationType="slide"
      presentationStyle="fullScreen"
      transparent={true}
      visible={modalVisibleCreate}
    >
      <View style={styles.centeredView}>
        <AppHeader/>
        {/* header */}

        <View style={styles.headerModal} >
          <Text style={styles.textHeaderModal}>Create new Person</Text>
          <AntDesign name="close" size={24} color="black" onPress={() => {
            setModalVisibleCreate(false)
            setTitle("");
            setContent("");
            setRating("");
            }} />
        </View>

        {/* body */}

        <View>
          <View style={styles.groupInput}>
            <Text style={styles.textBodyModal}>Name:</Text>
            <TextInput value={title} onChangeText={(v)=> setTitle(v)} style={styles.inputBodyModal} placeholder="Enter name" />
          </View>
          <View style={styles.groupInput}>
            <Text style={styles.textBodyModal}>Profession:</Text>
            <TextInput value={content} onChangeText={(v)=> setContent(v)} style={styles.inputBodyModal} placeholder="Enter Profession" />
          </View>
          <View style={styles.groupInput}>
            <Text style={styles.textBodyModal}>Rating:</Text>
            <TextInput value={rating} onChangeText={(v)=> setRating(v)} style={styles.inputBodyModal} keyboardType="numeric" placeholder="Rating" />
          </View>
        </View>
        {/* footer */}
        <View>
          <Button title="Add" 
            onPress={()=> handleSubmitModal()}
          />
        </View>
      </View>
    </Modal>
  )
}
export default CreateModal;