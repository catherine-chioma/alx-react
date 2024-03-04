import './App.css';
import logo from './logo.jpg';

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} className='AppLogo' alt='logo' />
        <h1>School dashboard</h1>
      </div>
      <hr />
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <hr />
      <div className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </div>
    </>
  );
}

export default App;
