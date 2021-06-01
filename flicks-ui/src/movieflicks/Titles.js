import React, { useState, useEffect } from 'react';
import StreamFlick from './StreamFlick';

function Titles({ flicks, menu }) {
  const [stream, setStream] = useState({});
  const [isStreaming, setIsStreaming] = useState(false);

  const handleStream = (flick) => {
    setIsStreaming(true);
    setStream(flick);
  };

  useEffect(() => {
    setIsStreaming(false);
  }, [menu]);

  if (isStreaming) {
    return (
      <>
        <StreamFlick flick={stream} setIsStreaming={setIsStreaming} />
      </>
    );
  }

  return (
    <div class="container-fluid">
      <div class="row">
        {flicks.map((flick, index) => {
          return (
            <div class="col-sm-4">
              <div class="panel panel-default">
                <div class="panel-heading">{flick['name']}</div>
                <div class="panel-body">
                  <a
                    href="#"
                    onClick={() => {
                      handleStream(flick);
                    }}
                  >
                    <img
                      src={flick['image']}
                      class="img-responsive"
                      alt={flick['name']}
                    />
                  </a>
                  <br />
                  <p>{flick['description']}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Titles;
