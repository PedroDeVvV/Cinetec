import styles from "./Diretor.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";

const Diretor = () => {
  const [nome, setNome] = useState("");
  const [nacionalidade, setNacionalidade] = useState("Brasileiro");
  const [sexo, setSexo] = useState("M");
  const [dtNasc, setDtNasc] = useState("");

  console.log(nome, nacionalidade, sexo, dtNasc);

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const data = {
        nome,
        nacionalidade,
        sexo,
        dtNasc,
      };

      const response = await api.post("/diretor", data);

      toast.success("Diretor cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setDtNasc("");
      setNome("");
      setNacionalidade("");
    } catch (e) {
      console.log("error: ", e);
      toast.error("Não foi possível cadastrar o Diretor!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div>
      <div className={styles.mainCad}>
        <h1 className={styles.cinetec}>Cinetec</h1>
        <form className={styles.formCad} onSubmit={handleRegister}>
          <h2 className={styles.welcomeCad}>Diretor - Cadastro</h2>
            <input
              type="text"
              className={styles.inputDir}
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <select
              className={styles.inputDir}
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>

            <select
              className={styles.inputDir}
              value={nacionalidade}
              onChange={(e) => setNacionalidade(e.target.value)}
            >
              <option value="Brasil">Brasileiro</option>
              <option value="Estados Unidos">Estadunidense</option>
              <option value="Canadá">Canadense</option>
              <option value="Reino Unido">Britânico</option>
              <option value="Austrália">Australiano</option>
              <option value="Alemanha">Alemão</option>
              <option value="França">Francês</option>
              <option value="Itália">Italiano</option>
              <option value="Espanha">Espanhol</option>
              <option value="Japão">Japonês</option>
              <option value="China">Chinês</option>
              <option value="Índia">Indian</option>
              <option value="Rússia">Russo</option>
              <option value="México">Mexicano</option>
              <option value="Argentina">Argentino</option>
              <option value="Brasil">Brasileiro</option>
              <option value="Colômbia">Colombiano</option>
              <option value="Chile">Chileno</option>
              <option value="Peru">Peruano</option>
              <option value="Venezuela">Venezuelano</option>
              <option value="Uruguai">Uruguaio</option>
              <option value="Paraguai">Paraguaio</option>
              <option value="Equador">Equatoriano</option>
              <option value="Bolívia">Boliviano</option>
              <option value="Costa Rica">Costarriquenho</option>
              <option value="Panamá">Panamenho</option>
              <option value="Nicarágua">Nicaraguense</option>
              <option value="Honduras">Hondurenho</option>
              <option value="El Salvador">Salvadorenho</option>
              <option value="Guatemala">Guatemalteco</option>
              <option value="Cuba">Cubano</option>
              <option value="República Dominicana">Dominicano</option>
              <option value="Portugal">Português</option>
              <option value="Holanda">Holandês</option>
              <option value="Bélgica">Belga</option>
              <option value="Suíça">Suíço</option>
              <option value="Suécia">Sueco</option>
              <option value="Noruega">Norueguês</option>
              <option value="Dinamarca">Dinamarquês</option>
              <option value="Finlândia">Finlandês</option>
              <option value="Áustria">Austríaco</option>
              <option value="Grécia">Grego</option>
              <option value="Turquia">Turco</option>
              <option value="Egito">Egípcio</option>
              <option value="África do Sul">Sul-africano</option>
              <option value="Nigéria">Nigeriano</option>
              <option value="Gana">Ganês</option>
              <option value="Quênia">Queniano</option>
              <option value="Austrália">Australiano</option>
            </select>

            <input
              type="date"
              className={styles.inputDir}
              placeholder="Data de Nascimento"
              value={dtNasc}
              onChange={(e) => setDtNasc(e.target.value)}
              required
            />

          <button className={styles.btnDir} type="submit">
            Cadastrar
          </button>
          <button className={styles.btnDir} onClick={() => navigate("/")}>
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Diretor;
