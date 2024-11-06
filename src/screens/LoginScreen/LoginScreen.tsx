import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState(''); // Altera email para username
  const [password, setPassword] = useState(''); // Altera senha para password
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Utilize o tipo

  return (
    <View>
      <TextInput
        placeholder="Username" // Altere o placeholder para Username
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Senha"
        value={password} // Altere para password
        onChangeText={setPassword} // Altere para setPassword
        secureTextEntry
        style={{ marginBottom: 10 }}
      />
      <Button title="Login" />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

export default LoginScreen;