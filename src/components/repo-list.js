
import styled from 'styled-components'
import RepoItem from './repo-item'

const RepoListStyled = styled.div`
    grid-area: repo-list;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

function RepoList({ repoList, search, language }) {
    let list = repoList

    if (language !== "" && language !== 'all') {
        list = list.filter((item) => {
          if (item.language) {
            return item.language.toLowerCase() === language;
          }
        })
    }
    if(search !== '') {
        list = list.filter((item) => {
            return item.name.search(search) >= 0
        })
    }

    if(list.length === 0) {
        return <p>There are not repositories</p>
    }

    return (
        <RepoListStyled>
            {list.map((item) => {
                return <RepoItem {...item} key={item.id} />
            })}
        </RepoListStyled>
    )
}

export default RepoList
