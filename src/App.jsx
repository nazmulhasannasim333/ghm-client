import { NavigationBar } from "./components/NavigationBar";
import { MemberTabs } from "./components/Tabs";

const App = () => {
  return (
    <div className="container mx-auto">
      <NavigationBar />
      <MemberTabs />
    </div>
  );
};

export default App;
