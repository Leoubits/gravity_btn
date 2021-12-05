import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
background-color: #333;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;
`
const Wrapper = styled.div`
height: 50px;
width: 200px;
background-color: ${props => props.bg};
padding: 1rem;
border-radius: 3rem;
transform: rotate(${props => props.rt}deg);
transition: transform 1s ease, background-color 1s ease;
`
const Marble = styled.div`
height: 50px;
width: 50px;
background-color: white;
border-radius: 100%;
transform: translateX(${props => props.xMove}%);
transition: transform 1s ease;
box-shadow: 3px 3px 3px #333;
`
const Heading = styled.h1`
font-size: 80px;
color: white;

`

export const Gravity = () => {
    const [MarbleMove, setMarbleMove] = useState(0)
    const [ContainerMove, setContainerMove] = useState(0)
    const [Gravity, setGravity] = useState(false)

    const turnGravity = (rotate, translate) => {
        setMarbleMove(translate)
        setContainerMove(rotate)
        setGravity(!Gravity)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setContainerMove(0)
        }, 1000);
        return () => clearInterval(interval)
    }, [Gravity])

    return (
        <Container >
            <Heading>Hola Bere</Heading>
            <Wrapper bg={Gravity ? 'green' : 'red'} rt={ContainerMove} onClick={Gravity ? () => turnGravity(-45, 0) : () => turnGravity(45, 300)}>
                <Marble xMove={MarbleMove}></Marble>
            </Wrapper>
        </Container>
    )
}
