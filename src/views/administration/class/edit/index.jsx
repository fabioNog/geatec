import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Select from 'react-select'

import usersData from './UsersData'

const Edit = ({match}) => {
  const user = usersData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    const students = [
      { value: '1', label: 'Raphael' },
      { value: '2', label: 'Amanda' },
      { value: '3', label: 'Andressa' },
      { value: '4', label: 'Marlon' },
      { value: '5', label: 'Beatriz' },
      { value: '6', label: 'Salatiel' },
    ]

  return (
    <CRow>

      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Código da Turma: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    userDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><input className="form-control" type="text" value= {value}/> </td>
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
  )
}

export default Edit
