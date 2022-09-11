import * as React from 'react';

export const EditTodoPageTemplate:React.FC<{children: React.ReactNode[] | React.ReactNode | undefined}> = ({children}) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 pb-8">
      {children}
    </div>
  )
}