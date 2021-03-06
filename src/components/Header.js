import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <a>
                <img src = "/images/logo.svg" alt ="" />
            </a>
            <Menu>
            <a href = "">Model S</a>
            <a href = "">Model 3</a>
            <a href = "">Model X</a>
            <a href = "">Model Y</a>
            </Menu>
            <RightMenu>
            <a href = "">duka letu</a>
            <a href = "">anwani ya tesla</a>
            <CustomMenu onClick = {() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show = {burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick = {() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href = "#">Model S</a></li>
                <li><a href = "#">Model 3</a></li>
                <li><a href = "#">Model X</a></li>
                <li><a href = "#">Model Y</a></li>
                <li><a href = "#">Solar Roof</a></li>
                <li><a href = "#">Solar Panels</a></li>
                <li><a href = "#">Existing Inventory</a></li>
                <li><a href = "#">Used Inventory</a></li>
                <li><a href = "#">Test Drive</a></li>
                <li><a href = "#">Powerwall</a></li>
                <li><a href = "#">Commercial Energy</a></li>
                <li><a href = "#">Utilities</a></li>
                <li><a href = "#">Charging</a></li>
                <li><a href = "#">Find Us</a></li>
                <li><a href = "#">Support</a></li>
                <li><a href = "#">Investors Relations</a></li>
                <li><a href = "#">Shop</a></li>{/*
                <li><a href = "#">Accountant</a></li>
                <li><a href = "#">More</a></li>*/}
            </BurgerNav>
           
        </Container>
    )
}

export default Header

const Container = styled.div`
 min-height: 60px;
 position: fixed;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 20px;
 top: 0;
 left: 0;
 right: 0;
 z-index: 1;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;


a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    text-decoration: none;
}

`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 15px;
    text-decoration: none;
}

`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    margin: 20px;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 13;
    list-style: none;
    padding: 15px;
    display: flex;
    flex-direction:column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .5s ease-in;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a{
            font-weight: 600;
            text-decoration: none;
        }

    }

    
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`


