const MessageBubble = ({ message }) => {
  return (
    <div className="bg-input p-4 px-6 rounded-3xl ml-auto max-w-fit">
      {message.content}
    </div>
  );
};

export default MessageBubble;
