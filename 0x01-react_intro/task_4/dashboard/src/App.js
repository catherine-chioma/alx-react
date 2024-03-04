import './App.css';
import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const handleLabelClick = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };
  return (
    <>
      <div className='App-header'>
        <img src={logo} className='AppLogo' alt='logo' />
        <h1>School dashboard</h1>
      </div>
      <hr />
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email' onClick={() => handleLabelClick('email')}>
          Email:{' '}
        </label>
        <input type='email' id='email' />
        <label htmlFor='password' onClick={() => handleLabelClick('password')}>
          Password:{' '}
        </label>
        <input type='password' id='password' />
        <button>OK</button>
      </div>
      <hr />
      <div className='App-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}

export default App;
