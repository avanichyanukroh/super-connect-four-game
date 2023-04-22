interface ChatProps {
  setMessage: (message: string) => void,
  sendMessage: () => void,
  messageReceived: string
}

function Chat({setMessage, sendMessage, messageReceived}: ChatProps) {

  return (
    <div className="h-2/5 w-2/5 bg-blue-200 rounded-lg">
      <div className="h-16 bg-gray-300">
        <h1>Message:</h1>
        {messageReceived}
      </div>
      <div className="flex p-4">
        <input
        className="w-full rounded-tl-lg rounded-bl-lg p-2 bg-gray-500"
          type="text"
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button
          className="py-2 px-4 bg-emerald-500 text-white whitespace-nowrap font-semibold rounded-tr-lg rounded-br-lg shadow-md focus:outline-none"
          onClick={sendMessage}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Chat;