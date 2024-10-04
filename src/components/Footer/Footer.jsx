import React, { useEffect } from 'react';
import "./Footer.css";
import img5 from "../../images/arrow.png";
import { FaWhatsapp , FaFacebook , FaInstagram } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
  return (
    <>
    <div className='footer'>
        <div className="footer-flex">
            <div className="footer-left">
                <div data-aos="fade-up">
                    <img src={img5} alt="photo" />
                    <h1>عن JOKER TV</h1>
                </div>
                <p data-aos="fade-up">نحن في JOKER TV نتميز بتوفير مجموعة متنوعة من الميزات التي تجعل تجربتنا فريدة. نسعى جاهدين لتقديم أفضل خدمة لعملائنا بعد البيع، حيث نضع استجابتكم ورضاكم في صدارة أولوياتنا نقوم بتنفيذ طلبات عملائنا بمهنية عالية، سواء كانت طلبات لأفلام أو مسلسلات، مع التركيز على تحقيق توقعاتكم بدقة وفعالية نلتزم بالحفاظ على جودة السيرفر وثباته في جميع الأوقات</p>
            </div>
            <div className="footer-right">
                <div data-aos="fade-up">
                    <img src={img5} alt="photo" />
                    <h1>روابط تهمك</h1>
                </div>
                <ul data-aos="fade-up">
                    <li><Link to={"https://wa.me/201097351705"}><FaWhatsapp/></Link></li>
                    <li><Link to={"https://www.facebook.com/profile.php?id=100071822250911&mibextid=LQQJ4d"}><FaFacebook/></Link></li>
                    <li><Link to={"https://www.instagram.com/jokertv1563?igsh=c3ZsOXZocHlhbDBj&utm_source=qr"}><FaInstagram/></Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className='footer-bottom'>
        <p>جميع الحقوق محفوظه لموقعنا 2024</p>
        <div>
            <li><Link to={"https://wa.me/201097351705"}><FaWhatsapp className='waths'/></Link></li>
            <li><Link to={"https://www.facebook.com/profile.php?id=100071822250911&mibextid=LQQJ4d"}><FaFacebook className='face'/></Link></li>
        </div>
    </div>
    </>
  );
}

export default Footer;
