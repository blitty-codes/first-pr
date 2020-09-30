interface creatorProps {
  userName: string;
};

const Creator = ({userName}: creatorProps) => (
  <div className="flex flex-row">
    <h3 className="font-bold">Creator: </h3>
    <h3 className="ml-2">
      <a href={`https://github.com/${userName}`}>{userName}</a>
    </h3>
  </div>
);

export default Creator;