import { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap"

const modeloEmpresa = {
    id: 0,
    cnpj: "",
    nomefantasia: "",
    cep: ""
}


const ModalEmpresa = ({ exibirModal, setExibirModal, salvarEmpresa, editar, setEditar, editarEmpresa }) => {

    const [empresa, setEmpresa] = useState(modeloEmpresa);

    const atualizaDados = (e) => {

        //console.log(e.target.name + " : " + e.target.value)
        setEmpresa(
            {
                ...empresa,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviaDados = () => {

        if (empresa.id == 0) {
            salvarEmpresa(empresa)
        } else {
            editarEmpresa(empresa)
        }

        setEmpresa(modeloEmpresa)

    }

    useEffect(() => {
        if (editar != null) {
            setEmpresa(editar)
        } else {
            setEmpresa(modeloEmpresa)
        }
    }, [editar])

    const cancelarModal = () => {

        setExibirModal(!exibirModal)
        setEditar(null)
    }


    return (

        <Modal isOpen={exibirModal}>
            <ModalHeader>
                {empresa.id == 0 ? "Novo Registro" : "Editar"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Cnpj</Label>
                        <Input name="cnpj" onChange={(e) => atualizaDados(e)} value={empresa.cnpj}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nome Fantasia</Label>
                        <Input name="nomefantasia" onChange={(e) => atualizaDados(e)} value={empresa.nomefantasia}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Cep</Label>
                        <Input name="cep" onChange={(e) => atualizaDados(e)} value={empresa.cep}/>
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviaDados }>Salvar</Button>
                <Button color="danger" size="sm" onClick={cancelarModal }>Cancelar</Button>
            </ModalFooter>
        </Modal>

    )
}

export default ModalEmpresa;