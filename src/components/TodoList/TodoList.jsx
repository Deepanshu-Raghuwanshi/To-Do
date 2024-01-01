import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import List from '../List/List';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // componentDidMount - then dependencies list will be empty
  useEffect(() => { 
    const list = JSON.parse(localStorage.getItem('todoList'));
    setTasks(list || []);
  }, []);

  //componentDidUpdate - then dependencies list will have changed
  useEffect(() => {
    // update the list in local storage
    localStorage.setItem('todoList', JSON.stringify(tasks));
  }, [tasks]);

  const changeHandler = (e) => setTask(e.target.value);

  const buttonClickHandler = () => {
    const trimTask = task.trim();
    if (trimTask) {
      const taskObj = {
        item: trimTask,
        isDone: false,
        isEditing: false,
        editingItem: trimTask,
      };
      setTasks([...tasks, taskObj]);
    }
    setTask('');
  };

  const InputKeyHandler = (e) => {
    if (e.key === 'Enter') {
      buttonClickHandler();
    }
  };

  const isDoneHandler = (index) => {
    const list = [...tasks];
    list[index].isDone = true;
    setTasks(list);
  };

  const deleteHandler = (index) => {
    const list = [...tasks];
    list.splice(index, 1);
    setTasks(list);
  };

  const swapItemsHandler = (index, finalIndex) => {
    const list = [...tasks];
    const item = list[index];
    list[index] = list[finalIndex];
    list[finalIndex] = item;
    setTasks(list);
  };

  const isEditingHandler = (index) => {
    const list = [...tasks];
    list[index].isEditing = true;
    setTasks(list);
  };

  const cancelHandler = (index) => {
    const list = [...tasks];
    list[index].editingItem = list[index].item;
    list[index].isEditing = false;
    setTasks(list);
  };

  const inputChangeHandler = (index, newItem) => {
    console.log('indput changed index saved');
    const list = [...tasks];
    list[index].editingItem = newItem;
    setTasks(list);
  };

  const saveHandler = (index) => {
    const list = [...tasks];
    const trimEditingItem = list[index].editingItem.trim();
    if (trimEditingItem) {
      list[index].item = list[index].editingItem;
      list[index].isEditing = false;
      setTasks(list);
    } else {
      cancelHandler(index);
    }
  };

  const clearAllHandler = () => setTasks([]);

  return (
    <>
      <Input
        changeHandler={changeHandler} 
        value={task}
        keyHandler={InputKeyHandler}
      />
      <span style={{ marginLeft: '10px' }}>
        <Button
          clickHandler={buttonClickHandler}
          isDisabled={!task}
          btnText="Add to the List"
        />
      </span>
      <span style={{ marginLeft: '10px' }}>
        <Button
          clickHandler={clearAllHandler}
          btnText="Clear All"
          isDisabled={!tasks.length}
        />
      </span>
      <div style={{ marginTop: '15px' }}>
        <List
          list={tasks} 
          isDoneHandler={isDoneHandler}
          deleteHandler={deleteHandler}
          swapItemsHandler={swapItemsHandler}
          isEditingHandler={isEditingHandler}
          cancelHandler={cancelHandler}
          inputChangeHandler={inputChangeHandler}
          saveHandler={saveHandler}
        />
      </div>
    </>
  );
};

export default TodoList;
