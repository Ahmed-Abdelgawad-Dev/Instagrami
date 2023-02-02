import React from 'react'

function Nav() {
  return (
      <div className="navbar">
          <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
              <div class="container flex flex-wrap items-center justify-between mx-auto">
                  <a href="www.gogle.com" class="flex items-center">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHjIdW70RdKEyi3qnCFuQMb2nYklPbyRxBw&usqp=CAU" class="h-6 mr-3 sm:h-9" alt="Instagrami Logo" />
                  </a>
                  <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                              <a href="www.gogle.com" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-red-400 md:dark:hover:text-white dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                          </li>
                          <li>
                              <a href="www.gogle.com" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
  )
}

export default Nav