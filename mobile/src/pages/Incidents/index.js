import React from 'react';
import {View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImage from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImage}/>
            <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>0 casos</Text>.
            </Text>
        </View>
        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

        <View style={styles.incidentList}>
        <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Caso de teste</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>

                <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name='arrow-right' size={16} color="#e02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Caso de teste</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>

                <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name='arrow-right' size={16} color="#e02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Caso de teste</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>

                <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name='arrow-right' size={16} color="#e02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Caso de teste</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>

                <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name='arrow-right' size={16} color="#e02041"/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}