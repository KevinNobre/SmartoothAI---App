import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import { recoverPassword } from '../../services/usuarioPacienteAPI';

const ForgotPasswordScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }

    try {
      setIsLoading(true);

      // Chama a função de recuperação de senha
      const responseMessage = await recoverPassword(email);

      setIsLoading(false);

      // Exibe uma mensagem de sucesso
      Alert.alert('Verifique seu e-mail', responseMessage);

      // Navega de volta para a tela de Login
      navigation.navigate('Login');
    } catch (error: unknown) {
      setIsLoading(false);
      
      // Verifica se o erro é uma instância de Error e trata
      if (error instanceof Error) {
        Alert.alert('Erro', error.message || 'Ocorreu um erro ao tentar enviar as instruções.');
      } else {
        Alert.alert('Erro', 'Ocorreu um erro desconhecido.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a senha?</Text>
      <Text style={styles.description}>Insira seu e-mail para receber instruções de redefinição.</Text>

      <TextInput
        style={[styles.input, { backgroundColor: 'white' }]}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword} disabled={isLoading}>
        <Text style={styles.resetButtonText}>
          {isLoading ? 'Enviando...' : 'Enviar Instruções'}
        </Text>
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
