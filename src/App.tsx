import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Navbar from "./components/navbar/Navbar";
import Market from "./components/market/Market";
import Road from "./components/road/Road";
import { useState } from "react";
import { SelectedComponent } from "./common/types";

type Props = {};

const App = (props: Props) => {
  const [selectedComponent, setSelectedComponent] = useState<SelectedComponent>(SelectedComponent.Home)
  return (
    <div>
      <div className="px-[120px] py-10 border-x-[40px] border-t-[40px] border-pink-300 dark:border-bluebg border-solid bg-primary dark:bg-backclr">
        <Navbar
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
        <Home />
        <Blog />
        <Market />
        <Road />
      </div>
    </div>
  );
};

export default App;
