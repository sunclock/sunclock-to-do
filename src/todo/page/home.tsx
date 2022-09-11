import * as React from 'react';
import { useRecoilState } from 'recoil';

// template
import { HomePageTemplate, HomePageHeaderTemplate, HomePageBodyTemplate } from '../template';
// molecule
import { Modal, ProgressCard } from '../molecule';
// recoil
import { isModalOpenState } from '../recoil';

export const Home = () => {
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenState)
  return (
    <HomePageTemplate>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <HomePageHeaderTemplate>
        <div>
          some random hero
        </div>
        <ProgressCard isOpen={isOpen} setIsOpen={setIsOpen}/>
      </HomePageHeaderTemplate>
      <HomePageBodyTemplate>
        <div>
          in progress
        </div>
        <div>
          task groups
        </div>
      </HomePageBodyTemplate>

      </HomePageTemplate>
  )
}