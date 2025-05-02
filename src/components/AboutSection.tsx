
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-frontdesk-800 mb-4">
          {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-frontdesk-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-6xl mx-auto">
          {t('about.description')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
            <div className="relative">
              <img
                src="./img2.jpg"
                alt="Our Team"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-frontdesk-800 rounded-lg p-6 shadow-lg hidden md:block">
                <p className="text-white font-medium text-lg">
                {t('about.img1')}
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-16 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-frontdesk-800 mb-6">
            {t('about.head')}
            </h3>
            {/* <p className="text-lg text-gray-700 mb-8">
              At FrontDesk Nexus, we're committed to revolutionizing how businesses
              handle front desk operations. Our cutting-edge solutions streamline
              workflows, enhance visitor experiences, and provide unmatched security
              and efficiency.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-frontdesk-800 mb-6">
              Our Values
            </h3> */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-frontdesk-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800"> {t('about.subhead1')}</h4>
                  <p className="text-gray-600">
                  {t('about.pnt1')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-frontdesk-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{t('about.subhead2')}</h4>
                  <p className="text-gray-600">
                  {t('about.pnt2')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-frontdesk-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{t('about.subhead3')}</h4>
                  <p className="text-gray-600">
                  {t('about.pnt3')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
