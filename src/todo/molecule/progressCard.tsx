import * as React from 'react';
import { SetterOrUpdater } from 'recoil';
import { useNavigate } from 'react-router-dom';

interface ProgressCardProps {
  isOpen: boolean;
  setIsOpen: SetterOrUpdater<boolean>;
}

export const ProgressCard = ({ isOpen, setIsOpen }:ProgressCardProps) => {
  const navigate = useNavigate();

  const redirectToTodo = () => {
    navigate("/todo")
  }
  return (
    <div className="flex flex-row gap-8 bg-violet-600 rounded-3xl p-6">
      <div className="flex flex-col justify-between">
        <p className="text-sm text-white font-medium">Today's task dashboard</p>
        <button 
          className="bg-white text-base text-violet-600 rounded-lg p-2 font-semibold" 
          onClick={redirectToTodo}>
            View Task
        </button>
      </div>
      <div>
        <p>dashboard</p>
        <p>dashboard</p>
        <p>dashboard</p>
        <p>dashboard</p>
        <p>dashboard</p>
        <p>dashboard</p>
      </div>
      <p onClick={() => setIsOpen(true)}>open</p>
    </div>
  )
}