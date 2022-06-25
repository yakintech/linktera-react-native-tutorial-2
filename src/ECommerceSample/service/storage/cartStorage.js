import AsyncStorage from "@react-native-async-storage/async-storage";

export const setCartStore = async (value) => {

    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('cart', jsonValue)
    } catch (e) {
        console.log('cart Storage set value ERROR!',e);
    }
}


export const getCartStore = async () => {

    try {
       
        const jsonValue = await AsyncStorage.getItem('cart')
        console.log('getCartStore3');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('cart Storage get value ERROR!',e);

    }
}
