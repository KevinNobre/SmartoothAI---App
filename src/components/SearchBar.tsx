import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Buscar' }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search-outline" size={24} color="black" />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
      />
      <Ionicons name="options-outline" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontFamily: "Inter-Regular",
    borderRadius: 15,
    paddingHorizontal: 4,
    paddingVertical: 5,
    marginVertical: 4,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
  },
});

export default SearchBar;
