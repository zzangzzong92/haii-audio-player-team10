import React, { useState } from 'react';
import Player from 'components/Player';
import getClock from 'utils/getClick';

const AudioRecord = () => {
  const [isRecording, setisRecording] = useState(true);
  const [isSetting, setIsSetting] = useState(false);
  const [audioInfo, setAudioInfo] = useState([]);
  const [maxRecordTime, setMaxRecordTime] = useState(30);

  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();

  const handleOnRecording = () => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const analyser = audioContext.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    const makeSound = stream => {
      const source = audioContext.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (event) {
        if (event.playbackTime > maxRecordTime) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          audioContext.createMediaStreamSource(stream).disconnect();
          mediaRecorder.ondataavailable = function (event) {
            setAudioInfo(prev => [
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
    media.ondataavailable = event => {
      setAudioInfo(prev => [
        ...prev,
        {
          name: `음성녹음__${new Date().getTime()}`,
          url: URL.createObjectURL(event.data),
          createAt: getClock(),
        },
      ]);
      setisRecording(true);
    };

    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    media.stop();
    analyser.disconnect();
    source.disconnect();
  };

  const changeRecordTime = event => {
    setMaxRecordTime(event.target.value);
  };

  const toggle = () => {
    setIsSetting(() => !isSetting);
  };

  return (
    <Player
      isRecording={isRecording}
      handleOnRecording={handleOnRecording}
      handleOffRecording={handleOffRecording}
      audioInfo={audioInfo}
      maxRecordTime={maxRecordTime}
      changeRecordTime={changeRecordTime}
      isSetting={isSetting}
      toggle={toggle}
    />
  );
};

export default AudioRecord;
