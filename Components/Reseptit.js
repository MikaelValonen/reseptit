import React, {useState} from 'react';
import { Text, View, TextInput, Button, FlatList,Image } from 'react-native';
export default function Reseptit() {
  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);
  const getRepositories = () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
  .then(response => response.json())
  .then(data => setRepositories(data.meals))
  .catch(error => {
  Alert.alert('Error', error);
  });
  }
  return (
    <View>
    <TextInput style={{fontSize: 18, width: 200}} placeholder='keyword' value={keyword} onChangeText={text => setKeyword(text)}/>
    <Button title="Find" onPress= {getRepositories} />
    <FlatList keyExtractor={(item, index) => index.toString()} renderItem={({item}) =>
    <View>
    <Text style={{fontSize: 18, fontWeight: "bold"}}> {item.strMeal}</Text>
    <Image source = {{uri: item.strMealThumb}} style = {{ width: 200, height: 200}}/>
    </View>}  data={repositories} />
    </View>

  )
}
 