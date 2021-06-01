import React, { useState } from 'react';
import app_host_port from './Api';

function StreamFlick({ flick, setIsStreaming }) {
  const [streaming, setStreaming] = useState(false);
  const [displayButton, setDisplayButton] = useState('Play');
  const [message, setMessage] = useState('');

  const streamMovie = async () => {
    setMessage('Loading Movie.....');
    let flicksUrl =
      app_host_port() + '/api/start_streaming?movie=' + flick['name'];
    const response = await fetch(flicksUrl, { mode: 'cors' });
    const result = await response.json();
    console.log(result);
    setMessage(result['message']);
  };

  const stopMovie = async () => {
    setMessage('Ending Movie.....');
    let flicksUrl =
      app_host_port() + '/api/end_streaming?movie=' + flick['name'];
    const response = await fetch(flicksUrl, { mode: 'cors' });
    const result = await response.json();
    console.log(result);
    setMessage(result['message']);
  };

  const handlePlay = (e) => {
    if (streaming) {
      setStreaming(false);
      setDisplayButton('Play');
      stopMovie();
    } else {
      setStreaming(true);
      streamMovie();
      setDisplayButton('Stop');
    }
  };

  const handleBack = (e) => {
    setIsStreaming(false);
  };

  return (
    <div>
      <div>
        <img src={flick['image']} class="img-responsive" alt={flick['name']} />
      </div>
      <br />
      <button type="button" class="btn btn-primary" onClick={handleBack}>
        Back
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-primary" onClick={handlePlay}>
        {displayButton}
      </button>
      <h4>{message}</h4>
    </div>
  );
}

export default StreamFlick;
