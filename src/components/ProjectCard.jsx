import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config/env";

function ProjectCard({ title, description, date, title_picture, slug }) {
  console.log(
    " title",
    title,
    "description",
    description,
    "date",
    date,
    "title_picture",
    title_picture,
    "slug",
    slug,
  );
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={`${BASE_URL}/${title_picture.replace("uploads", "")}`}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2 h-[70px] overflow-hidden">
          {description}
        </p>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <Link
          to={`/project/${slug}`}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
