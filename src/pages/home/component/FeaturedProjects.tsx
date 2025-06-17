import { projectData } from "../../../constant/Constant";

const FeaturedProjects = () => {

  return (
    <div className="container py-5">
      {projectData.map((project, index) => (
        <div className="row align-items-center mb-5" key={index}>
          {/* Alternate layout using Bootstrap ordering */}
          <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
            <h6 className="text-primary">Featured Project</h6>
            <h2 className="fw-bold text-light">{project.title}</h2>
            <div className="bg-dark text-light p-4 rounded-4 mt-3" style={{ background: 'linear-gradient(to right,rgb(115, 115, 135), #1f1f3f)' }}>
              <p>{project.description}</p>
            </div>
          </div>

          <div className={`col-md-6 text-center ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
            <img src={project.image} alt={project.title} className="img-thumbnail project-icon  rounded-4  object-cover shadow-gray bg-dark border-0" style={{ background: 'linear-gradient(to right,rgb(115, 115, 135), #1f1f3f)' }}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
