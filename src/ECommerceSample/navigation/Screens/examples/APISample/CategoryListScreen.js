import { View, Text } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import { ActivityIndicator, Button, List } from 'react-native-paper';

const CategoryListScreen = ({ navigation }) => {

    //Bu ekranda web api den verileri çekip aşağıda listeleyeceğiz.
    //Verileri çektikten sonra bir state üstünde saklayacağım.
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    //res.json ile gelen response u okudum ve içeriğini (BODY) bir sonraki then e fırlattım

    //Belirli state değişimi veya belirli koşullarda çalışacak kod bloklarımı useEffect ile belirledim.
    //Dependency boş bir dizi ise useEffect sadece bir kez çalışır!!
    useEffect(() => {
        getCategories();
    }, []);


    const getCategories = () => {
        fetch("https://northwind.vercel.app/api/categories")
            .then(res => res.json())
            .then((data) => {

                setCategories(data);
                setLoading(false);

            })
    }

    //Butona tıklandığında bu metot çalışacak ve webapi ye bir delete request atacak
    const deleteCategory = (id) => {

        //Fetch eğer sadece url parametresi alırsa default olarak GET isteği yapmaktadır.
        fetch("https://northwind.vercel.app/api/categories/" + id, { method: 'DELETE' })
        .then(res => res.json())
        .then((data) => {

            getCategories();

        })


    }


    const goToDetail = (id) => {

        navigation.navigate("CategoryDetailSample", { id: id })

    }


    return (
        <View>
            <ActivityIndicator animating={loading} color='red' />

            {
                categories && !loading && categories.map((item, key) => {
                    return <Fragment key={item.id}><List.Item
                        onPress={() => goToDetail(item.id)}
                        title={item.name}
                        description={item.description}
                        left={props => <List.Icon {...props} icon="folder" />}
                    />
                        <Button onPress={() => deleteCategory(item.id)}>Delete</Button>
                    </Fragment>
                })
            }
        </View>
    )
}

export default CategoryListScreen