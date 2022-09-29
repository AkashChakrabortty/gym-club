import './App.css';
import Break from './Components/Break/Break';
import Details from './Components/Details/Details';
import Items from './Components/Items/Items';
import Logo from './Components/Logo/Logo';
import Owner from './Components/Owner/Owner';
import Questions from './Components/Questions/Questions';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="left-div col-9 border border-primary">
          <Logo></Logo>
          <h3>Select today's exercise</h3>
          <Items></Items>
       </div>

       <div className="right-div col-3 border border-primary">
         <Owner></Owner>
         <Break></Break>
         <Details></Details>
       </div>
      </div>

      <div className="questions">
        <Questions></Questions>
      </div>
    </div>
  );
}

export default App;
