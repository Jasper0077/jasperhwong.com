import { Button } from "../Button";

export interface ToolbarButtonProps {
  icon: JSX.Element;
  isActive?: boolean;
  className?: string;
}

const ToolbarButton = (props: ToolbarButtonProps) => {
  const { icon, isActive, ...otherProps } = props;
  return (
    <Button className="toolbar-btn" {...otherProps}>
      {icon}
    </Button>
  );
};

export default ToolbarButton;
