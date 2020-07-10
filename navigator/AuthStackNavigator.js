import React from 'react';
import {LoginScreen} from '../screens/LoginScreen'
import {RegistrationScreen} from "../screens/RegistrationScreen";
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
          <AuthStack.Navigator screenOptions={{
              headerShown:false,
          }}>
              <AuthStack.Screen name={'Login'} component={LoginScreen}/>
              <AuthStack.Screen name={'Registration'} component={RegistrationScreen}/>
          </AuthStack.Navigator>
      )
}

