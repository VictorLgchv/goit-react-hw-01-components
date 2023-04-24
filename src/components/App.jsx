import { ProfileCard } from './ProfileCard/ProfileCard';
import user from '../user.json'
import { Statistics } from 'components/StatisticsList/StatisticsList';
import data from '../data.json'
import { FriendsList } from 'components/FriendsList/FriendsList';
import friends from '../friends.json'
import { TransactionsHistory } from './TransactionsList/TransactionsList';
import transactions from '../transactions.json'

export const App = () => {
  return (
    <>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionsHistory items={transactions}/>
    </>
  );
};
