<<<<<<< Updated upstream
import React from "react";
import { View, Text, Button } from "react-native";

export function Cart({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cart Screen</Text>
    </View>
=======
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import back from "../../../../media/backList.png";
import cate1 from "../../../../media/cate1.jpg";
import AsyncStorage from "@react-native-community/async-storage";
var { width } = Dimensions.get("window")

const DATA = [
  {
    id: "1",
    name: "dong ho deo tay nam Apple",
    price: "100 USD",
    quantity: "1",
    color: "black",
  },
  {
    id: "2",
    name: "dong ho deo tay nam Apple 2",
    price: "150 USD",
    quantity: "1",
    color: "black",
  },
  {
    id: "31",
    name: "dong ho deo tay nam Apple 3",
    price: "170 USD",
    quantity: "2",
    color: "red",
  },
];
export function Cart() {
  const navigation = useNavigation();
  const [id, setId] = useState({ value: "" });
  const [name, setName] = useState({ value: "" });
  const [price, setPrice] = useState({ value: "" });
  const [quantity, setQuantity] = useState({ value: "" });
  const [id, setColor] = useState({ value: "" });

    
    constructor(props) {
     super(props);
     this.state = {
       dataCart:[],
     };
  } 
  componentDidMount() {
    AsyncStorage.getItem("Cart").then((Cart) => {
      if(Cart !== null)
      {
        const Cart =JSON.parse(cart)
        this.setState({setData:Cart})
      }
    })
    onChangeQual(i,type)
  {
    const dataCar = this.state.dataCart
    let cantd = dataCar[i].quantity;

    if (type) {
     cantd = cantd + 1
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd>=2){
     cantd = cantd - 1
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd==1){
     dataCar.splice(i,1)
     this.setState({dataCart:dataCar})
    } 
  }
  const {
    checkoutButton,
    checkoutTitle,
    container,
    wrapper,
    productStyle,
    mainRight,
    productController,
    txtName,
    txtPrice,
    productImage,
    numberOfProduct,
    showDetailContainer,
    backStyle,
    titleStyle,
    txtShowDetail,
  } = styles;
  
  return (
    <SafeAreaView style={container}>
      <View style={wrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("HOME_VIEW")}>
          <View style={{ flexDirection: "row" }}>
            <Image source={back} style={backStyle} />
            <Text style={titleStyle}>Go back</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={{ margin: 4 }}
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={productStyle}>
              <Image source={cate1} style={productImage} />
              <View style={[mainRight]}>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text style={txtName}>{item.name}</Text>
                  <TouchableOpacity>
                    <Text style={{ color: "#969696" }}>X</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>Gia: {item.price}</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{item.quantity}</Text>
                    <TouchableOpacity>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={showDetailContainer}>
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity style={checkoutButton}>
          <Text style={checkoutTitle} onPress={()=>this.onChangeQual(i,false)}>TOTAL 0.0$ CHECKOUT NOW </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
>>>>>>> Stashed changes
  );
}