import React, { useState } from 'react'
import { apiURL } from './App'


export default function Login({ setToken__, setLogOut__ }) {
  const setTokenTrue = ()=> (setToken__(true))
  const setTokenFalse = () => (setLogOut__(setToken__(false)))
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)
  const [tokenType, setTokenType] = useState(null)
  const [userID, setUserID] = useState(null)
  const [username_, setUsername_] = useState('')
  const [toggleLogin, setToggleLogin] = useState(true)
  const signIn = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    fetch(apiURL + 'login', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {

          return response.json()
        }
        throw response
      })
      .then(data => {
        console.log(data)
        setToken(data.access_token)
        setTokenType(data.token_type)
        setUserID(data.user_id)
        setUsername_(data.username_)
      })
      .catch((error) => {
        console.log(error)
      })
    setToggleLogin(false)
    setTokenTrue()
  }
  const logOut = (e) => {
    setToken(null)
    setTokenType(null)
    setUserID('')
    setUsername_('')
    setTokenFalse()
    setToken__(false)
  }
  return (
    <div>
      {toggleLogin ? (<div className="m-5 text-center">
        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white font">Sign in</h3>
        <form
          className="space-y-6 items-center justify-between mx-w-1/4 ml-28 mr-28 sm:ml-20 sm:mr-20 xl:ml-60 xl:mr-60 lg:ml-60 lg:mr-60 2xl:ml-60 2xl:mr-60 3xl:ml-72 3xl:mr-72 " action="#">
          <div className=''>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your Email</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="your@email.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-84 items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
          </div>
          <button onClick={signIn}  type="submit" className="font-semibold text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Login to your account</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
          </div>
        </form>
      </div>) : null}
    </div>
  )
}
