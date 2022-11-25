import './App.css';
import Home from './pages/Home/Home';
import Tenant from './pages/Tenant/Tenant';
import Owner from './pages/Owner/Owner';
import AddProperty from './controller/AddProperty';
import {  BrowserRouter, Route, Routes} from 'react-router-dom'
import EditProperty from './controller/EditProperty';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tenant' element={<Tenant />} />
        <Route path='/owner' element={<Owner />} />
        <Route path='/addProperty' element={<AddProperty />} />
        <Route path='/EditProperty' element={<EditProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;