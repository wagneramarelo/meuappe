import React from 'react';
import Home from './src/components/Home/home';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/components/LoginProcess/LoginPage';
import Cadastro from './src/components/Users/newUser';
import ForgotPassword from './src/components/LoginProcess/ForgotPassword';
import Welcome from './src/components/LoginProcess/Welcome';
import NewAppe from './src/components/NewCondominium/NewAppe';
import KnowMore from './src/components/LoginProcess/KnowMore';
import AdminSettings from './src/components/AdminSettings/AdminSettinngs';
import Spaces from './src/components/Spaces/AddSpaces'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginPage} />
      <Stack.Screen options={{headerShown: false}} name="NewAppe" component={NewAppe} />
      <Stack.Screen options={{headerShown: false}} name="KnowMore" component={KnowMore} />
      <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome}/>
      <Stack.Screen options={{headerShown: false}} name="AdminSettings" component={AdminSettings}/>
      <Stack.Screen options={{headerShown: false}} name="Spaces" component={Spaces}/>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Esqueci minha senha" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
      
export default function App() {
  
  return (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
}

