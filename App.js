import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'stephen', id: '1'},
    { name: 'opeyemi', id: '2'},
    { name: 'sussan', id: '3'},
    { name: 'mario', id: '4'},
    { name: 'luigi', id: '5'},
    { name: 'toad', id: '6'},
    { name: 'peach', id: '7'},
  ]);

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )} 
      />
      

      {<StatusBar style="auto" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }

});
