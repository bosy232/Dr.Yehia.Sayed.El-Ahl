import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Dr. Yehia Sayed El-Ahl',
    'hero.subtitle': 'Consultant Pediatric Surgeon',
    'hero.description': 'Specialized in providing exceptional surgical care for children with a focus on minimally invasive techniques and comprehensive treatment approaches.',
    'hero.contact': 'Contact Now',
    'hero.appointment': 'Book Appointment',

    // About
    'about.title': 'About Dr. Yehia Sayed El-Ahl',
    'about.description': 'With over two decades of experience in pediatric surgery, Dr. Yehia has dedicated his career to providing exceptional surgical care for children, combining expertise with a compassionate approach.',
    'about.education': 'Education',
    'about.memberships': 'Memberships',
    'about.specializations': 'Specializations',

    // Services
    'services.title': 'Our Services',
    'services.description': 'We provide comprehensive pediatric surgical care using the latest techniques and technologies, ensuring the best possible outcomes for our young patients.',
    'services.neonatal': 'Neonatal Surgery',
    'services.neonatal.desc': 'Specialized surgical care for newborns with congenital conditions.',
    'services.minimally': 'Minimally Invasive Surgery',
    'services.minimally.desc': 'Advanced laparoscopic and thoracoscopic procedures for reduced recovery time.',
    'services.urology': 'Pediatric Urology',
    'services.urology.desc': 'Treatment of urological conditions in children of all ages.',
    'services.emergency': 'Emergency Care',
    'services.emergency.desc': '24/7 emergency surgical care for acute pediatric conditions.',
    'services.diagnostic': 'Diagnostic Procedures',
    'services.diagnostic.desc': 'Comprehensive evaluation and diagnosis of surgical conditions.',
    'services.followup': 'Follow-up Care',
    'services.followup.desc': 'Dedicated post-operative care and long-term follow-up.',

    // Articles
    'articles.title': 'Latest Articles',
    'articles.description': 'Stay informed with our latest medical articles and insights into pediatric surgery.',
    'articles.readMore': 'Read More',
    'articles.article1.title': 'Understanding Pediatric Surgery: A Guide for Parents',
    'articles.article1.excerpt': 'Learn about what to expect when your child needs surgery and how to prepare...',
    'articles.article1.date': 'March 15, 2024',
    'articles.article2.title': 'Common Pediatric Surgical Conditions',
    'articles.article2.excerpt': 'An overview of frequently encountered surgical conditions in children...',
    'articles.article2.date': 'March 10, 2024',
    'articles.article3.title': 'Advances in Minimally Invasive Surgery',
    'articles.article3.excerpt': 'Exploring the latest developments in pediatric surgical techniques...',
    'articles.article3.date': 'March 5, 2024',
    'articles.article4.title': 'Advances in Minimally Invasive Surgery',
    'articles.article4.excerpt': 'Exploring the latest developments in pediatric surgical techniques...',
    'articles.article4.date': 'March 5, 2024',
    'articles.article5.title': 'Advances in Minimally Invasive Surgery',
    'articles.article5.excerpt': 'Exploring the latest developments in pediatric surgical techniques...',
    'articles.article5.date': 'March 5, 2024',

    // Contact
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with us for appointments or any inquiries about our services.',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.location': 'Location',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Working Hours',

    // Footer
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عنا',
    'nav.services': 'خدماتنا',
    'nav.articles': 'المقالات',
    'nav.contact': 'اتصل بنا',

    // Hero
    'hero.title': 'د. يحيى سيد الأهل',
    'hero.subtitle': 'استشاري جراحة الأطفال',
    'hero.description': 'متخصص في تقديم رعاية جراحية استثنائية للأطفال مع التركيز على التقنيات الجراحية الدقيقة ونهج العلاج الشامل.',
    'hero.contact': 'اتصل الآن',
    'hero.appointment': 'احجز موعد',

    // About
    'about.title': 'نبذة عن د. يحيى سيد الأهل',
    'about.description': 'مع أكثر من عقدين من الخبرة في جراحة الأطفال، كرس د. يحيى حياته المهنية لتقديم رعاية جراحية استثنائية للأطفال، مع الجمع بين الخبرة والنهج الرحيم.',
    'about.education': 'التعليم',
    'about.memberships': 'العضويات',
    'about.specializations': 'التخصصات',

    // Services
    'services.title': 'خدماتنا',
    'services.description': 'نقدم رعاية جراحية شاملة للأطفال باستخدام أحدث التقنيات والتكنولوجيا، مما يضمن أفضل النتائج الممكنة لمرضانا الصغار.',
    'services.neonatal': 'جراحة حديثي الولادة',
    'services.neonatal.desc': 'رعاية جراحية متخصصة للمواليد الجدد المصابين بحالات خلقية.',
    'services.minimally': 'الجراحة قليلة التوغل',
    'services.minimally.desc': 'إجراءات متقدمة بالمنظار للبطن والصدر لتقليل وقت التعافي.',
    'services.urology': 'جراحة المسالك البولية للأطفال',
    'services.urology.desc': 'علاج حالات المسالك البولية للأطفال من جميع الأعمار.',
    'services.emergency': 'الرعاية الطارئة',
    'services.emergency.desc': 'رعاية جراحية طارئة على مدار الساعة للحالات الحادة.',
    'services.diagnostic': 'الإجراءات التشخيصية',
    'services.diagnostic.desc': 'تقييم وتشخيص شامل للحالات الجراحية.',
    'services.followup': 'الرعاية المتابعة',
    'services.followup.desc': 'رعاية ما بعد العملية الجراحية ومتابعة طويلة المدى.',

    // Articles
    'articles.title': 'أحدث المقالات',
    'articles.description': 'ابق على اطلاع بأحدث المقالات الطبية والرؤى في جراحة الأطفال.',
    'articles.readMore': 'اقرأ المزيد',
    'articles.article1.title': 'فهم جراحة الأطفال: دليل للوالدين',
    'articles.article1.excerpt': 'تعرف على ما يمكن توقعه عندما يحتاج طفلك إلى جراحة وكيفية الاستعداد...',
    'articles.article1.date': '١٥ مارس ٢٠٢٤',
    'articles.article2.title': 'حالات جراحة الأطفال الشائعة',
    'articles.article2.excerpt': 'نظرة عامة على الحالات الجراحية التي نواجهها بشكل متكرر في الأطفال...',
    'articles.article2.date': '١٠ مارس ٢٠٢٤',
    'articles.article3.title': 'التطورات في الجراحة قليلة التوغل',
    'articles.article3.excerpt': 'استكشاف أحدث التطورات في تقنيات جراحة الأطفال...',
    'articles.article3.date': '٥ مارس ٢٠٢٤',
    'articles.article4.title': 'التطورات في الجراحة قليلة التوغل',
    'articles.article4.excerpt': 'استكشاف أحدث التطورات في تقنيات جراحة الأطفال...',
    'articles.article4.date': '٥ مارس ٢٠٢٤',
    'articles.article5.title': 'التطورات في الجراحة قليلة التوغل',
    'articles.article5.excerpt': 'استكشاف أحدث التطورات في تقنيات جراحة الأطفال...',
    'articles.article5.date': '٥ مارس ٢٠٢٤',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.description': 'تواصل معنا للمواعيد أو أي استفسارات حول خدماتنا.',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info.title': 'معلومات الاتصال',
    'contact.info.location': 'الموقع',
    'contact.info.phone': 'الهاتف',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.hours': 'ساعات العمل',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};