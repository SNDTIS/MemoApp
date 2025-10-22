import { JSX } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'

const Login = ():JSX.Element => {
    return (
        <View>
            <Header />
            <View>
                <Text>Log In</Text>
                <TextInput value='Email address'/>
                <TextInput value='Password'/>
                <View>
                    <Text>Submit</Text>
                </View>
                <View>
                    <Text>Not registered?</Text>
                    <Text>Sign up here</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1
    }
})

export default Login
