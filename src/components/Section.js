import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
<ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
</ItemText>
</Fade>
<Buttons>
    <Fade bottom>
<ButtonGrp>
    <LeftBtn>
    {leftBtnText}
    </LeftBtn>
    { rightBtnText &&
    <RightBtn>
       {rightBtnText}
    </RightBtn>}
</ButtonGrp>
</Fade>
<DownArw src = "/images/down-arrow.svg"/>
</Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; //horizontal
    background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
   
    padding-top: 15vh;
    text-align: center;

`
const ButtonGrp = styled.div`
    
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftBtn = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    cursor: pointer;
` 
const RightBtn = styled(LeftBtn)`
    background: white;
    opacity: 0.6;
    color: black;
`
const DownArw = styled.img`
    overflow-x: hidden;
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`

`
