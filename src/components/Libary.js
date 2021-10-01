import React from "react";
import LibarySongs from "./LibararySongs";

export default function Libary({
  songs,
  SetCurrentSong,
  audioRef,
  isPlaying,
  setSong,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibarySongs
            songs={songs}
            SetCurrentSong={SetCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSong={setSong}
          />
        ))}
      </div>
    </div>
  );
}
