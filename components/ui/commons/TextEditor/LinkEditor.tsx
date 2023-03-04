import Card from "@ui/commons/cards/Card";

interface Props {
  children?: React.ReactNode;
}

const LinkEditor = ({ children }: Props) => {
  return <Card>{children}</Card>;
};

export default LinkEditor;
