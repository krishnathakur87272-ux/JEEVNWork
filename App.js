import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Workers from './components/Workers';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Container, Navbar, Nav } from 'react-bootstrap';
function App(){
  const [user, setUser] = useState(null);
  useEffect(()=> {
    const unsub = onAuthStateChanged(auth, u => setUser(u));
    return unsub;
  },[]);
  return (
    <BrowserRouter>
      <Navbar bg='light' expand='lg' className='mb-3'>
        <Container>
          <Navbar.Brand as={Link} to='/'>JeevanWork</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/jobs'>Find Work</Nav.Link>
            <Nav.Link as={Link} to='/workers'>Hire Workers</Nav.Link>
            <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/workers' element={<Workers/>} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin/panel' element={user ? <AdminPanel/> : <AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
