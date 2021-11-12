import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
           <Section 
            title = "Model S"
            description ="Agiza Mtandaoni kwa Bidhaa Mpya isiyoguswa na Mtu"
            backgroundImg ="model-s.jpg"
            leftBtnText ="Oda Maalum"
            rightBtnText ="Akiba Iliyopo"
            />
           <Section
           title = "Model Y"
           description ="Agiza Mtandaoni kwa Bidhaa Mpya isiyoguswa na Mtu"
           backgroundImg ="model-y.jpg"
           leftBtnText ="Oda Maalum"
           rightBtnText ="Akiba Iliyopo"
            />
           <Section 
           title = "Model 3"
           description ="Agiza Mtandaoni kwa Bidhaa Mpya isiyoguswa na Mtu"
           backgroundImg ="model-3.jpg"
           leftBtnText ="Oda Maalum"
           rightBtnText ="Akiba Iliyopo"
           />
           <Section
           title = "Model X"
           description ="Agiza Mtandaoni kwa Bidhaa Mpya isiyoguswa na Mtu"
           backgroundImg ="model-x.jpg"
           leftBtnText ="Oda Maalum"
           rightBtnText =""
            />
            <Section
           title = "Mashine za Solar"
           description ="Umeme wa Jua kwa Bei ndogo kabisa Africa"
           backgroundImg ="solar-panel.jpg"
           leftBtnText ="AGIZA SASA"
           rightBtnText ="Endelea..."
           />
           <Section
           title = "Paa la Solar"
           description ="Zalisha Nishati Safi kutoka Paa la Nyumba Yako"
           backgroundImg ="solar-roof.jpg"
           leftBtnText ="AGIZA SASA"
           rightBtnText ="Endelea..."
           />
           <Section
           title = "Vifaa"
           description =""
           backgroundImg ="accessories.jpg"
           leftBtnText ="NUNUA SASA"
           rightBtnText =""
           />
        </Container>
    )
}

export default Home

const Container = styled.div`
  
    height: 100hv;
`
