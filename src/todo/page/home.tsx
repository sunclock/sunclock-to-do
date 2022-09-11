import * as React from 'react';
// template
import { HomePageTemplate } from '../template';
import backgroundImage from '@assets/img/landing-background.jpg'

export const Home = () => {
  return (
    <HomePageTemplate>
      <div className="box-border h-32 w-32 p-4 border-4">
        <img className="w-full aspect-square" src={backgroundImage} />
      </div>
      </HomePageTemplate>
  )
}