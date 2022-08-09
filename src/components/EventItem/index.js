import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const activeImgClassName = isActive ? 'event-img active' : 'event-img'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button onClick={onClickEvent} type="button" className="event-btn">
        <img src={imageUrl} alt="event" className={activeImgClassName} />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
