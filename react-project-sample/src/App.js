// import react from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './main.css';  // footer를 하단에 고정
import Home from './component/Home';
import Bbslist from './bbs/Bbslist';
import Bbswrite from './bbs/Bbswrite';
import Bbsdetail from './bbs/Bbsdetail';
import Login from './member/Login.js';

import openholy from './asset/open-holy.jpg';
import Bbsupdate from './bbs/Bbsupdate';
import Bbsanswer from './bbs/Bbsanswer';

function App() {
  return (
    <div>
      <header className='py-4'>
        <div className='container text-center'>
          <img alt='no' src={ openholy } width='960' height='150' />
        </div>
      </header>

      <BrowserRouter>

        <nav className='navbar navbar-expand-md navbar-dark bg-info sticky-top'>
          <div className='container'>

            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav mr-auto">

                  <li className='nav-item'>
                    <Link className='nav-link' to="/">Home</Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-link' to="/bbslist">게시판</Link>
                  </li>

                </ul>  
            </div>

          </div>

        </nav>

        <main>
          <div className='py-4'>
            <div className='container'>

              <Routes>

                <Route path='/' element={<Home />} />

                <Route path='/bbslist' element={<Bbslist /> } />
                <Route path='/bbswrite' element={<Bbswrite />} />
                <Route path='/bbsdetail/:seq' element={<Bbsdetail />} />
                <Route path="/bbsupdate/:seq" exact element={<Bbsupdate />}></Route>
                <Route path="/bbsanswer/:seq" exact element={<Bbsanswer />}></Route>

                <Route path='/login' element={<Login />} />

              </Routes>

            </div>
          </div>

        </main>

      </BrowserRouter>

      <footer className="py-4 bg-info text-light">
        <div className="container text-center">
          <ul className="nav justify-content-center mb-3">

            <li className='nav-item'>
              <a className='nav-link' href='/'>Top</a>
            </li>

          </ul>
          <p>
            <small>Copyright &copy;Graphic Arts</small>
          </p>
        </div>  
      </footer>

    </div>
  );
}

export default App;
