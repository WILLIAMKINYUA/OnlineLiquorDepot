import { FaUserTie } from "react-icons/fa";
import { GiTakeMyMoney} from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import './Blog.css'
const Blog = () => {
    return (<div className="container"><h2>THIS IS ABOUT PAGE</h2>
    <footer className="theme">
    <section className="box">
    <div className="image"><FaUserTie size={103}/></div>
    <div className="disclose">
        <h2 className="title">ONLINE SUPPORT 24/7</h2>
        <p className="topic">A small river named Duden flows by their place and supplies it with the necessary regelialiants.</p>
    </div>
    </section>
    <section className="box">
    <div className="image"><GiTakeMyMoney size={103} /></div>
    <div className="disclose">
        <h2 className="title">MONEY BACK GUARANTEE</h2>
        <p className="topic">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>
    </section>
    <section className="box">
    <div className="image"><FaTruck size={103}/></div>
    <div className="disclose">
        <h2 className="title">FREE SHIPPING & RETURN</h2>
        <p className="topic">A small river named Duden flows by their place and supplies it with the necessary regelialiants.</p>
    </div>
    </section></footer>
     </div> );

}
 
export default Blog;