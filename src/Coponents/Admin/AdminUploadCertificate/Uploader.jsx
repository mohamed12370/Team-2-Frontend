import { useState } from 'react';
import React from 'react';
import {MdCloudUpload , MdDelete} from "react-icons/md"
import {AiFillFileImage} from "react-icons/ai"

const UPloader = () => {
  
    const [image , setImage] = useState(null)
    const [fileName , setFileName] = useState("NO selected file")

  return (
    <div className='uploader'>
        <form className='uploader-form' onClick={() => document.querySelector(".input-field").click()}>
            <input type="file" accept='image/*' className='input-field' hidden 
            onChange={({target: {files}}) => {
                files[0] && setFileName(files[0].name)
                if(files) {
                    setImage(URL.createObjectURL(files[0]))
                }
            }}
            />

            {image ? 
            <img src = {image} width={150} height={150} alt={fileName}  />
            :
            <>
            <MdCloudUpload color='#BF9B30' size={60} />  
            <h6 className='upload-text'>Drag & drop files or <a>Browse</a></h6>
            <p>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p> 
            </>   
        }
        </form>
    </div>
  )
}

export default UPloader