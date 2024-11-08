import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { VStack, HStack, Input, Box, Button, ScrollView } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import NavigationBar from '../../components/NavigationBar';
import SearchBar from '../../components/SearchBar';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <HStack style={styles.header}>
      {/*<Image source={require('../../assets/tooth_icon.svg')} style={styles.icon}/>*/} 
      <Image source={require('../../assets/giselle.png')}style={styles.profileImage}/>
        <VStack>
          <Text style={styles.username}>Giselle Nunes</Text> 
          <Text style={styles.subtitle}>Estamos felizes em ver você sorrindo</Text>
          
        </VStack>

      </HStack>
      <View>
      <SearchBar></SearchBar>
      </View>

      {/* "Checks" */}
      <Box style={styles.checksContainer}>
        <Text style={styles.checksTitle}>Checks</Text>
        <Text style={styles.checksText}>
          Verifique sua saúde bucal regularmente para minimizar a incidência de doenças no futuro
        </Text>
        <Button style={styles.checksButton}>
          <Text style={styles.buttonText}>Vamos lá</Text>
        </Button>
      </Box>

      {/* Specialties */}
      {/* <Text style={styles.sectionTitle}>Especialidades</Text>
      <HStack style={styles.specialtiesContainer}> */}
        {/* Icons das especialidades */}
        {/* <VStack alignItems="center">
          <Text>Estética</Text>
        </VStack>
        <VStack alignItems="center">
          <Text>Clínico Geral</Text>
        </VStack>
        <VStack alignItems="center">
          <Text>Ortodontia</Text>
        </VStack>
        <VStack alignItems="center">
          <Text>Odontopediatria</Text>
        </VStack>
      </HStack> */}

      {/* Top Clinics */}
      <Text style={styles.sectionTitle}>As melhores clínicas na sua região</Text>
      <Box style={styles.clinicCard}>
        <Image source={require('../../assets/clinic_image.png')}style={styles.clinicImage}/>
        <VStack>
          <Text style={styles.clinicName}>Dra. Sabrina Loona</Text>
          <Text style={styles.clinicSpecialty}>Especialista em Ortodontia e Cirurgia Geral</Text>
          <Text style={styles.clinicContact}>📞 11 94463-5225</Text>
          <Text style={styles.clinicContact}>📅 Clique para Agendar</Text>
          <Text style={styles.clinicContact}>✉️ contato@drasabrina.com</Text>
        </VStack>
      </Box>
      
      <View style={styles.navBar}>
      <NavigationBar></NavigationBar>
      </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 5,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  icon: {
    width: 30,
    height: 30,
    left: 150,
  },
  checksContainer: {
    backgroundColor: '#00ADEF',
    borderRadius: 10,
    padding: 20,
    marginVertical: 15,
  },
  checksTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checksText: {
    color: 'white',
    fontSize: 14,
    marginVertical: 5,
  },
  checksButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#00ADEF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    left: 5,
    fontFamily: "Inter-SemiBold",
  },
  specialtiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    fontSize: 3,
  },
  clinicCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  clinicImage: {
    width: 95,
    height: 95,
    borderRadius: 10,
    marginRight: 10,
  },
  clinicName: {
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Montserrat-Medium",
    color: "#000",
    textAlign: "left",
  },
  clinicSpecialty: {
    fontSize: 7,
    color: '#666',
    marginVertical: 2,
  },
  clinicContact: {
    fontSize: 10,
    color: '#666',
  },
  navBar: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
});

export default HomeScreen;
