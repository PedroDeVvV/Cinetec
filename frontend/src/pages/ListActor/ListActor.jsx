import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import api from "../../api";
import "./ListActor.css";
import { toast } from "react-toastify";

function Index() {
  const [actors, setActors] = useState([]);
  const [delet, setDelet] = useState(true);

  useEffect(() => {
    async function getActor() {
      const { data } = await api.get("/ator");
      setActors(data);
    }
    getActor();
  }, [actors, delet]);

  const formattedDate = (date) => {
    const data = date.slice(0, 10);
    let newDate = `${data[8]}${data[9]}/${data[5]}${data[6]}/${data[0]}${data[1]}${data[2]}${data[3]} `;
    return newDate;
  };

  async function handleDeleteUser(id) {
    try {
      await api.delete(`ator/${id}`);
      toast.success("Ator deletado com sucesso !", {
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
      console.log("Error: ", e);
      toast.error("Falha ao deletar ator !", {
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
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Data de Nascimento</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {actors && actors.map((item) => (
            <tr key={item.id_ator}>
              <td>{item.id_ator}</td>
              <td>{item.nome_ator}</td>
              <td>{item.sexo}</td>
              <td>{formattedDate(item.dt_nascimento)}</td>
              <td>
                <button className="btn modal-trigger btn-editar">Editar</button>
                <button
                  className="btn modal-trigger btn-excluir"
                  value={delet}
                  onClick={() => {
                    handleDeleteUser(item.id_ator)
                    setDelet(!delet)
                  }}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Index;
