
import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    display: inline-flex;
    gap: .5rem;
    padding-block: .25rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    background: var(--buttonBG);
    color: var(--white);
    border-radius: .5rem;
    border: 1px solid var(--grey);
    min-inline-size: 135px;
    font: var(--button);
    text-decoration: none !important;

    &:hover {
        background: var(--white);
        color: var(--button);
    }
`

function Button({ text, link, className, icon }) {
    const component = link ? 'a' : 'button'
    let IconComponent = null
    if(icon) {
        if(isValidElement(icon)) {
            IconComponent = icon
        }
    }
    return (
        <ButtonStyled as={component} href={link} className={className}>
            {IconComponent}
            {text}
        </ButtonStyled>
    )
}

export const ButtonContrast = styled(Button)`
    background: var(--white);
    color: var(--buttonBG);
    &:hover {
        background: var(--buttonBG);
        color: var(--white);
    }
`

export const ButtonRounded = styled(Button)`
    border: 1px solid var(--grey-1);   
    min-inline-size: initial;
    border-radius: 50%;
    padding: 0.75rem;
    color: var(--white);
    &:hover {
        background: var(--buttonBG);
    }
`

export default Button
