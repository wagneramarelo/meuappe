import React, { useState } from 'react'
import { Alert, Image, Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {sendPasswordResetEmail,} from "firebase/auth"
import { auth } from '../../services/firebase';

export default function ForgotPassword({navigation}){

  const [emailPassResend, setEmail] = useState('');

  const forgotPassword = () => {
      sendPasswordResetEmail(auth, emailPassResend, null)
          .then(() => {
              Alert.alert('Corre lá! :)', 'Um email foi enviado para ' + emailPassResend);
              console.log("Um email foi enviado para " + emailPassResend);
              navigation.navigate('Login')

          })
          .catch(function (e) {
              console.log(e);
              Alert.alert('Usuário não encontrado', 'Verifique o email digitado ou crie uma nova conta.', [
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'Criar conta', onPress: () => {
                  console.log('Criar conta pressionado');
                  navigation.navigate('Cadastro')}
                },
              ]);
          });
  };

    return (
      <View style={styles.background}>
          <View>
            <Image style={styles.Logo}
            source={require('../Images/Logo_meuappe.png')}
            />
          </View>
        <Text style={styles.pageTitle}>Esqueceu sua senha?</Text>
        <TextInput
                  style={styles.inputEmail}
                  placeholder="@email.com"
                  autoCorrect={false}
                  keyboardType="email-address"
                  value={emailPassResend}
                  onChangeText={value=> setEmail(value)}
                  //errorMessage={errorEmail}
              />
            <TouchableOpacity style={styles.btnSubmit}
              onPress={() => forgotPassword()}
              
                >
              <Text style={styles.submitText}>Reenviar senha</Text>
            </TouchableOpacity>
        </View>
    )
  }


const styles = StyleSheet.create({
  background:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5F5'
},
  Logo:{
    alignItems: 'flex-start',
   justifyContent: 'flex-start',
 },
  inputEmail: {
    backgroundColor: '#B9BAC0',
    color: '#3c435c',
    width: '90%',
    marginBottom: 5 ,
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    borderBottomColor: '#3c435c',
    borderWidth: 1
},
btnSubmit:{
  backgroundColor: '#3c435c',
  width: '90%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7,
  marginTop: 12
},
submitText:{
  color: '#F5F5F5',
  fontSize: 18
},
pageTitle:{
  color: '#3c435c',
  fontSize: 18,
  marginBottom: 5
},
})



