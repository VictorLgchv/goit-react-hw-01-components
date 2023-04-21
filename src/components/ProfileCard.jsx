export const ProfileCard = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <div className="profile" key={item.id}>
          <div className="description">
            <img
              src={item.avatar}
              alt="User avatar"
              className="avatar"
            />
            <p className="name">{item.username}</p>
            <p className="tag">@{item.tag}</p>
            <p className="location">{item.location}</p>
          </div>

          <ul className="stats">
            <li>
              <span className="label">Followers</span>
              <span className="quantity">{item.stats.followers}</span>
            </li>
            <li>
              <span className="label">Views</span>
              <span className="quantity">{item.stats.views}</span>
            </li>
            <li>
              <span className="label">Likes</span>
              <span className="quantity">{item.stats.likes}</span>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};
