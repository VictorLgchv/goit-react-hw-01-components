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
      <Profile className="profile">
        <Description className="description">
          <Avatar src={avatar} alt="User avatar" className="avatar" />
          <Name className="name">{username}</Name>
          <Tag className="tag">@{tag}</Tag>
          <Location className="location">{location}</Location>
        </Description>

        <Stats className="stats">
          <li>
            <Label className="label">Followers</Label>
            <Quantity className="quantity">{followers}</Quantity>
          </li>
          <li>
            <Label className="label">Views</Label>
            <Quantity className="quantity">{views}</Quantity>
          </li>
          <li>
            <Label className="label">Likes</Label>
            <Quantity className="quantity">{likes}</Quantity>
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
