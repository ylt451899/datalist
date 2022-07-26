import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default function HomeDetail(props) {
    const passProps = props.route.params.passProps || 'nothing get'

    const showArea = (cases) => {
      const area = []
      const color = ['#FF9D6F','#F9F900','#28FF28','#2894FF','#BEBEBE','#97CBFF','#BE77FF','#8E8E8E']
      for(let i =0;i<cases.length;i++){
        area.push(
          <View style={[styles.area,{backgroundColor:color[i]}]}>
            <Text style={{fontSize:15}}>{cases[i]}</Text>
          </View>
        )
      }
      return(area)
    }

    const showBasePoint = () => {
      const basePoint = []
      const color = ['#64A600','#FFDC35','#FF8000','#97CBFF','#8080C0','#8F4586']
      for(let i =0;i<color.length;i++){
        basePoint.push(
          <View style={[styles.basePoint,{backgroundColor:color[i]}]}>
            <Text>{passProps.basePoint[i]}</Text>
            <Text style={{fontSize:15}}>{passProps.point[i]}</Text>
          </View>
        )
      }
      return(basePoint)
    }

    const showSomePrint = () => {
      const printList = []
      const text = [['屬性','分類'],['身高','體重'],['圖鑑顏色','捕獲率']]
      const textProps = [[passProps.attributes,passProps.pokemonSort],[passProps.height,passProps.weight],[passProps.colorName,passProps.captureRate]]
      for(let i =0;i<text.length;i++){
        printList.push(
          <View style={{flexDirection:'row',marginTop:10}}>
            <View style={[styles.outBox,{width:120,backgroundColor:passProps.outBoxColor,height:50}]}>
              <Text style={{fontWeight:'bold'}}>{text[i][0]}</Text>
              <View style={[styles.inBox,{width:120,height:25}]}>
                {}
                <Text>{textProps[i][0]}</Text>
              </View>
            </View>
            <View style={[styles.outBox,{width:120,backgroundColor:passProps.outBoxColor,height:50}]}>
              <Text style={{fontWeight:'bold'}}>{text[i][1]}</Text>
              <View style={[styles.inBox,{width:120,height:25}]}>
                <Text>{textProps[i][1]}</Text>
              </View>
            </View>
          </View>
        )
      }
      return(printList)
        
    }
  return (
    <ScrollView>
        <View style={[styles.container,{backgroundColor:passProps.color,borderColor:passProps.borderColor,borderWidth:2}]}>
            <View style={[styles.View]}>

              <View style={{flexDirection:'row',width:240,marginTop:10}}>
                <View style={[styles.pokemonId,{borderColor:passProps.borderColor,borderWidth:2,width:150}]}>
                  <Text style={{fontSize:25,fontWeight:'bold'}}>{passProps.note}</Text>
                  <Text style={{fontSize:15}}>{passProps.note2}</Text>
                </View>
                <View style={[styles.pokemonId,{borderColor:passProps.borderColor,borderWidth:2,width:90}]}>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>{passProps.pokemonId}</Text>
                </View>
              </View>

              <View style={{backgroundColor:'white',borderRadius:20,marginTop:10,borderColor:passProps.borderColor,borderWidth:2}}>
                <Image source={passProps.image} style={styles.Image}/>
              </View>

              {showSomePrint()[0]}

              <View style={{flexDirection:'row',marginTop:10}}>
                <View style={[styles.outBox,{backgroundColor:passProps.outBoxColor,width:240,height:50}]}>
                  <Text style={{fontWeight:'bold'}}>特性</Text>
                  <View style={{flexDirection:'row'}}>
                    <View style={[styles.inBox,{width:120,height:30}]}>
                      <Text>{passProps.special[0]}</Text>
                    </View>
                    <View style={[styles.inBox,{width:120,height:30}]}>
                      <Text>{passProps.special[1]+"\n"}</Text>
                      <Text>{passProps.special[2]}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[styles.outBox,{backgroundColor:passProps.outBoxColor,width:240,marginTop:10}]}>
                <Text style={{fontWeight:'bold'}}>100級時經驗值</Text>
                <View style={[styles.inBox,{width:240,height:25}]}>
                  <Text>{passProps.level100Experience}</Text>
                </View>
              </View>

              <View style={[styles.outBox,{backgroundColor:passProps.outBoxColor,width:240,marginTop:10}]}>
                <Text style={{fontWeight:'bold'}}>地區圖鑑編號</Text>
                <View style={[styles.inBox,{width:240}]}>
                  {showArea(passProps.area)}
                </View>
              </View>

              {showSomePrint()[1]}

              {showSomePrint()[2]}
              <View style={{flexDirection:'row',marginTop:10}}>
                <View style={[styles.outBox,{width:120,backgroundColor:passProps.outBoxColor,height:60}]}>
                  <Text style={{fontWeight:'bold'}}>體型</Text>
                  <View style={[styles.inBox,{width:120,height:30}]}>
                    <Image source={passProps.bodyType} style={{height:30}} resizeMode={'contain'}></Image>
                  </View>
                </View>
                <View style={[styles.outBox,{width:120,backgroundColor:passProps.outBoxColor,height:60}]}>
                  <Text style={{fontWeight:'bold'}}>腳印</Text>
                  <View style={[styles.inBox,{width:120,height:30}]}>
                  <Image source={passProps.footPrint} style={{height:30}} resizeMode={'contain'}></Image>
                  </View>
                </View>
              </View>

              <View style={{flexDirection:'row',marginTop:10}}>
                <View style={[styles.outBox,{backgroundColor:passProps.outBoxColor,width:240,height:50}]}>
                  <Text style={{fontWeight:'bold'}}>培育</Text>
                  <View style={{flexDirection:'row'}}>
                    <View style={[styles.inBox,{width:120,height:30}]}>
                      <Text>{passProps.nurture[0]}</Text>
                    </View>
                    <View style={[styles.inBox,{width:120,height:30}]}>
                      <Text>{passProps.nurture[1]+"\n"}</Text>
                      <Text>{passProps.nurture[2]}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[styles.outBox,{backgroundColor:passProps.outBoxColor,width:240,marginTop:10}]}>
                <Text style={{fontWeight:'bold'}}>取得基礎點數</Text>
                <View style={[styles.inBox,{width:240,flexDirection:'row'}]}>
                  {showBasePoint()}
                </View>
              </View>

            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:10,
    flex: 1,
    borderRadius:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View:{
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:30,
  },
  pokemonId:{
    backgroundColor:'white',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image:{
    marginTop:10,
    width:240,
    height:240,
  },
  outBox:{
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inBox:{
    borderRadius:10,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  area:{
    width:100,
    height:20,
    borderRadius:10,
    marginTop:3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  basePoint:{
    width:35,
    height:50,
    borderRadius:10,
    margin:2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
