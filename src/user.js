
import { useState } from "react"
import styled from 'styled-components'

const Avatar = styled.img`
    border: 1px solid red;
`

function User({ name, avatar }) {

    const [calculatedName, setCalculatedName] = useState(name)

    function onClick(event) {
        event.preventDefault()
        console.log(`${calculatedName} es un personaje de anime`)
        setCalculatedName('Gohan')
    }

    return (
        <div style={{
            borderBottom: '5px solid green',
        }} className="User" onClick={onClick}>
            <Avatar title={name} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default User