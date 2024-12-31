import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


//saveVideoAPI -post http request , add component

export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI(`POST` , `${SERVERURL}/uploadVideos` , videoDetails)
}


// getAllVideoAPI - get method , called view component , when component display in browser inside its useeffect Hook


export const getAllVideoAPI = async ()=>{
    return await commonAPI(`GET` , `${SERVERURL}/uploadVideos` , "")
}

// saveHistoryAPI - post method to  ${serverUrl}/history called by videoCard when we click on the video

export const saveHistoryAPI = async (historyDetails)=>{
    return await commonAPI(`POST` , `${SERVERURL}/history` , historyDetails)
}


//getHistoryAPI - get http request to  ${serverUrl}/history called by history coponent when it open in browser

export const getHistoryAPI = async ()=>{
    return await commonAPI(`GET` , `${SERVERURL}/history`, "")
}



//deleteHistoryAPI - delete method to http://localhost:3000/history/id called by history when clicked on delete button


export const deleteHistoryAPI = async (id)=>{
    return await commonAPI(`DELETE` , `${SERVERURL}/history/${id}`, {})
}


//removeVideoAPI - delete method to http://localhost:3000/uploadvideos/id called by videoCard when clicked on delete button


export const removeVideoAPI = async (id)=>{
    return await commonAPI(`DELETE` , `${SERVERURL}/uploadVideos/${id}`, {})
}


//saveCategoryAPI -post request http://localhost:3000/categories , called by category when clicked on add button
//categoriesDetails ={categoriName, AllVideos}

export const saveCategoryAPI = async (categoriesDetails)=>{
    return await commonAPI(`POST` , `${SERVERURL}/categories` , categoriesDetails)
}


//getAllCategoryAPI -GET request http://localhost:3000/categories , called by category componet when componet loaded in browser

export const getAllCategoryAPI = async ()=>{
    return await commonAPI(`GET` , `${SERVERURL}/categories`,'')
}

//deleteCategoryAPI - delete method to http://localhost:3000/categories/id called by category coponent when clicked on delete button

export const deleteCategoryAPI = async (id)=>{
    return await commonAPI(`DELETE` , `${SERVERURL}/categories/${id}`, {})
}

//updateCategoryAPI - put method to http://localhost:3000/categories/id called by category coponent when video drop over the category

export const updateCategoryAPI = async (categoriesDetails)=>{
    return await commonAPI(`PUT` , `${SERVERURL}/categories/${categoriesDetails.id}`,categoriesDetails)
}


