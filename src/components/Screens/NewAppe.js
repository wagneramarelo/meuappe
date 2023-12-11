import * as React from 'react';
import { Image, KeyboardAvoidingView, View, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function NewAppe({navigation}){

    return(
        <View style={styles.background}>
            <TouchableOpacity style={styles.btnSubmit}
              onPress={() => loginPage()}      
                >
              <Text style={styles.submitText}>Novo Condomínio</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F5'
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
})
