import styles from "./Cadastro.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api";
import {toast} from 'react-toastify'

import Footer from "../../components/Footer/Footer";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [typeUser, setTypeUser] = useState("Comum");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        password,
        typeUser,
      };
      const response = await api.post("/user", data);

      setEmail("");
      setPassword("");
      setName("");
      setTypeUser("comum");
      navigate("/login");
      toast.success('Cadastrado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      toast.error(`Falha ao cadastrar: ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }
  }

  return (
    <div>
      <div className={styles.mainCad}>
        <h1 className={styles.cinetec}>Cinetec</h1>
        <form className={styles.formCad} onSubmit={handleRegister}>
          <h2 className={styles.welcomeCad}>Faça seu cadastro</h2>
          <input
            type="text"
            className={styles.inputCad}
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className={styles.inputCad}
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className={styles.inputCad}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className={styles.inputSelect}>Escolha seu usuário:</p>
          <select
            className={styles.inputCad}
            value={typeUser}
            onChange={(e) => setTypeUser(e.target.value)}
          >
            <option value="administrador">Administrador</option>
            <option value="comum">Comum</option>
          </select>

          <input type="submit" className={styles.btnCad} value="Cadastrar" />
          <input
            type="submit"
            className={styles.btnCad}
            value="Voltar"
            onClick={handleSubmit}
          />
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Cadastro;
