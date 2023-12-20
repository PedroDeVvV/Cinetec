import styles from "./Ator.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";

const Ator = () => {
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("M");
  const [dtNasc, setDtNasc] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const data = {
        nome,
        sexo,
        dtNasc,
      };

      const response = await api.post("/ator", data);

      toast.success("Ator cadastrado com sucesso!", {
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
      setSexo("");
    } catch (e) {
      console.log("error: ", e);
      toast.error("Não foi possível cadastrar o ator!", {
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
      <div className={styles.mainCad}>
        <h1 className={styles.cinetec}>Cinetec</h1>
        <form className={styles.formCadAct} onSubmit={handleRegister}>
          <h2 className={styles.welcomeCad}>Ator - Cadastro</h2>
            <input
              type="text"
              className={styles.inputAct}
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <select
              className={`${styles.inputAct} ${styles.selectAct}`}
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
            <input
              type="date"
              className={styles.inputAct}
              placeholder="Data de Nascimento"
              value={dtNasc}
              onChange={(e) => setDtNasc(e.target.value)}
              required
            />

          <button className={styles.btnAct} type="submit">
            Cadastrar
          </button>
          <button className={styles.btnAct} onClick={() => navigate("/")}>
            Voltar
          </button>
        </form>
      </div>
  );
};

export default Ator;
