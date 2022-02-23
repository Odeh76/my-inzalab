import { Layout } from "./components";
import ApplicationRouter from "./components/Routes";
import Home from "./pages/Home";



function App() {
  return (
      <ApplicationRouter>
        <Layout>
        <Home />
        </Layout>
      </ApplicationRouter>
          
  );
}

export default App;
