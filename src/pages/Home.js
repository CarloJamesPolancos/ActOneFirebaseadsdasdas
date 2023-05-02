import React, {useState, useEffect} from 'react';
import fireDb from "../firebase";
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";

const Home = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fireDb.child("supporter").on("value", (snapshot) => {
            if (snapshot.val()!== null){
                setData({...snapshot.val()})
            } else {
                setData({});
            }
        })
        return () => {
            setData ({});
        };
    }, []);

    const onDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this supporter?")) {
            fireDb.child(`supporter/${id}`).remove((err) => {
                if(err) {
                    toast.error(err)
                } else {
                    toast.success("Supporter Deleted Successfully!")
                }
            })
        }
    }

    return (
        <div class="body">
        <div class="bad" style={{marginTop: "100px"}}>
        <div class="">
                <p class="biggg">Supporters</p>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>No.</th>
                        <th style={{textAlign:"center"}}>Name</th>
                        <th style={{textAlign:"center"}}>Email</th>
                        <th style={{textAlign:"center"}}>Role</th>
                        <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{index+1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].role}</td>
                                <td>
                                    <Link to={`/update/${id}`}>
                                        <p className="normis btn btn-edit">Edit</p>
                                    </Link>
                                        <p
                                        className="normis btn btn-delete"
                                        onClick={() => onDelete(id)}>Delete</p>
                                    <Link to={`/view/${id}`}>
                                        <p className="normiss btn btn-view">View</p>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Home