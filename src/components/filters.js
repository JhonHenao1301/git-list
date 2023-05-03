
import styled from 'styled-components'
import InputText from './input-text'
import Selector from './selector'
import Separator from './separator'

const FiltersStyled = styled.div`
    grid-area: filters;
    .count {
        color: var(--white);
        font: var(--headline2-semi-bold);
        margin-block-end: 1.5rem;
    }
    .action-list {
        display: flex;
        gap: 1rem;
    }
    .select-list {
        display: inherit;
        gap: .5rem;
    }
`

function Filters({ repoListCount = 0, setSearch, setLanguage }) {
    function handleChange(event) {
        setSearch(event.target.value)
    }
    return (
        <FiltersStyled>
            <h3 className='count'>
                Repositories ({repoListCount})
            </h3>
            <div className="action-list">
                <InputText  
                    type='text' 
                    placeholder='Find a repository'
                    onChange={handleChange}
                />
                <div className="select-list">
                    <Selector defaultValue="">
                        <option value="all">All</option>
                        <option value="sources">Sources</option>
                        <option value="forks">Forks</option>
                        <option value="archived">Archived</option>
                        <option value="Mirrors">Mirrors</option>
                    </Selector>
                    <Selector setLanguage={setLanguage}>
                        <option value="" disabled>Language</option>
                        <option value="all">All</option>
                        <option value="html">Html</option>
                        <option value="css">Css</option>
                        <option value="javascript">Javascript</option>
                        <option value="java">Java</option>
                    </Selector>
                    <Selector>
                        <option value="order" disabled>Order</option>
                        <option value="star">Star</option>
                    </Selector>
                </div>
            </div>
            <Separator />
        </FiltersStyled>
    )
}

export default Filters
