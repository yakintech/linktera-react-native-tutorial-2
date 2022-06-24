import { View, TextInput } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { Button } from 'react-native-paper'

const CategoryAddScreen = ({navigation}) => {



    const addNewCategory = (values) => {

        //Alınan değerleri fetch ile post edilecek ve listeleme ekranına redirect edilecek (dilerseniz ekranda alert de gösterebilirsiniz)

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }

        fetch("https://northwind.vercel.app/api/categories", requestOptions)
            .then(res => res.json())
            .then(data => {

                navigation.navigate("CategoryListSample")

            })

    }

    return (
        <>
            <Formik
                initialValues={{ name: '', description: '' }}
                onSubmit={values => addNewCategory(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            placeholder='Name'
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                        />

                        <TextInput
                            onChangeText={handleChange('description')}
                            onBlur={handleBlur('description')}
                            value={values.description}
                            placeholder='Description'
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                        />
                        <Button onPress={handleSubmit}>Add</Button>
                    </View>
                )}
            </Formik>

        </>
    )
}

export default CategoryAddScreen