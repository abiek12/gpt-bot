const ConversationItem = ({title}) => {
  return (
    <div className="p-2 bg-card hover:bg-sidebar-accent rounded-sm cursor-pointer">
      <h1>{title}</h1>
    </div>
  );
};

export default ConversationItem;
