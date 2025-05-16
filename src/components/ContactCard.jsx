export const ContactCard = ({name, address, phone, email}) => {
    return (
        <>
        <img className="card-img" src="https://avatar.iran.liara.run/public/24" />
        <div className="contact-card-info d-flex flex-column justify-content-center">
            <h4>{name}</h4>
            <h6>{address}</h6>
            <h6>{phone}</h6>
            <h6>{email}</h6>
        </div>
        
        </>
    )
}