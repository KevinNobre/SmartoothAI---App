import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import NavigationBar from '../../components/NavigationBar';
import SearchBar from '../../components/SearchBar';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);


  return (
    <Box minHeight={'90vh'}>
      <SearchBar placeholder="Buscar" />
      <NavigationBar></NavigationBar>
    </Box>
    



  );
};

export default HomeScreen;
