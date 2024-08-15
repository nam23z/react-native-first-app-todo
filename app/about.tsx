import { useNavigation, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function About() {
  const router = useRouter();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const route: RouteProp<RootStackParamList, 'about'> = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.ctnDetails}>
        <AntDesign name="left" size={24} color="black" onPress={() => navigation.navigate("home")} />
        <Text style={[styles.row1Text]}>About Screen</Text>
      </View>
      <View style={styles.content} >
        <Text>
          Content Place
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  ctnDetails: {
    padding: 15,
    flexDirection: 'row',
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
  content:{
    padding: 15,
    backgroundColor: '#f2f2f2'
  }
});
