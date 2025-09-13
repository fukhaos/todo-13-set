import { styles } from "@/components/styles";
import SuperButton from "@/components/superButton";
import SuperTextInput from "@/components/superTextInput";
import SuperTitle from "@/components/superTitle";
import { ITodoItem, TodoItem } from "@/components/todoItem";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function Index() {

  const [newItem, setNewItem] = useState<string>("");
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const addItem = () => {
    //criar um novo item
    const item: ITodoItem = {
      id: Date.now().toString(),
      title: newItem,
      completed: false
    }
    //adicionar o item na lista
    setTodos([...todos, item]);

    //limpar o input
    setNewItem("");
  }

  const updateTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    });
  }

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        if (todo.id == id) {
          return false;
        }
        return true;
      })
    });
  }


  return (
    <ScrollView style={styles.container}>
      <SuperTitle title="Adicione um item" />
      <SuperTextInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="Adicionar" disabled={newItem.length <= 3} onPress={addItem} />

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}


    </ScrollView >
  );
}
