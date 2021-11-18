import React from 'react'
import Select from 'react-select'
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

  const students = [
    { value: '1', label: 'Raphael' },
    { value: '2', label: 'Amanda' },
    { value: '3', label: 'Andressa' },
    { value: '4', label: 'Marlon' },
    { value: '5', label: 'Beatriz' },
    { value: '6', label: 'Salatiel' },
  ]


  return (
    <>




      <CRow>
        <CCol xs="6">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                Cadastro de Turma
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
                        <div className="" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Descrição" name="Nome" />
                        </div>
                        <div className="" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Curso" name="Email" />
                        </div>
                        <div className="" style={{ padding: '5px' }}>
                          <input type="text" className="form-control" placeholder="Capacidade" name="Nascimento" />
                        </div>
                 

                        <div className="col-12" style={{ padding: '5px' }}>
                          <input type="submit" name className="btn btn-primary" value="Salvar" defaultValue="Salvar" />
                        </div>
                    </CFormGroup>
                  </CForm>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>

        <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Alunos
          </CCardHeader>
          <CCardBody>
             <div>
             <Select 
          isMulti
          className="basic-multi-select"
          classNamePrefix="select"
          options={students} 
          />
          <br/>
              <button className="btn btn-dark">Salvar </button>
             </div>
          </CCardBody>
        </CCard>
      </CCol>

      </CRow>
    </>
  )
}

export default Create
