import * as React from 'react';

export const WelcomePageHeaderTemplate:React.FC<{children: React.ReactNode[] | React.ReactNode | undefined}> = ({children}) => {
  return (
    <section className="h-3/5 flex flex-col justify-center items-center">{children}</section>
  )
}