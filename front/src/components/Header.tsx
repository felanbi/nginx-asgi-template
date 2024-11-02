import { useState } from "react";
import { TabMenu } from "primereact/tabmenu";

const Header = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="card">
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={item => setActiveIndex(item.index)}
      />
    </div>
  );
};

export default Header;
