import React, { useState } from 'react';
import { VStack, Input, Text, HStack, Button, Box, Image, Toast } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import { loginUser } from '../../services/usuarioPacienteAPI';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const handleLogin = async () => {
    try {
      const usuario = await loginUser(email, senha);

      if (usuario) {
        navigation.navigate('Home');
      } else {
        Toast.show({
          description: 'E-mail ou senha não conferem. Tente novamente.',
          bgColor: 'red.500',
        });
      }
    } catch (error) {
      console.error('Erro ao tentar fazer login', error);
      Toast.show({
        description: 'Erro ao tentar fazer login. Tente novamente.',
        bgColor: 'red.500',
      });
    }
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <Box flex={1} bg="#F1F1F1" justifyContent="center" alignItems="center" padding={5}>
      <Image source={require('../../assets/odontoprev.png')} height={'30px'} width={'200px'} />
      <Text fontSize="sm" fontWeight={500} color="black" marginBottom={'1rem'}>apresenta</Text>

      <VStack space={4} justifyContent="center" alignItems="center" width="85%">
        <Text fontSize="xl" fontWeight={500} color="black" marginTop={'2rem'}>Smartooth</Text>
        <Image source={require('../../assets/logo.png')} height={'110px'} width={'120px'} marginBottom={'0.6rem'} />

        <Input 
          placeholder="E-mail" 
          bg="white" 
          maxWidth="317px" 
          width="100%" 
          marginBottom={'1rem'} 
          borderColor={'black 2px'} 
          focusOutlineColor="#FFA74F"
          borderRadius={8} 
          _focus={{
            borderColor: "#FFA74F",
            bg: "white",
          }} 
          value={email}
          onChangeText={(text) => setEmail(text)} 
        />
        <VStack width="100%" maxWidth="317px" marginBottom={'1rem'}>
          <Input 
            placeholder="Senha" 
            type="password" 
            bg="white" 
            focusOutlineColor="#FFA74F" 
            borderColor={'black 2px'} 
            width="100%" 
            borderRadius={8} 
            _focus={{
              borderColor: "#FFA74F",
              bg: "white",
            }} 
            value={senha}
            onChangeText={(text) => setSenha(text)} 
          />

        </VStack>

        <HStack flex={1} justifyContent="center" alignItems="center" padding={2} width="100%">
          <Button
            onPress={handleLogin}
            width="100%"
            maxWidth="309px"
            height="45px"
            borderRadius={8}
            bg="#FDECD0"
            _hover={{ bg: "#FFA74F" }}
            _pressed={{ bg: "#FFA74F" }}
            _text={{ bold: true, color: "black" }}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            Login
          </Button>
        </HStack>

        <Text color="black" mt={4}>
          Primeiro acesso?{' '}
          <Text bold color="black" onPress={handleCadastro}>
            Clique aqui
          </Text>
        </Text>
      </VStack>
    </Box>
  );
};

export default LoginScreen;



