import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'

const History = () => {
  const [allVideoHistory , setallVideoHistory]= useState([])

  const getAllHistory = async()=>{
    try {
      const result = await getHistoryAPI()
      if(result.status >= 200 & result.status < 300){
        setallVideoHistory(result.data)
      }else{
        console.log(result);
        
      }
    } catch (error) {
      console.log(error);
      
    }
  } 
  useEffect(()=>{
    getAllHistory()
  },[])



  //remove history
  const removeHistory = async(id)=>{
    try {
        await deleteHistoryAPI(id)
        getAllHistory()

    } catch (error) {
      console.log(error);
      
      
    }
  }

  return (
    <div style={{paddingTop:'100px'}}>
      <div className='d-flex justify-content-between container' >
        <h3 > Watch History</h3>
        <Link to={'/home'} > Back to home</Link>
      </div>
      <table className="container">
  <thead>
    <tr>
      <th>#</th>
      <th>Caption</th>
      <th>Link</th>
      <th>TimeStamp</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
  {
            allVideoHistory?.length > 0 ?
            allVideoHistory?.map((historyDeatils, index) => (
                <tr key={historyDeatils?.id}>
                  <td>{index + 1}</td>
                  <td>{historyDeatils?.caption}</td>
                  <td>{historyDeatils?.youtubeLink}</td>
                  <td>{historyDeatils?.timeStamp}</td>
                  <td><button onClick={()=>removeHistory(historyDeatils?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
              ))
              :
              <div className='fw-bolder text-warning'>
                No history!!
              </div>
 }
  </tbody>
</table>

    </div>
  )
}

export default History