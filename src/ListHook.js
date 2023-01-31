import { useState } from "react";
const useList = (arr) => {
  const [list, setList] = useState([...arr]);
  const push = (item) => {
    setList([item,...list]);
    localStorage.setItem("List",[item,...list]);
  };
  const pull = (index) => {
    let newList = list.filter((item, i) => {return index !== i});
    setList(newList);
    localStorage.setItem("List",newList);
  };
  return (
    [list, push, pull]
  );
};
export default useList;