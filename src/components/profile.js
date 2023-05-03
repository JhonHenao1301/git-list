
import styled from 'styled-components'
// import props from './profile-data'
import Button from './button'
import Icon from './icon'

const ProfileStyled = styled.div`
    grid-area: profile;
    display: flex;
    flex-direction: column;
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
    @media screen and (max-width: 600px){
        font: var(--headline2-light);
        .profile-title {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            & img {
                block-size: 100px;
                inline-size: 100px;
            }
            & .profile-title-text {
                display: inherit;
                flex-direction: column;
                justify-content: center;
            }
        }
        .buttons > * {
            inline-size: 12rem;
            flex: 1;
        }  
    }
`

function Profile(props) {

    const { 
        name, login, avatar_url, bio, followers, following, location, blog, twitter_username
    } = props

    return (
        <ProfileStyled>
            <div className="profile-title">
                <img src={avatar_url} className='avatar' width="278" height="278" alt="" />
                <div className="profile-title-text">
                    <p className="name">{name}</p>
                    <p className="username">{login}</p>
                </div>
            </div>
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
                <Icon name="user" /> {followers} <span>Followers</span> <span>*</span> {following} <span>Following</span>
            </p>
            <p className="info location">
                <Icon name="location" /> {location}
            </p>
            <a className='info' href={blog} target='_blank' rel='noreferrer'>
                <Icon name="link" color="var(--white)"/> {blog}
            </a>
            <a className='info' href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>
                <Icon name="twitter" /> @{twitter_username}
            </a>
        </ProfileStyled>
    )
}

export default Profile
