const MessageBubble = ({ message }) => {
  return (
    <div className="bg-input px-6 py-4 rounded-2xl ml-auto w-fit max-w-lg text-left leading-relaxed break-all">
      {message.content}
    </div>
  );
};

export default MessageBubble;
