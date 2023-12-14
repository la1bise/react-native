// rnfs (raccourci)
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [textEntered, setTextEntered] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = function () {
    if (textEntered) {
      setTasks([...tasks, textEntered]);
    }
  };

  const deleteTask = function (index) {
    const newTasks = [... tasks];
    newTasks.splice(index,1);

    setTasks(newTasks);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTextEntered(text)}
          autoFocus
          autoCorrect
          value={textEntered}

          //Pour avoir un textarea
          /*multiline
      numberOfLines={4}
      */
        />
        <Button color={"#FFBD59"} title="Add Task" onPress={addTask} />
      </View>
      <ScrollView style={styles.taskContainer}>
        {tasks.map((item, index) => (
          <Pressable 
          onLongPress={()=>deleteTask(index)} 
          style={styles.task} key={index}>

            <Text style={styles.taskText}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31356E",
    paddingHorizontal: 30,
  },
  wrapper:{
    flex: 1,
    paddingHorizontal: 30,

  },
  inputContainer: {
    flex: 0.25,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  task: {
    backgroundColor: "#5762B7",
    paddingVertical: 8,
    borderRadius: 4,
    marginVertical: 8,
  },
  taskText: {
    textAlign: "center",
    color: "white",
  },
  input: {
    width: "70%",
    borderWidth: 2,
    borderColor: "#c8c8c8",
    color: "white",
    paddingHorizontal: 10,
  },
  taskContainer: {
    flex: 4,
    gap: 14,
  },
});
