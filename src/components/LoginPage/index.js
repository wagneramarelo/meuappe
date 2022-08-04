import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginPage({navigation}){


  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [input, setInput] = useState('');


  // Funções para criar um usuário
  async function createUser(){
      await createUserWithEmailAndPassword(auth, email, input)
      .then(value=>{console.log('Cadastrado com sucesso \n' + value.user.uid)
    })
    .catch(error => console.log(error));
    };

      // Funções para autenticar o usuário
    async function login(){
      await signInWithEmailAndPassword (auth, email, input)
      .then(value=>{console.log('Fez login com sucesso')
      navigation.reset({
        index: 0,
        routes: [{name:'Home'}]
      })
    })
    .catch(error => console.log(error));
    };
  
return(
       <KeyboardAvoidingView style={styles.background}>
          <View>
            <Image style={styles.containerLogo}
            source={require('../Images/logo_meuape_sborda.png')}
            />
          </View>
          <View
            >
            <Text style={styles.registerText}>Acesse sua conta</Text>
          </View>
          <View style={styles.container}>
              <TextInput
                  style={styles.inputEmail}
                  placeholder="Email"
                  autoCorrect={false}
                  value={email}
                  onChangeText={value=> setEmail(value)}
              />
              <View style={styles.passArea}>
                  <TextInput
                      style={styles.inputPass}
                      placeholder="Senha"
                      autoCorrect={false}
                      onChangeText={value=> setInput(value)}
                      value={input}
                      secureTextEntry = {hidePass}
                  />
                  <TouchableOpacity style={styles.icon} onPress={() => setHidePass (!hidePass)}>
                    {hidePass ?
                      <Ionicons name='eye' color='#3c435c' size={25} />
                      :
                      <Ionicons name='eye-off' color='#3c435c' size={25} />
                  }
                  </TouchableOpacity>
              </View>

            <TouchableOpacity style={styles.btnSubmit}
              onPress={() => login()}
              
                >
              <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister}
            onPress={() => createUser()}
              >
              <Text style={styles.registerText}>Criar Conta</Text>
            </TouchableOpacity>

            
          </View>
      </KeyboardAvoidingView>
      )}



      const styles = StyleSheet.create({
          background:{
          //flex:1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff'
          },
          containerLogo:{
              marginTop: 100,
              marginBottom: 40,
              alignItems: 'center',
              justifyContent: 'center',
          },
          container:{
              //flex:1,
              alignItems: 'center',
              justifyContent: 'center',
              width: '90%',
              paddingBottom: 10
          },
          passArea:{
              flexDirection: 'row',
              backgroundColor: '#fff',
              width: '90%',
              marginBottom: 5,
              fontSize: 17,
              borderRadius: 7,
              borderColor: '#3c435c',
              borderWidth: 1
          },
          inputPass:{
              width: '85%',
              height: 50,
              fontSize: 17,
              padding: 8,
          },
          icon: {
              width: '15%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
          },
          inputEmail: {
              backgroundColor: '#fff',
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
              borderRadius: 7
          },
          submitText:{
              color: '#FFF',
              fontSize: 18
          },
          btnRegister:{
              marginTop: 10,
          },
          registerText:{
              color: "#3c435c",
              fontSize: 18
          },
      })