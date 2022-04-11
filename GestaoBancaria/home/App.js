import React from 'react';
import { Text, View } from 'react-native';
import {GetInput} from '../components/Inputs';

const TelaInicial = () => {
    return (
        <View style={{
            flexDirection: 'row',
            padding: 20,
            backgroundColor: '#000'
        }}>
            <Text style={{
                fontSize: 35,
                fontWeight: '600',
                color: '#FFF'
            }}>Oi carai</Text>
            <GetInput></GetInput>
        </View>
    );
}

export default TelaInicial;