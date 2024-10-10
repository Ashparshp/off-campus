import React from 'react'
import { AlertCircle, Home } from 'lucide-react'

export default function ErrorPage() {
  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-red-600" />
        </div>
        <h1 className="mt-6 text-3xl font-extrabold text-gray-100">
          Oops! Something went wrong.
        </h1>
        <p className="mt-2 text-sm text-gray-300">
          We apologize for the inconvenience. The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Home className="h-5 w-5 mr-2" />
            Return to Home
          </a>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          If you believe this is a mistake, please contact our support team.
        </p>
      </div>
    </div>
  )
}