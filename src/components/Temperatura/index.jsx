import PropTypes from 'prop-types';
import { formattedDate } from '../../utils/dataUtils.js';

function Temperatura({
  cidade,
  pais,
  temperatura,
  tempo
}) {

  return (
    <div>
      <div className="location-box">
        <div className="location">{cidade} / {pais} </div>
        <div className="date">{formattedDate(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className={temperatura ? ((temperatura > 16) ? "temp warm" : "temp cold") : "temp"}>
          {Math.round(temperatura)}°C
        </div>
        <div className="weather">{tempo}</div>
      </div>
    </div>
  )
}

Temperatura.propTypes = {
  cidade: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  temperatura: PropTypes.number.isRequired,
  tempo: PropTypes.string.isRequired
}

export default Temperatura