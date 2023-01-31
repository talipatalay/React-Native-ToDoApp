import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, View, Text, TextInput, Button } from "react-native";



const App = () => {

  const [Sayac, setSayac] = useState(0);
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);

  const addTaskPress = () => {
    setTask([...task, text]);
    setText('');
  };
  const removeTaskPress = index => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  };

  const save = () => {
    addTaskPress();
    setSayac(Sayac + 1);
  };
  const remove = () => {
    removeTaskPress();
    setSayac(0)
  }

  return (

    <SafeAreaView style={styles.main_page}>
      <View style={styles.data_container}>
        <Text style={styles.main_title}>List</Text>
        <Text style={styles.main_title}>{Sayac}</Text>
      </View>

      <FlatList
        data={task}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <Text style={styles.item} >
              {item}</Text>

          </View>
        )}
        keyExtractor={item => item + Math.random()}
      />
      <View style={styles.enter_data}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Bir şeyler ekle..."
          placeholderTextColor="#CA8005"
        />
        <View style={styles.basacak}>
          <Button
            title="Kaydet"
            onPress={save}
            color='#CA8005'
          />
          <Button
            title="Temizle"
            onPress={remove}
            color='#CA8005'
          />
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  data_container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'

  },
  main_page: {
    backgroundColor: 'white',
    flex: 1,
    backgroundColor: '#203238'
  },

  input: {
    borderWidth: 1,
    borderColor: '#CA8005',
    marginHorizontal: 5,
    color: '#CA8005',
    borderRadius: 5
  },
  main_title: {
    color: '#CA8005',
    height: 40,
    fontSize: 30
  },
  basacak: {
    margin: 5
  },

  enter_data: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 5
  },
  content: {
    borderWidth: 1,
    padding: 5,
    margin: 2,
    borderColor: '#CA8005',
    borderRadius: 10
  },
  item: {
    color: '#CA8005'
  },

});


export default App;