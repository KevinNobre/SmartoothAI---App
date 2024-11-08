import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import NavigationBar from '../../components/NavigationBar';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const username = 'Giselle'; // Substitua futuramente com o nome dinâmico  

  const handleLogoff = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoffButton} onPress={handleLogoff}>
        <Text style={styles.logoffText}>Logoff</Text>
      </TouchableOpacity>

      <Image source={require('../../assets/giselle.png')}style={styles.profileImage}
      />
      <Text style={styles.greeting}>Oi, {username}</Text>

      <View style={styles.messageBox}>
        <Text style={styles.messageTitle}>Estamos muito felizes!</Text>
        <Text style={styles.messageText}>
          Graças a pessoas como você, conseguimos reduzir em 50% a taxa de doenças bucais
        </Text>
      </View>

      <Text style={styles.successText}>Você é uma <Text style={styles.highlight}>Toother</Text> de sucesso</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Conheça quem está por trás</Text>
      </TouchableOpacity>

      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logoffButton: {
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 20,
  },
  logoffText: {
    color: '#000',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageBox: {
    backgroundColor: '#E32A72',
    borderBottomRightRadius: 133,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  messageTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  successText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  highlight: {
    color: '#E32A72',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FEC02D',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
