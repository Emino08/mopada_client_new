import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import { Pagination } from "flowbite-react";
import ProjectCard from "../components/ProjectCard";
import { BASE_URL } from "../config/env";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProjects(currentPage);
  }, [currentPage]);

  const fetchProjects = async (page) => {
    try {
      const response = await fetch(`${BASE_URL}/projects?page=${page}`);
      const data = await response.json();
      if (data.projects && data.projects.length > 0) {
        setProjects(data.projects);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      } else {
        // setProjects(proje);
        setProjects([]);
        setTotalPages(Math.ceil(proje.length / 9));
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects(proje);
      setTotalPages(Math.ceil(proje.length / 9));
    }
  };

  return (
    <div className="mt-28">
      {/*<Helmet>*/}
      {/*  <title>*/}
      {/*    Events - Movement towards Peace And Development Agency (MoPADA-SL)*/}
      {/*  </title>*/}
      {/*  <meta*/}
      {/*    name="description"*/}
      {/*    content="Stay updated with our latest events."*/}
      {/*  />*/}
      {/*</Helmet>*/}
      <Section label="Projects" />

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Projects</h1>
        {projects.length === 0 ? (
          <p className="text-center">Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug || index} {...project} />
            ))}
          </div>
        )}
        <div className="flex items-center justify-center text-center mt-8">
          <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            showIcons={true}
            totalPages={totalPages || 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
