import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoCont extends Component {
  state = {
    videoTitle: "Learn React Begginers"
  };

  render() {
    return (
      <div className="videoContent col-lg-8">
        <h2>Video Title : {this.state.videoTitle}</h2>
        <ReactPlayer
          url="https://www.w3schools.com/html/mov_bbb.mp4"
          playing="false"
          controls="true"
          playbackRate={true}
          pip="true"
          config={{
            file: {
              tracks: [
                {
                  kind: "subtitles",
                  src: "subs/subtitles.en.vtt",
                  srcLang: "en",
                  default: true
                },
                {
                  kind: "subtitles",
                  src: "subs/subtitles.ja.vtt",
                  srcLang: "ja"
                },
                {
                  kind: "subtitles",
                  src: "subs/subtitles.de.vtt",
                  srcLang: "de"
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default VideoCont;
