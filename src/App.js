import './index.css'
import Navbar from './components/navbar.js'
import OtherUsersContainer from './components/other-users/other-users-container.js'
import MainChatsContainer from './components/chats/main-chats-container';

function App() {
  return (
    <div className="main-container max-h-[92vh] max-w-[1340px] w-screen h-screen bg-secondary grow self-stretch rounded-md shadow-xl">
      <Navbar/>
      <OtherUsersContainer/>
      <MainChatsContainer/>
    </div>
  );
}

export default App;
