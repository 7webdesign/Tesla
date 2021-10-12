import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Container bgImage={backgroundImg}>
    <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
       <p>{description}</p>
      </ItemText>
      </Fade>
      
      <Buttons>
      <Fade bottom>
      <ButtonGroup>
         <LeftButton>
              {leftBtnText}
         </LeftButton>
         { rightBtnText &&  
         <RightButton>
         {rightBtnText}
         </RightButton>}
        
      </ButtonGroup>
      
      <DownArrow src='./img/down-arrow.svg'/>
      </Fade>
      </Buttons>
    </Container>
  )
}

export default Section

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/img/model-s.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: ${props => `url('/img/${props.bgImage}')` };
`
const ItemText = styled.div` 
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
 display: flex;
 margin-bottom: 40px;
 @media (max-width: 768px) {
   flex-direction: column;
 }
`

const LeftButton = styled.div`
 background-color: rgba(23, 26, 32, 0.8);
 height: 40px;
 width: 256px;
 color: whitesmoke;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 100px;
 opacity: 0.85;
 text-transform: uppercase;
 font-size: 12px;
 margin: 10px;
 cursor: pointer;
`

const RightButton = styled(LeftButton)`
  color: rgba(23, 26, 32, 0.8);
  background-color: whitesmoke;
  opacity: 0.65;
`

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`