import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { signOut} from 'firebase/auth';
import { auth } from '../../services/firebase';
import LoginPage from '../LoginProcess/LoginPage';


export default function Logout(){

    async function logout(){
        await signOut (auth)
        .then(()=>{console.log('Usuário deslogado com sucesso!')
        })
        .catch(error => console.log(error));
        };

return(

LoginPage

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