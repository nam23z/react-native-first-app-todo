import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";


interface ModalPropsDel {
    modalVisibleDel: boolean,
    setModalVisibleDel: (visible: boolean) => void,
    deleteItem: any;
    getId: any;
    // other props...
  }
const DeleteModal = (props: ModalPropsDel) => {
    const { modalVisibleDel, setModalVisibleDel, deleteItem, getId } = props;

    const id = getId();
    const handleSubmittedModalDel = ()=>{
        deleteItem(id);
    }
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleDel}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleDel(!modalVisibleDel);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want delete?</Text>
            <View style={styles.modalFooter}>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisibleDel(!modalVisibleDel)}>
                <Text style={styles.textStyle}>CANCEL</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => handleSubmittedModalDel()}>
                <Text style={styles.textStyle}>OK</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    )
};
const styles = StyleSheet.create({
    modalFooter:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default DeleteModal;