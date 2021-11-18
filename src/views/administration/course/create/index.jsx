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
                Cadastro de Curso
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
                      <form method="post" action="http://www.elfutec.com/painel/editarCurso">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Nome de Curso</label>
                          <input type="text" className="form-control" name="nomecurso"  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Número de Páginas</label>
                          <input type="number" className="form-control" name="paginas"  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEduzz1">Código da Eduzz</label>
                          <input id="codEduzz" type="number" defaultValue className="form-control" name="codigoEduzz" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">
                            Curso do sistema ELFUS                        </label>
                          <select className="form-control" name="cursoelfus">
                            <option value="sim">Sim</option>
                            <option value="nao" selected>Não</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="presencial">
                            Presencial / EAD                        </label>
                          <select className="form-control" name="presencial">
                            <option value="presencial">Presencial</option>
                            <option value="ead">EAD</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="solucao">
                            Solução                        </label>
                          <select className="form-control" name="solucao">
                            <option value={1}>Sim</option>
                            <option value={0} selected>Não</option>
                          </select>
                        </div>
                        <hr />
                        <input type="hidden" name="id_curso" defaultValue={1} />
                        <button type="submit" className="btn btn-primary">Salvar</button>
                      </form>

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
