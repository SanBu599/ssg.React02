import { Link } from 'react-router-dom';
function Home(){

    return(
      <div>
        <h1>Home</h1>
        <h3>Welcome to my world</h3>
        <Link to='/login' >로그인</Link>
      </div>
    )
  }
  export default Home;