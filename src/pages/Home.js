import React, { Component } from 'react'
import styled from '@emotion/styled'

import { corporateBuzzwords } from '../helpers'

const Box = styled('div')`
  width: 700px;
  height: 620px;
  margin: auto;
  border: 2px solid #222;
  background: red;
  user-select: none;
`
const Square = styled('div')`
  display: flex;
  border: 1px solid red;
  text-align: center;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  text-transform: capitalize;
  align-items: center;
  user-select: none;
`

const FreeSpace = styled(Square)`
  grid-row: 3 / 4;
  grid-column: 3 / 4;
`

const SquaresContainer = styled('div')`
  background: white;
  width: 550px;
  height: 550px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 110px 110px 110px 110px 110px;
  grid-template-columns: 110px 110px 110px 110px 110px;
  overflow: hidden;
`

const Header = styled('div')`
  width: 700px;
  height: 50px;

  color: white;
  font-size: 50px;
  text-transform: uppercase;
  font-family: Palatino;
  text-align: center;
`

const bingoSquares = () => {
  const buzzwords = corporateBuzzwords()
  const randomNumber = buzzwords => Math.floor(Math.random() * buzzwords.length)

  const squares = Array.from(Array(24)).map((_item, key) => {
    const i = randomNumber(buzzwords)
    const buzzword = buzzwords[i]
    buzzwords.splice(i, 1)

    return <Square key={key}>{buzzword}</Square>
  })

  return squares
}

class Home extends Component {
  render() {
    const squares = bingoSquares()

    return (
      <Box>
        <Header>bingo</Header>
        <SquaresContainer>
          <FreeSpace>FREE</FreeSpace>
          {squares}
        </SquaresContainer>
      </Box>
    )
  }
}

export default Home
