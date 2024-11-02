import { useNavigate } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";

const Header = () => {
  const navigate = useNavigate();
  
  const items = [
    {
      label: "Login",
      icon: "pi pi-fw pi-home",
      command: () => navigate("/login"),
    },
    {
      label: "Register",
      icon: "pi pi-fw pi-calendar",
      command: () => navigate("/register"),
    },
  ];

  return <TabMenu model={items} />;
};

export default Header;
