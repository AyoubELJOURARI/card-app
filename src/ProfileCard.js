function ProfileCard({ title, handle, image, description }) {
    return (
        <div className="card">
            <img src={image} class="card-img-top" alt="logo"/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h6 class="card-subtitle">Handle is {handle}.</h6>
                <p class="card-text">{description}</p>
            </div>
        </div>
    
    )
}

export default ProfileCard;