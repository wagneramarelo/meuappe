import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { signOut} from 'firebase/auth';
import { auth } from '../firebase';


export default function Logout({navigation}){

    async function logout(){
        await signOut (auth)
        .then(()=>{console.log('Usuário deslogado com sucesso!')
        navigation.navigate('Login')
      })
      .catch(error => console.log(error));
      };

return(

    <View>
        <TouchableOpacity style={styles.btnRegister}
            onPress={() => logout()}
        >
            <Text style={styles.registerText}>Sair</Text>
        </TouchableOpacity>
    </View>

)}

const styles = StyleSheet.create({
    btnRegister:{
        marginTop: 10,
    },
    registerText:{
        color: "#3c435c",
        fontSize: 18
    },

})