import { Container } from './style'

import HeaderLogo from '../../components/Logo'
import { useEffect, useState } from 'react'

import companys from '../../companysConfig'

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
      <div style={{ marginTop: 100 }}>
      <HeaderLogo/>
      </div>

      <select onChange={(e) => setValor(e.target.value)}>
        <option value="" disabled selected>Selecione uma Advec</option>
        {companys.map((item) => {
          return (
            <option key="" value={item.value}>{item.label}</option>
          )
        })}
      </select>

      {!controlBtn && <button onClick={handlleValueCompanyId} className="btnSelect1">{valor === '' ? '...' : 'Pressione para confirmar'}</button>}

        {valor !== '' && controlBtn
          ? <a href="/selectLogin" className='btnSelect2'>Continuar</a>
          : <div></div>
        }
    </Container>
  )
}
