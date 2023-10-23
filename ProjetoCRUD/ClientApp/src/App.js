/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react"
import { Col, Container, Row, Card, CardTitle, CardBody, Button, Nav, NavItem, NavLink, TabContent, TabPane, CardText } from "reactstrap"
//import ModalContacto from "./componentes/ModalContacto"
import TabelaEmpresa from "./componentes/TabelaEmpresa"
import ModalEmpresa from "./componentes/ModalEmpresa";

const App = () => {


    const [empresas, setEmpresas] = useState([]);
    const [exibirModal, setExibirModal] = useState(false);
    const [editar, setEditar] = useState(null);

    const exibeEmpresas = async () => {

        const response = await fetch("api/empresa/ListaEmpresa");

        if (response.ok) {
            const data = await response.json();
            setEmpresas(data)
        } else {
            console.log("error na lista")
        }

    }

    useEffect(() => {

        exibeEmpresas()
    }, [])

    const salvarEmpresa = async (empresa) => {

        const response = await fetch("api/empresa/Salvar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(empresa)
        })

        if (response.ok) {
            setExibirModal(!exibirModal);
            exibeEmpresas();
        }
    }

    const editarEmpresa = async (empresa) => {

        const response = await fetch("api/empresa/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(empresa)
        })

        if (response.ok) {
            setExibirModal(!exibirModal);
            exibeEmpresas();
        }
    }

    const deletarEmpresa = async (id) => {

        var resposta = window.confirm("Deseja deletar o registro?")

        if (!resposta) {
            return;
        }

        const response = await fetch("api/empresa/Deletar/" + id, {
            method: "DELETE",
        })

        if (response.ok) {
            exibeEmpresas();
        }
    }

    
    return (
        <div>
            <Container>
                <Row className="mt-3">

                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className="active"
                                onClick={function noRefCheck() { }}
                            >
                                Empresa
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className=""
                                onClick={function noRefCheck() { }}
                            >
                                Fornecedor
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab="1">
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Card>
                                    
                                        <CardBody>
                                            <Button size="sm" color="success"
                                                onClick={() => setExibirModal(!exibirModal) }
                                            >Cadastrar Empresa</Button>
                                            <hr></hr>
                                            <TabelaEmpresa data={empresas}
                                                setEditar={setEditar}
                                                exibirModal={exibirModal}
                                                setExibirModal={setExibirModal}

                                                deletarEmpresa={deletarEmpresa }
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>

                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>
                                            Special Title Treatment
                                        </CardTitle>
                                        <CardText>
                                            With supporting text below as a natural lead-in to additional content.
                                        </CardText>
                                        <Button>
                                            Go somewhere
                                        </Button>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>
                                            Special Title Treatment
                                        </CardTitle>
                                        <CardText>
                                            With supporting text below as a natural lead-in to additional content.
                                        </CardText>
                                        <Button>
                                            Go somewhere
                                        </Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>


                    </TabContent>
                

                </Row>
        
            </Container>

            <ModalEmpresa
                exibirModal={exibirModal}

                setExibirModal={setExibirModal}
                salvarEmpresa={salvarEmpresa}

                editar={editar}
                setEditar={setEditar}
                editarEmpresa={editarEmpresa}
            />
        </div>
    )

}

export default App;