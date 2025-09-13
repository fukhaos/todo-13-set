import { styles } from "@/components/styles";
import SuperButton from "@/components/superButton";
import SuperTextInput from "@/components/superTextInput";
import SuperTitle from "@/components/superTitle";
import TodoItem from "@/components/todoItem";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {

  const [newItem, setNewItem] = useState("");

  return (
    <View style={styles.container}>
      <SuperTitle title="Adicione um item" />
      <SuperTextInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="Adicionar" disabled={newItem.length <= 3} />
      <TodoItem title="Todo Item" />

    </View >
  );
}
