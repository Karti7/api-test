import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Pagination from './Paginatioin'

const UserData = () => {

    const [user, setUser] = useState([])

    const[pageDetails, setPageDetails]= useState ({page:1,
        perPage:6,
        total:12,
        totalPages:2})

    const[pageNumber, setPageNumber] = useState(1)
    const getUsers = async (page) => {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`)
        setUser(response.data.data)
        setPageDetails({
            page:response.page,
            perPage:response.per_page,
            total:response.total,
            totalPages:response.total_pages
        })
    }
 
    const _setPageNumber =  (number) =>{
        console.log(number)
        setPageNumber(number)
        getUsers(number)
    }
    useEffect(() => {
        getUsers(pageNumber)
    }, [])
    return (
        <>
            <h1 className="bg-dark text-white mt-2">List of user details</h1>
            <div className="container bg-light mt-5">
                <div className="row justify-content-center ">
                    {
                        user.map((curElem) => {
                            return (
                                <div className="col-sm-10 col-md-4 " key={curElem.id}>

                                    <div className="card m-2" style={{ width: "90%" }}>
                                        <img src={curElem.avatar} height={230} className="card-img-top" alt="..." />
                                        <div className="card-body">

                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">{curElem.first_name + ' ' + curElem.last_name}</li>
                                                <li className="list-group-item">{curElem.email}</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                </div>
                <div className="row justify-content-center mt-4">
                <div className="col-5 "></div>
                    <div className="col">
                        <Pagination pageDetails={pageDetails} setPageNumber={_setPageNumber} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserData
