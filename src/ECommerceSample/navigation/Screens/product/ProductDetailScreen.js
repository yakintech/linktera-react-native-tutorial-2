import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { ActivityIndicator, Avatar, Button, Card, TextInput, Title } from 'react-native-paper';
import { cartContext } from '../../../store/cartContext';

const LeftContent = props => <Avatar.Icon {...props} icon="hamburger" />


const ProductDetailScreen = ({ route }) => {

    const {cart, setCart} = useContext(cartContext)

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});
    const [count, setCount] = useState(0)

    const { id } = route.params

    useEffect(() => {

        axios.get(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
                setLoading(false)
                setDetail(res.data);
            })

    }, [])

    const addtoCart = (item) => {
        let cartProduct = cart.find(q => q.id == item.id);

        if (cartProduct) {
            //ürün sepette varsa ürünün sepetteki adedi bir arttırılır.

            cartProduct.quantity = cartProduct.quantity + count;
            setCart([...cart])

        }
        else {

            let newCartProduct = {
                id: item.id,
                quantity: count,
                name: item.name,
                unitPrice: item.unitPrice
            }

            setCart([...cart, newCartProduct]);
        }

    }
    
    return (
        <>
            {
                loading == false ? <Card>
                    <Card.Title title={detail.name} left={LeftContent} />
                    <Card.Content>
                        <Title>Id: {detail.id}</Title>
                        <Title>Name: {detail.name}</Title>
                        <Title>Price: {detail.unitPrice?.toFixed(2)}</Title>
                    </Card.Content>
                    <TextInput
                            label="Count"
                            value={count}
                            keyboardType='number-pad'
                            onChangeText={text => setCount(text)}
                            maxLength={2}
                        />
                    <Card.Actions>
                       
                        <Button onPress={() => addtoCart(detail)} icon='cart'>Add to cart</Button>
                    </Card.Actions>
                </Card> : <ActivityIndicator animating={loading} color='red' />

            }
        </>
    )
}

export default ProductDetailScreen