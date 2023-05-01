
import styled from 'styled-components'

const LanguageStyled = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    &:before {
        content: '';
        background: ${({ color }) => color };
        inline-size: 1rem;
        block-size: 1rem;
        border-radius: 50%;
    }
`
const languages = {
    css: {
        color: 'purple'
    },
    javascript: {
        color: 'yellow'
    },
    ruby: {
        color: 'red'
    }
}

function Language({ name }) {
    const formattedName = name.toLowerCase()
    const color = languages[formattedName] ? languages[formattedName].color : 'white'

        return (
        <LanguageStyled color={color}>
            { name }
        </LanguageStyled>
    )
}

export default Language
