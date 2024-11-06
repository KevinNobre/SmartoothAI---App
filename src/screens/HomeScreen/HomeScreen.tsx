import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const HomeScreen: React.FC = () => {
    const [username, setUsername] = useState(''); // Altera email para username
    const [password, setPassword] = useState(''); // Altera senha para password
    const [error, setError] = useState<string | null>(null);

  
    return (
      <View>
        
      </View>
    );
  };
  
  export default HomeScreen;