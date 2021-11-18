import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const Create = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>




      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                Cadastro de Aluno
                <div className="card-header-actions">
                  <CButton color="link" className="card-header-action btn-setting">
                    <CIcon name="cil-settings" />
                  </CButton>
                  <CButton
                    color="link"
                    className="card-header-action btn-minimize"
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <CIcon name={collapsed ? "cil-arrow-top" : "cil-arrow-bottom"} />
                  </CButton>
                  <CButton
                    color="link"
                    className="card-header-action btn-close"
                    onClick={() => setShowElements(false)}
                  >
                    <CIcon name="cil-x" />
                  </CButton>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed} timeout={1000}>
                <CCardBody>
                  <CForm className="form-horizontal">
                    <CFormGroup>
                      <div className="row">
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Nome" name="Nome" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Email" name="Email" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="date" className="form-control" placeholder="Data de Nascimento" name="Nascimento" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="CPF" name="CPF" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="CNPJ" name="CNPJ" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="SAC" name="SAC" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Cel" name="Cel" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Endereço" name="Endereco" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Número" name="Numero" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Bairro" name="Bairro" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Complemento" name="Complemento" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Cidade" name="Cidade" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Estado" name="Estado" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="CEP" name="CEP" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Usuário Extra" name="userExtra" />
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <select className="form-control" name="AlunoSOITech">
                            <option value="nao">Aluno Comum</option>
                            <option value="sim">Aluno SOITech</option>
                          </select>
                        </div>
                        <div className="col-4" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Senha" name="senha" />
                        </div>

                        <div className="col-12" style={{ padding: '5px' }}>
                          <input type="submit" name className="btn btn-primary" value="Salvar" defaultValue="Salvar" />
                        </div>
                      </div>
                      
                    </CFormGroup>
                  </CForm>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </>
  )
}

export default Create
