import React from "react"
import styled from "styled-components"

const Card = styled.div`
    border: solid blue;
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    img{
    width: 50%;
}
`

function ComponenteComProps({ produto, valor, imagem, children }) {
    return (
        <Card>
            <img src={imagem} alt="" />
            <h2> {produto} </h2>
            <h2> {valor} </h2>
            {children}
        </Card>
    )
}
export default ComponenteComProps