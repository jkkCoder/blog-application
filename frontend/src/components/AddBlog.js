import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import axios from "axios"

const labelStyles = {mb:1,mt:2,fontSize:"24px", fontWeight:"bold"}
const AddBlog = () => {
  const [inputs,setInputs] = useState({
    title:"",
    description:"",
    imageURL:""
  })

  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const sendRequest = async()=>{
    const res = await axios.post("http://localhost:5000/api/blog/add",{
      title:inputs.title,
      description:inputs.description,
      image:inputs.imageURL,
      user:localStorage.getItem("userId")
    }).catch(err=>console.log(err))
    const data = await res.data
    return data
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(inputs)
    sendRequest().then(data=>console.log(data))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box border={3} borderColor="black" borderRadius={10} boxShadow="10px 10px 20px #ccc" padding={3} margin={"auto"} marginTop={3} display="flex" flexDirection={"column"} width={"80%"}>
          <Typography fontWeight={"bold"} padding={3} color="grey" variant="h2" textAlign={"center"}>Post your blog</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField name="title" value={inputs.title} onChange={handleChange} margin="auto" variant="outlined"/>
          <InputLabel sx={labelStyles}>description</InputLabel>
          <TextField name="description" value={inputs.description} onChange={handleChange} margin="auto" variant="outlined"/>
          <InputLabel sx={labelStyles}>imageurl</InputLabel>
          <TextField name="imageURL" value={inputs.imageURL} onChange={handleChange} margin="auto" variant="outlined"/>
          <Button sx={{mt:2,borderRadius:4}} variant="contained" color="warning" type="submit">Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog