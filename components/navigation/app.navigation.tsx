import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import About from "../../app/about";
import Details from "../../app/details";
import Home from "../../app/home";
import { useEffect } from 'react';
import AppHeader from '../header/app.header';

const AppLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator >
            <Stack.Screen name="home" component={Home} options={{header: () => <AppHeader/>}} />
            <Stack.Screen name="details" component={Details} options={{header: () => <AppHeader/>}} />
            <Stack.Screen name="about" component={About} options={{title: "About"}} />
        </Stack.Navigator>
    )
};

const AppNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={AppLayout} options={{title: "Home", header: ()=> <></>}} />
            <Drawer.Screen name="about" component={About} options={{title: "About", header: () => <AppHeader/>}} />
        </Drawer.Navigator>
    )
};

export default AppNavigation;