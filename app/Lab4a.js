import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

// Danh sách sản phẩm mẫu
const products = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: '../assets/images/La1.jpg',
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI ...',
    shop: 'Shop LTD Food',
    image: '../assets/images/La2.jpg',
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: '../assets/images/La3.png',
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: '../assets/images/La4.jpg',
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: '../assets/images/La5.png',
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: '../assets/images/La6.png',
  },
  {
    id: '7',
    name: 'Donal Trump Thiên tài lãnh đạo',
    shop: 'USA',
    image: '../assets/images/La7.jpg',
  },
];

// Thành phần sản phẩm
const ProductItem = ({ product }) => (
    <View style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.shopName}>{product.shop}</Text>
        </View>
        <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
  </View>
);

// Thành phần chính
const Lab4a = () => {
    return (
        <View style={{flex:1}}>
            <View style={styles.containerHeader}>
                <Icon name="arrow-back-outline" color="white" size={45}/>
                <Text style={styles.textChat}>Chat</Text>
                <Feather name="shopping-cart" size={30} color="white"/>
            </View>

            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductItem product={item} />}
            />

            <View style={styles.containerFooter}>
                <Feather name="menu" size={30} style={{ marginRight: 115, marginLeft: 10 }}/>
                <Octicons name="home-outline" size={34} style={{ marginRight: 105 }}/>
                <Entypo name="back" size={30} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      containerHeader: {
        backgroundColor: '#8ac9f2',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      containerFooter: {
        height: 60, // Đặt chiều cao cố định
        backgroundColor: '#8ac9f2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Canh giữa các icon theo chiều ngang
        paddingHorizontal: 20,
      },
      productImage: {
        width: 50,
        height: 50,
        marginRight: 10,
      },
      productDetails: {
        flex: 1,
      },
      productName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      shopName: {
        color: 'gray',
      },
      chatButton: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
      },
      chatButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      textChat: {
        color: 'white',
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
      },
});

export default Lab4a;