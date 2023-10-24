import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Orders = () => {
    return (
        <Layout>
            <div className="row dashboard">
                <div className="col-md-3">
                    <UserMenu />
                </div>

                <h1 className="text-center">Orders</h1>

            </div>
        </Layout>
    )
}

export default Orders