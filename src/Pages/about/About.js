import React, { useContext } from 'react'
import { useItemContext } from '../../App'

const About = () => {
  const { data } = useContext(useItemContext)

  return (
    <div>
      About
    </div>
  )
}

export default About
