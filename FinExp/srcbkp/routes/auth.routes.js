import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Sing from '../pages/Sing';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(

        //para remover o header
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="Singin"
            component={SingIn}
            options={{
                headerShown: false,
            }}/>


            <AuthStack.Screen 
            name="SingUp"
            component={SingUp}
            options={{
                headerStyle:{
                    backgroundColor:'#3b3dbf',
                    borderBottomWidth:1,
                    borderBottomColor:'#00b94a'
                },
                headerTintColor:'#FFF',
                headerTitle:'Voltar'
            }}/> 

            <AuthStack.Screen 
            name="Sing"
            component={Sing}
            options={{
                headerStyle:{
                    backgroundColor:'#3b3dbf',
                    borderBottomWidth:1,
                    borderBottomColor:'#00b94a'
                },
                headerTintColor:'#FFF',
                headerTitle:'Voltar',
                headerBackVisible: false
            }}/> 





        </AuthStack.Navigator>
        

        
    )
}

export default AuthRoutes;