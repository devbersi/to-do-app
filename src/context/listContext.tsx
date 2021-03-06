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
  handleDeleteAllConclueds: any;
  handleReturnConcluedForList: any;
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

  const handleReturnConcluedForList = (index: number) => {
    const newArr = Array.from(concluedList)
    const ret = newArr.splice(index, 1);
    setConcluedList(newArr)
    console.log('reeet', ret)
    const parsed = Object.assign({}, ret)
    const parsedTwo = Object.assign({}, parsed[0])
    const parseFinal = parsedTwo[0]
    list.push(parseFinal)
    console.log("list", list)
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
        handleDeleteAllConclueds,
        handleReturnConcluedForList
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
