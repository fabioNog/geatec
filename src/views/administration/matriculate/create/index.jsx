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

  const Courses = [
    { value: '1', label: 'Java' },
    { value: '2', label: 'React' },
    { value: '3', label: 'Javascript' },
    { value: '4', label: 'HTML' },

  ]

  return (
    <>
      <CRow>

        <CCol xs="6">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                Matricular por Aluno
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
                  <div>
                    <Select
                      className="basic-multi-select"
                      classNamePrefix="select"
                      options={students}
                    />
                    <br />
                  </div>
                  <div>
                    <Select
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                      options={Courses}
                    />
                    <br />
                    <button className="btn btn-dark">Salvar </button>
                  </div>

                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>

        <CCol xs="6">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                Matricular por Curso
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
                  <div>
                    <Select
                      className="basic-multi-select"
                      classNamePrefix="select"
                      options={Courses}
                    />

                  </div>
                  <br />
                  <div>
                    <Select
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                      options={students}
                    />
                  </div>
                  <br />
                  <button className="btn btn-dark">Salvar </button>

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
