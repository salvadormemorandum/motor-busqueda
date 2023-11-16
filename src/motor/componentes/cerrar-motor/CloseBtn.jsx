// Dependencias
import { PropTypes } from 'prop-types'

// Iconos
import { getIcon } from '../api'

function CloseBtn({ close }) {
    return (
        <button className="btn-close" onClick={close}>
            {getIcon('close')}
        </button>
    )
}

CloseBtn.propTypes = {
    close: PropTypes.func.isRequired
}

export default CloseBtn