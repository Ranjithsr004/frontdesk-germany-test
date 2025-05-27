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
    'nav.contact': 'Kontaktieren Sie uns',
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
    'about.description': 'Als spezialisierter Personaldienstleister für die Hotelbranche bieten wir individuelle und passgenaue Lösungen für Ihren Personalbedarf. Unser Schwerpunkt liegt auf der Vermittlung qualifizierter Mitarbeitender für den Nachtrezeptionsdienst – damit Ihre Gäste auch in den Nachtstunden professionell betreut und bestens umsorgt werden.',
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
    'services.subtitle': 'Als spezialisierter Personaldienstleister für die Hotelbranche bieten wir individuelle und passgenaue Lösungen für Ihren Personalbedarf. Unser Schwerpunkt liegt auf der Vermittlung qualifizierter Mitarbeitender für den Nachtrezeptionsdienst – damit Ihre Gäste auch in den Nachtstunden professionell betreut und bestens umsorgt werden.',
    'services.title1': 'Prozesskontrolle',
    'services.txt1': 'Überwachung und Optimierung: Kontinuierliche Überwachung des Nachtbetriebs zur Gewährleistung von Effizienz und Effektivität.',
    'services.txt2': 'Problemerkennung: Identifizierung und Lösung von Problemen in Echtzeit zur Minimierung von Störungen.',
    'services.title2': 'Beratung',
    'services.txt3': 'Strategische Beratung: Analyse Ihrer bestehenden Abläufe und Entwicklung individueller Strategien zur Optimierung Ihres Nachtbetriebs.',
    'services.txt4': 'Bewährte Methoden: Empfehlungen zur Implementierung erprobter und erfolgreicher Methoden im Bereich des Nachtmanagements.',
    'services.title3': 'Personalauswahl',
    'services.txt5': 'Rekrutierung: Gezielte Identifikation und Einstellung qualifizierter Nachtmanagerinnen und -manager sowie weiterer Mitarbeitender für den Nachtdienst.',
    'services.txt6': 'Qualifikationsbewertung: Sorgfältige Prüfung der fachlichen Eignung, beruflichen Erfahrungen und persönlichen Kompetenzen der Bewerberinnen und Bewerber.',
    'services.title4': 'Personalwechsel',
    'services.txt7': 'Effiziente Übergänge: Unterstützung bei der reibungslosen Gestaltung von Schichtwechseln und Personalübergängen zur Sicherstellung eines störungsfreien Betriebsablaufs.',
    'services.txt8': 'Nachfolgeplanung: Erarbeitung strategischer Konzepte zur nachhaltigen Besetzung von Schlüsselpositionen und Sicherstellung der personellen Kontinuität.',
    'services.title5': 'Gehaltsabrechnung',
    'services.txt9': 'Präzise Abrechnung: Zuverlässige Verwaltung der Gehaltsabrechnungen für Nachtpersonal unter Berücksichtigung von Überstunden, Nachtzuschlägen und individuellen Vereinbarungen.',
    'services.txt10': 'Rechtskonforme Abwicklung: Sicherstellung der Einhaltung aller geltenden gesetzlichen Vorgaben sowie relevanter Tarif- und Arbeitsverträge.',
    'services.title6': 'Weiterbildung',
    'services.txt11': 'Schulungsprogramme: Konzeption und Durchführung gezielter Trainingsmaßnahmen zur Förderung der fachlichen und persönlichen Kompetenzen des Nachtpersonals.',
    'services.txt12': 'Kontinuierliche Weiterbildung: Laufende Qualifizierungsangebote, um Mitarbeitende über aktuelle Entwicklungen, gesetzliche Änderungen und technologische Neuerungen auf dem neuesten Stand zu halten.',
    'services.title7': 'Qualitätsüberwachung',
    'services.txt13': 'Leistungsbewertung: Regelmäßige Evaluierung der Arbeitsabläufe und Services im Nachtbetrieb zur Sicherstellung gleichbleibend hoher Qualitätsstandards.',
    'services.txt14': 'Reklamationsmanagement: Einführung strukturierter Feedback- und Beschwerdesysteme zur systematischen Analyse und Optimierung interner Prozesse.',
    'services.title8': 'Schichtplanung',
    'services.txt15': 'Effiziente Planung: Erstellung bedarfsgerechter Schichtpläne, die sowohl den betrieblichen Anforderungen als auch den arbeitszeitrechtlichen Vorgaben und Mitarbeiterbedürfnissen gerecht werden.',
    'services.txt16': 'Flexible Anpassung: Dynamische Reaktion auf kurzfristige Veränderungen durch flexible Dienstplangestaltung und zuverlässige Personalverfügbarkeit.',
    'services.title9': 'Vorteile für Ihr Unternehmen',
    'services.txt17': 'Betriebseffizienz: Minimierung von Ausfallzeiten und spürbare Steigerung der Produktivität während der Nachtstunden durch professionelles Nachtmanagement.',
    'services.txt18': 'Mitarbeiterzufriedenheit: Optimierung der Arbeitsbedingungen, gezielte Förderung und höhere Motivation Ihrer Mitarbeitenden für eine nachhaltige Personalbindung.',

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
    'contact.thankYou': 'Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns in Kürze mit Ihnen in Verbindung setzen...',
    'contact.error': 'Technical error',

    //Footer Section
    'footer.desc':'Ihr Partner für exzellenten Nachtrezeptionsdienst!',
    'footer.home': 'Heim',
    'footer.about': 'Über uns',
    'footer.services': 'Unsere Leistungen',
    'footer.txt1': 'Concierge ist eine Sparte der',
    'footer.txt2': 'Ayyappa Innovations',
    'footer.contact': 'Kontaktieren Sie uns',
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
    'services.txt3': 'Strategic Consulting: Analysis of your existing processes and development of customized strategies to optimize your night operations.',
    'services.txt4': 'Proven Methods: Recommendations for implementing proven and successful methods in night management.',
    'services.title3': 'Staff Selection',
    'services.txt5': 'Recruitment: Targeted identification and hiring of qualified night managers and other night shift employees.',
    'services.txt6': 'Qualification Assessment: Careful examination of the professional suitability, professional experience, and personal skills of the applicants.',
    'services.title4': 'Staffing Changes',
    'services.txt7': 'Efficient Transitions: Support in the smooth organization of shift changes and staff transitions to ensure smooth operations.',
    'services.txt8': 'Succession Planning: Development of strategic concepts for the sustainable filling of key positions and ensuring personnel continuity.',
    'services.title5': 'Payroll',
    'services.txt9': 'Precise payroll: Reliable management of payroll for night staff, taking into account overtime, night shift bonuses, and individual agreements.',
    'services.txt10': 'Legally compliant processing: Ensuring compliance with all applicable legal requirements as well as relevant collective agreements and employment contracts.',
    'services.title6': 'Continuing Education',
    'services.txt11': 'Training Programs: Design and implementation of targeted training measures to promote the professional and personal skills of night staff.',
    'services.txt12': 'Continuous Education: Ongoing training opportunities to keep employees up-to-date on current developments, legal changes, and technological innovations.',
    'services.title7': 'Quality Monitoring',
    'services.txt13': 'Performance Evaluation: Regular evaluation of workflows and services during night operations to ensure consistently high quality standards.',
    'services.txt14': 'Complaints management: Introduction of structured feedback and complaint systems for the systematic analysis and optimization of internal processes.',
    'services.title8': 'Shift Planning',
    'services.txt15': 'Efficient Planning: Creation of needs-based shift plans that meet both operational requirements and working time regulations and employee needs.',
    'services.txt16': 'Flexible Adaptation: Dynamic response to short-term changes through flexible scheduling and reliable staff availability.',
    'services.title9': 'Benefits for your company',
    'services.txt17': 'Operational Efficiency: Minimization of downtime and a noticeable increase in productivity during night hours through professional night management.',
    'services.txt18': 'Employee Satisfaction: Optimization of working conditions, targeted development, and increased motivation of your employees for sustainable staff retention.',
    
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
    'contact.thankYou': 'Thank you for reaching us, we will contact you shortly...',
    'contact.error': 'Technical error',

    //Footer Section
    'footer.desc':'Your partner for excellent night reception service!',
    'footer.home': 'Home',
    'footer.about': 'About Us',
    'footer.services': 'Our Services',
    'footer.txt1': 'Concierge is a division of',
    'footer.txt2': 'Ayyappa Innovations',
    'footer.contact': 'Contact Us',
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
