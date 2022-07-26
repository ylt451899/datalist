import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Modal, Button} from 'react-native';
import { MOCK_DATA } from '../data/data';

export default function HomeScreen(props) {
    const [dataSource, setDataSource] = useState([])
    const [isVisible, setIsVisible] = useState(false);
    const [evolutionName, setEvolutionName] = useState('');
    const [pokemonName, setPokemonName] = useState('') ;
    useEffect(()=>{
        setDataSource(MOCK_DATA)
    },[])
    const showNoticeDetail = (cases) => {
        props.navigation.push('神奇寶貝詳情',{passProps:cases})
    }
    const toggleModal = (cases) => {
      setPokemonName(cases.note)
      setEvolutionName(cases.evolutionImage)
      setIsVisible(!isVisible);
    }
    const renderBook = (cases) => {
        return(
            <TouchableOpacity onPress = {()=> showNoticeDetail(cases)} onLongPress={()=>{toggleModal(cases)}}> 
                <View>
                    <View style={[styles.MainView,{backgroundColor:cases.color}]}>
                        <Image source={cases.image} 
                            style={styles.Image}
                        />
                        <View style={{flex:1}}>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black',fontSize:20,marginTop:8}}>
                                {cases.note}
                            </Text>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{fontSize:13,marginTop:12,marginBottom:8}}>
                                {'屬性:'+cases.attributes}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
  return (
    <View>
        <FlatList
            data={dataSource}
            renderItem={(cases) => renderBook(cases.item)}
            keyExtracto={cases => cases.id}
            style={{backgroundColor:'white'}}
        />
        <Modal visible={isVisible} animationType={'fade'} transparent={true} >
          <View style={{alignItems: 'center',justifyContent: 'center',height:735,backgroundColor:'#000000AA'}}>
            <View style={styles.Modal}>
              <Text style={{marginTop:30,fontSize:35,color:'black',textAlign:'center'}}>{pokemonName+"所有進化型態"}</Text>
              <Image source={evolutionName} style={styles.evolutionImage} resizeMode={'contain'}></Image>
              <Button title="返回" onPress={()=>{toggleModal('')}} />
            </View>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainView:{
    margin:10,
    height:100,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding:8,
    borderRadius:25,
  },
  Modal:{
    margin:20,
    borderRadius:20,
    backgroundColor:'white',
    justifyContent: 'center',
  },
  Image:{
    width:50,
    height:60,
    marginRight:20,
  },
  evolutionImage:{
    width:390,
    height:390,
  }
});
