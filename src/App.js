
import Layout from './components/layout';
import Filters from './components/filters';
import Profile from './components/profile';
import RepoList from './components/repo-list';
import Search from './components/search';
import { useState, useEffect } from 'react'
import { getUser, getRepos } from './services/users'
import { useParams } from 'react-router-dom'
import Modal from './modal'

function App() {
  const params = useParams()
  let username = params.user
  if (!username) {
    username = 'jhonhenao1301'
  }
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [language, setLanguage] = useState('')

  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log('We have not found this user')
        return
      }
      setUser(data)
    })
    getRepos(username).then(({ data, isError }) => {
    if (isError) {
        console.log('We have not fount this user repos')
        return
    }
    setRepos(data)
    })
  }, [username])

  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal}/>
      <Profile {...user} />
      <Filters setSearch={setSearch} setLanguage={setLanguage} repoListCount={repos.length}/>
      <RepoList search={search} repoList={repos} language={language}/>
      <Search setModal={setModal} />
    </Layout>
  )
}

export default App;
