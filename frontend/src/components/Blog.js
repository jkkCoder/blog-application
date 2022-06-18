import React from 'react'
import {useNavigate} from "react-router-dom"
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Blog = ({title,description,imageURL,userName,isUser,id}) => {
  const navigate = useNavigate()
  const handleEdit = (e)=>{
    console.log("handle edit se",id,title,description,imageURL,userName)
    navigate(`/myBlogs/${id}`)
  }
  const handleDelete = (e)=>{

  }
  return (
    <div><Card sx={{ width: "40% ", margin:"auto",mt:2,padding:2,boxShadow:"5px 5px 10px #ccc",":hover:":{
        boxShadow:"10px 10px 20px #ccc"
    },}}>
      {isUser && (
        <Box display="flex">
          <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><EditIcon/></IconButton>
          <IconButton onClick={handleDelete}><DeleteIcon/></IconButton>
        </Box>
      )}
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          {userName}
        </Avatar>
      }
      
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={imageURL}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        <b>{userName}</b>{": "}{description}
      </Typography>
    </CardContent>
  </Card></div>
  )
}

export default Blog