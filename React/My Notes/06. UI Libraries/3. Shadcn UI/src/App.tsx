import { Button } from "@/components/ui/button";
import { IconGitBranch } from "@tabler/icons-react";
import LoginPage from "./app/login/page";

const App = () => {
  return (
    <div>
      <Button variant="outline" size="sm">
        <IconGitBranch /> New Branch
      </Button>
      <LoginPage/>
    </div>
  );
};

export default App;
