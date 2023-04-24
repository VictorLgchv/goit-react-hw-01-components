import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendsCard.styled';

export const FriendsCard = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      <Status className="friend-list__status" active={isOnline}>{isOnline}</Status>
      <Avatar className="friend-list__avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="friend-list__name">{name}</Name>
    </>
  )
}

FriendsCard.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}