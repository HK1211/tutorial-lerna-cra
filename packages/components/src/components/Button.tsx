import React from 'react'

interface Props extends React.DOMAttributes<HTMLButtonElement> {
    children?:React.ReactNode;
}

const Button: React.FC<Props> = ({...props}) => {
  return (
    <button {...props}>{props.children}</button>
  )
}

export default Button