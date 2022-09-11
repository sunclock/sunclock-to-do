import * as React from 'react';

export const WelcomePageBodyTemplate:React.FC<{children: React.ReactNode[] | React.ReactNode | undefined}> = ({children}) => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">{children}</section>
  )
}