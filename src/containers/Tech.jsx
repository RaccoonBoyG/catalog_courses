import React, { Component } from "react";
import Header from "../components/Header";
// import HeaderBackground from "./HeaderBackground";

class Tech extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <HeaderBackground /> */}
        <div
          className="container-course_about  container text-custom-dark p-5 mt-3"
          style={{ borderRadius: 0 }}
        >
          <h1>Технические требования</h1>
          <div
            className="d-flex flex-column "
            style={{ wordWrap: "break-word" }}
          >
            <h2>Общие</h2>
            <p>
              Поддерживаемые браузеры и операционные системы для работы с курсом
              (в роли учащегося):
            </p>
            <ul>
              <li>Операционные системы: Windows (7, 8, 10), Mac OS</li>
              <li>
                Браузеры: Chrome (кроме версии 53), Safari, Mozilla Firefox,
                Opera
              </li>
            </ul>
            <p>
              Рекомендуемая скорость интернет-соединения для просмотра видео: от
              3 мбит/сек.
            </p>
            <h2>Ограничения</h2>
            <p>
              К сожалению, в данный момент мы не можем полностью гарантировать
              стабильную работу с мобильными устройствами, с бета-версиями
              браузеров (например, Edge на Win10), а также с рядом устаревших
              операционных систем, уже не поддерживаемых производителями,
              включая Windows Vista и Windows XP.
            </p>

            <h2>
              Для контрольных испытаний с подтверждением личности (прокторингом)
            </h2>
            <p>
              Для проверочных работ с прокторингом, проводимым в режиме онлайн:
            </p>
            <ul>
              <li>
                должен использоваться персональный компьютер:
                <b>&nbsp;настольный компьютер, ноутбук или нетбук</b>;
              </li>
              <li>
                компьютер должен быть оборудован{" "}
                <nobr>
                  <b>веб-камерой</b>
                </nobr>
                ;
              </li>
              <li>
                интернет-обозреватель: последняя стабильная версия браузера{" "}
                <b>Google Chrome</b>;{" "}
              </li>
              <li>
                рекомендуемая скорость <nobr>Интернет-соединения</nobr> для
                передачи видеопотока с&nbsp;
                <nobr>веб-камеры</nobr> <b>от&nbsp;3&nbsp;Мб/сек</b>;
              </li>
              <li>
                рекомендуемый размер дисплея:{" "}
                <b>диагональ экрана от&nbsp;13''</b>.
              </li>
              <li>
                рекомендуемое разрешение дисплея: <b>от 1280 × 720</b>.
              </li>
            </ul>
            <p>
              Точные технические требования зависят от конкретной используемой
              системы прокторинга.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tech;
