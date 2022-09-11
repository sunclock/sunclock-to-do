import * as React from 'react';

export const CreateTodoPageTemplate:React.FC<{children: React.ReactNode[] | React.ReactNode | undefined}> = ({children}) => {
  return (
    <>{children}</>
  )
}