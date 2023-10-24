import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const CreateCategory = () => {
    return (
        <Layout title={"Dashboard - Create Category"}>
            <div className="row dashboard">
                <div className="col-md-3">
                    <AdminMenu />
                </div>

                <h1 className="text-center">All CreateCategory</h1>

            </div>

        </Layout>
    )
}

export default CreateCategory