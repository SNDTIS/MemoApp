import { JSX } from "react";
import { TouchableOpacity, Text , StyleSheet} from "react-native";

const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity>
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
