import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/type';

const NavigationBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Atendimento')}>
        <Text style={styles.navText}>Atendimento</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('Prontuario')}>
        <Text style={styles.navText}>Prontuário</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('Dicas')}>
        <Text style={styles.navText}>Dicas</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderTopColor: "rgba(0, 0, 0, 0.4)",
    borderTopWidth: 1,
  },
  navText: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#000",
    textAlign: "left",
    width: 35
  },
});

export default NavigationBar;
