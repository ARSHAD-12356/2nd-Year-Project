import CourseCard from '@/components/ui/CourseCard'
import 'react'

export const coursesJson = [
  {
    "id": 1,
    "title": "Full-Stack Web Development",
    "description": "Learn to build modern web applications using MERN stack (MongoDB, Express.js, React, and Node.js).",
    "image": "https://example.com/images/fullstack.jpg"
  },
  {
    "id": 2,
    "title": "JavaScript for Beginners",
    "description": "Master the fundamentals of JavaScript, the language of the web, with hands-on projects and exercises.",
    "image": "https://example.com/images/javascript.jpg"
  },
  {
    "id": 3,
    "title": "Database Management with SQL",
    "description": "Understand relational databases, SQL queries, and database design principles to manage structured data effectively.",
    "image": "https://example.com/images/sql.jpg"
  },
  {
    "id": 4,
    "title": "React.js Advanced Course",
    "description": "Take your React skills to the next level by building complex applications with hooks, state management, and API integration.",
    "image": "https://example.com/images/react.jpg"
  },
  {
    "id": 5,
    "title": "Node.js and Express.js Backend Development",
    "description": "Learn how to build scalable backend applications with Node.js, Express.js, and MongoDB.",
    "image": "https://example.com/images/node.jpg"
  },
  {
    "id": 6,
    "title": "Python for Data Science",
    "description": "Explore data analysis, visualization, and machine learning techniques using Python and popular libraries like Pandas and Scikit-learn.",
    "image": "https://example.com/images/python.jpg"
  },
  {
    "id": 7,
    "title": "Cybersecurity Fundamentals",
    "description": "Understand the basics of cybersecurity, including network security, ethical hacking, and cryptography.",
    "image": "https://example.com/images/cybersecurity.jpg"
  },
  {
    "id": 8,
    "title": "DevOps and CI/CD Pipelines",
    "description": "Learn how to implement DevOps practices and CI/CD pipelines to automate software deployment.",
    "image": "https://example.com/images/devops.jpg"
  },
  {
    "id": 9,
    "title": "Artificial Intelligence with Python",
    "description": "Dive into the world of AI with hands-on projects covering neural networks, deep learning, and AI-powered applications.",
    "image": "https://example.com/images/ai.jpg"
  },
  {
    "id": 10,
    "title": "UI/UX Design for Beginners",
    "description": "Understand the principles of user experience (UX) and user interface (UI) design to create stunning and intuitive web interfaces.",
    "image": "https://example.com/images/uiux.jpg"
  },
  {
    "id": 11,
    "title": "Blockchain Development",
    "description": "Learn the fundamentals of blockchain technology, smart contracts, and decentralized applications (DApps).",
    "image": "https://example.com/images/blockchain.jpg"
  },
  {
    "id": 12,
    "title": "Android App Development with Kotlin",
    "description": "Build modern Android applications using Kotlin, Jetpack Compose, and Firebase integration.",
    "image": "https://example.com/images/android.jpg"
  }
]

const Courses = () => {
  return (
    <div className='bg-gray-100 pt-14'>
      <div className='min-h-screen max-w-7xl mx-auto py-10'>
        <div className='px-4'>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>Our Courses</h1>
          <p className='text-center text-gray-600 mb-12'>Explore our curated to boost your skills and career. Whether you&apos;re a beginner or an expert, we have something for everyone.</p>
          <div className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              coursesJson?.map((course) => {
                return <CourseCard course={course} key={course.title}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
