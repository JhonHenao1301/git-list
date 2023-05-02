
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
    html: {
        color: '#6B7A02'
    },
    css: {
        color: '#7300E5'
    },
    javascript: {
        color: 'yellow'
    },
    ruby: {
        color: '#990404'
    },
    dart: {
        color: '#024F94'
    },
    java: {
        color: '#F8711F'
    },
    vue: {
        color: '#38BD14'
    },
    python: {
        color: '#A29F05'
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
