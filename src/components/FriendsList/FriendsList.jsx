import { FriendsCard } from "../FriendsCard/FriendsCard";
import PropTypes from 'prop-types';
import { FriendsUl, FriendsItem } from "./FriendsList.styled";

export const FriendsList = ({ friends }) => {
  return (
    <FriendsUl className="friend-list">
      {friends.map(friend => (
        <FriendsItem className="friend-list__item" key={friend.id}>
          <FriendsCard friend={friend} />
        </FriendsItem>
      ))}
    </FriendsUl>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
}
