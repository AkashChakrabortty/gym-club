import './App.css';
import Logo from './Components/Logo/Logo';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="left-div col-8 border border-primary">
         <Logo></Logo>
         <h3>Select today's exercise</h3>
       </div>

       <div className="right-div col-4 border border-primary">
         right
       </div>
      </div>
    </div>
  );
}

export default App;
