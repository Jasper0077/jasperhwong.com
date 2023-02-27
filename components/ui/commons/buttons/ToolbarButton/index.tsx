import { Button } from "../Button";

export interface ToolbarButtonProps {
  icon: JSX.Element;
  isActive?: boolean;
  classNames?: string;
}

const ToolbarButton = (props: ToolbarButtonProps) => {
  const { icon, isActive, ...otherProps } = props;
  return (
    <Button classNames="toolbar-btn" {...otherProps}>
      {icon}
    </Button>
  );
};

export default ToolbarButton;
