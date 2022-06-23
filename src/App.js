import { background, color } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  // const [counter, setCounter] = useState("hello");

  // const updateCounter = () => {
  //   console.log(counter)
  //   setCounter((prevState) => {
  //     if (prevState === "hello") return counter + "I";
  //     else {
  //       return counter + "J";
  //     }
  //   });
  // };

  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);

  return (
    <>
      {/* <h2>{counter}</h2> */}
      {/* <button onClick={updateCounter} style={{backgroundColor:"red"}}>Click Me!</button> */}
      {/* <Header /> */}
      <h1>To Do App</h1>
      <ToDoList/>
      {/* <ToDoForm/> */}
    </>
  );
}

export default App;
