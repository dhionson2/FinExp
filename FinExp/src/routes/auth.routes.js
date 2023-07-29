import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="Singin"
            component={SingIn}/>


        <AuthStack.Screen 
            name="SingUp"
            component={SingUp}/>    
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;