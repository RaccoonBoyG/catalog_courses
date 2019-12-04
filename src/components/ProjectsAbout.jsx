import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchPrograms, fetchAboutProgram } from '../store/programs/action';
import { fetchProjects } from '../store/projects/action';
import { fetchPrograms, fetchAboutProgram } from '../store/programs/action';
import AboutRender from '../containers/AboutRender';
import 'animate.css/animate.min.css';

// import Header from './Header';
// import ListCard from '../containers/ListCard';
import scroll from './scroll';
import ButtonScrollToTop from '../containers/ButtonScrollToTop';
import ListCard from '../containers/ListCard';
import { ArrayContent } from '../containers/Content';
import Spinner from '../containers/Spinner';

class ProjectsAbout extends Component {
  constructor(props) {
    super(props);

    this.postIdAPI = this.postIdAPI.bind(this);
  }

  componentDidMount() {
    this.props.fetchPrograms();
    this.props.fetchProjects();
    scroll();
  }

  postIdAPI(id) {
    this.props.fetchAboutProgram(id);
  }

  render() {
    const { loading, data, data_programs, loading_programs } = this.props;
    if (loading && loading_programs) {
      return <Spinner />;
    }
    return (
      <>
        {data.map(item => {
          if (item.slug_project === this.props.match.path.replace('/', '')) {
            return (
              <React.Fragment key={item.name + item.slug_project}>
                <AboutRender
                  name={item.name}
                  image_background={item.image_background}
                  height={100}
                  class={'top-txt-container-sub'}
                  data_programs={data_programs}
                />
                <div className="d-flex flex-column margin-custom-catalog container">
                  {item.content.map((i, key) => {
                    return (
                      <div className="text-custom-dark2 m-3 p-5 shadow-sm bg-white" key={key} dangerouslySetInnerHTML={{ __html: i.content }}></div>
                    );
                  })}
                  <ArrayContent data_content={data} />
                  <div className="m-3 d-flex flex-wrap flex-row">
                    {data_programs.map(item => {
                      return item.project_slug === this.props.match.path.replace('/', '') ? (
                        <ListCard
                          key={item.name + item.slug}
                          name={item.name}
                          slug={item.slug_program}
                          logo={item.logo}
                          image_background={item.image_background}
                          url={this.props.match.url}
                          handleClick={this.postIdAPI}
                        />
                      ) : null;
                    })}
                  </div>
                </div>
              </React.Fragment>
            );
          } else return null;
        })}
        <ButtonScrollToTop />
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.projects.items,
  loading: state.projects.loading,
  data_programs: state.programs.items,
  loading_programs: state.programs.loading
});

const mapDispatchToProps = {
  fetchProjects,
  fetchPrograms,
  fetchAboutProgram
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsAbout);
