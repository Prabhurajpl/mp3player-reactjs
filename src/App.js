import { createContext, useEffect, useState } from 'react';
import './App.css';
import Player from './Pages/Player/Player';
import { getTracks } from './Services/api';

export const MusicContext = createContext();


function App() {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const tracks = await getTracks();
      setMusics(tracks);
    };

    fetchTracks();
  }, []);
  return (
      <MusicContext.Provider value={musics}>
           <Player />
      </MusicContext.Provider>
  );
}

export default App;
