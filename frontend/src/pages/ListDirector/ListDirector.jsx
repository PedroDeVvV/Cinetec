import { useEffect, useState } from "react";
import api from "../../api";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";

const ListDirector = () => {
  const [director, setDirector] = useState([]);

  async function getDirector() {
    try {
      const { data } = await api.get("/diretor");
      setDirector(data);
    } catch (e) {
      console.log(e);
    }
  }

  const formattedDate = (date) => {
    const data = date.slice(0, 10);
    let newDate = `${data[8]}${data[9]}/${data[5]}${data[6]}/${data[0]}${data[1]}${data[2]}${data[3]} `;
    return newDate;
  };

  useEffect(() => {
    getDirector();
  }, [director]);

  async function deleteDirector(id) {
    try {
      await api.delete(`/diretor/${id}`);
      toast.info("Diretor excluído!", {
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
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Nacionalidade</th>
            <th>Data de Nascimento</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {director && director.map((item) => (
            <tr key={item.id_diretor}>
              <td>{item.id_diretor}</td>
              <td>{item.nome_diretor}</td>
              <td>{item.sexo}</td>
              <td>{item.nacionalidade}</td>
              <td>{formattedDate(item.dt_nascimento)}</td>
              <td>
                <button className="btn modal-trigger btn-editar">Editar</button>
                <button
                  className="btn modal-trigger btn-excluir"
                  onClick={() => deleteDirector(item.id_diretor)}
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

export default ListDirector;
