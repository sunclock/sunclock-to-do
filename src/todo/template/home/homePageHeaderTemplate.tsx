import * as React from 'react';

export const HomePageHeaderTemplate:React.FC<{children: React.ReactNode[] | React.ReactNode | undefined}> = ({children}) => {
  return (
    <section className="flex flex-col justify-center items-center">{children}</section>
  )
}