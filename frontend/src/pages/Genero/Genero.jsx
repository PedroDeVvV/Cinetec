import styles from "./Genero.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";

const Genero = () => {
  const [genero, setGenero] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const data = {
        genero,
      };

      const response = await api.post("/genero", data);

      toast.success("Genero cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setGenero("");
    } catch (e) {
      console.log("error: ", e);
      toast.error("Não foi possível cadastrar o Genero!", {
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
        <form className={styles.formCadGen} onSubmit={handleRegister}>
          <h2 className={styles.welcomeCad}>Gênero - Cadastro</h2>
          <input
            type="text"
            className={styles.inputGen}
            placeholder="Gênero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />

          <button className={styles.btnGen} type="submit">
            Cadastrar
          </button>
          <button className={styles.btnGen} onClick={() => navigate("/")}>
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Genero;
