import { JSX } from "react";
import { TouchableOpacity, Text , StyleSheet, Alert} from "react-native";
import { signOut } from "firebase/auth";
import { router } from "expo-router";

import { auth } from "../app/config";

const handlePress = (): void => {
    signOut(auth)
    .then(() => {
        router.replace('/auth/login')
    })
    .catch(() => {
        Alert.alert('Failed Logout.')
    })
}
const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: 'rgba(255, 255 ,255, 0.7)'
    }
})

export default LogOutButton
