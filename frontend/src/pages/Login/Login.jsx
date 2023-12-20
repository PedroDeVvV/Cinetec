import styles from "./Login.module.css";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cadastro");
  };

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const dataLogin = {
        email,
        password,
      };

      const { data } = await api.post("/login", dataLogin);
      toast.success(`Bem vindo, ${data.data} !`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

      sessionStorage.setItem("login", true);
      sessionStorage.setItem("jwt", data.token);
      navigate("/");
    } catch (err) {
      toast("Erro", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className={styles.containerLogin}>
      <h1 className={styles.cinetec}>Cinetec</h1>
      <form onSubmit={handleLogin} className={styles.formLogin}>
        <h2>Entrar</h2>
        <input
          type="email"
          className={styles.inputLogin}
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className={styles.inputLogin}
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Entrar" className={styles.btnLogin} />
        <p className={styles.paragraphLogin}>
          Não tem uma conta ?{" "}
          <span onClick={handleSubmit}>Cadastre-se agora</span>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
