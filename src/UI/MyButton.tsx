import React, { FC, memo } from 'react'

interface IMyButton {
  type: "button" | "submit" | "reset",
  className: string,
  children: React.ReactNode,
  disabled?: boolean,
  onClick?: any,
}

const MyButton: FC<IMyButton> = memo(({type, className, children, disabled, onClick}) => {
  return (
    <button disabled={disabled} type={type} className={className} onClick={onClick}>{children}</button>
  )
})

export default MyButton