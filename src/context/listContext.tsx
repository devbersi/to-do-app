import React, { createContext, useState } from "react";

interface ListContextData {
  list: any;
  setList: any;
  deletedList: any;
  setDeletedList: any;
  concluedList: any;
  setConcluedList: any;
  handleSaveTask: any;
  handleDeleteTask: any;
  handleUpdateTask: any;
  handleConcluedTask: any;
  handleDeleteAllDeleteds: any;
  handleDeleteAllConclueds: any
}

export const ListContext = createContext<ListContextData>(
  {} as ListContextData
);

export const ListProvider = ({ children }: any) => {
  const [list, setList] = useState<any>([]);
  const [deletedList, setDeletedList] = useState<any>([]);
  const [concluedList, setConcluedList] = useState<any>([]);


 
  const handleSaveTask = (name: string) => {
    const newArr = Array.from(list);
    newArr.push({ id: list.length, name: name });
    setList(newArr);
  };

  const handleDeleteTask = (index: number) => {
    const newArr = Array.from(list);
    const deleted = newArr.splice(index, 1);
    setList(newArr);
    deletedList.push(deleted)
    setDeletedList(deletedList)
  };

  const handleUpdateTask = ({ target }, index) => {
    const newArr = Array.from(list);
    newArr.splice(index, 1, { id: index, name: target.value });
    setList(newArr);
  };

  const handleConcluedTask = (index: number) => {
    const newArr = Array.from(list)
    const conclued = newArr.splice(index, 1);
    setList(newArr)
    concluedList.push(conclued)
    setConcluedList(concluedList)
  }

  const handleDeleteAllDeleteds = () => {
    setDeletedList([])
  }

  const handleDeleteAllConclueds = () => {
    setConcluedList([])
  }

  return (
    <ListContext.Provider
      value={{
        list,
        setList,
        deletedList,
        setDeletedList,
        concluedList,
        setConcluedList,
        handleSaveTask,
        handleDeleteTask,
        handleUpdateTask,
        handleConcluedTask,
        handleDeleteAllDeleteds,
        handleDeleteAllConclueds
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
