import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Carousel } from "flowbite-react";
import Section from "../components/Section";
import { BASE_URL } from "../config/env";

const ProjectDetailPage = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetchProjectDetails();
  }, [slug]);

  const fetchProjectDetails = async () => {
    try {
      const response = await fetch(`${BASE_URL}/projects/${slug}`);
      if (!response.ok) {
        throw new Error("Failed to fetch project details");
      }

      const data = await response.json();
      console.log("Projects ", data);
      setProject(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching project details:", error);
      setError("Failed to load project details. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">Loading project details...</div>
    );
  }

  if (error) {
    return <div className="container mx-auto py-8 text-red-500">{error}</div>;
  }

  if (!project) {
    return <div className="container mx-auto py-8">Project not found.</div>;
  }

  return (
    <div className="mt-28">
      <Section label="Project Details" />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{project?.title}</h1>
        <p className="text-gray-500 mb-8">{project?.date}</p>

        <Card className="mb-8">
          <div className="p-6">
            {project?.content &&
              project?.content?.map((item, index) =>
                item.type === "text" ? (
                  <p key={index} className="mb-4">
                    {item.content}
                  </p>
                ) : (
                  // 1200x675 16:9
                  <img
                    key={index}
                    src={`${BASE_URL}/${item?.src?.replace("uploads", "")}`}
                    alt={item.alt}
                    className="w-full h-auto aspect-video mb-4 rounded-lg"
                  />
                ),
              )}
            {!project?.content && <p>{project?.description}</p>}
          </div>
        </Card>

        {project?.gallery && project?.gallery.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
            <Carousel slideInterval={3000} pauseOnHover>
              {project?.gallery?.map((image, index) => (
                <section className="relative bg-[#0c4a6e] text-white">
                  <div className="max-w-[1244px] mx-auto">
                    {" "}
                    {/* 1244px is 16:9 for 700px height */}
                    <div
                      className="brightness-50 relative w-full"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        key={index}
                        src={`${BASE_URL}/${image.src.replace("uploads", "")}`}
                        alt={image.alt}
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-0">
                    <h1 className="text-3xl sm:text-3xl sm:mb-2 md:text-4xl md:mb-4 lg:text-5xl xl:text-6xl font-bold mb-1 p-0">
                      <span className="text-xl">Project Title:</span>{" "}
                      {project?.title}
                    </h1>
                    <p className="max-w-3xl text-md sm:text-md sm:mb-4 md:text- md:mb-6 lg:text-xl xl:text-2xl text-center mb-2 ">
                      {project?.description}
                    </p>
                  </div>
                </section>
              ))}
            </Carousel>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
