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
        name: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%',
        rating: 4.5,
        reviews: 15,
        image: '../assets/images/Lb1.png',
    },
    {
        id: '2',
        name: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%',
        rating: 4.5,
        reviews: 15,
        image: '../assets/images/Lb2.png',
    },
    {
        id: '3',
        name: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%',
        rating: 4.5,
        reviews: 15,
        image: '../assets/images/Lb3.png',
    },
    {
        id: '4',
        name: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%',
        rating: 4.5,
        reviews: 15,
        image: '../assets/images/Lb4.png',
    },
    {
        id: '3',
        name: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%',
        rating: 4.5,
        reviews: 15,
        image: '../assets/images/Lb5.png',
    },
    {
        id: '3',
        name: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%',
        rating: 4.5,
        reviews: 15,
        image: '../assets/images/Lb6.png',
    },
];

// Thành phần sản phẩm
const ProductItem = ({ product }) => (
    <View style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <Text style={styles.productDiscount}>{product.discount}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.productRating}>★★★★ {product.rating}</Text>
                <Text style={styles.productReviews}>({product.reviews})</Text>
            </View>
        </View>
    </View>
);

const Lab4b = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.headerContainer}>
                <Icon name="arrow-back-outline" size={30} color="white" />
                <View style={styles.searchBar}>
                    <Icon name= 'search' size= {20}/>
                    <Text style={styles.searchText}>Dây cáp usb</Text>
                </View>
                <Feather name="shopping-cart" size={30} color="white" style={{paddingRight:20, paddingLeft:20}}/>
                <Feather name="more-horizontal" size={30} color="white" />
            </View>

            <FlatList
                data={products}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductItem product={item} />}
                contentContainerStyle={styles.productList}
            />

            <View style={styles.footerContainer}>
                <Feather name="menu" size={30} style={{ marginRight: 115, marginLeft: 10 }}/>
                <Octicons name="home-outline" size={34} style={{ marginRight: 105 }}/>
                <Entypo name="back" size={30} />
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5eb4ff',
        padding: 10,
        justifyContent: 'space-between',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        height:30,
        width:7
    },
    searchText: {
        fontSize: 16,
        color: '#000',
        paddingLeft: 10
    },
    productList: {
        padding: 10,
    },
    productContainer: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    productImage: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    productDetails: {
        paddingVertical: 5,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 14,
        color: '#000',
    },
    productDiscount: {
        fontSize: 12,
        color: 'red',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    productRating: {
        color: '#FFD700',
        marginRight: 5,
    },
    productReviews: {
        color: '#555',
    },
    footerContainer: {
        height: 60, // Đặt chiều cao cố định
        backgroundColor: '#8ac9f2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Canh giữa các icon theo chiều ngang
        paddingHorizontal: 20,
    },
});

export default Lab4b;
