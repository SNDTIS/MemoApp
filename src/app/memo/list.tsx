import { JSX } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'

import Icon from '../../components/Icon'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const navigation = useNavigation()
    navigation.setOptions({
        headerRight: () => { return <Text>Test</Text> }
    })
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton onPress={ handlePress }>
                <Icon name='plus' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default List
