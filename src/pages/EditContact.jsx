import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

import { editContact, fetchAllContacts } from "../lib/fetch";

export const EditContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentContact, setCurrentContact] = useState({name: "", phone:"", email:"", address:"", id:""})
  useEffect(() => {
    fetchAllContacts(dispatch);
  }, []);

  
  useEffect(()=>{
    let singleContact = store.contacts?.find(
    (contact) => contact.id === parseInt(id)
  );
  console.log("here is my singlecontact: ",singleContact)
  if (singleContact){
    setCurrentContact(singleContact)
  }
  return 
  },[store.contacts])
  



 // const [contactName, setContactName] = useState(singleContact.name);
 // const [contactAddress, setContactAddress] = useState(singleContact.address);
 // const [contactPhone, setContactPhone] = useState(singleContact.phone);
 // const [contactEmail, setContactEmail] = useState(singleContact.email);
  const handleEditContact= (e) =>{
    e.preventDefault();
    editContact(currentContact, dispatch)
    navigate("/")
  }
  return (
    <>
      <div className="row add-contact-row">
        <div className="col-2"></div>
        <div className="col-8">
          <form className="contact-form">
            <div className="mb-3">
              <label htmlFor="contactName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="contactName"
                value={currentContact.name}
                onChange={(e) => setCurrentContact({...currentContact, name: e.target.value})}
                placeholder={currentContact?.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="contactAddress"
                //value={contactAddress}
                onChange={(e) => setCurrentContact({...currentContact, address: e.target.value})}
                placeholder={currentContact?.address}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactPhone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="contactPhone"
                //value={contactPhone}
                onChange={(e) => setCurrentContact({...currentContact, phone: e.target.value})}
                placeholder={currentContact?.phone}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="contactEmail"
                //value={contactEmail}
                onChange={(e) => setCurrentContact({...currentContact, email: e.target.value})}
                placeholder={currentContact?.email}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) =>
                handleEditContact(e)
              }
            >
              Submit
            </button>
          </form>
          <Link to="/">Go back Home</Link>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};
