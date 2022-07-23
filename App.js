import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setpeople] = useState([
    { name: 'stephen',  key: '1'  },
    { name: 'uwem',     key: '2'  },
    { name: 'dara',     key: '3'  },
    { name: 'clemency', key: '4'  },
    { name: 'deen',     key: '5'  },
    { name: 'naima',    key: '6'  },
    { name: 'tfash',    key: '7'  },
    { name: 'kelz',     key: '8'  },
    { name: 'tosin',    key: '9'  }
  ]);

  return (
    <View style={styles.container}>
      
      <ScrollView>
        {
          people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20 
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'skyblue',
    fontSize: 24,
    textAlign:'center',
    color: '#333',
    borderWidth:  1,  
    borderStyle:  'solid',
    borderColor: 'skyblue',
    borderRadius: 6
  }
});