import React, { useState } from 'react';
import Player from 'components/Player';
import getClock from 'utils/getClick';

const AudioRecord = () => {
  const [isRecording, setisRecording] = useState(true);
  const [audioInfo, setAudioInfo] = useState([]);

  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();

  const handleOnRecording = () => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const analyser = audioContext.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    const makeSound = (stream) => {
      const source = audioContext.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (event) {
        if (event.playbackTime > 180) {
          stop();
          mediaRecorder.stop();
          audioContext.createMediaStreamSource(stream).disconnect();
          mediaRecorder.ondataavailable = function (event) {
            setAudioInfo((prev) => [
              ...prev,
              {
                name: `음성녹음__${new Date().getTime()}`,
                url: URL.createObjectURL(event.data),
                createAt: getClock(),
              },
            ]);
            setisRecording(true);
          };
        } else {
          setisRecording(false);
        }
      };
    });
  };

  const handleOffRecording = () => {
    media.ondataavailable = (event) => {
      setAudioInfo((prev) => [
        ...prev,
        {
          name: `음성녹음__${new Date().getTime()}`,
          url: URL.createObjectURL(event.data),
          createAt: getClock(),
        },
      ]);
      setisRecording(true);
    };

    stop();
  };

  const stop = () => {
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });
    media.stop();
    analyser.disconnect();
    source.disconnect();
  };

  return (
    <Player
      isRecording={isRecording}
      handleOnRecording={handleOnRecording}
      handleOffRecording={handleOffRecording}
      audioInfo={audioInfo}
    />
  );
};

export default AudioRecord;
