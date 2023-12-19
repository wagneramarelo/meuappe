import * as React from 'react';
import { Image, KeyboardAvoidingView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function KnowMore({navigation}){

    return(
        <View>
            <Image style={styles.containerLogo} source={require('../Images/Logo_meuappe.png')}/>

        </View>

    )
}

const styles = StyleSheet.create({
    containerLogo:{
        alignItems: 'center',
        justifyContent: 'center',
    }
})