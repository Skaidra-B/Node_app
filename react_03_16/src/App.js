import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import mainContext from "./context/mainContext";
import AllProductsPage from "./pages/AllProductsPage";
import AuthPage from "./pages/AuthPage";
import SingleProductPage from "./pages/SingleProductPage";
import FilterPage from "./pages/FilterPage";
import CreatePage from "./pages/CreatePage";
import Toolbar from "./components/Toolbar";
import React, {useEffect, useState} from 'react';
import http from "./plugins/http";

function App() {

  const [logged, setLogged] = useState(null)
  const [value, setValue] = React.useState([200, 400]);
  const [valueDateRange, onChange] = useState([new Date(), new Date()]);
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged')
    const email = localStorage.getItem('email')

    http.get(`/staysLogged/${isLogged}/${email}`).then(res => {
      console.log(res)
      if(res.success) {
        setLogged(res.user.email)
      }
    })

  }, [])


  return (
    <div>
      <mainContext.Provider value={{
        logged,
        setLogged,
        value,
        setValue,
        filteredProducts,
        setFilteredProducts,
        valueDateRange,
        onChange
      }}>
        <BrowserRouter>
          <Toolbar logged={logged} setLogged={setLogged}/>
          <Routes>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/create" element={<CreatePage/>}/>
            <Route path="/product/:id" element={<SingleProductPage/>}/>
            <Route path="/" element={<AllProductsPage/>}/>
            <Route path="/filter" element={<FilterPage/>}/>
          </Routes>
        </BrowserRouter>
      </mainContext.Provider>
    </div>
  );
}

export default App;
