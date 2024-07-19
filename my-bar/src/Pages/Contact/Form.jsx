import'./Form.css'
const Form = () => {
    return ( <> <div className="contact">
        <img src={1}  alt="Oops! Something went wrong.This page didn't load Google Maps correctly. See the JavaScript console for technical details"className="imag"/>
        <form id="#form-contact" method="POST" className='form'>
            <div className="first">
                <div className="main">
                    <label htmlFor="firstName"className="username">FIRST NAME</label>
            <input type="text" placeholder="Name"/></div>
            <div className="main">
            <label htmlFor="email"className="username">EMAIL</label>
            <input type="email" placeholder="Email"/>
            </div>
            
            </div>
            <div className="second">
            <label htmlFor="subject"className="username">SUBJECT</label>
            <input type="text" placeholder="Subject"/>
            <label htmlFor="message"className="username">MESSAGE</label>
            <textarea placeholder="Message"></textarea>
            </div>
            <button className="btn">Send Message</button>
        </form>
    </div>
    </> );
}
 
export default Form;