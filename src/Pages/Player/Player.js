import React, {useContext, useState } from "react";
import { Howl } from "howler";
import { BASE_URL } from "../../utils/Constants";
import { MusicContext } from "../../App";


function Player() {
  const musics = useContext(MusicContext)
  const [currentTrack, setCurrentTrack] = useState(0);
  const [sound, setSound] = useState(null);

  const playTrack = (trackIndex) => {
    if (sound) {
        sound.stop();
        sound.unload();
      }
    const currentMusic = musics[trackIndex];
    //console.log("currentMusic",currentMusic)
    const newSound = new Howl({
      src: [`${BASE_URL}${currentMusic?.streamUrl}`],
      html5: true,
    });

    setSound(newSound);
    newSound.play();
    //console.log("Playing....");
  };

  const handlePlay = () => {
    playTrack(currentTrack);
  };

  const handlePause = () => {
    sound.pause()  
};

  const handleNext = () => {
    const nextIndex = (currentTrack + 1) % musics.length;
    setCurrentTrack(nextIndex);
    playTrack(nextIndex);
  };

  return (
    <div className="card" style={{width: "18rem",marginLeft:"500px",marginTop:"150px"}}>
    <div className="card-body">
      <h5 className="card-title">Music Player</h5>
      <h6 className="card-subtitle mb-2 text-muted">Now Playing..</h6>
      <p className="card-text">{musics[currentTrack]?.title}</p>
      <p className="card-text">{musics[currentTrack]?.artist}</p>
      <div className="h-50">
        <button className="btn btn-primary" onClick={handlePlay}>Play</button>
        <button className="btn btn-secondary ms-2" onClick={handlePause}>Pause</button>
        <button className="btn btn-info ms-2" onClick={handleNext}>Next</button>
      </div>
    </div>
  </div>

  );
}

export default Player;
