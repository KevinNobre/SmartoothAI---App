import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleProfile = () => {
    navigation.navigate('Perfil');
  };

  return (
    <Box>
      <Text color="black" onPress={handleProfile}>
        Clique aqui
      </Text>
    </Box>
  );
  
};

export default HomeScreen;
