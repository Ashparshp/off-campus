import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { current } from 'tailwindcss/colors'

export default function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState('15 Oct')
  const [selectedTime, setSelectedTime] = useState('10:00 AM')
  const [visibleStartIndex, setVisibleStartIndex] = useState(0) // To track the start index for visible dates
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    const currentPath = location.pathname;  // Get the current URL pat
    if(currentPath==='/'){
      navigate(`bookcall/pay`)
    }else{
      navigate(`${currentPath}/pay`)
    }
  }
  const dates = [
    { day: 'Tue', date: '15 Oct' },
    { day: 'Wed', date: '16 Oct' },
    { day: 'Thu', date: '17 Oct' },
    { day: 'Fri', date: '18 Oct' },
    { day: 'Sat', date: '19 Oct' },
    { day: 'Sun', date: '20 Oct' },
    { day: 'Mon', date: '21 Oct' },
    { day: 'Tue', date: '22 Oct' },
    { day: 'Wed', date: '23 Oct' },
    { day: 'Thu', date: '24 Oct' },
  ]

  const time = [
    {value:'10:00 AM'}, {value:'11:00 AM'},{value:'12:00 AM'},
  ]

  const visibleDates = dates.slice(visibleStartIndex, visibleStartIndex + 4)

  const handleNextWeek = () => {
    if (visibleStartIndex + 5 < dates.length) {
      setVisibleStartIndex(visibleStartIndex + 1)
    }
  }

  const handlePreviousWeek = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex(visibleStartIndex - 1)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-[#F8EDED] rounded-lg shadow-lg overflow-hidden text-black font-[700]">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">When should we meet?</h2>
        <div className=" items-center justify-between mb-6 md:flex hidden ">
          <button
            className=" hover:text-gray-800"
            aria-label="Previous week"
            onClick={handlePreviousWeek}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex space-x-2 ">
            {visibleDates.map(({ day, date }) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedDate === date
                    ? 'bg-black text-white '
                    : ' hover:bg-gray-100'
                }`}
              >
                <div className="font-medium">{day}</div>
                <div className=''>{date}</div>
              </button>
            ))}
          </div>
          <button
            className=" hover:text-gray-800"
            aria-label="Next week"
            onClick={handleNextWeek}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className=" items-center justify-between mb-6 md:hidden flex overflow-y-auto">
         
          <div className="flex space-x-2 ">
            {dates.map(({ day, date }) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedDate === date
                    ? 'bg-black text-white '
                    : ' hover:bg-gray-100'
                }`}
              >
                <div className="font-medium">{day}</div>
                <div className=''>{date}</div>
              </button>
            ))}
          </div>
          
        </div>
        <div className="mb-6">
          <label htmlFor="time" className="block text-sm font-medium  mb-2">
            Select time of day
          </label>
          <div className='flex gap-4'>
          {time.map(({value}) => (
            <button
              key={value}
              onClick={() => setSelectedTime(value)}
              className={`px-3 py-2 rounded-lg text-sm ${
                selectedTime === value
                  ? 'bg-black text-white font-semibold'
                  : ' hover:bg-gray-100'
              }`}
            >
              {value}
            </button>
          ))}
          </div>
         
        </div>
       
        <button
          onClick={handleNavigation}
          className="w-full flex justify-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
         
        >
          Confirm Details
        </button>
      </div>
    </div>
  )
}
