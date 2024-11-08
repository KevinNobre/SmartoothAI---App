import React, { useState } from 'react';
import { VStack, Input, Text, HStack, Button, Box, Image} from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';



const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleCadastro = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <Box flex={1} bg="#F1F1F1" justifyContent="center" alignItems="center" padding={5}>

      <VStack space={4} justifyContent="center" alignItems="center" width="85%">
      <Image source={require('../../assets/logo.png')} style={{ width: 100, height: 100 }} />
        <Text fontSize="3xl" bold color="black">SmarTooth</Text>

        <Input placeholder="E-mail" bg="white" maxWidth="317px" width="100%" marginBottom={'1rem'} focusOutlineColor="#FFA74F"
        borderRadius={8} _focus={{
          borderColor: "#FFA74F",
          bg: "white",
        }} />
        <Input placeholder="Senha" type="password" bg="white" focusOutlineColor="#FFA74F" maxWidth="317px" width="100%" borderRadius={8} _focus={{
          borderColor: "#FFA74F", 
          bg: "white",        
        }} />


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


