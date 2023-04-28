
import styled from 'styled-components'

const RepoItemStyled = styled.div`
    border: 1px solid red;
    background: black;
    color: white;
    padding: 10px;
`

function RepoItem(props) {
    return (
        <RepoItemStyled>
            <a href={props.html_url}>
                {props.name}
            </a>            
            {
                !props.private ? (
                    <span>Public</span>
                ) : null
            }
            {
                props.description ? (
                    <p className='description'> { props.description } </p>
                ) : null
            }
            {
                props.topics.length ? (
                    <div className="topicList">
                        {
                            props.topics.map(item => <span>{item}</span>)
                        }
                    </div>
                ) : null
            }
        </RepoItemStyled>
    )
}

export default RepoItem
