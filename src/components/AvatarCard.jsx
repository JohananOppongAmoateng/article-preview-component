import "./AvatarCard.css"

function AvatarCard() {
  return (
    <div className="card">
        <img className="avatar img" src="../../images/avatar-michelle.jpg" alt="" />
        <div className="info">
            <p className="name">Michelle Appleton <br></br></p>
            <p className="date">29th June 2023</p>
        </div>
        <button className="share-container">
        <img className="share img" src="../../images/icon-share.svg" alt="" />
        </button>
        
    </div>
  )
}

export default AvatarCard