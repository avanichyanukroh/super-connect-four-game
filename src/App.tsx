import './App.css';
import { io } from "socket.io-client";
import { useEffect, useState } from 'react';
import Lobby from './Components/Lobby';
import Chat from './Components/Chat';
import ContentPage from './Components/ContentPage';

const socket = io("http://localhost:3001");

function App() {
  const [currentRoom, setRoom] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messageReceived, setMessagedReceived] = useState<string>('');

  function joinRoom(): void {
    if (currentRoom !== '') {
      socket.emit('join_room', currentRoom);
    }
  }

  function handleSetRoom(room: string): void {
    setRoom(room);
  }

  function handleSetMessage(message: string): void {
    setMessage(message);
  }

  function sendMessage(): void {
    socket.emit('send_message', {
      message: message
    });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessagedReceived(data.message);
    });
  }, [socket]);
  
  return (
    <div className="app container h-screen mx-auto bg-slate-200">
      <ContentPage />
      <Lobby
        currentRoom={currentRoom}
        setRoom={handleSetRoom}
        joinRoom={joinRoom}
      />
      <Chat
        sendMessage={sendMessage}
        setMessage={handleSetMessage}
        messageReceived={messageReceived}
      />
    </div>
  );
}

export default App;
