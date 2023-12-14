import React, { useState } from 'react'
import { Button, Alert, Image, Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function AdminSettings ({navigation}) {

  
   
      return (
          //Botão no canto superior direito para voltar para tela Home   
        <View style={styles.backHomeMenu} >
          <View style={styles.homeHeader}>   
                <Button
                  onPress={() => navigation.navigate('Home')}
                  title="Voltar"
                  color="#3c435c"
                  borderBottomColor= '#737373'
                  borderRadius= '5'
                >
                </Button>
          </View>
          
          <View>
            
            <Text style={styles.homeTitle}>Configurações do Condomínio</Text>
          </View>
          
          <View style={styles.btnHomeMessageArea}>
          <TouchableOpacity >
            <Text style={styles.homeMenuText}>Criar alerta aos condôminos</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.btnMenuRow1}>
              <TouchableOpacity style={styles.btnHomeMenu}
                //onPress={() => createUser()}
              >
                <Ionicons name='reader' color='#c1c1c1' size={40} />
                <Text style={styles.homeMenuText}>Criar comunicados</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.btnHomeMenu}
                //onPress={() => createUser()}
              >
                <Ionicons name='today' color='#c1c1c1' size={40} />
                <Text style={styles.homeMenuText}>Cadastrar Espaços</Text>       
              </TouchableOpacity>
          
          </View>
            <View style={styles.btnMenuRow2}>
          <TouchableOpacity style={styles.btnHomeMenu}
            //onPress={() => createUser()}
          >
            <Ionicons name='person' color='#c1c1c1' size={40} />
            <Text style={styles.homeMenuText}>Cadastrar Moradores</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnHomeMenu}
            // onPress={() => createUser()}
          >
            <Ionicons name='megaphone' color='#c1c1c1' size={40} />
            <Text style={styles.homeMenuText}>Cadastrar Conselho</Text>
          </TouchableOpacity>
          
          </View>

        </View>
      );
    }

    
    
    const styles = StyleSheet.create({
      backHomeMenu:{
        //flex: 1, 
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      homeHeader:{
        display: 'flex',
        backgroundColor: '#3c435c',
        alignItems: 'center',
        //justifyContent: 'flex-end',
        width: '100%',
        height: 50,
        marginTop: 50,
        flexDirection: 'row',
        marginBottom: 20,
        paddingLeft: 10
        
      },
      homeTitle:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#3c435c',
        fontSize: 24
      },
      btnMenuRow1:{
        //paddingTop: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
       // marginTop: 1
      },
      btnMenuRow2:{
        //padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
       // marginTop: 10
      },
      btnHomeMenu:{
        display: 'flex',
        backgroundColor: '#3c435c',
        borderRadius: 7,
        borderBottomColor: '#F5F5F5',
        borderWidth: 1,
        width: '45%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
        paddingTop: 10
      },
      btnHomeMessageArea:{
        display: 'flex',
        backgroundColor: '#c1c1c1',
        borderRadius: 7,
        borderBottomColor: '#3c435c',
        borderWidth: 1,
        width: '95%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 15,
        marginTop: 30,
        paddingTop: 10
      },
      homeMenuText:{
        //display: 'flex',
        fontStyle: 'normal',
        color: '#F5F5F5',
        fontSize: 16,
        paddingBottom:5,
        textAlign: 'center'
      },
    })
    