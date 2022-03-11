
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './components/Navbar';


function App() {

  const [tasks, setTasks] = useState([]); 

  const addProduct = (newProduct) => {
    const found = tasks.find(task => task.id === newProduct.id)
    if (found === undefined) {
      setTasks([
        ...tasks,
        newProduct
      ]);
    } else {
      found.qty += newProduct.qty
    }
}
 console.log(tasks)
  return (
    <div>
      <BrowserRouter>
        <Navbar tasks={tasks} setTasks={setTasks} addProduct={addProduct} />
        <Routes>
          <Route path="/products/:id" element={<Product addProduct={addProduct} />} />
          <Route path="/" element={<Home  />} />)
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;