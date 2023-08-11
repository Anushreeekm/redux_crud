import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteContact } from '../Actions/ContactAction'
import { useDispatch } from 'react-redux'

function ContactItem(props) {

    const displatcher = useDispatch();
    const navigate = useNavigate()

    const deleteHandler = async (id) => {
        if(window.confirm(`Are you sure to delete contact id ${id} `)) {
            await displatcher(deleteContact({id: id}))
            .unwrap()
            .then(res => {
                toast.success('contact delete successfully')
                navigate('/')
            }).catch(err => toast.error(err.message))
        } else {
            toast.warning('delete terminated')
        }
    }

  return (
    <div className="col-md-4 mt-2">
        <div className="card">
            <img src={props.image ? props.image : "#"} alt="no image" className='card-img-top' />
            <div className="card-header">
                <h4 className="display-4 text-center"> { props.first } { props.last } </h4>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Email</strong>
                        <span className="float-end text-success">{ props.email } </span>
                    </li>
                    <li className="list-group-item">
                        <strong>Mobile</strong>
                        <span className="float-end text-success">{ props.mobile } </span>
                    </li>
                    <li className="list-group-item">
                        <details>
                            <summary> Address </summary>
                            <p className="text-success"> {props.address} </p>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <NavLink to={`/edit/${props.id}`} className="btn btn-info">
                    <i className="bi bi-pencil"></i>
                </NavLink>
                <button onClick={() => {deleteHandler(props.id)}} className="btn btn-danger float-end">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ContactItem