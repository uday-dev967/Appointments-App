/* eslint-disable react/no-unknown-property */
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStared} = props
  const {date, id, title, isStared} = appointmentDetails
  const appointmentDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  console.log(title, appointmentDate)
  const imageUrl = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const onClickStar = () => {
    toggleIsStared(id)
  }

  return (
    <li className="list-item">
      <div className="appoint">
        <div>
          <p className="heading">{title}</p>
          <p className="date">{appointmentDate}</p>
        </div>
        <button
          type="button"
          className="button"
          onClick={onClickStar}
          testid="star"
        >
          <img src={imageUrl} alt="star" className="image-star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
