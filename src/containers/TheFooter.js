import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="mfs-auto">
        <a href="https://soitic.com.br" target="_blank" rel="noopener noreferrer">Grupo Soitic 2021</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
