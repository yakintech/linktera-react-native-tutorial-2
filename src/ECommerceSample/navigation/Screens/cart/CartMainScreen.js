import { View } from 'react-native'
import React, { Fragment, useContext } from 'react'
import { cartContext } from '../../../store/cartContext'
import { Button, List, Text } from 'react-native-paper';

const CartMainScreen = () => {

  const { cart, setCart } = useContext(cartContext);

  let totalPrice = 0;

  cart.forEach(element => {
    
    totalPrice = totalPrice + element.unitPrice * element.quantity;

  });


  const deleteCart = (id) => {

    let newCartProducts = cart.filter(q => q.id != id);

    setCart([...newCartProducts])

  }

  return (
    
    <View>
       <Text style={{fontSize:20, fontWeight:'bold'}}>Total Price: {totalPrice.toFixed(2)}</Text>
       <Button onPress={() => setCart([])}>Remove All</Button>

      {
        cart && cart.map((item, key) => {
          return <Fragment key={item.id}>
            <List.Item
              title={item.name}
              description={item.quantity + " * " + item.unitPrice.toFixed(2) + " = " + (item.quantity * item.unitPrice).toFixed(2)}
              left={props => <List.Icon {...props} icon="hamburger" />}
            />
            <View>
              <Button icon='delete' onPress={() => deleteCart(item.id)}>Delete</Button>
            </View>


          </Fragment>
        })
      }
    </View>
  )
}

export default CartMainScreen