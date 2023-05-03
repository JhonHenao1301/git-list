
import styled from 'styled-components'
import Language from './language'
import Icon from './icon'

const RepoItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding-block: 1rem;
    border-block-end: 1px solid var(--grey);
    gap: 1rem;
    &:last-child {
        border-block-end: none;
    }
    .title {
        display: flex;
        gap: 1rem;
        margin: 0;
        a { 
            color: var(--primary);
            text-decoration: none;
        }
    }
    .public {
        border: 1px solid var(--grey);
        border-radius: .5rem;
        padding-inline: .5rem;
        padding-block: .125rem;
        font: var(--caption-regular)
    }
    .description {
        margin: 0;
        font: var(--body2-regular);
    }
    .topicList {
        display: flex;
        gap: .5rem;
    }
    .topicItem {
        color: var(--primary);
        font: var(--caption-media);
        border: 1px solid var(--primary);
        background: #15223A;
        inline-size: auto;
        text-align: center;
        padding-inline: .75rem;
        padding-block: .25rem;
        border-radius: 2rem;
    }
    .details {
        display: flex;
        gap: 1rem;
    }
    .details-item {
        display: flex;
        gap: .25rem;
        align-items: center;
        font: var(--caption-media);
        color: var(--grey-1);
        & span::first-letter {
            text-transform: uppercase;
        }
    }
    @media screen and (prefers-color-scheme: light) {
        .topicItem {
            color: var(--white);
            background: var(--grey);
            border: none;            
        }
    }
`

function RepoItem(props) {
    const updateAt = new Date(props.updated_at)
    const today = new Date()
    const diffMilliseconds = updateAt - today
    const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24))
    const timeAgo = new Intl.RelativeTimeFormat('es').format(diffDays, 'days')
    return (
        <RepoItemStyled>
            <h3 className="title"> 
                <a href={props.html_url}>
                    {props.name}
                </a>            
            {
                !props.private ? (
                    <span className='public'>Public</span>
                ) : null
            }
            </h3>
            {
                props.description ? (
                    <p className='description'> { props.description } </p>
                ) : null
            }
            {
                props.topics.length ? (
                    <div className="topicList">
                        {
                            props.topics.map(item => <span className='topicItem' key={item}>{item}</span>)
                        }
                    </div>
                ) : null
            }
            {
                <div className="details">
                    {
                        props.language ? <Language name={props.language}/> : null
                    }
                    <span className="details-item">
                        <Icon name="branch"/>
                        <span>{props.forks_count}</span>
                    </span>
                    <span className="details-item">
                        <Icon name="star"/>
                        <span>{props.stargazers_count}</span>
                    </span>
                    <span className="details-item">
                        <span>{timeAgo}</span>
                    </span>
                </div>
            }
        </RepoItemStyled>
    )
}

export default RepoItem
