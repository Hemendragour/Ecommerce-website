import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Profile = () => {
    return (
        <Layout>
            <div className="row dashboard">
                <div className="col-md-3">
                    <UserMenu />
                </div>

                <h1 className="text-center">Profile</h1>

            </div>

        </Layout>
    )
}

export default Profile