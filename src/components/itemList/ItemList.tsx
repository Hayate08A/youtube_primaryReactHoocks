import React, { useState, useEffect } from "react";

type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TPostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TItem = {
  id: number;
  title: string;
};

const ItemList: React.VFC = () => {
  const [items, setItems] = useState<TItem[]>([]);
  return <div></div>;
};

export default ItemList;
