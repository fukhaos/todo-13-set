import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ITodoItem {
    title: string;
}

const TodoItem = ({ title }: ITodoItem) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Ionicons name="bookmark-outline" size={24} color="black" />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TodoItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderColor: '#c4c4c4',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        backgroundColor: '#e4e4e4',
        height: 50,
        width: '100%'
    },
    title: {
        marginLeft: 10,
        fontSize: 16,
    }
})