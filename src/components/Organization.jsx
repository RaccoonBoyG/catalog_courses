import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrg, fetchAboutOrg } from '../store/organizations/action';
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Header from './Header';
import HeaderBackground from '../containers/HeaderBackground';
import HeaderTitle from '../containers/HeaderTitle';

class Organizations extends Component {
  // _renderItems(element) {
  //    this.props.data.name
  //   }

  componentDidMount() {
    this.props.fetchOrg()
  }

  postIdAPI(id) {
    this.props.fetchAboutOrg(id)
  }

  render() {
    const { data } = this.props
    const OrgList = (
      data.map(item => {
        return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" key={item.name}>
            <div className="d-flex animated fadeIn faster bg-dark-texts" style={{ borderBottom: '1px solid #000' }}>
              <div className="col p-3">
                <div className="flex-row p-3 mb-5">
                  <img className="img-fluid" src={item.logo} alt={item.logo} style={{ maxHeight: '150px', maxWidth: '150px' }} />
                </div>
                <div className="flex-row p-3" style={{ minHeight: '50px' }}>
                  <h4 className="card-title">{item.name}</h4>
                </div>
                <div className="flex-row d-flex justify-content-center button-custom-mobile">
                  <Link to={{pathname: `${this.props.match.url}/${item.slug}`}} onClick={this.postIdAPI.bind(this,item.slug)}>
                    <button className='btn btn-primary'>Подробнее</button>
                  </Link>
                </div>
              </div>
              <div className="col p-3">
                <div className="flex-row">
                  <p className="card-text card-text-mobile">{item.description}</p>
                  <p className="card-text"><small className="text-muted"></small></p>
                </div>
                <div className="flex-row d-flex justify-content-center button-custom">
                  <Link to={{pathname: `${this.props.match.url}/${item.slug}`}} onClick={this.postIdAPI.bind(this,item.slug)}>
                    <button className='btn btn-primary'>Подробнее</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          //   <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3" key={item.id}>
          //   <Link to={{pathname: `${this.props.match.url}/${item.slug}`}} onClick={this.postIdAPI.bind(this,item.slug)}>
          //   <div className="card card-org">
          //     <div className="hovereffect">
          //         <img className="card-img card-org-img" src={item.logo} alt={item.name}/>
          //         <div className="overlay">
          //         </div>
          //       <div className="card-body card-org-body" data-toggle="tooltip" data-placement="left" title={item.name} >
          //       <p className="d-inline-block">
          //         <FontAwesomeIcon icon={faGraduationCap} size="1x"/> {item.name}
          //       </p>
          //       </div>
          //     </div>
          //   </div>
          //   </Link>
          // </div>
        )
      })
    )

    return (
      <React.Fragment>
        <HeaderBackground height={350} />
        <Header />
        <HeaderTitle title={'Организации'} class={'top-txt-container-sub'} />
        <div ></div>
        <div className='flex-row p-5 '>
          <div className='flex-wrap flex-row'>
            {OrgList}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.organizations.items
})

const mapDispatchToProps = {
  fetchOrg,
  fetchAboutOrg
}

export default connect(mapStateToProps, mapDispatchToProps)(Organizations);