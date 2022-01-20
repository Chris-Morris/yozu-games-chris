import { Text, StyleSheet } from 'react-native';
import FotAwesome5 from 'react-native-vector-icons/FontAwesome5';
const YozuGames = () => {
    return (
        <>
            <FotAwesome5 name="dice" color="#FEC145" size={30} />
            <Text style={styles.greeting} >Yozu Games</Text>
        </>
    )
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
        marginBottom: 30,
        textAlign: 'center',
        color: '#FEC145'
    }
});

export default YozuGames;