import { View, Text, ScrollView } from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ActivityIndicator, Button, List } from 'react-native-paper'
import { cartContext } from '../../../store/cartContext'
import { setCartStore } from '../../../service/storage/cartStorage'

const ProductMainScreen = ({ navigation }) => {

    const { cart, setCart } = useContext(cartContext)
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(true)
    //Web servisten productları axios ile çekip bir state e atayacağım.

    useEffect(() => {

        getProducts();

    }, [])


    const getProducts = () => {
        axios.get("https://northwind.vercel.app/api/products")
            .then((res) => {
                setloading(false)
                setProducts(res.data)
            })
    }

    const deleteProduct = (id) => {

        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(result => {
                getProducts();
            })
    }

    const goToDetail = (id) => {

        navigation.navigate("ProductDetail", { id: id })
    }


    //Bu fonksiyon ile global state i güncelleyeceğiz

    const addToCart = (item) => {

        //Sepette ürün var mı onu kontrol ediyorum.

        let cartProduct = cart.find(q => q.id == item.id);

        if (cartProduct) {
            //ürün sepette varsa ürünün sepetteki adedi bir arttırılır.

            cartProduct.quantity = cartProduct.quantity + 1;
            setCartStore([...cart])
            setCart([...cart])
    

        }
        else {

            let newCartProduct = {
                id: item.id,
                quantity: 1,
                name: item.name,
                unitPrice: item.unitPrice
            }

            setCartStore([...cart, newCartProduct])
            setCart([...cart, newCartProduct])
          
        }

    }


    return (
        <ScrollView>

            <ActivityIndicator animating={loading} color='red' />

            {
                products && !loading && products.map((item, key) => {
                    return <Fragment key={item.id}><List.Item
                        onPress={() => goToDetail(item.id)}
                        title={item.name}
                        description={item.unitPrice.toFixed(2)}
                        left={props => <List.Icon {...props} icon="hamburger" />}
                    />
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <Button icon='delete' onPress={() => deleteProduct(item.id)}>Delete</Button>
                            <Button icon='cart' onPress={() => addToCart(item)}>Add To Cart</Button>
                        </View>


                    </Fragment>
                })
            }

        </ScrollView>
    )
}

export default ProductMainScreen