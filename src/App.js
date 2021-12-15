import Home from "./pages/Home";
import { Posts, Layout } from "./components";
import { BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
      <Router>
          <Layout>
            <Home />
          </Layout>
      </Router>
  );
}

export default App;
