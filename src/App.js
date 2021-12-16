import { useState } from 'react';
import './App.css';
import Temperatura from './components/Temperatura';

const api = {
  key: "API-KEY-HERE",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [tempo, setTempo] = useState({});

  const search = async event => {
    if (event.key === 'Enter') {
      const response = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=pt_br`);
      const tempoJson = await response.json();
      setTempo(tempoJson);
      setQuery('');
    }
  }

  return (
    <>
      <div className='app'>
        <main >
          <div className='search-box'>
            <input
              type="text"
              className="search-bar"
              placeholder="Pesquisar..."
              onChange={e => setQuery(e.target.value)}
              onKeyPress={search}
            />
          </div>
          {(typeof tempo.main != "undefined") && (
            <Temperatura
              cidade={tempo.name}
              pais={tempo.sys.country}
              temperatura={tempo.main.temp}
              tempo={tempo.weather[0].description}
            />
          )}
        </main>
      </div>
    </>
  );
}

export default App;