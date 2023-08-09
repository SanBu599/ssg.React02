import {BrowserRouter, Routes, Route, Link, useParams, useNavigate} from 'react-router-dom';// npm install react-router-dom
import User from './component/User';

// React Router Dom -> location.href
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/about">About</Link>
          </ul>
          <ul>
            <Link to="/User">User</Link>
          </ul>
          <ul>
            <Link to="/Topics">Topics</Link>
          </ul>
          <ul>
            <Link to="/ABC">ABC</Link>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/about' element={<About />}></Route>
          
          <Route path='/User' element={<User />}></Route>

          <Route path='/Topics' element={<Topics />}></Route>

          <Route path='/Topics/:topId' exact element={<Topic />}></Route>

          <Route path='/ABC'  element={<ABC />}></Route>

          <Route path='/ABC/:A' exact element={<A />}></Route>
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

function Home(){
  return(
    <h1>Home</h1>
  )
}

function About(){
  return(
    <h2>About</h2>
  )
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to ="/topics/components">Components</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to ="/topics/props">props</Link>
        </li>
      </ul>
    </div>
  )
}
function ABC(){
  return (
    <div>
      <ul>
        <li>
          <Link to ="/ABC/A">A</Link>
        </li>
      </ul>
      <ul>
        <li>
        <Link to ="/ABC/B">B</Link>
        </li>
      </ul>
    </div>
  )
}

function A(){

  let { A } = useParams();

  return(
    <h1>값은 : { A }</h1>
  )
}

function Topic(){
  // parameter
  let { topId } = useParams();

  return(
    <h3>topic Id: { topId } </h3>
  )

}



export default App;
