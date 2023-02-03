import React, { useState, useEffect } from 'react'
import { apiURL } from './App'


export default function Post({ post }) {
  const [imageURL, setImageURL] = useState('')
  const [comments, setComments] = useState([])
  useEffect(() => {
    if (post.img_url_type === 'absolute') {
      setImageURL(post.img_url)
    }
    else {
      setImageURL(`${apiURL}${post.img_url}`)
    }
  }, [post.img_url, post.img_url_type])
  useEffect(() => {
    setComments(post.comments)
  }, [comments, post.comments])
  return (
    <div className="flex flex-col border rounded-lg item-center justify-content-center max-w-lg ml-auto mr-auto px-3 mb-3 bg-gray-50">
      <div className="header">
        <div className='flex'>
          <i className="fa-regular fa-user flex-none mr-5 mt-4 ml-3" />
          <span className='flex-auto mr-56 text-gray-700 mt-3'>{post.user.username}</span>
          <button type="button" className="flex-auto w-1/12 focus:outline-none text-white bg-gray-600 hover:bg-gray-800 focus:ring-red-600 font-medium rounded-lg text-sm p-1  m-2 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-900">delete</button>

        </div>
      </div>
      <img src={imageURL} alt="postImage" className='w-lg rounded-xl mt-0 mb-1' />
      <div className='text-md font-medium flex'>
        <p className='text-xs font-medium text-gray-500'>caption:</p>
        <div className="comments">
          {
            comments.map((comment, idx) => (
              (<p key={idx} className='text-xs  text-gray-500 pb-1 pl-3' ><span className='font-semibold pr-10'>{comment?.username} </span>{comment?.text}</p>)
            ))
          }
        </div>
      </div>
    </div>
  )
}

