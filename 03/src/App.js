import './App.css';
import Header from './functions/Header';
import Footer from './functions/Footer';
import Home from './Home';
import Item from './Item';
import ItemList from './ItemList';
import Login from './Login';

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='ItemList' element={<ItemList/>}/>
          <Route path='Item' element={<Item/>}/>
          <Route path='Login' element={<Login/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default App;