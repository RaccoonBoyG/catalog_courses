import React from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonScrollToTop = () => {
    return (
        <React.Fragment>
            <button type="button" className="back_to_top btn btn-primary btn-circle"><FontAwesomeIcon icon={faArrowUp} size="2x"/></button>
        </React.Fragment>
    )
}

export default ButtonScrollToTop
