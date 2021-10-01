import React from "react";
import { playAudio } from "../PlayAudio";

export default function LibarySongs({
  song,
  songs,
  SetCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSong,
}) {
  const selectSongHandler = () => {
    const SelectedSong = songs.filter((state) => state.id === id);

    SetCurrentSong(SelectedSong[0]);
    //Add the active state
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSong(newSong);
    //cHEKC IF THE SONG IS PLAYING
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={selectSongHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cov}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
