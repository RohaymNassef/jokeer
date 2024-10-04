import React from 'react';
import "./Anser.css";
import { FaArrowLeft } from "react-icons/fa";

const Anser = () => {
  return (
    <div className='anser'>
      <h1>سؤال وجواب</h1>
      <div className="ansers">
      <div className="quz">
        <h2>كيف يمكني تشغيل اشتراكي علي جهازي الاندرويد؟</h2>
        <div>
        <p><FaArrowLeft className='quz-icon'/>يتوفر تطبيقات خاصة للتشغيل على أنظمة الأندرويد ، حيث يمكن للمستخدم تحميلها بشكل مباشر من خلال رابطنا المباشر</p>
        </div>
        </div>
        <div className="quz">
            <h2>ما هي السرعه المطلوبه لتشغيل <span>JOKER TV</span>؟</h2>
            <div>
            <p><FaArrowLeft className='quz-icon'/>خدمتنا تعتمد بشكل أساسي على سرعة الانترنت حيث تحتاج سرعة لاتقل عن 10 ميجا لضمان جودة الخدمة وعدم حدوث انقطاع أو تشويش في البث.</p>
            </div>
        </div>
        <div className="quz">
            <h2>هل يمكنني الحصول علي تجربه مجانيه؟</h2>
           <div>
           <p><FaArrowLeft className='quz-icon'/>نعم بكل تأكيد, يمكنكم طلب تجربة لمدة 24 ساعة للتحقق من جودة الخدمة وتصفح المحتوي, كل ماعليك هو التواصل عبر واتساب.</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Anser;
