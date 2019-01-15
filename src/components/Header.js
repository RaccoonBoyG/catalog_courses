import React, { Component } from 'react';
import '../static/css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSearch } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            animateClass: '',
            arrayWord : []
        }
        this.state.textValue = "творить"
    }

    componentDidMount(){
        this.setState(
                {arrayWord : [
                    'творить',
                    'работать',
                    'жить',
                ]
            }
        )
        var i = 0
        setInterval(()=>{
            if(this.state.animateClass==='animated'){
                this.setState({animateClass:'no-animated'})
            }
        },1250)
        setInterval(()=>{
            this.changeText(i++)
            if(i>2)i=0
        },2500)
    }

    changeText(i){
        this.setState({textValue:this.state.arrayWord[i]})
        this.setState({animateClass:'animated'})
    }

	render(){
	  return (
        <div className="navbar-container">
        <div className="filter-back"></div><div className="nav-background"></div>
            <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faGraduationCap} size="1x"/> Ural Federal University</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto">
                <div className="form-inline mt-2 my-lg-0 tabindex=0"> 
                <FontAwesomeIcon icon={faSearch} size="1x"/><input className="form-control mr-sm-2" type="search" placeholder="Найти" aria-label="Search" />
                </div>
            </ul>
                {/* <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Support</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                </li>
                </ul> */}
                <div>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Регистрация</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Вход</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            <div className="nav-tilte-image">
                <h2>Легко учиться, легко <span className={`animated-tag ${this.state.animateClass}`}>{this.state.textValue}!</span></h2>
                <img src="//openedu.urfu.ru/files/courses_catalog/UrFULogo1.png" alt="..." className='nav-title-icon'/>
            </div>
        </div>
    )
  }
}

  
export default Header;
