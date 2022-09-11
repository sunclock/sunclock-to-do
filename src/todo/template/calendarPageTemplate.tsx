import * as React from 'react';

export const CalendarPageTemplate:React.FC<{children: React.ReactNode[] | React.ReactNode | undefined}> = ({children}) => {
  return (
    <>{children}</>
  )
}