import { createContext, useEffect, useState } from 'react'
import firebase from '../services/firebaseConnection'

export const AuthContext = createContext({

})

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [loadinAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  // Verifica caso tenha algum usuario logado, ja seta os dados na state user
  useEffect(() => {
    function loadStorage () {
      const storageUser = localStorage.getItem('SistemaUser')

      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }

      setLoading(false)
    }

    loadStorage()
  }, [])

  async function signUp (email, password, nome, whatsOk) {
    setLoadingAuth(true)

    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        const uid = value.user.uid

        await firebase.firestore().collection('users')
          .doc(uid).set({
            nome,
            avatarUrl: null,
            config: 0,
            adm: 0,
            whatsapp: whatsOk,
            dataCreated: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            const data = {
              uid,
              nome,
              email: value.user.email,
              whatsapp: whatsOk,
              avatarUrl: null
            }
            const dataId = uid

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            localStorage.setItem('idUser', dataId)
          })
      })
      .catch((error) => {
        console.log(error)
        setLoadingAuth(false)
      })
  }

  async function signIn (email, password) {
    setLoadingAuth(true)

    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        const uid = value.user.uid

        const userProfile = await firebase.firestore().collection('users')
          .doc(uid).get()

        const data = {
          uid,
          nome: userProfile.data().nome,
          avatarUrl: userProfile.data().avatarUrl,
          whatsapp: userProfile.data().whatsapp,
          email: value.user.email
        }
        const dataId = uid

        setUser(data)
        storageUser(data)
        setLoadingAuth(false)
        localStorage.setItem('idUser', dataId)
      })
      .catch((error) => {
        console.log(error)
        setLoadingAuth(false)
      })
  }

  // Função que add item no localStorage
  function storageUser (data) {
    localStorage.setItem('SistemaUser', JSON.stringify(data))
  }

  async function signOut () {
    await firebase.auth().signOut()
    localStorage.removeItem('SistemaUser')
    localStorage.removeItem('idUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, loadinAuth, signUp, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
