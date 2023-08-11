import React from 'react'

function ContactItem(props) {
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
        </div>
    </div>
  )
}

export default ContactItem