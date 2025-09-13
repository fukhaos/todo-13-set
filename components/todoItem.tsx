import Ionicons from '@expo/vector-icons/Ionicons';
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

export interface ITodoItem {
    id: string;
    title: string;
    completed: boolean;
}

interface Item {
    todo: ITodoItem;
    updateTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

export const TodoItem = ({ todo, updateTodo, deleteTodo }: Item) => {

    const handleUpdate = () => {
        updateTodo(todo.id);
    }

    const handleDelete = () => {
        Alert.alert
            ("Deletar ?",
                "Realmente quer apagar ?",
                [
                    { text: "Não" },
                    { text: "Sim", onPress: () => { deleteTodo(todo.id); } }
                ])

    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleUpdate} onLongPress={handleDelete}>
            <Ionicons name={todo.completed ? "bookmark" : "bookmark-outline"} size={24} color="black" />
            <Text style={styles.title}>{todo.title}</Text>
        </TouchableOpacity>
    )
}

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
        width: '100%',
    },
    title: {
        marginLeft: 10,
        fontSize: 16,
    }
})