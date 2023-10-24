import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const Users = () => {
    return (
        <Layout title={"Dashboard - All User"}>
            <div className="row dashboard">
                <div className="col-md-3">
                    <AdminMenu />
                </div>

                <h1 className="text-center">All User</h1>

            </div>

        </Layout>
    )
}

export default Users