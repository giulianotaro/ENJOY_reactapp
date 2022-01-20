import styled from "styled-components";


export const Body = styled.div `

background-color: ${props => props.backgroundcolor}
position:absolute;
z-index: 1;
height: 100%;
width: 100%`;


function test () {
return (
   <>
    <Body />
   </>
)
}

export default test