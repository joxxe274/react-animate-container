import React from 'react'

type Props = {
  greeting: string
}
const Demo = ({ greeting = "World" }: Props) => {

  return (
    <div>
      <h1>Hello {greeting}</h1>
    </div>
  )
}

export default Demo;
