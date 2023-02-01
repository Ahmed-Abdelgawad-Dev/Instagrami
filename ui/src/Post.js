import React, { useState, useEffect } from 'react'
import { apiURL } from './App'


export default function Post({post}) {
    const [imageURL, setImageURL] = useState('')
    useEffect((img) => {
      if(post.img_url_type === 'absolute'){
        setImageURL(post.img_url)
    }
    else {
        setImageURL(`${apiURL}${post.img_url}`)
      }
    }, [])
  return (
    <div className='post'>
        <img src={imageURL} alt="postImage" />
    </div>
  )
}

