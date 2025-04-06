import CourseCard from "@/components/ui/CourseCard";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import "react";
import courses, { coursesJson } from "./Courses";
// import coursesJson from './Courses'
// import CourseCard from '@/components/ui/CourseCard'

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <div className="py-10">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Courses
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Explore our curated to boost your skills and career. Whether
            you&apos;re a beginner or an expert, we have something for everyone.
          </p>

          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
            {coursesJson.slice(0, 9).map((course) => {
              return <CourseCard course={course} key={course.title} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
