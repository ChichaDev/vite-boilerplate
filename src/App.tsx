import {
  useState,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useDebugValue,
  useLayoutEffect
} from 'react';
import { useEffect } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import Proud from './components/Space/OtherTest/Proud';

import type { User } from './typecard';
import type { FC } from 'react';
import './App.css';

const Card: FC = () => <div>text</div>;
const obj: User = {
  name: 'Ivan',
  age: 25
};

function App() {
  const bar = (a: number) => a === 0;

  [1, 2, 3].map((x) => x * x);

  const [count, setCount] = useState(0);

  const foo = () => 0;
  useEffect(() => {
    setCount(1);
  }, []);
  return (
    <>
      <div>
        <Proud />
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>

        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
