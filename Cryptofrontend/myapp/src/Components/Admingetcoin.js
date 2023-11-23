import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { HiEye } from "react-icons/hi";
import{AiFillDelete} from 'react-icons/ai'
import { useNavigate, } from "react-router-dom";
import { Button, Modal, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import './Style/Admingetcoin.css'
import SideBar from './SideBar';


const Admingetcoin = () => {
    const [cart,setcart] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    const history = useNavigate();
    const [PageNumber, setPageNumber] = useState(0)
      const perpage=5;
      const pageclick=PageNumber*perpage;
      const countpage=Math.ceil(cart.length/perpage);



    useEffect(() => {
            axios.get("http://localhost:5000/getcart").then((res)=>{
                setcart(res.data);
                 console.log(res.data)

            })
            .catch((err)=> console.log(err));
        
    }, [])

    const handleView = (_id) => {
        history(`/viewcoin1.js/${_id}`); 
        // console.log(`View coin with ID ${_id}`);
      };

      const handleDelete=(_id)=>{
        setDeleteId(_id);
        setShowModal(true);
      };

const deletecart=()=>{
    axios.delete(`http://localhost:5000/deletecartt/${deleteId}`)
    .then((res)=>{
        setcart(cart.filter((del)=>del._id !== deleteId));
        console.log(`Query with ID ${deleteId} deleted`);
        setShowModal(false);
    })
}
const changepage=({selected})=>{
  setPageNumber(selected);
}
     
    

  return (
    <div style={{display:'flex'}} className='adminsec'>
      <div className='col-3'>
      <SideBar/>

      </div>
     
    <div className='col-9'>
     
        <h3 className='coi'>COIN PURCHASE DETAILS</h3>

<Table className='tableadmin'>
      <thead>
        <tr>
        
          <th>NAME</th>
          <th>SYMBOL</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>TOTAL</th>
          <th>MAIL</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {
             cart.slice(pageclick,pageclick+perpage).map((dataa)=>{
                return(
                    <>
                     <tr>
          <td>{dataa.name1}</td>
          <td>{dataa.symbol1}</td>
          <td>{dataa.current_price1}</td>
          <td>{dataa.quantity}</td>
          <td>{dataa.total}</td>
          <td>{dataa.mail}</td>

          
          <td>
          <HiEye
                  style={{ cursor: "pointer", marginRight: "18px" }}
                  onClick={() => handleView(dataa._id)}


                />{" "}

<AiFillDelete
                  style={{ cursor: "pointer", marginRight: "18px" }}
                  onClick={() => handleDelete(dataa._id)}

                  
                />{" "}

          </td>
        </tr>


                    
                    </>


                );

            })

        }


        
<Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Coin ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deletecart}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
       
        
       
      </tbody>
    </Table>

    <ReactPaginate
  previousLabel={"<"} 
  nextLabel={">"}
  pageCount={countpage}
  onPageChange={changepage}
  containerClassName={"pagination justify-content-center paginationBttns"}
  previousLinkClassName={"previousBttn"}
  nextLinkClassName={"nextBttn"}
  activeClassName={"paginationActive"}
  disabledClassName={"paginationDisabled "}
/> 


    </div>
    </div>
  )
}

export default Admingetcoin