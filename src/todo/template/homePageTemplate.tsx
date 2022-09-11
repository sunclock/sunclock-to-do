import * as React from 'react';

export const HomePageTemplate:React.FC<{children: React.ReactNode[] | React.ReactNode | undefined}> = ({children}) => {
  return (
    <>{children}</>
  )
}