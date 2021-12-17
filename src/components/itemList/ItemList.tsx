import axios from "axios";
import React, { useState, useEffect } from "react";

type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TItem = {
  id: number;
  title: string;
};

type TResource = "todos" | "posts";

const ItemList: React.VFC = () => {
  const [items, setItems] = useState<TItem[]>([]);
  const [resource, setResource] = useState<TResource>("todos");
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
        console.log(response);
        const itemData: TItem[] = response.data.map(
          (responseDate: TTodo | TPost) => {
            return { id: responseDate, title: responseDate.title };
          }
        );
        setItems(itemData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, [resource]);
  const onTodoButtonClick = () => {
    setResource("todos");
  };
  const onPostButtonClick = () => {
    setResource("posts");
  };
  return (
    <div>
      <button onClick={() => onTodoButtonClick()}>Todos</button>
      <button onClick={() => onPostButtonClick()}>Posts</button>
      <ul>
        {items.map((item, i) => (
          <li key={`item_${item.id}_${i}`}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
