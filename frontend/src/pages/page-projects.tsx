// Importing Components
import Layout from "../layout/layout";
import Carousel from "../components/carousel";
import "../index.css";

function ProjectsPage() {
  return (
    <>
      <Layout>
        <div className="flex flex-1 justify-center items-center">
          <Carousel />
        </div>
      </Layout>
    </>
  );
}

export default ProjectsPage;
