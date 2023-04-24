import PropTypes from 'prop-types';
import {
  Profile,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,

} from './ProfileCard.styled';

export const ProfileCard = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <Profile >
        <Description >
          <Avatar src={avatar} alt="User avatar"/>
          <Name >{username}</Name>
          <Tag >@{tag}</Tag>
          <Location >{location}</Location>
        </Description>

        <Stats >
          <li>
            <Label >Followers</Label>
            <Quantity >{followers}</Quantity>
          </li>
          <li>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </li>
          <li>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </li>
        </Stats>
      </Profile>
    </>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
