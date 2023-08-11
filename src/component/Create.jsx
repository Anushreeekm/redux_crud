import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createContact } from '../Actions/ContactAction';

function Create() {
  const [contact,setContact] = useState({
      first: "",
      last: "",
      image: "",
      mobile: "",
      email: "",
      address: ""
  })

  const dispatcher = useDispatch()
  const navigate = useNavigate()

  const readvalue = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name] : value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      console.log("new contact =", contact)
      dispatcher(createContact(contact))
      .unwrap()
      .then(res => {
        toast.success('New Contact added successfully')
        navigate(`/`)
      }) 
      .catch(err => toast.error(err.message))
      } catch (err) {
        toast.error(err.message)
      }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-primary">Create New Contact</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler} >
                <div className="form-group mt-2">
                  <label htmlFor="first">FirstName</label>
                  <input type="text" name="first" id="first" value={contact.first } onChange={readvalue} className='form-control' placeholder='first name' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="last">lastName</label>
                  <input type="text" name="last" id="last" value={contact.last } onChange={readvalue} className='form-control' placeholder='last name' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="image">Profile image</label>
                  <input type="url" name="image" id="image" className='form-control' value={contact.image } onChange={readvalue} placeholder='https://xyz.com/image1.jpg' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="mobile">Mobile</label>
                  <input type="number" name="mobile" id="mobile" className='form-control' value={contact.mobile } onChange={readvalue} placeholder='99XXX 00XXX' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" className='form-control' value={contact.email } onChange={readvalue} placeholder='name@domain.com' required />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="address">Address</label>
                  <input type="address" name="address" id="address" cols="30" rows="6" className='form-control' value={contact.address } onChange={readvalue} placeholder='address here' required />
                </div>
                <div className="form-group mt-2">
                  <input type="submit" value="Add New Contact" className='btn btn-outline-success' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create