import Index from "../ListActor/ListActor";
import ListDirector from "../ListDirector/ListDirector";
import ListGenero from "../ListGenero/ListGenero";
import styles from "./Home.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.backMain}>
      <h1 className={styles.title}>CINETEC</h1>

      <div className={styles.listRoutes}>
        <h3>Cadastre novos itens:</h3>
        <ul>
          <li onClick={() => navigate("/ator")}>Atores</li>
          <li onClick={() => navigate("/diretor")}>Diretores</li>
          <li onClick={() => navigate("/genero")}>Gêneros</li>
        </ul>
      </div>
      <Tabs className={styles.tabs}>
        <TabList>
          <Tab>Ator</Tab>
          <Tab>Diretor</Tab>
          <Tab>Gênero</Tab>
        </TabList>

        <TabPanel>
          <h2>
            <Index />
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <ListDirector />
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <ListGenero />
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
