import Profile from './Components/Profile';
import Statistic from './Components/Statistic';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="partOne">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className="partTwo">
        <Statistic title="Upload Stats" stats={statisticalData} />
        <Statistic stats={statisticalData} />
      </div>
      <div className="partThree">
        <FriendList friends={friends} />
      </div>
      <div className="partFour">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
