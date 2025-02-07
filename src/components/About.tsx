import React from 'react';
import { Award, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  const qualifications = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: t('about.education'),
      items: language === 'en' ? [
        'Fellowship of the Royal College of Surgeons of England',
        'Egyptian Fellowship in Pediatric Surgery',
        'Advanced Training in Pediatric Surgery'
      ] : [
        'زمالة الكلية الملكية للجراحين في إنجلترا',
        'الزمالة المصرية في جراحة الأطفال',
        'تدريب متقدم في جراحة الأطفال'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('about.memberships'),
      items: language === 'en' ? [
        'Royal College of Surgeons of England',
        'Egyptian Society of Pediatric Surgeons',
        'International Society for Congenital Anomalies of the Urinary Tract'
      ] : [
        'الكلية الملكية للجراحين في إنجلترا',
        'الجمعية المصرية لجراحي الأطفال',
        'الجمعية الدولية للتشوهات الخلقية في المسالك البولية'
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t('about.specializations'),
      items: language === 'en' ? [
        'Minimally Invasive Surgery',
        'Pediatric Urology',
        'Neonatal Surgery'
      ] : [
        'الجراحة قليلة التوغل',
        'جراحة المسالك البولية للأطفال',
        'جراحة حديثي الولادة'
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {qualifications.map((qual, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                  {qual.icon}
                </div>
                <h3 className={`text-xl font-semibold text-gray-900 ${language === 'ar' ? 'mr-3' : 'ml-3'}`}>
                  {qual.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {qual.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className={`${language === 'ar' ? 'ml-2' : 'mr-2'}`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About