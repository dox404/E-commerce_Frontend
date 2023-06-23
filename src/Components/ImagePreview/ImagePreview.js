import React,{useState} from 'react'

const ImagePreview = ({file}) => {

    const [preview,setPreview]=useState(null)
    const reader =new FileReader();
    reader.readAsDataURL(file)
    reader.onload=()=>{
        setPreview(reader.result)
    }

  return (
    <div>
      <img src={preview} alt="preview" height="200px" with="200px" />
    </div>
  )
}

export default ImagePreview
