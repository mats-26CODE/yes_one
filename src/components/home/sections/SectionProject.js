import React from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, Autoplay } from "swiper";
//-> import swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

//-> redux data selector
import { selectComboProjects } from "../../../features/home/homeSlice";
import { useSelector } from "react-redux";

//-> icon imports
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";

const SectionProject = () => {
  //-> redux data selected
  const homeComboProjects = useSelector(selectComboProjects);

  const projectsData = () => {
    if (homeComboProjects !== null) {
      const projectsData = homeComboProjects.comboProjects;
      const projects = _.map(projectsData, (project) => project);
      return (
        <>
          <Swiper
            slidesPerView={2}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            rewind={true}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="projects_slider">
                    <img src={project.projectImage} alt={"Project Artwork"} />
                    <p>{project.projectDescription}</p>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="prev">
              <IoChevronBackCircleSharp className="iconArrow" />
            </div>
            <div className="next">
              <IoChevronForwardCircleSharp className="iconArrow" />
            </div>
          </Swiper>
        </>
      );
    } else {
      return (
        <>
          <Swiper
            slidesPerView={2}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            rewind={true}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="projects_slider">
                <p>We'll showcase our projects soon</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      );
    }
  };

  return (
    <div className={"section_projects_container"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div>
            <h4>Our Combo Projects</h4>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div>{projectsData()}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SectionProject;
