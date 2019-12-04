import React from 'react';

export const Modal = props => {
  return (
    <React.Fragment>
      <div class="modal" id="course_instruction" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Видеоинструкция по работе с онлайн-модулем</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={props.StopVideoCourse}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body embed-responsive embed-responsive-16by9">
              <video class="embed-responsive-item" id="course_instruction_data" controls="controls" width="700">
                <source src={`https://openedu.urfu.ru/files/npr_2019/keyteacher_course.mp4`} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                Тег video не поддерживается вашим браузером.
                <a href={`https://openedu.urfu.ru/files/npr_2019/keyteacher_course.mp4`}>Скачайте видео</a>.
              </video>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={props.StopVideoCourse}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="webinar_instruction" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Видеоинструкция по работе с онлайн-модулем</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={props.StopVideoWebinar}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body embed-responsive embed-responsive-16by9">
              <video class="embed-responsive-item" id="webinar_instruction_data" controls="controls" width="700">
                <source src={`https://openedu.urfu.ru/files/npr_2019/keyteacher.mp4`} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                Тег video не поддерживается вашим браузером.
                <a href={`https://openedu.urfu.ru/files/npr_2019/keyteacher.mp4`}>Скачайте видео</a>.
              </video>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={props.StopVideoWebinar}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
