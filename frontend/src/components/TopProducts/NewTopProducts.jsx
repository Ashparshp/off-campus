import { MagicCard } from "../ui/magic-card"
import Card from "./Card"

const courses = [
  {
    image: "https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1",
    title: "Boost Your Targeted Sell With New Digital Marketing",
    rating: 4.7,
    reviews: 3341,
    duration: "2h 40m",
    tags:[
      {
        name : 'Best Seller',
        color : 'bg-yellow-400'
      },
      {
        name : 'Popular',
        color : 'bg-green-400'
      }
    ],
    lessons: 16,
    instructor: {
      name: "Charchit Kurra",
      avatar: "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FaqTDcJ9EXdWAhBkYsUeKRw.jpg&w=256&q=75&dpl=dpl_zXp3QtRWYXMagD7RGyFd2ATmt2RS",
    },
    price: 18.00,
  },
  {
    image: "https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1",
    title: "Master in Digital Marketing 2022 And Improve Your Strategy",
    rating: 4.8,
    reviews: 1341,
    tags:[
      {
        name : 'Best Seller',
        color : 'bg-yellow-400'
      },
      {
        name : 'Popular',
        color : 'bg-green-400'
      }
    ],
    duration: "1h 30m",
    lessons: 10,
    instructor: {
      name: "Charchit Kurra",
      avatar: "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FaqTDcJ9EXdWAhBkYsUeKRw.jpg&w=256&q=75&dpl=dpl_zXp3QtRWYXMagD7RGyFd2ATmt2RS",
    },
    price: 24.00,
  },
  {
    image: "https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1",
    title: "The Web Developer Bootcamp: A To Z Course 2022",
    rating: 4.7,
    reviews: 5341,
    duration: "3h 15m",
    tags:[
      {
        name : 'Best Seller',
        color : 'bg-yellow-400'
      },
      {
        name : 'Popular',
        color : 'bg-green-400'
      }
    ],
    lessons: 22,
    instructor: {
      name: "Charchit Kurra",
      avatar: "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FaqTDcJ9EXdWAhBkYsUeKRw.jpg&w=256&q=75&dpl=dpl_zXp3QtRWYXMagD7RGyFd2ATmt2RS",
    },
    price: 32.00,
  },

]

export default function NewTopProducts() {
  return (
    
    <div className=" md:my-20 my-10 container">
      <div className="max-w-6xl mx-auto relative">
      <h1 className="text-[3rem]  text-center font-style-gradient mb-5">
        Top Products
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <MagicCard
            className="cursor-pointer"
            gradientColor={"rgb(251, 144, 20)  "}
            gradientOpacity={0.4}
          >
            <Card key={index} course={course} />
            </MagicCard>
          ))}
        </div>
      </div>
    </div>
    
  )
}