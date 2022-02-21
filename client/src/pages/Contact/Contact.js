import { MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import "./Contact.scss";




export const Contact = () => {
  
  const contacts = require('../../datas/ContactData.json').contacts
 /*  window.localStorage.setItem('LS_Contacts:', JSON.stringify(contacts)) */

  const initialValue = JSON.parse(
    window.localStorage.getItem("LS_ITEMS: ") || '[]'
  )
  const [contactName, setContactName] = useState()
  const [contactMail, setContactMail] = useState()
  const [contactPhone, setContactPhone] = useState()
  const [contactLocation, setContactLocation] = useState()
  const [contactMessage, setContactMessage] = useState()

  const [flag, setFlag] = useState(false)

  const [contact, setContact] = useState({})
  const [allContact, setAllContact] = useState(initialValue)  

  useEffect(() => {
      setContact({
        name:contactName,
        mail: contactMail,
        phone: contactPhone,
        location: contactLocation,
        message: contactMessage
      })
  }, [flag])

  const [ bol, setBol] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllContact([...allContact, contact])
   setBol(true)
    contacts.push(contact) 
    setFlag(!flag)    
  }

  useEffect(() => {
    
    localStorage.setItem("LS_ITEMS: ",JSON.stringify(allContact) )
    // console.log('--------------------------use_Effect executed-------------')
    setBol(false)
  }, [bol === true])

  

  

  // console.log('Contacts JSON: ', contacts)
  // console.log('ALL CONTACTS ARE: ', allContact)
  return (
    <div>
      <div
        className="contact2"
        style={{
          backgroundImage:`url('https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg')`
        }}
        id="contact"
      >
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div className="card card-shadow border-0 mb-4">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-4">
                      <h4 className="title">Contact Us</h4>
                      <form onSubmit={(e) =>handleSubmit(e)}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                onChange={(e) => (setContactName(e.target.value), setFlag(!flag))}
                                className="form-control"
                                type="text"
                                placeholder="name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                onChange={(e) => (setContactMail(e.target.value), setFlag(!flag))}
                                className="form-control"
                                type="text"
                                placeholder="email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                              onChange={(e) => (setContactPhone(e.target.value), setFlag(!flag))}
                                className="form-control"
                                type="text"
                                placeholder="phone"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                              onChange={(e) => (setContactLocation(e.target.value), setFlag(!flag))}
                                className="form-control"
                                type="text"
                                placeholder="location"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-3">
                              <textarea
                              onChange={(e) => (setContactMessage(e.target.value), setFlag(!flag))}
                                className="form-control"
                                type="text"
                                placeholder="message"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
                            >
                              <span  >
                               
                                SUBMIT NOW <i className="ti-arrow-right"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 bg-image" 
                    style={{
                      backgroundImage:`url('https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg')`
                    }}
                  >
                    <div className="detail-box p-4">
                      <h5 className="text-white font-weight-light mb-3">
                        ADDRESS
                      </h5>
                      <p className="text-white op-7">
                        601 Sherwood Ave.
                        <br /> San Bernandino
                      </p>
                      <h5 className="text-white font-weight-light mb-3 mt-4">
                        CALL US
                      </h5>
                      <p className="text-white op-7">
                        251 546 9442
                        <br /> 630 446 8851
                      </p>
                      <div className="round-social light">
                        <a
                          className="btn btn-primary btn-floating m-1"
                          style={{ backgroundColor: "#3b5998" }}
                          href="#!"
                          role="button"
                        >
                          <MDBIcon fab icon="facebook-f" />
                        </a>

                        <a
                          className="btn btn-primary btn-floating m-1"
                          style={{ backgroundColor: "#55acee" }}
                          href="#!"
                          role="button"
                        >
                          <MDBIcon fab icon="twitter" />
                        </a>

                        <a
                          className="btn btn-primary btn-floating m-1"
                          style={{ backgroundColor: "#dd4b39" }}
                          href="#!"
                          role="button"
                        >
                          <MDBIcon fab icon="google" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
