import * as React from 'react';

export const EditTodoPageTemplate:React.FC<{children: React.ReactNode[] | React.ReactNode | undefined}> = ({children}) => {
  return (
    <>{children}</>
  )
}