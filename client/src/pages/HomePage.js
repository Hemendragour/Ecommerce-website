// import React, { useContext } from 'react'
import Layout from '../components/Layout/Layout'
// import { User } from '../context/auth';?
import { useAuth } from '../context/auth'

const HomePage = (props) => {
  const [auth, setauth] = useAuth()

  return (
    <Layout title={'Best offer'}>
      <h1>Homepage</h1>
      <pre>{JSON.stringify(auth, null, 4)} </pre>


    </Layout>
  )
}

export default HomePage