import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
  <div id="div">
    <ul id="navbar" >
        <img src={logo} className="img"/>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Explore </li>
        <li>Blogs</li>
        <div id="button">
            <button className="btn" id="login">Log In</button>
            <button className="btn">Sign Up</button>
        </div>
    </ul>
</div>
  );
}

export default App;
