import Layout from "./components/Layout/Layout";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
const App = () => {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
};

export default App;
