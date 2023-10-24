import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const CreateProduct = () => {
    return (
        <Layout title={"Dashboard - Create Product"}>
            <div className="row dashboard">
                <div className="col-md-3">
                    <AdminMenu />
                </div>

                <h1 className="text-center">All Products List</h1>

            </div>
        </Layout>
    )
}

export default CreateProduct