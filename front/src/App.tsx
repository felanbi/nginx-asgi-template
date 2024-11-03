import Header from "./components/Header";

const items = [
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    url: "login",
  },
  {
    label: "Calendar",
    icon: "pi pi-fw pi-calendar",
    url: "register",
  },
];

const App = () => {
  return <Header items={items} />;
};

export default App;
