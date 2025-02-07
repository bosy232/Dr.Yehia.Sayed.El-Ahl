import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('contact.form.title')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors"
              >
                {t('contact.form.submit')}
              </button>
              {submitted && (
                <div className="mt-4 p-4 bg-teal-100 text-teal-700 rounded-md">
                  {language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!'}
                </div>
              )}
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('contact.info.title')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                  <h4 className="text-lg font-medium text-gray-900">
                    {t('contact.info.location')}
                  </h4>
                  <p className="text-gray-600">New Cairo, Heliopolis, Nasr City</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-teal-600 mt-1" />
                <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                  <h4 className="text-lg font-medium text-gray-900">
                    {t('contact.info.phone')}
                  </h4>
                  <p className="text-gray-600" dir="ltr">01061204093</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-teal-600 mt-1" />
                <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                  <h4 className="text-lg font-medium text-gray-900">
                    {t('contact.info.email')}
                  </h4>
                  <p className="text-gray-600">contact@dryehia.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-teal-600 mt-1" />
                <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                  <h4 className="text-lg font-medium text-gray-900">
                    {t('contact.info.hours')}
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact