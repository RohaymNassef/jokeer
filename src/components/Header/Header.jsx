import React, { useEffect } from 'react';
import "./Header.css";
import img from "../../images/header-2.png"
import img1 from "../../images/mompic.jpg"
import img2 from "../../images/1h_21.png"
import img3 from "../../images/update.png"
import img4 from "../../images/1h_15.jpg"
import img5 from "../../images/arrow.png"
import img6 from "../../images/1h_18.png"
import img7 from "../../images/4.jpg"
import { FaRegCheckCircle , FaCheckCircle} from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { FaPhotoFilm ,FaFileCirclePlus } from "react-icons/fa6";
import { MdBlockFlipped , MdOutlineSystemUpdateAlt} from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { HiVideoCamera } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
  return (
    <>
    <header>
        <div className="header">
            
            <div className="header-flex">
            <div className="header-right">
                    <img src={img} alt="photo" />
                </div>
                <div className="header-left">
                    <h3 data-aos="fade-up">JOKER TV</h3>
                    <h2 data-aos="fade-up">هل تبحث عن الخدمه الافضل؟ <span>حالك معنا</span> </h2>
                    <p data-aos="fade-up">الان تمتع بافضل خدمه لمشاهدة كل القنوات بالأضافه الي المحتوى الترفيهي والرياضي وذلك من خلال JOKER Tv , نقدم افضل خدمه دعم فني علي الاطلاق بفريق دعم متواجد علي مدار اليوم وتحديثات مستمره للمحتوي</p> 
                    <Link to={"https://wa.me/201097351705"}><button class="buttone type1" >
                    </button>
                    </Link>
                </div>    
                
            </div>           
        </div> 
    </header>
    <section className='kinz'>
        <div className="kinz-flex">
            <div className="kinz-left">
                <img src={img1} alt="photo" data-aos="fade-up"/>
            </div>
            <div className="kinz-right">
                <div data-aos="fade-up">
                    <img src={img2} alt="photo"/>
                    <h1>كنز من المحتوي الترفيهي والرياضي</h1>
                </div>
                <p data-aos="fade-up">نوفر في <span>JOKER TV</span> محتوي ضخم من القنوات الرياضية بجميع الجودات بالإضافة إلي أكثر من 15,000 فيلم و 4,000 مسلسل, مع أضخم مكتبة لجودة 4k كما أن التحديثات لدينا علي مدار الساعة والسيرفر صديق للعائلة بدون محتوي إباحي بالإضافة لتنفيذ طلبات العملاء في خلال 48 ساعة ودعم فني متواجد علي مدار اليوم لخدمتك!</p>
            </div>
        </div>

    </section>
    <section className='update'>
        <div className="update-flex-one">
            <div className="update-left-one">
                <button className='update-btn'>JOKER TV لماذا تختار </button>
            </div>
            <div className="update-right-one">
                <div>
                    <img src={img3} alt="" data-aos="fade-up"/>
                </div>
                <div>
                    <h2 className='update-text' data-aos="fade-up">تحديثات مستمرة</h2>
                    <p data-aos="fade-up">لدينا في JOKER TV  تعمل علي تحديث باقتنا بشكل يومي وإضافة تحديثات الأفلام والمسلسلات الأجنبية وذلك رغبة في تقديم أفضل خدمة لعملائنا</p>
                </div>
            </div>
        </div>
        <div className="update-flex-two">
            <div className="update-left-two">
                <h2 data-aos="fade-up">ثمن رائع</h2>
                <p data-aos="fade-up">نحقق في JOKER TV المعادلة الصعبة , وهي جودة ممتازة مع خدمة مستقرة وتحديثات دائمة مع دعم فني وبسعر مناسب</p>                
            </div>
            <div className="update-center-two">
                <h2 className='sss' data-aos="fade-up">شهور هديه</h2>
                <p data-aos="fade-up">نقوم بتقديم شهور هديه في JOKER TV وذلك لكل عملائنا الكرام علي خططنا السنوية أو النصف سنوية</p>
            </div>
            <div className="update-right-two">
                <h2 data-aos="fade-up">يعمل بدون تقطيع</h2>
                <p data-aos="fade-up">لثقتنا في خدمتنا, نوفر لجميع عملائنا ضمانًا لإستمرار الخدمة طوال فترة الإشتراك لمساعدتك في حالة مواجهتك أي مشاكل في الخدمة</p>
            </div>
        </div>
    </section>
    <section className='support'>
        <div className="support-flex">
            <div className="support-left">
                <img src={img4} alt="photo" data-aos="fade-up"/>
            </div>
            <div className="support-right">
                <div>
                    <img src={img5} alt="photo" data-aos="fade-up"/>
                    <h2 data-aos="fade-up">دعم فني حقيقي</h2>
                </div>
                <p data-aos="fade-up">نوفر في اشتراك JOKER TV افضل خدمة بعد البيع علي الإطلاق, حيث أن فريقنا مجهز علي أعلي مستوي لتقديم الدعم المناسب لك بعد البيع, وهذا من أهم مميزاتنا والتي نحافظ عليها, فريقنا متواجد علي مدار اليوم لخدمتك.</p>
            </div>
        </div>
    </section>
    <section className='what'>
        <div className="what-flex">
        
            <div className="what-left">
                <div>
                    <img src={img2} alt="photo" data-aos="fade-up"/>
                    <h2 data-aos="fade-up">ماذا نوفر؟</h2>
                </div>
                <div>
                    <FaRegCheckCircle className='what-icon' data-aos="fade-up"/>
                    <p data-aos="fade-up">سيرفراتنا تعمل علي جميع الأجهزه ( شاشة سمارت / موبايل / لابتوب / ريسيفر ) أغلب القنوات بجودة HD - FHD - 4K</p>                    
                </div>
                <div>
                    <FaRegCheckCircle className='what-icon' data-aos="fade-up"/>
                    <p data-aos="fade-up"> تتميز سيرفراتنا بالإستقرار والسرعه وذلك بسبب خطوط إتصال بسرعه 10 جيجا/ث لنقل البيانات ومزود بأكثر من 40 سيرفر لتقديم أفضل تجربة لك</p>
                </div>
                <div>
                    <FaRegCheckCircle className='what-icon' data-aos="fade-up"/>
                    <p data-aos="fade-up">سيرفرات مشاهده تتمتع بالجودة الممتازة وأقل إستهلاك للإنترنت</p>
                </div>
            </div>
            <div className="what-right">
                <img src={img6} alt="photo" data-aos="fade-up"/>
                <Link to={"https://wa.me/201097351705"}><button class="update-btn" data-aos="fade-up"> اشترك الان</button></Link>
            </div>
        </div>
    </section>
    <section className='warning'>
        <div className="warning-flex">
            <div className="warning-left">
                <div className='warning-contant'>
                    <img src={img7} alt="photo" data-aos="fade-up"/>
                    <div className='warning-contant-one'>
                        <FaPhotoFilm className="warning-icon" data-aos="fade-up"/>
                        <div>
                        <h2 data-aos="fade-up">مكتبه ضخمه</h2>
                        <p data-aos="fade-up">اضخم مكتبة للأفلام والمسلسلات العربية والاجنبية والهندية والاسيوية محدثه يوميا بالاضافة الى محتوي جميع المنصات المدفوعة الاخري</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="warning-center">
                <div className='center-contant'>
                    <SlScreenDesktop className="warning-icon" data-aos="fade-up"/>
                    <div>
                        <h2 data-aos="fade-up">قنوات ممتازة</h2>
                        <p data-aos="fade-up">نوفر في JOKER TV قنوات باقة من أفضل القنوات لكل الدول بالإضافة لكل القنوات المشفرة</p>
                    </div>
                </div>
                <div className='center-contant'>
                    <MdBlockFlipped className="warning-icon" data-aos="fade-up"/>
                    <div>
                        <h2 data-aos="fade-up">بدون إباحية</h2>
                        <p data-aos="fade-up">JOKER TV صديق للعائلة ولا يحتوي علي أي قنوات إباحية لتقديم تجربة آمنة لعائلتك ولأطفالك</p>
                    </div>
                </div>
                <div className='center-contant' >
                    <FaFileCirclePlus className="warning-icon" data-aos="fade-up"/>
                    <div>
                        <h2 data-aos="fade-up">طلب ألافلام والمسلسلات</h2>
                        <p data-aos="fade-up">مع JOKER TV اطلب فيلمك أو مسلسلك الغير موجود بالتواصل مع الدعم وسيقوم بإتمام الطلب الخاص بك في فترة لا تتجاوز 48 ساعة!</p>
                    </div>
                </div>
            </div>
            <div className="warning-right">
                <div className="right-contant">
                    <IoMdFootball className="warning-icon" data-aos="fade-up"/>
                    <div>
                        <h2 data-aos="fade-up">قنوات الرياضة</h2>
                        <p data-aos="fade-up">نوفر في JOKER TV كل القنوات الرياضية بجميع الجودات وأكثر من مصدر للبث لتوفير افضل قدر من الثبات</p>
                    </div>
                </div>
                <div className="right-contant">
                    <MdOutlineSystemUpdateAlt className="warning-icon" data-aos="fade-up"/>
                    <div>
                        <h2 data-aos="fade-up">تحديثات مستمرة</h2>
                        <p data-aos="fade-up">تحديثات JOKER TV على مدار الساعة، لوجود فريق كامل مختص بالتحديثات وإضافتها أولا باول.</p>
                    </div>
                </div>
                <div className="right-contant">
                    <HiVideoCamera className="warning-icon" data-aos="fade-up"/>
                    <div>
                        <h2 data-aos="fade-up">جودة فائقة</h2>
                        <p data-aos="fade-up">سيرفرات مشاهده تتمتع بالجودة الممتازة حيث جميع محتوياتنا بجودات FHD - 4k وأقل إستهلاك للإنترنت</p>
                    </div>
                </div>
            </div>
        </div>
        <Link to={"https://wa.me/201097351705"}><button className='warning-button' data-aos="fade-up">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <FaWhatsapp className='nav-warning-icon'/>
                <path
                  d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
                ></path>
              
            </div>
          </div>
          <span>تواصل معنا</span>
        </button>
        </Link>
    </section>
    <section className='sales'>
        <h1 data-aos="fade-up">أسعار الإشتراكات</h1>
        <div className="sale-flex">
            <div className="saleone" data-aos="fade-up">
                <div className='free'>
                    <Link to={"https://wa.me/201097351705"}><h2>جرب <span>الان </span></h2></Link>
                    <p>اشتراك 12 شهر + 3 هدية</p>
                </div>
                <div className="click-button">
                    <button className='click'> <FaCheckCircle className='try-icon'/> 6000 قناه</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> 15000 فيلم</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> 4000 مسلسل</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> سيرفرات تعمل بدون تقطيع</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> دعم فنى طوال فتره الاشتراك</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> امكانيه طلب مسلسل / فيلم</button>
                    <Link to={"https://wa.me/201097351705"}><h2>اشترك الان</h2></Link>
                </div>
            </div>
            <div className="saletwo" data-aos="fade-up">
                <div className='free'>
                    <Link to={"https://wa.me/201097351705"}><h2>جرب <span>الان </span></h2></Link>
                    <p> اشتراك 24 شهر + 6 هدية </p>
                </div>
                <div className="click-button">
                <button className='click'> <FaCheckCircle className='try-icon'/> 6000 قناه</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> 15000 فيلم</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> 4000 مسلسل</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> سيرفرات تعمل بدون تقطيع</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> دعم فنى طوال فتره الاشتراك</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> امكانيه طلب مسلسل / فيلم</button>
                    <Link to={"https://wa.me/201097351705"}><h2>اشترك الان</h2></Link>
                </div>
            </div>
            <div className="salethree" data-aos="fade-up">
                 <div className='free'>
                    <Link to={"https://wa.me/201097351705"}><h2>جرب <span>الان </span></h2></Link>
                    <p> اشتراك 36 شهر + 9 هدية </p>
                </div>
                <div className="click-button">
                <button className='click'> <FaCheckCircle className='try-icon'/> 6000 قناه</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> 15000 فيلم</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> 4000 مسلسل</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> سيرفرات تعمل بدون تقطيع</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> دعم فنى طوال فتره الاشتراك</button>
                    <button className='click'> <FaCheckCircle className='try-icon'/> امكانيه طلب مسلسل / فيلم</button>
                    <Link to={"https://wa.me/201097351705"}><h2>اشترك الان</h2></Link>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Header;
