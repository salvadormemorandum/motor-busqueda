// Dependencias
import { PropTypes } from 'prop-types'

// Iconos
import { CloseIcon } from '../Iconos'

function CloseBtn({ close }) {
    return (
        <button className="btn-close" onClick={close}>
            <CloseIcon />
        </button>
    )
}

CloseBtn.propTypes = {
    close: PropTypes.func.isRequired
}

export default CloseBtn