import { View, Text, ScrollView } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { ActivityIndicator, Button, List } from 'react-native-paper'

const ProductMainScreen = ({ navigation }) => {

    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(false)
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
                            <Button icon='cart' onPress={() => deleteCategory(item.id)}>Add To Cart</Button>
                        </View>


                    </Fragment>
                })
            }

        </ScrollView>
    )
}

export default ProductMainScreen