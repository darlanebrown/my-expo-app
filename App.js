import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [items, setItems] = useState([
  
    {todo: 'first item'},
    {todo: 'second item'},

  ]);

  const [text, onChangeText] = useState("");

  const addItemToList = () => {
    if(text.length > 0 && isNaN(text)){
    setItems([...items, {todo: text}]);
    onChangeText("");
  }
 };
  const generateList = items.map((item, index) => (
    <View key={index}>
      <Text styles={styles.listItem}>{item.todo}</Text> 
     </View>
  
  ));
  const handleKeyPress = (e) => {
    if(e.nativeEvent.key ==="Enter") {
      addItemToList();
    }
  };
  
 
  
   
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>To Do's</Text>
       <ScrollView style={styles.scrollView} contentContainerStyle = {{ alignItems:"center"}}>
        <View style={styles.innerScroll}>{generateList}</View></ScrollView>
        <TextInput className="textInput" style={styles.TextInput} onChangeText={onChangeText}
        value={text}
        autoFocus={true}
        placeholder="Type entry here"
        onKeyPress={(e)=> handleKeyPress(e)} />
        <Button
          onPress={addItemToList}
          title="Add item"
          color="blue"
          style={styles.button}
        />
        <StatusBar style="auto"/>
        </View>
  );
}
    const styles = StyleSheet.create({
    container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'`#f0f8ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom:"2rem",
  },
  appTitle: {
    fontSize: '50px',
    fontWeight:'bold',
    padding: 20,
    marginTop:"2rem",
    height:'25vh',
  },
  listItemContainer: {
    alignItems: 'flex-start',
    width: '90%',
    padding: 20,
  },
  listItem: {
    width:"75",
    border:"2px solid green",
    borderRadius:"15px",
    padding:"1rem",
    margin:"1rem",
    fontSize:"1.5rem",
    textAlign:"center",
    backgroundColor:`#ffa07a`,
    maxWidth:350,

  },
  textInput:{
    width:"90npvw",
    height:"15vh",
    border:"2px solid rgb(21 71 132 / 40%)",
    marginBottom:"1rem",
    borderRadius:9,
    backgroundColor:"white,",
    textAlign:"center",
    maxWidth:400,
  },
  scrollView:{
    width:"100%",
    height:"50vh"
  },
  innerScroll: {
    alignItems:"center",
  },
});
