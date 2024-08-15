import { useNavigation, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from 'react-native';
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import avt1 from '../assets/images/avt/9384699.png';

export default function Details() {
  const router = useRouter();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const route: RouteProp<RootStackParamList, 'details'> = useRoute();

  return (
    // <ImageBackground source={require("../assets/images/adaptive-icon.png")}
    //  style={{flex: 1}}
    //  >
    <View style={styles.container}>
      <View style={styles.row1}>
        <AntDesign name="left" size={24} color="black" onPress={() => navigation.navigate("home")} />
        <Text style={[styles.row1Text]}>Details Screen</Text>
      </View>
      <View style={styles.ctnDetails}>
        <View>
          <Text style={styles.textDetails}>Name: {route.params?.title}</Text>
          <Text style={styles.textDetails}>Profession: {route.params?.content}</Text>
          <View style={styles.ratingsExpo}>
            <Text style={styles.textDetails}>
              Rating:
            </Text>
            <FontAwesome name="star" size={24} color="#ffe234" />
            <FontAwesome name="star" size={24} color="#ffe234" />
            <FontAwesome name="star" size={24} color="#ffe234" />
            <FontAwesome name="star" size={24} color="#ffe234" />
            <FontAwesome name="star" size={24} color="#ffe234" />
          </View>
        </View>
        <View>
          <Image source={avt1} style={styles.avtDetails} />
        </View>
      </View>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  ctnDetails: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    gap: 14
  },
  ratingsExpo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    gap: 10
  },
  row1Text: {
    fontWeight: '500',
    color: 'black',
    fontSize: 20,
    flex: 1,
    textAlign: 'left'
  },
  avtDetails: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginHorizontal: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  textDetails: {
    fontSize: 20,
  }
});
