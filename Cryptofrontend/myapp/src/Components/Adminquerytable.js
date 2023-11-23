import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { HiEye } from "react-icons/hi";
import { useNavigate} from "react-router-dom";
import { Button, Modal, Table } from "react-bootstrap";
import{AiFillDelete} from 'react-icons/ai'
import ReactPaginate from "react-paginate";
import SideBar from './SideBar';
import'./Style/Adminquery.css'


const Adminquerytable = () => {
    const [query,setquery] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    const history = useNavigate();
    const [PageNumber, setPageNumber] = useState(0)
      const perpage=5;
      const pageclick=PageNumber*perpage;
      const countpage=Math.ceil(query.length/perpage);



    useEffect(() => {
            axios.get("http://localhost:5000/getquery").then((res)=>{
                setquery(res.data);
                // console.log(res.data)

            })
            .catch((err)=> console.log(err));
        
    }, [])

    const handleView = (_id) => {
        history(`/viewquery.js/${_id}`);
        console.log(`View query with ID ${_id}`);
      };

      const handleDelete=(_id)=>{
        setDeleteId(_id);
        setShowModal(true);
      };

const deletequery=()=>{
    axios.delete(`http://localhost:5000/Deletequery/${deleteId}`)
    .then((res)=>{
        setquery(query.filter((del)=>del._id !== deleteId));
        console.log(`Query with ID ${deleteId} deleted`);
        setShowModal(false);
    })
}
    const changepage=({selected})=>{
      setPageNumber(selected);
    }
    

  return (
    <div style={{display:'flex'}} className='adminque'>

      <div className='col-3'>
      <SideBar/>
      </div>
    <div className='col-9'>
     
        <h3> CUSTOMER QUERIES</h3>

<Table className='tab1'>
      <thead>
        <tr>
        
          <th>NAME</th>
          <th>EMAIL</th>
          <th>MESSAGE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {

            query.slice(pageclick,pageclick+perpage).map((dataa)=>{
                return(
                    <>
                     <tr>
          <td>{dataa.name}</td>
          <td>{dataa.email}</td>
          <td>{dataa.message}</td>
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
        <Modal.Body>Are you sure you want to delete this query ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deletequery}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
       
        
       
      </tbody>
    </Table>
    <ReactPaginate
  previousLabel={"<<"} 
  nextLabel={">>"}
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

export default Adminquerytable