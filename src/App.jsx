import './App.css';
import Header from "./my-components/Header";
import Todos from "./my-components/Todos";
import Footer from "./my-components/Footer";
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
  console.log("todo Deleted", todo);
  // let index= todos.indexOf(todo)
  // Todos.splice(index, 1)
  setTodos(todos.filter((e) =>{
    return e!==todo;

  })
);
};
  const [todos, setTodos]= useState([
    { sno: 1,
      title: " go to the market",
      desc: "you need to go to the market",
    },

     { sno: 2,
      title: " go to the mall",
      desc: "you need to go to the market",
    },
     { sno: 3,
      title: "go to the ghat",
      desc: "you need to go to the market",
    }
  ]);
  return (
   
     
      <>
      <Header />
      <Todos todos={todos} onDelete= {onDelete}/>
      <Footer />
   
      </>
  );
}

export default App;
