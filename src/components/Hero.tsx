import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  const handleAppointment = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="pt-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="relative bg-gradient-to-r from-teal-600 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://instagram.fcai19-2.fna.fbcdn.net/v/t39.30808-6/469048584_122095667786669502_3421624966712952486_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNjAweDE2MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AH64VP_8NCujYxbQz-70InSvF2l5J-pFTyd7b-FcWDrCpbEoCkwtlc8X8iJ5aKImD8&_nc_ohc=dIMsP50DGw4Q7kNvgFu5U6Y&_nc_gid=fb61b4df5e524855b08ffd8808e976a9&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzUxNTE5NDA0MDQ1MDYwNjcyNQ%3D%3D.3-ccb7-5&oh=00_AYDCHYet7XOp_Apfn6iAwFSdgeDa06Lh4-QOu2lmyUaHVQ&oe=67ABFA1F&_nc_sid=22de04"
                alt={t('hero.title')}
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-teal-100">
                {t('hero.subtitle')}
              </h2>
              <p className="text-lg mb-8 text-teal-50">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50 transition-colors"
                >
                  <Phone className={`w-5 h-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  {t('hero.contact')}
                </a>
                <button
                  onClick={handleAppointment}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-teal-700 transition-colors"
                >
                  <Calendar className={`w-5 h-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  {t('hero.appointment')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;