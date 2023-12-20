import { useEffect, useState } from "react";
import api from "../../api";
import Table from "react-bootstrap/Table";
import styles from "./ListGenero.module.css";
import { toast } from "react-toastify";

const ListGenero = () => {
  const [director, setDirector] = useState([]);

  async function getDirector() {
    try {
      const { data } = await api.get("/genero");
      setDirector(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getDirector();
  }, [director]);

  async function deleteGender(id) {
    try {
      await api.delete(`/genero/${id}`);
      toast.info("Gênero excluído!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (e) {
      console.log("Erro: ", e);
      toast.error("Falha ao deletar !", {
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
    <div className={styles.container}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {director && director.map((item) => (
            <tr key={item.id_genero}>
              <td>{item.id_genero}</td>
              <td>{item.genero}</td>
              <td>
                <button className="btn modal-trigger btn-editar">Editar</button>
                <button
                  className="btn modal-trigger btn-excluir"
                  onClick={() => deleteGender(item.id_genero)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListGenero;
