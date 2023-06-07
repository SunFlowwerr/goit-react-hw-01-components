import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 10,
        padding: 15,
        width: 200,
        height: 60,
        boxSizing: 'border-box',
        borderRadius: 4,
        backgroundColor: '#e0ffff',
        color: '#2f4f4f',
        fontSize: 14,
        boxShadow:
          '0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12)',
      }}
    >
      <span
        style={{
          width: 9,
          height: 9,
          boxSizing: 'border-box',
          borderRadius: '100%',
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      ></span>
      <img
        style={{
          padding: 5,
          boxSizing: 'border-box',
          borderRadius: '100%',
          backgroundColor: '#ffffff',
        }}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p>{name}</p>
    </li>
  );
};

Event.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
