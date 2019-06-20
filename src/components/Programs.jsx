import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrograms, fetchAboutProgram } from '../store/programs/action';
import 'animate.css/animate.min.css';

import Header from './Header';
import HeaderBackground from '../containers/HeaderBackground';
import HeaderTitle from '../containers/HeaderTitle';
import ListCard from '../containers/ListCard';
import scroll from './scroll'
import ButtonScrollToTop from '../containers/ButtonScrollToTop';

class Programs extends Component {
  constructor(props) {
    super(props)
  
    this.postIdAPI = this.postIdAPI.bind(this)
  }
  

  componentDidMount() {
    this.props.fetchPrograms()
    scroll()
  }

  postIdAPI(id){
    this.props.fetchAboutProgram(id)
  }

    render(){
      const { data } = this.props
      const ProgramsList = (
        data.map(item =>{
          return (
            <ListCard 
            key={item.name+item.slug}
            name={item.name}
            slug={item.slug_program}
            logo={item.logo}
            image_background={item.image_background}
            url={this.props.match.url}
            handleClick={this.postIdAPI}
          />
          )
        })
      )
      return (
        <React.Fragment>
          <HeaderBackground height={350} />
          <Header />
          <HeaderTitle title={'Программы'} class={'top-txt-container-sub'} />
          <div className='flex-row p-5 '>
            <div className='d-flex flex-wrap flex-row'>
              {ProgramsList}
            </div>
          </div>
          <ButtonScrollToTop />
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.programs.items
})

const mapDispatchToProps = {
  fetchPrograms,
  fetchAboutProgram
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Programs);