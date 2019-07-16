import React, { Component } from "react";
import Header from "../components/Header";
import HeaderBackground from "./HeaderBackground";
import scroll from "../components/scroll";
import ButtonScrollToTop from "./ButtonScrollToTop";

class AboutUs extends Component {
  componentDidMount() {
    scroll();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <HeaderBackground />
        <div className="container-course_about container jumbotron aboutUs text-custom-dark p-5 mt-3">
          <div className="about-back"></div>

          <h1>О нас</h1>
          <div className="text-left">
            <p>
              Уральский федеральный университет – крупнейший федеральный
              университет России, созданный на базе старейших университетов
              Урала – УГТУ-УПИ и УрГУ. За 90-летнюю историю было подготовлено
              более 300 тысяч выпускников. Университет занимает ведущие позиции
              среди вузов России, осуществляющих обучение по инженерным
              направлениям подготовки.
            </p>
            <p>
              В университете более 10 лет осуществляется подготовка кадров
              высшей квалификации с применением дистанционных образовательных
              технологий. В основу такой подготовки заложен большой опыт
              создании виртуальных лабораторий, тренажеров и симуляторов, съемки
              учебных видеофильмов, разработки онлайн курсов.
            </p>
            <p>
              В рамках проекта “Открытое образование” Уральский федеральный
              университет представит курсы, в первую очередь, обеспечивающие
              базовую подготовку по инженерным направлениям. К созданию курсов
              привлечены большие коллективы лучших преподавателей университета,
              многие из которых имеют многолетний опыт дистанционного обучения.
              Наша задача - показать, что даже в традиционно сложных для
              дистанционного обучения технических дисциплинах применение онлайн
              курсов с современными технологиями будет высокоэффективным.
            </p>
          </div>
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body text-center">
              <h3>Официальный сайт</h3>
              <p>
                <a href="http://itoo.urfu.ru">itoo.urfu.ru</a>
              </p>
            </div>
          </div>
        </div>
        <ButtonScrollToTop />
      </React.Fragment>
    );
  }
}

export default AboutUs;
