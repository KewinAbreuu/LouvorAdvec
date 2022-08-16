import { Container } from './style'

// import { Link } from 'react-router-dom'

import HeaderLogo from '../../components/Logo'
import { useEffect, useState } from 'react'

export default function SelectCompany () {
  const [valor, setValor] = useState('')
  const [controlBtn, setControlBtn] = useState(false)

  useEffect(() => {
    localStorage.setItem('companyId', '123')
  }, [])

  function handlleValueCompanyId () {
    if (valor === '') {
      alert('Escolha uma opção')
    }
    localStorage.removeItem('companyId')
    localStorage.setItem('companyId', JSON.parse(valor))
    setControlBtn(true)
  }

  return (
    <Container>
      <HeaderLogo/>
       <select onChange={(e) => setValor(e.target.value)}>
        <option value="" disabled selected>Selecione uma Advec</option>
        <option value='123'>Advec Maceió</option>
        <option value='1234'>Advec Rio de janeiro</option>
      </select>

      {!controlBtn && <button onClick={handlleValueCompanyId} className="btnSelect">{valor === '' ? '...' : 'Pressione para confirmar'}</button>}

        {valor !== '' && controlBtn
          ? <a href="/selectLogin" className='btnSelect'>Continuar</a>
          : <div></div>
        }
    </Container>
  )
}
