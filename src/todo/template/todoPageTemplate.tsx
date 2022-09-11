import * as React from 'react';

export const TodoPageTemplate:React.FC<{children: React.ReactNode[] | React.ReactNode | undefined}> = ({children}) => {
  return (
    <>{children}</>
  )
}