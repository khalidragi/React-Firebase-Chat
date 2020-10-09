import React from 'react';
import { useAuth } from './config/useAuth';
import { Login, ChatRoom } from './components';
import { Header } from './layout';

function App() {
  const { user } = useAuth();
  if (user === null) return <p>Loading</p>;
  return (
    <div className="App">
      <Header />
      {!user ? <Login /> : <ChatRoom />}
    </div>
  );
}

export default App;
