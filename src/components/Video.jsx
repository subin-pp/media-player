import React from 'react'
import {  Card } from 'react-bootstrap'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';



const Video = ({displayData ,setDeleteVideoResponseFromVideocard ,insideCategory}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ 
    //display modal
    setShow(true);
    // store history in json
    const{caption,youtubeLink}=displayData
    const sysDateTime = new Date()
    console.log(sysDateTime);
    console.log(sysDateTime.toLocaleString('en-US' ,{timeZoneName:'short'}));
    const timeStamp = sysDateTime.toLocaleString('en-US' ,{timeZoneName:'short'})
    const historyDetails={
      caption,youtubeLink,timeStamp
    }
    try {
      await saveHistoryAPI(historyDetails)
    } catch (error) {
      console.log(error);
      
    }
    
    
  }
  const deleteVideo = async(id)=>{
    try {
      const result = await removeVideoAPI(id)
      setDeleteVideoResponseFromVideocard(result)
    } catch (error) {
      console.log(error);
      
    }
  }
  const VideoCardDragStarted =(e,dragVideoDetails)=>{
   console.log(`inside videocarddragstarted with videoId ${dragVideoDetails?.id}`);
   // share data using event drag start
   e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
  }
  return (
    <>
        <Card draggable={true} onDragStart={e=>VideoCardDragStarted(e,displayData)} style={{ width: '15rem', height: '17rem'}}>
          <Card.Img onClick={handleShow} height={'150px'}variant="top" src={displayData.imgUrl} />
          <Card.Body>
            <Card.Text className='d-flex justify-content-between'>
              <p className='mt-1'>{displayData?.caption}</p>
              {
                !insideCategory && <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trashtext-danger"></i></button>

              }
            </Card.Text>
          </Card.Body>
        </Card>



    {/* Modals */}
    <Modal
        size ='lg'
        centered
        show={show}
        onHide={handleClose}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400px" src={`${displayData.youtubeLink}?autoplay=1`} title="Game of Thrones | Season 8 | Official Trailer (HBO)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Video