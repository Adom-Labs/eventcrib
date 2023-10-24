'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdClose } from 'react-icons/md';
import { FaAngleRight, FaRegCalendarAlt, FaTrashAlt } from 'react-icons/fa';
import { TaskType } from './TaskWall';
import Loader from '../loader/Loader';

const Todo = ({
  todo,
  toggleTodo,
  removeTodo,
}: {
  todo: TaskType;
  toggleTodo: (id: string, complete: boolean) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isDeleting, setDelete] = useState(false);
  const [isCalWindowClosed, setCalWindowClosed] = useState(false);
  const handleShow = () => {
    setShowOptions(prev => !prev);
  }
  const handleDelete = () => {
    setDelete(true);
    removeTodo(todo.id);
  }
  const handleAddToCal = () => {
    const date = new Date();
    const yr = date.getFullYear();

    const myWin = window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${todo.task}&dates=${yr}-${date.getMonth()+1}-${date.getDate()}`, '', 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400') as Window;

    const interval = setInterval(() => {
      if (myWin.closed) {
        setCalWindowClosed(true)
        clearInterval(interval);
      }
    }, 1000)
    
  }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <input
            id={todo.id}
            type='checkbox'
            className='cursor-pointer h-5 w-5 checked:accent-green-500 peer'
            defaultChecked={todo.completed}
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />
          <label
            htmlFor={todo.id}
            className='cursor-pointer text-xl peer-checked:line-through peer-checked:text-slate-500'
          >
            {todo.task}
          </label>
        </div>
        <div>
          <FaAngleRight className={classNames('cursor-pointer text-orange-300 hover:text-orange-500 duration-300 text-xl', {'rotate-90': showOptions})} onClick={handleShow} />
        </div>
      </div>
      {
        showOptions && <div className='mt-3 bg-slate-100'>
          <div className='ml-12'>
            <div className='flex items-center space-x-4'>
              <div className={classNames('flex items-center space-x-2 bg-slate-300 px-2 py-1 group', {'cursor-default hover:bg-orange-500 duration-500': !isDeleting && !isCalWindowClosed, 'cursor-not-allowed': isDeleting || isCalWindowClosed})}>
                <span className={classNames({'group-hover:text-white duration-500': !isDeleting && !isCalWindowClosed})} onClick={!isCalWindowClosed?handleAddToCal:() => {}}>{!isCalWindowClosed?'Add to Google calendar':'Added to calender'}</span>
                <FaRegCalendarAlt className='text-2xl text-orange-400 group-hover:text-orange-500 duration-500' />
              </div>
              <div 
                className={classNames('flex items-center space-x-2 group px-2 py-1 bg-slate-300 hover:bg-orange-500 duration-500',{'cursor-default': !isDeleting, 'cursor-not-allowed': isDeleting})}
                onClick={!isDeleting?handleDelete:() => {}}
              >
                {!isDeleting?<><span className='group-hover:text-white duration-500'>Delete Task</span>
                <FaTrashAlt 
                  className='text-2xl text-orange-400 group-hover:text-orange-500 duration-500'
                /></>:<div className='px-8 py-1'><Loader /></div>}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Todo;
