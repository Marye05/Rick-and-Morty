import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import style from "./App.module.css"
import Form from "./components/Form/Form.jsx"


function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    !access && navigate("/");
  },[access]);

  const username = "marye05@gmail.com";
  const password = "holapass123";

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "545e61f7d756.e8fdf4afb83939842464";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

    const login = (userData) => {
      if(userData.username === username && userData.password === password){
        setAccess(true);
        navigate("/home");
      } else {
        alert("Credenciales incorrectas");
      }
    }
  return (
    <div className={style.App}>
      <div className={style.Nav}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
  </div>
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
    
  );
}

export default App;
