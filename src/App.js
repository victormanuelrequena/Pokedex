import { ApiProvider } from './context/apiContext';
import './App.css';

import TopBar from './components/topBar/TopBar';
import Pokemon from './components/pokemon/Pokemon';

function App() {
  return (
    <ApiProvider>
      <div className="App">
        <TopBar />
        <Pokemon />
      </div>
    </ApiProvider>
  );
}

export default App;
