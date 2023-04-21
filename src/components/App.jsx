import { ProfileCard } from './ProfileCard';
import cards from '../user.json'


export const App = () => {
  return (
    <>
      <ProfileCard items={cards} />
    </>
  );
};
