import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button as PaperButton, Provider, Dialog, Paragraph, Portal } from 'react-native-paper';

const CustomDialog = (props) => {

    return(

            <Provider>
                <Portal>
                    <Dialog visible={props.visible} onDismiss={() => props.onClose(false)}>
                        <Dialog.Title>{props.title}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{props.message}</Paragraph>
                            </Dialog.Content>
                        <Dialog.Actions>
                            <PaperButton onPress={() => props.onClose(false)}>OK!</PaperButton>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>  
            </Provider> 
  

    )

}

export default CustomDialog

