import logo from './logo.svg';
import './App.css';
import FullPage from 'fullpage.js'

function App() {

  new FullPage('#fullpage', {

    autoScrolling:true,
    scrollHorizontally: true
  });
  
  return (
    <div className="fullpage">
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
    </div>
  );
}

export default App;
