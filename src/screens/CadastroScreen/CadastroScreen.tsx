import React, { useState } from 'react';
import { VStack, Input, Text, HStack, Button, Box, Image, Toast } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import { createUser } from '../../services/usuarioPacienteAPI'; 

const CadastroScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [dataNasc, setDataNasc] = useState<string>('');
  const [genero, setGenero] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [logradouro, setLogradouro] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [complemento, setComplemento] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [uf, setUf] = useState<string>('');
  const [contato, setContato] = useState<string>('');

  return (
    <Box flex={1} bg="#F1F1F1" justifyContent="center" alignItems="center" padding={5}>

      <VStack space={4} justifyContent="center" alignItems="center" width="85%">
        <Text fontSize="xl" fontWeight={500} color="black" marginTop={'2rem'}>Registro</Text>
        <Image source={require('../../assets/logo.png')} height={'110px'} width={'120px'} marginBottom={'0.6rem'} />

        <Input
          placeholder="Nome"
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
          value={nome}
          onChangeText={(text) => setNome(text)}
        />

        <Input
          placeholder="Sobrenome"
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
          value={sobrenome}
          onChangeText={(text) => setSobrenome(text)}
        />

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

        <Input
          placeholder="Senha"
          type="password"
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
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />

        <Input
          placeholder="Data de Nascimento"
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
          value={dataNasc}
          onChangeText={(text) => setDataNasc(text)}
        />

        <Input
          placeholder="Gênero"
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
          value={genero}
          onChangeText={(text) => setGenero(text)}
        />

        <Input
          placeholder="CEP"
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
          value={cep}
          onChangeText={(text) => setCep(text)}
        />

        <Input
          placeholder="Logradouro"
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
          value={logradouro}
          onChangeText={(text) => setLogradouro(text)}
        />

        <Input
          placeholder="Número"
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
          value={numero}
          onChangeText={(text) => setNumero(text)}
        />

        <Input
          placeholder="Complemento"
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
          value={complemento}
          onChangeText={(text) => setComplemento(text)}
        />

        <Input
          placeholder="Bairro"
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
          value={bairro}
          onChangeText={(text) => setBairro(text)}
        />

        <Input
          placeholder="Cidade"
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
          value={cidade}
          onChangeText={(text) => setCidade(text)}
        />

        <Input
          placeholder="UF"
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
          value={uf}
          onChangeText={(text) => setUf(text)}
        />

        <Input
          placeholder="Contato"
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
          value={contato}
          onChangeText={(text) => setContato(text)}
        />

        <HStack flex={1} justifyContent="center" alignItems="center" padding={2} width="100%">
          <Button
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
            Cadastrar
          </Button>
        </HStack>

        <Text color="black" mt={4}>
          Já tem uma conta?{' '}
          <Text bold color="black" onPress={() => navigation.navigate('Login')}>
            Faça login aqui
          </Text>
        </Text>
      </VStack>
    </Box>
  );
};

export default CadastroScreen;
