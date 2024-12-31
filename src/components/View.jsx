import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Video from './Video'
import { getAllVideoAPI, saveVideoAPI, updateCategoryAPI } from '../services/allAPI'


const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {
  const [allVideos,setAllvideos]=useState([])
  console.log(allVideos);



  const [deleteVideoResponseFromVideocard , setDeleteVideoResponseFromVideocard]=useState("")

  useEffect(()=>{
    getAllVideo()
    
  },[addResponseFromHome,deleteResponseFromCategory , deleteVideoResponseFromVideocard])
  
 
  
 const getAllVideo = async ()=>{
   try {
     const result = await getAllVideoAPI()
     console.log(result);
     if(result.status>=200 && result.status<300){
      setAllvideos(result.data)      
     }else{
      console.log("Api call error");
      
     }
     
   } catch (error) {
    console.log(error);
    
   }
 }
 const dragOverView=(e)=>{
  e.preventDefault()
 }
 const categoryVideoOverView=async(e)=>{
  console.log("inside category video dragover");
  const {video ,categoryDetails}= JSON.parse(e.dataTransfer.getData("dragData"))
  console.log(video,categoryDetails);
  const updatedCategoryVideoList = categoryDetails?.categorydetails?.filter(item=>item.id!=video?.id)
  const updateCategory = {...categoryDetails,categorydetails:updatedCategoryVideoList}
  console.log(updateCategory);
  
  // updating the category by delete video from category
   const result = await updateCategoryAPI(updateCategory)

  //use state lifting to communicate data from videw component to category component
  setDeleteResponseFromView(result)
  //use api to upload video
  await saveVideoAPI(video)
  //call getAllVideos
  getAllVideo()
  
  
 }

  return (
    <>
    <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoOverView(e)}>
      {
        allVideos?.length>0?
        allVideos.map(video=>(
          <Col key={video?.id} className='mx-4 mb-2 ' sm={12} md={6} lg={4}>
          <Video setDeleteVideoResponseFromVideocard={setDeleteVideoResponseFromVideocard} displayData={video}/>
        </Col>
        ))
        :
        <div className='fw-bolder text-danger fs-5'> No video uploaded</div>
      }

    </Row>
    </>
  )
}

export default View