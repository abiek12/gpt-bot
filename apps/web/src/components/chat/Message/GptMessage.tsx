const GptMessage = ({ message }) => {
  return (
    <div className="mr-auto max-w-fit leading-relaxed">{message.content}</div>
  );
};

export default GptMessage;
