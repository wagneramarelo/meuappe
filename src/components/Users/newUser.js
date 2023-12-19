import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, Switch, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../../services/firebase';
import { TextInputMask } from 'react-native-masked-text';
import usuarioService from '../../services/UserService';
import { Button, Provider, Dialog, Paragraph, Portal } from 'react-native-paper';

export default function Cadastro({navigation}){

const [nome, setNome] = useState();
const [email, setEmail] = useState();
const [password, setInput] = useState(null);
const [input2, setInput2] = useState(null);
const [cpf, setCPF] = useState(null);
const [telefone, setTelefone] = useState(null);
const [isEnabled, setIsEnabled] = useState(false);
const [hidePass, setHidePass] = useState(true); 
const [hidePass2, setHidePass2] = useState(true);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const [errorNome, setErrorNome] = useState(null);
const [errorEmail, setErrorEmail] = useState(null);
const [errorCpf, setErrorCpf] = useState(null);
const [errorPhone, setErrorPhone] = useState(null);
const [errorPass, setErrorPass] = useState(null);
const [errorPass2, setErrorPass2] = useState(null);
const [isLoading, setLoading] = useState(false);

// variáveis do Dialog - caixa de mensagem
const [visible, setVisible] = useState(false);
const showDialog = () => setVisible(true);
const hideDialog = () => setVisible(false);


let cpfField = null

const validar = () =>{
    let error = false
    setErrorEmail(null)
    setErrorCpf(null)
    setErrorNome (null)

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(email).toLowerCase())){
        error = true
        setErrorEmail("Preencha corretamente seu email")
        console.log("Formato de email errado")
    }
    if (email == null) {
        error = true
        setErrorEmail("Preencha o campo email")
        console.log("Campo email vazio")
    }
    if (!cpfField.isValid()) {
        error = true
        setErrorCpf("Preencha seu CPF corretamente")
        console.log("Email errado")
    } 
    if (cpf == null){
        error = true
        setErrorCpf("Preencha o campo CPF")
        console.log("Sem CPF")
    }
    if (nome == null){
        error = true
        setErrorNome("Preencha o seu nome")
        console.log("Campo nome vazio")
    }

    if (error == false)

    return !error
}

const salvar = () => {
    if (validar()){
        setLoading(true)

    //    if (Register()){

        let data = {
            name: nome,
            email: email,
            password: password,
            cpf: cpf,
            phone: telefone
        }

        usuarioService.cadastrar(data)
        .then((response) => { 
            setLoading (false)
            const title = (response.data.status) ? "Sucesso" : "Erro"
            Alert.alert(title, response.data.mensagem)
            //showDialog()
            console.log(response.data)
            
        })
        .catch((error) => {
            setLoading (false)
            //showDialog()
            console.log(error)
            console.log ("Deu algum erro")
           // Alert.alert("Erro", "Houve um erro inesperado")
        })
    }
}

/*
async function Register(){
        await createUserWithEmailAndPassword(auth, email, input)
        .then(value=>{
            console.log('Cadastrado com sucesso \n' + value.user.uid)
            navigation.reset({
            index: 0,
            routes: [{name:'Home'}]
            })
            .catch(error => console.log(error));
        })
};
*/

return(
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.background}>
        
        <View style={styles.container}>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputNome}
                    placeholder="Nome Completo"
                    autoCorrect={false}
                    value={nome}
                    onChangeText={value=> {
                        setNome(value)
                        setErrorNome(null)
                    }}
                />
            </View>
            <Text style={styles.errorMessage}>{errorNome}</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={value=> {
                        setEmail(value)
                        setErrorEmail(null)
                    }}
                />
            </View>
            <Text style={styles.errorMessage}>{errorEmail}</Text>
            <View style={styles.container}>
                <TextInputMask
                    style={styles.inputEmail}
                    type={'cpf'}
                    placeholder="CPF"
                    autoCorrect={false}
                    keyboardType="phone-pad"
                    returnKeyType='done'
                    value={cpf}
                    onChangeText={value=> {
                        setCPF(value)
                        setErrorCpf(null)
                    }}
                    ref={(ref) => cpfField = ref}
                />
            </View>
            <Text style={styles.errorMessage}>{errorCpf}</Text>
            <View style={styles.container}>
                <TextInputMask
                    style={styles.inputEmail}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    placeholder="Telefone"
                    autoCorrect={false}
                    keyboardType="phone-pad"
                    returnKeyType='done'
                    value={telefone}
                    onChangeText={value=> {
                        setTelefone(value)
                        setErrorPhone(null)
                    }}
                        />
            </View>
            <Text style={styles.errorMessage}>{errorPhone}</Text>
            <View style={styles.passArea}>
                <TextInput
                    style={styles.inputPass}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={value=> {
                        setInput(value)
                        setErrorPass(null)
                    }}
                    value={password}
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
            <Text style={styles.errorMessage}>{errorPass}</Text>
            <View style={styles.passArea}>
                <TextInput
                    style={styles.inputPass}
                    placeholder="Reconfirme sua senha"
                    autoCorrect={false}
                    onChangeText={value=> {
                        setInput2(value)
                        setErrorPass2(null)
                    }}
                    secureTextEntry = {hidePass2}
                />
                <TouchableOpacity style={styles.icon} onPress={() => setHidePass2 (!hidePass2)}>
                    {hidePass2 ?
                    <Ionicons name='eye' color='#3c435c' size={25} />
                    :
                    <Ionicons name='eye-off' color='#3c435c' size={25} />
                }
                </TouchableOpacity>
            </View>
            <Text style={styles.errorMessage}>{errorPass2}</Text>
            <View style={styles.switchArea}>
                <Switch style={styles.btnSwitch}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#3c435c" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text style={styles.switchText}>Li e concordo com os Termos de Uso</Text>
            </View>
            <TouchableOpacity style={styles.btnRegister}
            onPress={() => salvar()}
            >
            <Text style={styles.registerText}>Salvar</Text>
            </TouchableOpacity>   
   
        </View>
        <Provider>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>This is simple dialog</Paragraph>
                        </Dialog.Content>
                    <Dialog.Actions>
                         <Button onPress={hideDialog}>Done</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>  
            </Provider> 
    </KeyboardAvoidingView>
)}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    container:{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        //marginTop: 20,
        //paddingBottom: 20
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
    inputNome: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 5 ,
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        borderBottomColor: '#3c435c',
        borderWidth: 1
    },
    btnRegister:{
        backgroundColor: '#3c435c',
        width: '80%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    registerText:{
        color: '#fff',
        fontSize: 18,
    },
    btnSwitch:{
        alignSelf: 'flex-start',
        display: 'flex',
        justifyContent: 'center',
        textAlignVertical: 'center',
        marginLeft: 40,
        marginBottom: 20,
        marginTop: 20
    },
    switchArea:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    switchText:{
        width: '85%',
        display: 'flex',
        fontSize: 12,
        padding: 8,
        alignItems: 'center',
        textAlignVertical: 'center'
    },
    errorMessage:{
        alignSelf: 'flex-start',
        fontSize: 12,
        marginLeft: 20,
        color: '#f02'
    }
})