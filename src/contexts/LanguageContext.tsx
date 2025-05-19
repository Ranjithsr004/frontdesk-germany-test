import React, { createContext, useContext, useState } from 'react';

type Language = 'de' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  de: {
    // Navigation
    'nav.home': 'Heim',
    'nav.about': 'Über uns',
    'nav.services': 'Unsere Leistungen',
    'nav.contact': 'KoKontaktieren Sie uns',
    'nav.getStarted': 'Legen Sie los',
    'nav.language': 'Sprache',
    
    // Home Section
    'home.title': 'Optimieren Sie lhre',
    'home.span': 'Rezeptionsdienstleistung',
    'home.cta': 'Erlebnis',
    'home.ctn':"Ihr Partner für exzellenten Nachtrezeptionsdienst!",
    'home.btn1': "Entdecken Sie unsere Lösungen",
    'home.btn2': "Kontaktieren Sie uns",
    'home.btn3': "Kundenzufriedenheit",
    'home.btn4': "Unternehmen",


    // About Section
    'about.title': 'Über uns',
    'about.description': 'Als spezialisierter Personal Dienstleister für die Hotelbranche bieten wir maßgeschneiderte Lösungen für Ihre Personalbedürfnisse. Unser Fokus liegt auf der Bereitstellung von qualifizierten Mitarbeitern für den Nachtrezeptionsdienst, um sicherzustellen, dass Ihre Gäste auch in der Nacht den besten Service erhalten.',
    'about.img1': 'Über 10 Jahre Erfahrung mit Concierge Front-Desk-Lösungen',
    'about.head': 'Warum Concierge?',
    'about.subhead1': 'Erfahrung',
    'about.pnt1': 'Mit jahrelanger Erfahrung in der Hotelbranche kennen wir die spezifischen Anforderungen und Herausforderungen, die mit dem Nachtrezeptionsdienst verbunden sind.',
    'about.subhead2': 'Zuverlässigkeit',
    'about.pnt2': 'Wir legen großen Wert auf die Qualität unserer Mitarbeiter und garantieren, dass sie pünktlich und professionell arbeiten.',
    'about.subhead3': 'Kundenspezifische Lösungen',
    'about.pnt3': 'Wir arbeiten eng mit Ihnen zusammen, um Ihre individuellen Anforderungen zu verstehen und maßgeschneiderte Lösungen anzubieten.',

    // Services Section
    'services.title': 'Unsere Leistungen',
    'services.subtitle': 'Als spezialisierter Personal Dienstleister für die Hotelbranche bieten wir maßgeschneiderte Lösungen für Ihre Personalbedürfnisse. Unser Fokus liegt auf der Bereitstellung von qualifizierten Mitarbeitern für den Nachtrezeptionsdienst, um sicherzustellen, dass Ihre Gäste auch in der Nacht den besten Service erhalten.',
    'services.title1': 'Prozesskontrolle',
    'services.txt1': 'Überwachung und Optimierung: Kontinuierliche Überwachung des Nachtbetriebs zur Gewährleistung von Effizienz und Effektivität.',
    'services.txt2': 'Problemerkennung: Identifizierung und Lösung von Problemen in Echtzeit zur Minimierung von Störungen.',
    'services.title2': 'Beratung',
    'services.txt3': 'Strategische Beratung: Analyse Ihrer aktuellen Prozesse und Entwicklung maßgeschneiderter Strategien zur Verbesserung des Nachtbetriebs.',
    'services.txt4': 'Bewährte Methoden: Empfehlungen zur Umsetzung von bewährte Methoden im Nachtmanagement.',
    'services.title3': 'Personalauswahl',
    'services.txt5': 'Rekrutierung: Identifizierung und Einstellung qualifizierter Nachtmanager und Mitarbeiter.',
    'services.txt6': 'Qualifikationsbewertung: Gründliche Prüfung der Qualifikationen und Erfahrungen der Bewerber.',
    'services.title4': 'Personalwechsel',
    'services.txt7': 'Effiziente Übergänge: Unterstützung reibungsloser Schichtwechsel und Personalübergänge.',
    'services.txt8': 'Nachfolgeplanung: Entwicklung von Plänen zur Sicherstellung der kontinuierlichen Besetzung von Schlüsselpositionen.',
    'services.title5': 'Gehaltsabrechnung',
    'services.txt9': 'Präzise Abrechnung: Verwaltung der Gehaltsabrechnung für Nachtpersonal, einschließlich Überstunden und Nachtzuschlägen.',
    'services.txt10': 'Abrechnung: Sicherstellung der Einhaltung gesetzlicher Vorschriften und Tarifverträge.',
    'services.title6': 'Weiterbildung',
    'services.txt11': 'Schulungsprogramme: Entwicklung und Durchführung von Schulungen zur Verbesserung der Fähigkeiten und Kenntnisse des Nachtpersonals.',
    'services.txt12': 'Weiterbildung: Kontinuierliche Schulungsmöglichkeiten, um über die neuesten Entwicklungen und Technologien auf dem Laufenden zu bleiben.',
    'services.title7': 'Qualitätsüberwachung',
    'services.txt13': 'Leistungsbewertung: Regelmäßige Leistungsbewertungen des Nachtbetriebs zur Sicherstellung hoher Qualitätsstandards.',
    'services.txt14': 'Reklamationsmanagement: Implementierung von Feedbacksystemen zur kontinuierlichen Prozessverbesserung.',
    'services.title8': 'Schichtplanung',
    'services.txt15': 'Effiziente Planung: Erstellung von Schichtplänen, die den Anforderungen des Unternehmens entsprechen und gleichzeitig die Arbeitszeiten der Mitarbeiter optimieren.',
    'services.txt16': 'Flexibilität: Anpassung der Dienstpläne an unvorhergesehene Ereignisse.',
    'services.title9': 'Vorteile für Ihr Unternehmen',
    'services.txt17': 'Betriebseffizienz: Reduzierung von Ausfallzeiten und Steigerung der Produktivität in den Nachtstunden.',
    'services.txt18': 'Mitarbeiterzufriedenheit: Verbesserung der Arbeitsbedingungen und Förderung.',

    // Contact Section
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Haben Sie Fragen oder möchten Sie Ihren Rezeptionsdienstleistung optimieren? Kontaktieren Sie unser Team noch heute.',
    'contact.sendMessage': 'Senden Sie uns eine Nachricht',
    'contact.fullName': 'Vollständiger Name',
    'contact.fullNamePlaceholder': 'Ihr vollständiger Name',
    'contact.email': 'E-Mail-Adresse',
    'contact.emailPlaceholder': 'ihre@email.com',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Wie können wir Ihnen helfen?',
    'contact.sending': 'Wird gesendet...',
    'contact.send': 'Nachricht senden',
    'contact.contactInfo': 'Kontaktinformationen',
    'contact.emailLabel': 'E-Mail',
    'contact.phoneLabel': 'Telefon',
    'contact.webLabel': 'Website',
    'contact.office': 'Büro',
    'contact.businessHours': 'Geschäftszeiten',
    'contact.businessHoursDetails': 'Montag - Freitag: 9:00 - 18:00 Uhr\nSamstag: 10:00 - 14:00 Uhr\nSonntag: Geschlossen',

    //Footer Section
    'footer.desc':'Ihr Partner für exzellenten Nachtrezeptionsdienst!',
    'footer.home': 'Heim',
    'footer.about': 'Über uns',
    'footer.services': 'Unsere Leistungen',
    'footer.contact': 'KoKontaktieren Sie unstakt',
    'footer.end': 'Alle Rechte vorbehalten',

  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Our Services',
    'nav.contact': 'Contact Us',
    'nav.getStarted': 'Get Started',
    'nav.language': 'Language',
    
    // Home Section
    'home.title': 'Optimize your',
    'home.span': 'Reception service',
    'home.cta': 'Experience',
    'home.ctn':"Your partner for excellent night reception service!",
    'home.btn1': "Discover our solutions",
    'home.btn2': "Contact Us",
    'home.btn3': "Customer Satisfication",
    'home.btn4': "Enterprise",
    
    // About Section
    'about.title': 'About Us',
    'about.description': 'As a specialized staffing provider for the hotel industry, we offer customized solutions for your staffing needs. Our focus is on providing qualified night reception staff to ensure your guests receive the best possible service, even at night.',
    'about.img1': 'Over 10 years of experience with Concierge front desk solutions',
    'about.head': 'Why Concierge?',
    'about.subhead1': 'Experience',
    'about.pnt1': 'With years of experience in the hotel industry, we understand the specific requirements and challenges associated with night reception service.',
    'about.subhead2': 'Reliability',
    'about.pnt2': 'We place great importance on the quality of our staff and guarantee that they work punctually and professionally.',
    'about.subhead3': 'Customized solutions',
    'about.pnt3': 'We work closely with you to understand your individual requirements and offer customized solutions.',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'As a specialized staffing provider for the hotel industry, we offer customized solutions for your staffing needs. Our focus is on providing qualified night reception staff to ensure your guests receive the best service, even at night.',
    'services.title1': 'Process Control',
    'services.txt1': 'Monitoring and Optimization: Continuous monitoring of night operations to ensure efficiency and effectiveness.',
    'services.txt2': 'Problem Detection: Identification and resolution of problems in real time to minimize disruptions.',
    'services.title2': 'Consulting',
    'services.txt3': 'Strategic Consulting: Analysis of your current processes and development of customized strategies to improve night operations.',
    'services.txt4': 'Proven Methods: Recommendations for implementing proven methods in night management.',
    'services.title3': 'Staff Selection',
    'services.txt5': 'Recruitment: Identification and recruitment of qualified night managers and employees.',
    'services.txt6': 'Qualification Assessment: Thorough review of applicants qualifications and experience.',
    'services.title4': 'Staffing Changes',
    'services.txt7': 'Efficient Transitions: Supporting smooth shift changes and staff transitions.',
    'services.txt8': 'Succession Planning: Developing plans to ensure the continued staffing of key positions.',
    'services.title5': 'Payroll',
    'services.txt9': 'Accurate Payroll: Managing payroll for night staff, including overtime and night shift premiums.',
    'services.txt10': 'Invoice: Ensuring compliance with legal regulations and collective bargaining agreements.',
    'services.title6': 'Continuing Education',
    'services.txt11': 'Training Programs: Developing and delivering training to enhance the skills and knowledge of night staff.',
    'services.txt12': 'Continuing Education: Continuous training opportunities to stay up-to-date with the latest developments and technologies.',
    'services.title7': 'Quality Monitoring',
    'services.txt13': 'Performance Evaluation: Regular performance evaluations of night operations to ensure high quality standards.',
    'services.txt14': 'Complaints management: Implementing feedback systems for continuous process improvement.',
    'services.title8': 'Shift Planning',
    'services.txt15': 'Efficient Planning: Creating shift schedules that meet company needs while optimizing employee working hours.',
    'services.txt16': 'Flexibility: Adapting schedules to unforeseen events.',
    'services.title9': 'Benefits for your company',
    'services.txt17': 'Operational Efficiency: Reducing downtime and increasing productivity during night hours.',
    'services.txt18': 'Employee Satisfaction: Improving working conditions and promoting employee financial support.',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Do you have any questions or would you like to optimize reception services? Contact our team today.',
    'contact.sendMessage': 'Send us a Message',
    'contact.fullName': 'Full Name',
    'contact.fullNamePlaceholder': 'Your full name',
    'contact.email': 'Email Address',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'How can we help you?',
    'contact.sending': 'Sending...',
    'contact.send': 'Send Message',
    'contact.contactInfo': 'Contact Information',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.webLabel': 'Website',
    'contact.office': 'Office',
    'contact.businessHours': 'Business Hours',
    'contact.businessHoursDetails': 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed',

    //Footer Section
    'footer.desc':'Your partner for excellent night reception service!',
    'footer.home': 'Home',
    'footer.about': 'About Us',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact',
    'footer.end': 'All rights reserved',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

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
