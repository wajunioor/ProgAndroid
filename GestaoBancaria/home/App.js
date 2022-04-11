import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {GetInput} from '../components/Inputs';

const TelaInicial = () => {
    return (
        <View style={style.background}>
           
        
            <Image 
                source={require('../imagens/will.jpg')}
                style={{width:'100%'}}
                resizeMode= 'center'
                
            
            />

            <TextInput
                style={style.input}
                placeholder='Usuario'
                onChangeText={() => {}}
            ></TextInput>

            <TextInput
                style={style.input}
                placeholder='Senha'
                autoComplete='false'
                onChangeText={() =>{}}
            ></TextInput>
        </View>
    );
}

const style = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'center',
        aliggItems: 'center',
        backgroundColor: '#191919'
    },
    input:{
        flex:1,
        justifyContent: 'center'
    }
});
export default TelaInicial;