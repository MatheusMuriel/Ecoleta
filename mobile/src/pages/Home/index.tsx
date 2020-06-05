import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, Picker, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";
import axios from 'axios';

interface IBGEUF {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  }
}

interface IBGECidade {
  id: number;
  nome: string;
  microrregiao: {
    id: number;
    nome: string;
    mesorregiao: {
      id: number;
      nome: string;
      UF: IBGEUF;
    }
  }
}

const Home = () => {
  const [Ufs, setUfs] = useState<IBGEUF[]>([]);
  const [Cities, setCities] = useState<IBGECidade[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get<IBGEUF[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => {
          setUfs(response.data.sort((uf1, uf2) => { return (uf1.nome > uf2.nome) ? 1 : -1 }));
        })
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECidade[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response => {
          setCities(response.data);
        })
  }, [selectedUf]);

  function handleSelectUf(uf: string) {
    //const uf = event.target.value; 
    setSelectedUf(uf);
  }

  function handleSelectCity(city: string) {
    //const city = event.target.value; 
    setSelectedCity(city);
  }

  function handleNavigateToPoints() {
    navigation.navigate('Points', { uf: selectedUf, city: selectedCity});
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
      <ImageBackground 
        source={require('../../assets/home-background.png')}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
            <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
          </View>
        </View>

        <View style={styles.footer}>
          {console.log(Ufs)}
          <RNPickerSelect
            placeholder={{ label: 'Selecione a UF' }}
            style={{ 
              inputAndroid: styles.picker,
              iconContainer: {
                top: 15,
                right: 15,
              },
            }}
            useNativeAndroidPickerStyle={false}
            Icon={() => (<Icon name="chevron-down" color="#A0A0B2" size={24} />)}
            onValueChange={value => setSelectedUf(value)}
            items={Ufs.map(uf => {
              return {
                label: uf.nome,
                value: uf.sigla
              }
            })}
          />

          <RNPickerSelect
            placeholder={{ label: 'Selecione a cidade' }}
            style={{ 
              inputAndroid: styles.picker,
              iconContainer: {
                top: 15,
                right: 15,
              },
            }}
            useNativeAndroidPickerStyle={false}
            Icon={() => (<Icon name="chevron-down" color="#A0A0B2" size={24} />)}
            onValueChange={value => setSelectedCity(value)}
            items={Cities.map(city => {
              return {
                label: city.nome,
                value: city.nome
              }
            })}
          />

          <RectButton style={styles.button} onPress={handleNavigateToPoints} >
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} ></Icon>
              </Text>
            </View>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  picker: {
    height: 60,
    backgroundColor: '#FFF',
    color: '#666',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  select: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;