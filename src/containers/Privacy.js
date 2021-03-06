import React, { Component } from 'react';


class Privacy extends Component {


	render(){
	  return (
    <div class="container jumbotron">
        <h1>
            Политика конфиденциальности
        </h1>
        <div class="text-left">
            <p>
                Данная политика конфиденциальности разработана в соответствии с законодательством Российской Федерации.
                Все лица, заполнившие сведения, составляющие персональные данные на данном сайте, а также разместившие иную информацию обозначенными действиями,
                подтверждают свое согласие на обработку персональных данных без передачи третьим лицам.
            </p>

            <p>Под персональными данными понимается нижеуказанная информация: общая информация (имя, телефон и/или адрес электронной почты).</p>

            <p>
                Посетители сайта направляют свои персональные данные для возможности связи с ними со стороны 
                компании-владельца сайта и для осуществления обмена информацией в рамках предлагаемых услуг.
            </p>

            <p>
                Посетитель, принимая положения настоящего документа, выражает свою заинтересованность и полное согласие, 
                что обработка его персональных данных может включать в себя следующие действия: 
                сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.
            </p>

            <p>
                Посетитель гарантирует: информация, им предоставленная, является полной, точной и достоверной; 
                при предоставлении информации не нарушается действующее законодательство Российской Федерации, 
                законные права и интересы третьих лиц; вся предоставленная информация заполнена в отношении себя лично.
            </p>
        </div>
        <div class="card">
            <div class="card-img">
            </div>
            <div class="card-body text-center">
                <p><a href="http://bs.urfu.ru/files/documents/politika.pdf">Политика конфиденциальности(полная версия)</a>
                </p>
            </div>
        </div>
    </div>
    )
  }
}
  
export default Privacy;
