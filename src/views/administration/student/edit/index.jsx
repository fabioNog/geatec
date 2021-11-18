import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Select from 'react-select'
import usersData from './UsersData'

const Edit = ({ match }) => {
  const user = usersData.find(user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) :
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]


    const courses = [
      { value: '1', label: 'React' },
      { value: '2', label: 'Javascript' },
      { value: '3', label: 'Html' },
      { value: '4', label: 'Programação Orientada a Objetos' },
      { value: '5', label: 'Inglês para Programadores' },
      { value: '6', label: 'Lógica de Programação' },
    ]

    const classes = [
      { value: '1', label: 'Turma 01' },
      { value: '2', label: 'Turma 02' },
      { value: '3', label: 'Turma 03' },
      { value: '4', label: 'Turma 04' },
      { value: '5', label: 'Turma 05' },
      { value: '6', label: 'Turma 06' },
    ]


  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Registo do Aluno: {match.params.id}
          </CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {
                  userDetails.map(([key, value], index) => {
                    return (
                      <tr key={index.toString()}>
                        <td>{`${key}:`}</td>
                        <td><input className="form-control" type="text" value={value} /> </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>

            <button className="btn btn-dark">Salvar </button>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Cursos:
          </CCardHeader>
          <CCardBody>
          <Select 
          isMulti
          className="basic-multi-select"
          classNamePrefix="select"
          options={courses} 
          />
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>
            Turmas:
          </CCardHeader>
          <CCardBody>
          <Select 
          isMulti
          className="basic-multi-select"
          classNamePrefix="select"
          options={classes} 
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
                

  )
}

export default Edit
