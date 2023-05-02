
import styled from 'styled-components'

const SelectorStyled = styled.select`
    border: none;
    border-radius: .5rem;
    background: var(--buttonBG);
    color: var(--white);
    padding-inline: 1rem;
    font: var(--buttonBG);
`

function Selector({children, setLanguage}) {
    function handleLanguage(e) {
        if(setLanguage) {
            setLanguage(e.target.value)
        }
    }
    return (
        <SelectorStyled onChange={handleLanguage}>
            {children}
        </SelectorStyled>
    )
}

export default Selector
