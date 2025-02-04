import React from 'react'

const Footer = () => {
  return (
   

<footer class=" rounded-lg shadow bg-inherit m-4 mt-10">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Off Campus</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
                
                <li>
                    <a href="/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/terms-of-service" class="hover:underline me-4 md:me-6">Terms and Conditions</a>
                </li>
                <li>
                    <a href="/cancellation-and-refund-policy" class="hover:underline md:me-6 me-4">Cancellation Policy</a>
                </li>
                <li>
                    <a href="/contactus" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span class="block text-sm  sm:text-center text-gray-400">© 2024 <a href="/" class="hover:underline">Off-Campus™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer