import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Card, Paragraph, Title, Button, ActivityIndicator } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

//CategoryDetail Screen dışarıdan bir parametre olarak ID alacak ve webservice bu id ile gidip categoryDetail objesini çekecek ve bir state e atayacak


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CategoryDetailScreen = ({ route, navigation }) => {

    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true)

    const { id } = route.params

    //Dışardan gelen id ye göre servise gidip veri çekmek istedim.

    useEffect(() => {

        // fetch("https://northwind.vercel.app/api/categories/" + id)
        fetch(`https://northwind.vercel.app/api/categories/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setDetail(data)
            })


    }, [])

    return (
        <>

            {
                loading == false ? <Card>
                    <Card.Title title={detail.name} left={LeftContent} />
                    <Card.Content>
                        <Title>Id: {detail.id}</Title>
                        <Title>Name: {detail.name}</Title>
                        <Paragraph>Description: {detail.description}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Delete</Button>
                    </Card.Actions>
                </Card> : <ActivityIndicator animating={loading} color='red' />

            }


        </>
    )
}

export default CategoryDetailScreen