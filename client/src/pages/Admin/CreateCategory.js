import React, { useEffect, useState, } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'
import toast from 'react-hot-toast'
import CategoryForm from './../../components/Form/CategoryForm';

const CreateCategory = () => {
    const [categories, setcategories] = useState([])
     const [name, setName] = useState("")

    // handle form 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/category/create-category', { name })
            if (data?.success) {
                toast.success(`${data.name} is created`)
                getAllCategory()

            } else {
                toast.error(data.message);
            }

        } catch (error) {
            console.log(error)
            toast.error('something went wrong in input form')
        }
    }


    // get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category')
            if (data.success) {
                setcategories(data.category)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")

        }
    }

    useEffect(() => {
        getAllCategory()

    }, [])


    return (
        <Layout title={"Dashboard - Create Category"}>
            <div className="row dashboard">
                <div className="col-md-3">
                    <AdminMenu />
                </div>

                <h1 className="text-center">
                    <h1>Manage Category</h1>
                    <div className='p-3 w-50'>
                        <CategoryForm
                            handleSubmit={handleSubmit}
                            value={name}
                            setValue={setName}

                        />
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>

                                    <th scope="col">Name</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories?.map((c) => (
                                    <>
                                        <tr>
                                            <td key={c._id}>{c.name}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary ms-2"
                                                // onClick={() => {
                                                //   setVisible(true);
                                                //   setUpdatedName(c.name);
                                                //   setSelected(c);
                                                // }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger ms-2"
                                                // onClick={() => {
                                                //   handleDelete(c._id);
                                                // }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </h1>

            </div >

        </Layout >
    )
}

export default CreateCategory