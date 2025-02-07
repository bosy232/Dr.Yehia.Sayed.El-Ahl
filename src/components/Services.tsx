import React from 'react';
import { Stethoscope, Baby, Heart, Brain, Activity, Microscope } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: <Baby className="w-6 h-6" />,
      title: t('services.neonatal'),
      description: t('services.neonatal.desc')
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('services.minimally'),
      description: t('services.minimally.desc')
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: t('services.urology'),
      description: t('services.urology.desc')
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: t('services.emergency'),
      description: t('services.emergency.desc')
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: t('services.diagnostic'),
      description: t('services.diagnostic.desc')
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: t('services.followup'),
      description: t('services.followup.desc')
    }
  ];

  return (
    <section id="services" className="py-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-teal-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services