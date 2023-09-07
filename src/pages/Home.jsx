import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';

const Home = () => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount(count + 1);
  // }, [count]);

  return (
    <>
      <Header />
      <h2 style={{ margin: '20px 0' }}>Todo App</h2>
      {/* <div>
        <button onClick={() => setCount(count + 1)}>Add {count}</button>
      </div> */}
      <TodoList />
    </>
  );
};

export default Home;
