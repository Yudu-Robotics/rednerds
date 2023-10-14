import './WhatsappLogo.css'

function WhatsappLogo(){
    return(<div style={{backgroundColor:"#da3540"}}>
    <div className="whatsapp-wrapper">
      <a
        href="https://wa.me/918951964430"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
        <span className="hover-text">WhatsApp us</span>
      </a>
    </div>
  </div>)
}

export default WhatsappLogo;