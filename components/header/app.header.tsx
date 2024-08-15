import { Image, StyleSheet, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { GlobalStyles } from "@/constants/font";
import { useNavigation } from "expo-router";
import StarExpo from '../../assets/images/favicon.png';

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        backgroundColor: "white",
        overflow: "hidden",
        shadowColor: "#000000",
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: "center",
        paddingTop: 34,
    },
    hL:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerLogo:{
        width: 30, 
        height: 30
    }
})

const AppHeader = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            <MaterialIcons 
            name="menu" 
            size={34} 
            color="black" 
            onPress={()=>{navigation.openDrawer()}} />
            <View style={styles.hL}>
                <Image source={StarExpo} style={styles.headerLogo} />
            </View>
        </View>
    )
}

export default AppHeader;