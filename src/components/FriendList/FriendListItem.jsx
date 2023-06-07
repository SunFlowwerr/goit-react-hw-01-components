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
      }}
    >
      <span
        style={{
          width: 9,
          height: 9,
          boxSizing: 'border-box',
          borderRadius: '100%',
          backgroundColor: isOnline ? 'green' : 'red', // Пример использования состояния isOnline
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
