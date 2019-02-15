import React, { Component } from 'react';
import '../static/css/Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {

	render(){
	  return (
        <footer className="page-footer font-small mdb-color pt-5">
        
            <div className="container text-center text-md-left">
        
              <div className="row text-center text-md-left mt-3 pb-4">
        
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-2">
                  <h6 className="text-uppercase mb-4 font-weight-bold"><img src="//openedu.urfu.ru/files/courses_catalog/UrFULogo1.svg" alt="..." className='footer-icon'/>Ural Federal University</h6>
                  <p><small className="text-muted">ФГАОУ ВО «УрФУ имени первого Президента России Б.Н.Ельцина»
                    Институт технологий открытого образования</small></p>
                </div>
        
                <hr className="w-200 clearfix d-md-none" />
        
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-2">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Полезные ссылки</h6>
                  <p>
                    <a href="#!">Политика конфиденциальности</a>
                  </p>
                  <p>
                    <a href="#!">Технические требования</a>
                  </p>
                </div>
        
                <hr className="w-200 clearfix d-md-none" />
        
                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-2">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Контакты</h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Екатеринбург,ул. Мира д.19,каб.И-200</p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> openedu@urfu.ru</p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +7 (343) 374-58-42</p>
                  <p>
                    <i className="fas fa-print mr-3"></i> +7 (343) 375-95-28</p>
                </div>
        
              </div>
        
              <hr/>
        
              <div className="row d-flex align-items-center">
        
                <div className="col-md-7 col-lg-8">
        
                  <p className="text-center text-md-left">© 2018 Copyright:
                    <a href="/">
                    <strong> Ural Federal University</strong>
                    </a>
                  </p>
        
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0">
        
                  <div className="text-center text-md-right">
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
        
                </div>
        
              </div>

        
            </div>
        
          </footer>

    )
  }
}

  
export default Footer;