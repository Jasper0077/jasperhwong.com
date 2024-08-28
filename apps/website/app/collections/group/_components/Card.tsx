const Card = ({ team, names }: { team: string; names: Array<string> }) => {
  return (
    <div className="h-[250px] w-[150px] rounded bg-neutral-200 p-4 shadow-lg dark:bg-gray-200">
      <h2 className="dark:prose-dark prose font-semibold">{team}</h2>
      <div className="overflow-y-auto">
        {names.map((name) => (
          <p className="dark:prose-dark prose">{name}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
