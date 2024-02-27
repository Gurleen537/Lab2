import React from "react";
import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";

export default function ToDoList() {
  return (

        <SafeAreaView>
            <ScrollView>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Wake up at 6:30 AM</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task]}>
                        <Text style={styles.taskText}>Breakfast</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Plan out daily goals and priorities</Text>
                    </View>
                </Pressable>
            <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>School time</Text>
                </View>
               <Pressable>
                 <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Attend team meeting</Text>
                </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>complete household chores</Text>
                </View>
                </Pressable> 
                </ScrollView>
                </SafeAreaView>
                    );
}
const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});

                    
            