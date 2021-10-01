import React, { useState, useRef } from "react";
import "./styles/app.scss";
//Adding Componets
import Song from "./components/Song";
import Player from "./components/Player";
import Libary from "./components/Libary";
import Nav from "./components/Nav";
//import Util
import Data from "./util";
import { playAudio } from "./PlayAudio";

function App() {
  //Rferene
  const audioRef = useRef(null);
  //State
  const [songs, setSong] = useState(Data());
  const [currentSong, SetCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsplaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Song Info Handler
  const TimeHnadler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  const songEndHandler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    SetCurrentSong(songs[(currentIndex + 1) % songs.length]);
    playAudio(isPlaying, audioRef);
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsplaying={setIsplaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        SetCurrentSong={SetCurrentSong}
        setSong={setSong}
      />
      <Libary
        songs={songs}
        SetCurrentSong={SetCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSong={setSong}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={TimeHnadler}
        onTimeUpdate={TimeHnadler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
