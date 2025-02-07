import React from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t, language } = useLanguage();

  const menuItems = [
    { title: t('nav.home'), href: '#home' },
    { title: t('nav.about'), href: '#about' },
    { title: t('nav.services'), href: '#services' },
    { title: t('nav.articles'), href: '#articles' },
    { title: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-8 text-teal-600" src="https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/469013182_2031099320643595_8028337951237051753_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BDC_9JuJk1sQ7kNvgGvsbaf&_nc_oc=Adg0eAXcK2QZkRtC67obt8QUwu5UTzUJ2e0is5XhOMAzxLCDxNiOuCtVQ11cnWR0Ri4&_nc_zt=23&_nc_ht=scontent.fcai19-2.fna&_nc_gid=ArZosHJlAYsYvji2B2JVIUM&oh=00_AYByhciY7FT5ZNvlRkS8VNFM3krmKn2U6JlHLqQkH5JD-Q&oe=67AC1525"/>
            
            <span className="ml-2 text-xl font-semibold text-gray-800">
              {language === 'ar' ? 'د. يحيى الأهل' : 'Dr. Yehia El-Ahl'}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <LanguageToggle />
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar