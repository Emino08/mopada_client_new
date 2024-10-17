import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const AreasOfWorkGridColumn = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left py-2">
      {data?.map((column, index) => (
        <Card key={index} className="w-full">
          <img
            alt={column.title}
            className="w-full h-48 object-cover"
            src={column.imgSrc}
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width={350}
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">{column.title}</h3>
            <p className="text-gray-500 mb-4">{column.description}</p>
            <Link to="about">
              <ShareIcon className="text-blue-500" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

export default AreasOfWorkGridColumn;
