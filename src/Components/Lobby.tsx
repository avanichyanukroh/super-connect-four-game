
interface LobbyProps {
  currentRoom: string,
  setRoom: (room: string) => void,
  joinRoom: () => void
}

function Lobby({currentRoom, setRoom, joinRoom}: LobbyProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Room Name..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
}

export default Lobby;