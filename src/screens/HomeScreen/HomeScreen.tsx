import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import NavigationBar from '../../components/NavigationBar';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleProfile = () => {
    navigation.navigate('Perfil');
  };

  return (
    <Box minHeight={'90vh'}>
      <Text color="black" onPress={handleProfile}>
        Clique aqui
      </Text>
      <NavigationBar></NavigationBar>
    </Box>
    



  );
};

export default HomeScreen;
