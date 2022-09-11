import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// template
import { WelcomePageBodyTemplate, WelcomePageHeaderTemplate, WelcomePageTemplate } from '../template';
// assets
import backgroundImage from '@assets/img/landing-background.jpg'

export const Welcome = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate(`/home`);  
  }

  return (
    <WelcomePageTemplate>
      <WelcomePageHeaderTemplate>
        <img src={backgroundImage} className="h-full object-cover container mx-auto"/>
      </WelcomePageHeaderTemplate>
      <WelcomePageBodyTemplate>
        <p className="text-center font-bold text-4xl">Task Management & <br/>To-Do List</p>
        <p className="text-center text-gray-400">This productive tool is designed to help <br/>you better manage your task <br/>project-wise conveniently!</p>
        <button 
          className="rounded-full bg-green-300 w-2/3 py-3"
          onClick={redirectToHome}
          >
          Let's Start
        </button>
      </WelcomePageBodyTemplate>
    </WelcomePageTemplate>
  )
}