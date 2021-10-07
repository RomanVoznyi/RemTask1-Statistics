import Profile from './Components/Profile';
import user from './data/user.json';
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
    </div>
  );
}

export default App;
