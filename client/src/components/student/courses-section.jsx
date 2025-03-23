import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/app-context";
import CourseCard from "./course-card";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Explore, Learn, and Grow with Engaging Courses
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover a diverse collection of courses designed to inspire, challenge,
        and elevate your learning experience. Dive in and start your journey
        today!
      </p>

      <div className="grid grid-cols-4 md:go px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to={"/courses-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
