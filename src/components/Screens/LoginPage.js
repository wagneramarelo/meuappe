import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../services/firebase';

export default function LoginPage({navigation}){

  const goToForgotPassword = () => {
    navigation.navigate('Esqueci minha senha')
  }

  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [input, setInput] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPass, setErrorPass] = useState(null);

  const validar = () => {
    setErrorEmail("Preencha seu email corretamente")
    return false
  }

      // Funções para autenticar o usuário
      async function login(){
        await signInWithEmailAndPassword (auth, email, input)
          .then((value) =>{
          console.log('Fez login com sucesso'),
          navigation.reset({
          index: 0,
          routes: [{name:'Home'}]
          })
        .catch(error => {console.log(error)
          Alert.alert("Ocorreu um erro!", error)
          })
        })
      };
    


      // Funções para criar um usuário
 // async function createUser(){
   // await createUserWithEmailAndPassword(auth, email, input)
    //.then(value=>{console.log('Cadastrado com sucesso \n' + value.user.uid)
  //})
  //.catch(error => console.log(error));
  //};
  
  // Levando para página de criação de novo usuário
  const createUser = () => {
    navigation.navigate('Cadastro')
  }

return(
      <KeyboardAvoidingView style={styles.background}>
          <View>
            <Image style={styles.containerLogo}
            source={require('../Images/Logo_meuappe.png')}
            />
          </View>

          <View style={styles.container}>
              <View style={styles.inputFieldTitle}>
                <Text style={styles.inputFieldTitle}>Email</Text>
              </View>
              <TextInput
                  style={styles.inputEmail}
                  placeholder="@email.com"
                  autoCorrect={false}
                  keyboardType="email-address"
                  value={email}
                  onChangeText={value=> setEmail(value)}
                  //errorMessage={errorEmail}
              />
              <View style={styles.inputFieldTitle}>
                <Text style={styles.inputFieldTitle}>Senha</Text>
              </View>
              <View style={styles.passArea}>
                  <TextInput
                      style={styles.inputPass}
                      placeholder="Senha"
                      autoCorrect={false}
                      onChangeText={value=> setInput(value)}
                      value={input}
                      secureTextEntry = {hidePass}
                      errorMessage={errorPass}
                  />
                  <TouchableOpacity style={styles.icon} onPress={() => setHidePass (!hidePass)}>
                    {hidePass ?
                      <Ionicons name='eye' color='#3c435c' size={25} />
                      :
                      <Ionicons name='eye-off' color='#3c435c' size={25} />
                  }
                  </TouchableOpacity>
             
              </View>
              <View style={styles.messagePassRule}>
                <Text style={styles.messagePassRule}>Mínimo 8 caracteres</Text>
              </View>
            <TouchableOpacity style={styles.btnSubmit}
              onPress={() => login()}
              
                >
              <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRegister}
            onPress={() => goToForgotPassword()}
              >
              <Text style={styles.registerText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister}
            onPress={() => createUser()}
              >
              <Text style={styles.registerText}>Novo aqui? Criar uma conta</Text>
            </TouchableOpacity>

            
          </View>
      </KeyboardAvoidingView>
)}



      const styles = StyleSheet.create({
          background:{

              alignItems: 'center',
              justifyContent: 'flex-start',
              backgroundColor: '#F5F5F5'
          },
          containerLogo:{
              alignItems: 'center',
              justifyContent: 'center',
          },
          container:{
              //flex:1,
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '90%',
          },
          inputFieldTitle:{
            color: "#3C435C",
            fontSize: 16,
            marginLeft: 8,
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
            padding: 1,
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
          passArea:{
              flexDirection: 'row',
              backgroundColor: '#B9BAC0',
              width: '90%',
              marginBottom: 5,
              fontSize: 17,
              borderRadius: 7,
              borderColor: '#3c435c',
              borderWidth: 1
          },
          inputPass:{
              width: '85%',
              color: '#3c435c',
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
          messagePassRule:{
            color: "#3C435C",
            fontSize: 12,
            marginLeft: 8,
            alignSelf: 'flex-start',
            justifyContent: 'flex-start'
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
          btnRegister:{
              margin: 10,
          },
          registerText:{
              color: "#3C435C",
              fontSize: 16,
              alignSelf: 'flex-start',
              justifyContent: 'flex-start',
              padding: 1,
              flexDirection: 'column',

          },
      })