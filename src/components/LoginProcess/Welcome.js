import * as React from 'react';
import { Image, KeyboardAvoidingView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function Welcome({navigation}){

    const loginPage = () => {
        navigation.navigate('Login')
      }

    const newAppe = () => {
        navigation.navigate('NewAppe')
      }

    const knowMore = () => {
        navigation.navigate('KnowMore')
      }

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View>
              <Image style={styles.containerLogo}
              source={require('../Images/Logo_meuappe.png')}
              />
            </View>

            <Text style={styles.welcomeTitle}>Olá, bem vindo ao Meu Appê!</Text>
            <Text style={styles.welcomeText}>O aplicativo que simplifica o seu condomínio.</Text>

            <TouchableOpacity style={styles.btnSubmit}
              onPress={() => loginPage()}
              
                >
              <Text style={styles.submitText}>Fazer login</Text>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles.btnCreateAppe}
              onPress={() => newAppe()}
              
                >
              <Text style={styles.submitText}>Cadastrar meu condomínio</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnKnowMore}
              onPress={() => knowMore()}
              
                >
              <Text style={styles.submitTextKnowMore}>Conhecer mais</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
)}



      const styles = StyleSheet.create({
          background:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#F5F5F5'
          },
          welcomeTitle:{
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#3c435c',
            fontSize: 24
          },
          welcomeText:{
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#3c435c',
            fontSize: 16,
            marginBottom: 20
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
        btnCreateAppe:{
            backgroundColor: '#006400',
            width: '90%',
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
            marginTop: 12
        },
        btnKnowMore:{
            backgroundColor: '#fff',
            borderColor: '#0a005c',
            borderWidth: 1,
            width: '90%',
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
            marginTop: 60
        },
        submitText:{
            color: '#F5F5F5',
            fontSize: 18
        },
        submitTextKnowMore:{
          color: '#0a005c',
          fontSize: 18
      },
        })