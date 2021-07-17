 
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="text-center">
      <header className="container">
      <h1 className="text-center my-4">AFFICHAGE DES DONNEES D'API</h1>
      <h5><a href="https://github.com/brahimezzdini/API-React-checkpoint.git">Source code on GITHUB</a> </h5><br/>
      <UserList/>
      </header>
    </div>
  );
}

export default App;
