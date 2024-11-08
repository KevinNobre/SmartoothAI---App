import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';

const ForgotPasswordScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email) {
      ////// FUTURAMENTE IMPLEMENTAR ROTA DE ENVIO DE E-MAIL/////////
      Alert.alert('Verifique seu e-mail', 'As instruções para redefinir a senha foram enviadas.');
      navigation.navigate('Login'); 
    } else {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a senha?</Text>
      <Text style={styles.description}>Insira seu e-mail para receber instruções de redefinição.</Text>
      
      <TextInput style={[styles.input, { backgroundColor: 'white' }]} placeholder="E-mail" placeholderTextColor="#999" value={email} onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Enviar Instruções</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backToLogin}>Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#E32A72',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  resetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backToLogin: {
    color: '#E32A72',
    marginTop: 15,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
