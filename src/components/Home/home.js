import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Button, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { signOut} from 'firebase/auth'
import { auth } from '../../services/firebase';






function Menu({navigation}) {

// Deslogando um usuário
async function logout(){
  await signOut (auth)
  .then(()=>{console.log('Usuário deslogado com sucesso!')
            navigation.navigate('Welcome')
        })
.catch(error => {console.log(error)
                Alert.alert("Error", error)
                });
}




  return (




      //Botão no canto superior direito para deslogar usuário - SAIR   
    <View style={styles.backHomeMenu} >
      <View style={styles.homeHeader}>   
            <Button
              //onPress={() => backToLoginPage()}
              onPress={() => logout()}
              title="Sair"
              color="#3c435c"
              borderBottomColor= '#737373'
              borderRadius= '5'
            >
            </Button>
      </View>
      
      <View>
        <Text style={styles.homeTitle}>Olá!</Text>
        <Text style={styles.homeTitle}>O que deseja fazer hoje?</Text>
      </View>
      
      <View style={styles.btnHomeMessageArea}>
      <TouchableOpacity >
        <Text style={styles.homeMenuText}>Você tem 2 mensagens não lidas.</Text>
      
      </TouchableOpacity>
      </View>
      <View style={styles.btnMenuRow1}>
          <TouchableOpacity style={styles.btnHomeMenu}
            //onPress={() => createUser()}
          >
            <Ionicons name='reader' color='#c1c1c1' size={40} />
            <Text style={styles.homeMenuText}>Ver comunicados</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnHomeMenu}
            //onPress={() => createUser()}
          >
            <Ionicons name='today' color='#c1c1c1' size={40} />
            <Text style={styles.homeMenuText}>Reservar um espaço</Text>       
          </TouchableOpacity>
      
      </View>
        <View style={styles.btnMenuRow2}>
      <TouchableOpacity style={styles.btnHomeMenu}
        //onPress={() => createUser()}
      >
        <Ionicons name='person' color='#c1c1c1' size={40} />
        <Text style={styles.homeMenuText}>Atualizar meu cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnHomeMenu}
        // onPress={() => createUser()}
      >
        <Ionicons name='megaphone' color='#c1c1c1' size={40} />
        <Text style={styles.homeMenuText}>Notificar irregularidades</Text>
      </TouchableOpacity>
      
      </View>
      <View style={styles.btnMenuRow2}>
      <TouchableOpacity style={styles.btnHomeMenu}
        onPress={() => navigation.navigate('AdminSettings') }
      >
        <Ionicons name='settings-sharp' color='#c1c1c1' size={40} />
        <Text style={styles.homeMenuText}>Configurações</Text>
      
      </TouchableOpacity>
      
      </View>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configurações!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

 export default function Home() {

  return (
    <Tab.Navigator 
      initialRouteName="Menu"
      screenOptions={{
        tabBarActiveTintColor: '#3c435c',
      }}
    >
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,        
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mural"
        component={Notifications}
        options={{
          tabBarLabel: 'Mural',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
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
    justifyContent: 'flex-end',
    width: '100%',
    height: 50,
    marginTop: 50,
    flexDirection: 'row',
    marginBottom: 20,
    paddingEnd: 10
    
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
