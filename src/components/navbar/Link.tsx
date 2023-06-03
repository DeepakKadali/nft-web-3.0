import { SelectedComponent } from "../../common/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  component: string;
  selectedComponent: SelectedComponent;
  setSelectedComponent: (value: SelectedComponent) => void;
};

const Link = ({
  component,
  selectedComponent,
  setSelectedComponent,
}: Props) => {

  const lowerCasePage = component
    .toLowerCase()
    .replace(/ /g, "") as SelectedComponent;

  return (
    <div>
      <AnchorLink
        className={`
        text-2xl font-bold dark:text-white font-teko
      `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedComponent(lowerCasePage)}
      >
        {component}
      </AnchorLink>
    </div>
  );
};

export default Link;
