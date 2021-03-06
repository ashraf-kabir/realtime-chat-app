import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Realtime Chat App</h1>
        <form>
          <div>
            <input
              placeholder='Your Name'
              className='joinInput'
              type='text'
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder='Room Code'
              className='joinInput mt-20'
              type='text'
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className={'button mt-20'} type='submit'>
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
