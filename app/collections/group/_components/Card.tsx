const Card = ({ team, names }: { team: string; names: Array<string> }) => {
  return (
    <div className="rounded w-[150px] h-[250px] shadow-lg bg-neutral-200 dark:bg-gray-200 p-4">
      <h2 className="prose dark:prose-dark font-semibold">{team}</h2>
      <div className="overflow-y-auto">
        {names.map((name) => (
          <p className="prose dark:prose-dark">{name}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
