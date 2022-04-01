import React from 'react'
import styled from 'styled-components'

const Button = styled.button `
  height: 75px;
  width: 33%;
  background: #FFCB47;
  color: #fff;
  border: 0;
  font-size: 16px;
  cursor: pointer;
;
`

export default (props) => {
  return (
    <Button>
      {props.children}
    </Button>
  )
}
