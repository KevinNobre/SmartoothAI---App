import React from 'react';
import { View, TextInput, } from 'react-native';
import { VStack, Input, Text, Image, useNativeBase, HStack, Button, Box} from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    navigation.navigate('HomeScreen'); 
  };

  const handleCadastro = () => {
    navigation.navigate("CadastroScreen"); 
  };


  return (
    <Box flex={1}>
      <VStack space={4} alignItems="center" width="100%">
        <Image source={require('')} alt="img" size="100%" />
        <Text fontSize="3xl" bold color="white"> SmarToothAI</Text>
        <Input width={"85%"} placeholder="Email"/>
        <Input width={"85%"} placeholder="Senha" type="password"/>
        <HStack space={2} padding={2}>
          <Button onPress={handleCadastro} borderRadius={8} bg="white" _text={{ bold: true, color: "black" }}>Login</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default LoginScreen;