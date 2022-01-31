import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, useWindowDimensions } from "react-native";
import styles from "./styles";
import axios from "axios";
import HTML from "react-native-render-html";




const Home = () => {
  const [feed, setFeed] = useState([]);

  // get our feed
  useEffect(() => {
    async function apiBrasilianista() {
      const res = await axios.get("https://obrasilianista.com.br/wp-json/wp/v2/posts");
      setFeed(res.data)
    }
    apiBrasilianista()
  }, []);
   
  
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>O Brasilianista</Text>
     

      <View style={styles.mainPostView}>

        <FlatList
          data={feed}
          keyExtractor={(item) => { return item.id }}
          renderItem={({ item }) => (
            <View style={styles.posts}>
              <Text style={styles.txtNews}>{item.title.rendered}</Text>
         <HTML source={{html:item.content.rendered}}/>
            </View>
          
           )
          }
        />
        
      </View>

    </View>
  );
};


export default Home;