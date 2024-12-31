import React from "react";

const Header = ({openPopup}) => {

    const  [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
  return (
    <header class="pb-0 bg-blue-500 lg:pb-0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav class="flex items-center justify-between h-16 lg:h-16 border-b lg:border-b">
            <div class="flex-shrink-0">
                <a href="/signup" title="" class="flex">
                    <h1 className="font-bold text-white text-2xl">Alumini Portal</h1>
                </a>
            </div>

            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-6">

                {/* <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Menu </a> */}

                <button onClick={openPopup} class="hidden md:block inline-flex justify-center px-8 py-2 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full tems-center hover:bg-blue-700 focus:bg-blue-700">Sign in</button>
            </div>

            <button onClick={openPopup} class="hidden md:block inline-flex justify-center px-8 py-2 ml-4 text-base font-semibold text-white transition-all duration-200 bg-green-600 border border-transparent rounded-full tems-center hover:bg-green-400 focus:bg-green-700">Sign  Up</button>        
            </nav>

        {/* <!-- xs to lg --> */}
        {isMenuOpen && <nav class="pt-0 pb-6 lg:hidden">
            <div class="flow-root">
                <div class="flex flex-col px-6 -my-2 space-y-1">
                    {/* <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Menu </a> */}
                </div>
            </div>

            <div class="px-6 mt-6 ml-4">
            <button onClick={openPopup} class="inline-flex justify-center px-8 py-2 ml-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full tems-center hover:bg-blue-700 focus:bg-blue-700">Sign In</button>            
            <button onClick={openPopup} class="inline-flex justify-center px-8 py-2 ml-4 text-base font-semibold text-white transition-all duration-200 bg-green-600 border border-transparent rounded-full tems-center hover:bg-green-400 focus:bg-green-700">Sign Up</button>
            </div>
        </nav>}
    </div>
</header>

)}

export default Header