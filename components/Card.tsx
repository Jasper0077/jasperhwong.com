export interface CardProps {
  children: JSX.Element | Array<JSX.Element> | undefined;
}

const Card = (props: CardProps) => {
  const { children } = props;
  return <>{children}</>;
};

export default Card;
