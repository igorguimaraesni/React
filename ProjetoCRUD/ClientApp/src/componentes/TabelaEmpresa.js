import { Button, Table } from "reactstrap"

const TabelaEmpresa = ({ data, setEditar, exibirModal, setExibirModal, deletarEmpresa }) => {

    const enviarDados = (empresa) => {
        setEditar(empresa)
        setExibirModal(!exibirModal)

    }

    return (

        <Table striped responsive>
            <thead>
                <tr>
                    <th>Cnpj</th>
                    <th>Nome Fantasia</th>
                    <th>Cep</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Nenhum registro cadastrado</td>
                        </tr>
                    ) : (
                            data.map((item) => (

                            <tr key={item.id}>
                                <td>{item.cnpj}</td>
                                <td>{item.nomefantasia}</td>
                                <td>{item.cep}</td>
                                <td>
                                        <Button color="primary" size="sm" className="me-2"
                                           onClick={() => enviarDados(item)}   
                                        >Editar</Button>
                                        <Button color="danger" size="sm"
                                            onClick={() => deletarEmpresa(item.id) }
                                        >Deletar</Button>
                                </td>
                            </tr>

                            ))

                    )
                }
            </tbody>
        </Table>

    )

}

export default TabelaEmpresa;