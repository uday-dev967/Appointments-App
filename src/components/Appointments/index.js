import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

// Write your code here

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentList: [],
    staredBtnClicked: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      title,
      date,
      id: uuidv4(),
      isStared: false,
    }

    this.setState(prveState => ({
      appointmentList: [...prveState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  toggleIsStared = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (each.id === id) {
          return {...each, isStared: !each.isStared}
        }
        return each
      }),
    }))
  }

  onClickStared = () => {
    this.setState(prevState => ({
      ...prevState,
      staredBtnClicked: !prevState.staredBtnClicked,
    }))
  }

  render() {
    const {title, date, appointmentList, staredBtnClicked} = this.state
    const staredOnlyList = appointmentList.filter(
      each => each.isStared === true,
    )
    const displayList = staredBtnClicked ? staredOnlyList : appointmentList
    console.log(date)
    console.log(appointmentList)
    const activeClass = staredBtnClicked ? 'starred-active' : ''
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="responsive-container">
            <form
              className="appointment-form-container"
              onSubmit={this.onAddAppointment}
            >
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="title" className="label">
                Title
              </label>
              <input
                value={title}
                onChange={this.onChangeTitle}
                className="input"
                placeholder="Title"
                id="title"
              />
              <label htmlFor="date" className="label">
                Date
              </label>
              <input
                className="input"
                type="date"
                value={date}
                onChange={this.onChangeDate}
                placeholder="dd/mm/yyyy"
                id="date"
              />

              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>

          <br />
          <div className="apointment-item-container">
            <hr />
            <div className="list-head">
              <h1>Appointments</h1>
              <button
                type="button"
                className={`starred ${activeClass}`}
                onClick={this.onClickStared}
              >
                Starred
              </button>
            </div>

            <ul className="apointments-container">
              <br />
              {displayList.map(each => (
                <AppointmentItem
                  appointmentDetails={each}
                  toggleIsStared={this.toggleIsStared}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
