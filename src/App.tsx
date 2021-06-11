import './App.css';
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: 'neko',
  email: 'neko@gmail.com',
  address: 'address',
};

function App() {
  return (
    <div className='App'>
      <UserCard user={user} />
    </div>
  );
}

export default App;
