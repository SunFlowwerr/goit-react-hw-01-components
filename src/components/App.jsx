import { Profile } from './Profile/Profile';
import user from './Profile/userData/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/statisticsData/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friendListData/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
