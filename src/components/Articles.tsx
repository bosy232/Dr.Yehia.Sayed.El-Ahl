import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Articles = () => {
  const { t, language } = useLanguage();

  const articles = [
    {
      title: t('articles.article1.title'),
      excerpt: t('articles.article1.excerpt'),
      date: t('articles.article1.date'),
      image: 'https://instagram.fcai19-2.fna.fbcdn.net/v/t39.30808-6/473727516_122113710344669502_6070081336084431238_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNjAweDE2MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AGfutR461tcME3QuK97RE1UgLobh-NnGzHmAwPBCwO5KxBBOrCtEQjwTTp1k5lPo6U&_nc_ohc=QzG35Fp-D1UQ7kNvgGl3P2K&_nc_gid=47914761a0c141268fedea927dcebc90&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzU1MjY5MTc1NDkwODQ3ODQzOA%3D%3D.3-ccb7-5&oh=00_AYCWzVlslSx6DnwnaKUJD6QMeKJqqA0lvQbjv4hMOoQKDQ&oe=67AC24AA&_nc_sid=7a9f4b'
    },
    {
      title: t('articles.article2.title'),
      excerpt: t('articles.article2.excerpt'),
      date: t('articles.article2.date'),
      image: 'https://instagram.fcai19-2.fna.fbcdn.net/v/t39.30808-6/473286202_122112675080669502_2856023574045124548_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjgweDEyODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AGfutR461tcME3QuK97RE1UgLobh-NnGzHmAwPBCwO5KxBBOrCtEQjwTTp1k5lPo6U&_nc_ohc=wanvlTgPSGEQ7kNvgFitM1c&_nc_gid=47914761a0c141268fedea927dcebc90&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzU0NzgwMDU1NjQ2MDYyNDIzMA%3D%3D.3-ccb7-5&oh=00_AYBFKfYnNLGIYw15aQqJWc0AhgG3bU8i3ql5FvEqfrfwIg&oe=67AC17E6&_nc_sid=7a9f4b'
    },
    {
      title: t('articles.article3.title'),
      excerpt: t('articles.article3.excerpt'),
      date: t('articles.article3.date'),
      image: 'https://instagram.fcai19-2.fna.fbcdn.net/v/t39.30808-6/473728327_122113005782669502_7154062000884635214_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjgweDEyODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AGfutR461tcME3QuK97RE1UgLobh-NnGzHmAwPBCwO5KxBBOrCtEQjwTTp1k5lPo6U&_nc_ohc=BoO0Qe9xhycQ7kNvgE1Z1IK&_nc_gid=47914761a0c141268fedea927dcebc90&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzU0OTIwMjYwMTIzOTUyOTY0OQ%3D%3D.3-ccb7-5&oh=00_AYAc9CnkcU63WvyISRrhmBUmh2H2cd3Y6iQFCqFDlb-fSw&oe=67ABF790&_nc_sid=7a9f4b'
    },
     
    {
      title: t('articles.article4.title'),
      excerpt: t('articles.article4.excerpt'),
      date: t('articles.article4.date'),
      image: 'https://instagram.fcai19-2.fna.fbcdn.net/v/t39.30808-6/470176091_122106801872669502_1135739518765348934_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDAweDIwMDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AH64VP_8NCujYxbQz-70InSvF2l5J-pFTyd7b-FcWDrCpbEoCkwtlc8X8iJ5aKImD8&_nc_ohc=o0Nd8FmxnM8Q7kNvgGkYFuy&_nc_gid=fb61b4df5e524855b08ffd8808e976a9&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzUyMzcwNDU2NjE1NTc4MjExMQ%3D%3D.3-ccb7-5&oh=00_AYBmcTkAhkNW2YNabgZVVgAFHbmOSToYsvtezfuSucrXxg&oe=67AC063C&_nc_sid=22de04'
    },
    {
     title: t('articles.article5.title'),
      excerpt: t('articles.article5.excerpt'),
      date: t('articles.article5.date'),
      image: 'https://instagram.fcai19-2.fna.fbcdn.net/v/t39.30808-6/470153715_122104684406669502_1245362378228355242_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNjAweDE2MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AH64VP_8NCujYxbQz-70InSvF2l5J-pFTyd7b-FcWDrCpbEoCkwtlc8X8iJ5aKImD8&_nc_ohc=trX2Ogjhp1QQ7kNvgFnJNTw&_nc_gid=fb61b4df5e524855b08ffd8808e976a9&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzUyMTY1MDE3MzM3NjAyNjQzNA%3D%3D.3-ccb7-5&oh=00_AYDUF6uv86esjpCbIWuioI5A_RmaGexwUkoYiVv6T9VHpQ&oe=67AC018C&_nc_sid=22de04'
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('articles.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('articles.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-teal-600 mb-2">{article.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <button
                  onClick={() => console.log(`Reading article: ${article.title}`)}
                  className="inline-flex items-center text-teal-600 hover:text-teal-700"
                >
                  {t('articles.readMore')}
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles