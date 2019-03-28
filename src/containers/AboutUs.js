import React, { Component } from 'react';
import '../static/css/AboutUs.css';


class AboutUs extends Component {


	render(){
	  return (
    <div className="container jumbotron aboutUs">
        <div className="about-back"></div>

        
        <h1>
            О нас
        </h1>
        <div className="text-left">
            <p>
                Уральский федеральный университет – крупнейший федеральный университет России, созданный на базе старейших университетов Урала – УГТУ-УПИ и УрГУ. 
                За 90-летнюю историю было подготовлено более 300 тысяч выпускников. 
                Университет занимает ведущие позиции среди вузов России, осуществляющих обучение по инженерным направлениям подготовки.
            </p>
            <p>
                В университете более 10 лет осуществляется подготовка кадров высшей квалификации с применением дистанционных образовательных технологий. 
                В основу такой подготовки заложен большой опыт создании виртуальных лабораторий, 
                тренажеров и симуляторов, съемки учебных видеофильмов, разработки онлайн курсов.
            </p>
            <p>
                В рамках проекта “Открытое образование” Уральский федеральный университет представит курсы, в первую очередь, 
                обеспечивающие базовую подготовку по инженерным направлениям.
                К созданию курсов привлечены большие коллективы лучших преподавателей университета, 
                многие из которых имеют многолетний опыт дистанционного обучения.
                Наша задача - показать, что даже в традиционно сложных для дистанционного обучения технических 
                дисциплинах применение онлайн курсов с современными технологиями будет высокоэффективным.
            </p>
        </div>
        <div className="card">
                <div className="card-img">
                </div>
                <div className="card-body text-center">
                    <h3>Официальный сайт</h3>
                    <p><a href="http://itoo.urfu.ru">itoo.urfu.ru</a>
                    </p>
                </div>
        </div>
    </div>
    )
  }
}
  
export default AboutUs;
