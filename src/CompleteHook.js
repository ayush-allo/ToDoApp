import { useState } from "react";
const useComp = (arr) => {
  const [comp, setComp] = useState(arr.map((item,index)=>{
        if(item === 'true') return true;
        return false;
  }));
  const addcomp = () => {
    setComp([false,...comp]);
    localStorage.setItem("Complete",[false,...comp]);
  };
  const delcomp = (index) => {
    let newList = comp.filter((item, i) => {return index !== i});
    setComp(newList);
    localStorage.setItem("Complete",newList);
  };
  const changeComp = (index) => {
    let newList = comp.map((item, i) => {if(i === index) {return true} else {return item}})
    setComp(newList);
    localStorage.setItem("Complete",newList);   
  }
  return (
    [comp, addcomp, delcomp,changeComp]
  );
};
export default useComp;