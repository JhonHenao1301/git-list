
import styled from 'styled-components'
// import props from './profile-data'
import Button from './button'
import Icon from './icon'

const ProfileStyled = styled.div`
    grid-area: profile;

    .avatar {
        border-radius: 50%;
        border: 1px solid var(--grey-1);
        overflow: hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }

    .name {
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: .5rem;
    }

    .username {
        margin-block-start: .5rem;
        margin-inline-end: 1.5rem;
        font: var(--headline2-light);
    }

    .info {
        color: var(--grey-1);
        text-decoration: none;
        display: flex;
        gap: .5rem;
        align-items: center;
        margin-block: 1rem;
        font: var(--body2-semi-bold);
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .buttons {
        display: flex;
        gap: .5rem;
        margin-block-end: 1.5rem;
    }
`

function Profile(props) {

    const { 
        name, login, avatar_url, bio, followers, following, location, blog, twitter_username
    } = props

    return (
        <ProfileStyled>
            
            <img src={avatar_url} className='avatar' width="278" height="278" alt="" />
            <p className="name">{name}</p>
            <p className="username">{login}</p>
            <div className="buttons">
                <Button 
                    text="Follow"
                    className="other"  
                />
                <Button 
                    text="Sponsor"
                    link="#" 
                    className="custom"
                    icon={
                        <Icon 
                            name="heart"
                            size={24}
                            color="var(--pink)"
                        />
                    }
                />
            </div>
            <p className="info bio">
                {bio}
            </p>
            <p className="info followers">
                <span>*</span> {followers} <span>Followers</span> <span>*</span> {following} <span>Following</span>
            </p>
            <p className="info location">
                {location}
            </p>
            <a className='info' href={blog} target='_blank' rel='noreferrer'>
                {blog}
            </a>
            <a className='info' href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>
                @{twitter_username}
            </a>
        </ProfileStyled>
    )
}

export default Profile
