const GptMessage = ({ message }) => {
  return <div className="mr-auto max-w-fit">{message.content}</div>;
};

export default GptMessage;
