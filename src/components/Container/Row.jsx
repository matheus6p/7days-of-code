import React from 'react'
import styled from 'styled-components';

const Row = styled.div `
  display: flex;
  flex-wrap: wrap;
`

export default (props) => {
  return (
    <Row>
      {props.children}
    </Row>
  )
}
