import React from 'react';
import "./Service.css";
import { FaRegCheckCircle } from "react-icons/fa";

const Service = () => {
  return (
    <div className='services'>
      <h1>شروط الخدمه</h1>
    <div className="service">
    <div>
      <FaRegCheckCircle className='service-icon'/>
      <p>يمكنك إضافة الإشتراك علي أكثر من جهاز , لكن لا يمكنك تشغيل أكثر من جهاز بنفس الوقت.</p>
    </div>      
    </div>
    <div className="service">
      <div>
        <FaRegCheckCircle className='service-icon'/>
        <p>السرعات المطلوبة لتشغيل السيرفر علي أقل جودة هي 10 ميجا / ثانية لتحصل علي تجربة اداء مرضية نسبيًا.</p>
      </div>
    </div>
    <div className="service">
      <div>
        <FaRegCheckCircle className='service-icon'/>
        <p> لا يمكنك مشاركة بيانات حسابك مع أحد, وهذا الأمر يعرض حسابك للحظر.</p>
      </div>
    </div>
    <div className="service">
      <div>
        <FaRegCheckCircle className='service-icon'/>
        <p>يمكنك طلب إضافة المحتوي علي تيلجرام / واتساب ويتم تنفيذ الطلبات في خلال 48 ساعة</p>
      </div>
    </div>
    <div className="service">
      <div>
        <FaRegCheckCircle className='service-icon'/>
        <p>ممنوع تمامًا إستعمال اشتراكك في إعادة البث, يتم حظر الحساب مباشرة بسبب هذا الأمر.</p>
      </div>
    </div>
    </div>
  );
}

export default Service;
