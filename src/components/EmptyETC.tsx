import React, { FC, memo } from 'react'
import '.././style/EmptyETC.css'

interface IEmpty {
    className: string,
    children?: React.ReactNode,
}

const EmptyETC: FC<IEmpty> = memo(({className, children}) => {
  return (
    <div className={`${className} _empty` }>{children}</div>
  )
})

export default EmptyETC