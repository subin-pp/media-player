import React, { useEffect } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { useState } from 'react'
import Video from './Video'
import { saveCategoryAPI,getAllCategoryAPI, deleteCategoryAPI, updateCategoryAPI, getAllVideoAPI, removeVideoAPI } from '../services/allAPI'



const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {

    const [categoryName ,setCategoryName] =useState("")

    const [allCategories , setAllCategories]= useState([])
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
      getAllCategory()
    },[deleteResponseFromView])


    //to add category details
    const handleSaveCategory =async()=>{
      if(categoryName){
        const categoryDetails = {categoryName,categorydetails:[]}
        try {
          const result = await saveCategoryAPI(categoryDetails)
          alert('category created ')
          handleClose()
          getAllCategory()
          console.log(categoryDetails);
          
        } catch (error) {
          console.log(error);
          
        }
      }else{
        alert('please enter the category name')
      }
    }
    console.log(allCategories);
    

    //to get category details 
    const getAllCategory =async()=>{
      try {
        const result = await getAllCategoryAPI()
      if(result.status>=200 && result.status<300){
        setAllCategories(result.data)

      }
      } catch (error) {
        console.log(error);
        
      }
    }


    //remove category
    const removeCategory =async(id)=>{
       try {
        await deleteCategoryAPI(id)
        getAllCategory()
       } catch (error) {
        console.log(error);
        
       }
    }

    //to get dragabale information

    const dragOverCategory =(e)=>{
      e.preventDefault()
    }
    const VideoCardDropOverCategory = async(e,categoryDetails)=>{
    console.log("inside VideoCardDropOverCategory");
    // console.log(categoryDetails);
    const videodetails =JSON.parse(e.dataTransfer.getData("videoDetails"))
    // console.log(videodetails);

    // update category by ass video to its allvideo
    categoryDetails.categorydetails.push(videodetails)
    console.log(categoryDetails);


    //api call to update category
    await updateCategoryAPI(categoryDetails)
    getAllCategory()
    const result = await removeVideoAPI(videodetails?.id)
    setDeleteResponseFromCategory(result)

    
    
    
    
    }

    const categoryVideoDragStarted=(e,dragVideoDetails,categoryDetails)=>{
      console.log("inside");
      let dragData = {video:dragVideoDetails,categoryDetails}
      e.dataTransfer.setData("dragData",JSON.stringify(dragData))
    }
  return (
   <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>All Categories </h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
        
      </div>


      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className=' p-3 border rounded'>
         <FloatingLabel className='pb-3' controlId="floatingCategoryName" label=" Category Name ">
            <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="category" />
        </FloatingLabel>

       
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      {/* displaying all categories */}
      <div className="container-fluid mb-3 mt-3" >
       {
        allCategories?.length >0 ?
        allCategories?.map((categoryDetails)=>(
          <div droppable='true' onDrop={e=>VideoCardDropOverCategory(e,categoryDetails)} onDragOver={dragOverCategory} key={categoryDetails?.id} className="border rounded p-3 mb-3">
          <div className="d-flex justify-content-between">
            <h5>{categoryDetails?.categoryName}</h5>
            <button onClick={()=>removeCategory(categoryDetails?.id)}  className='btn' ><i class="fa-solid fa-trash text-danger"></i></button>
          </div>
          {/* displaying category video */}
          <div className="row mt-2">
            {
              categoryDetails?.categorydetails?.length>0 && 
                    categoryDetails?.categorydetails?.map(video=>(
                      <div key={video?.id} className="col-lg-4 "
                      draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categoryDetails)}>
                        <Video insideCategory={true} displayData={video}/>
                      </div>
                    ))
            }
          </div>
        </div>
        ))
        :
        <div>There is no categories</div>
       }

      
      </div>
   </>
  )
}

export default Category