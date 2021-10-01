import React, { useEffect } from "react";
import { playAudio } from "../PlayAudio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
export default function Player({
  audioRef,
  currentSong,
  isPlaying,
  setIsplaying,
  songInfo,
  setSongInfo,
  songs,
  SetCurrentSong,
  setSong,
}) {
  //Effect Handler
  useEffect(() => {
    //Add the active state
    const newSong = songs.map((song) => {
      if (song.id === currentSong.id) {
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
  }, [currentSong]);
  //Event Handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsplaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsplaying(!isPlaying);
    }
  };
  //Drag Handler
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  //get Time
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-back") {
      SetCurrentSong(songs[(currentIndex + 1) % songs.length]);
      playAudio(isPlaying, audioRef);
    }
    if (direction === "skip-forward") {
      if ((currentIndex - 1) % songs.length === -1) {
        SetCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      SetCurrentSong(songs[(currentIndex - 1) % songs.length]);
      playAudio(isPlaying, audioRef);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}
