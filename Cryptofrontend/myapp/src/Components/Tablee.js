import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { employe } from "./Array";
import'./Style/Tablee.css'
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const Tablee = () => {
 
  const [item, setItem] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [Neww, setNeww] = useState({
    name:"",
    place:"",
    occupation:"",
    age:""
  })


  useEffect(() => {
    axios.get("http://localhost:5000/getprofile").then((res)=>{
        setItem(res.data);
        // console.log(res.data)

    })
    .catch((err)=> console.log(err));

}, [])


  const navigate=useNavigate()

  const [Flag, setFlag] = useState(false)

  const handleChange=(e)=>{
    e.preventDefault()
    setNeww((prevData)=>({
      ...prevData,[e.target.name]:e.target.value
      
    }))


  }


  const Create=()=>{
    const newdata=[...item,Neww]
    setItem(newdata)
    setNeww({
      name:"",
    place:"",
    occupation:"",
    age:""

    })


  }

  const Edititem=(data,index)=>{
    setFlag(true)
    setNeww({
      name:data.name,
      place:data.place,
      occupation:data.occupation,
      age:data.age,
      index:index

    })
    console.log(index,"abhi")

  }

  const edit=()=>{
    const newdata=[...item]
    const  indextoEdit=Neww.index
    newdata[indextoEdit]={
      name:Neww.name,
      place:Neww.place,
      occupation:Neww.occupation,
      age:Neww.age

    }

    setItem(newdata)
    
setNeww({

  name:"",
  place:"",
  occupation:"",
  age:""
})

setFlag(false)

  }

  const handleDelete=(_id)=>{
    setDeleteId(_id);
    setShowModal(true);
  };

  const deleteprofile=()=>{
    axios.delete(`http://localhost:5000/deleteprofile/${deleteId}`)
    .then((res)=>{
        setItem(item.filter((del)=>del._id !== deleteId));
        console.log(`profile with ID ${deleteId} deleted`);
        setShowModal(false);
    })
}

  return (
    <div className="usertable">
      <h4 className="userta">OUR TRADERS</h4>
      <Table striped bordered hover className="usertab">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PLACE</th>
            <th>OCCUPATION</th>
            <th>AGE</th>
            <th colSpan={2}>CONTROLS</th>
          </tr>
        </thead>
        <tbody>
          {item.map((arr,index) => {
            return (
              <>
                <tr>
                  <td>{arr.name}</td>
                  <td>{arr.place}</td>
                  <td>{arr.occupation}</td>
                  <td>{arr.age}</td>
                  <td onClick={()=>Edititem(arr,index)}><FiEdit/></td>
                  <td onClick={()=>handleDelete(arr._id)}><AiOutlineDelete/></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Coin ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteprofile}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


      {/* <div className="inputtt">
        <h6>Please fill your credentials</h6>
        <input type="text" name="name"  value={Neww.name} onChange={handleChange} placeholder="Name"></input>
        <input type="text" name="place"  value={Neww.place} onChange={handleChange}  placeholder="Place"></input>
        <input type="text" name="occupation"  value={Neww.occupation} onChange={handleChange} placeholder="Occupation"></input>
        <input type="text" name="age"  value={Neww.age} onChange={handleChange}  placeholder="Age"></input>
      </div> */}

      <div className="butt">
      <button className="ctap" onClick={Flag? edit:Create}>{Flag?'edit':'Create'}</button><br/>
      <button onClick={()=>{navigate("/")}} className="back">Back to Home</button>
  
      </div>
     
    </div>
  );
};

export default Tablee;
