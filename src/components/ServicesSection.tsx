
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard, Calendar, Users, Shield, Bell, LineChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  extraText: string;
}

const ServiceCard = ({ icon, title, description, extraText }: ServiceCardProps) => (
  <Card className="h-full bg-black transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
    <CardHeader>
      <div className="p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl text-frontdesk-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
    <CardDescription className="text-white text-base whitespace-pre-line">
      {description}
    </CardDescription>
    {extraText && (
  <div className="mt-4">
    <p className="text-base text-white">{extraText}</p>
  </div>
)}

    </CardContent>
    {/* <CardFooter>
      <Button 
        variant="outline" 
        className="text-frontdesk-600 border-frontdesk-800 bg-gray-950 w-full"
        onClick={() => {
          const contactSection = document.querySelector("#contact");
          contactSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Learn More
      </Button>
    </CardFooter> */}
  </Card>
);

const ServicesSection = () => {
    const { t } = useLanguage();
  
  const services = [
    {
      icon: <Clipboard className="h-8 w-8 text-frontdesk-600" />,
      title: 'services.title1',
      description: 'services.txt1',
      extraText: 'services.txt2',
    },
    {
      icon: <Calendar className="h-8 w-8 text-frontdesk-600" />,
      title: "services.title2",
      description: 'services.txt3',
      extraText: 'services.txt4',
    },
    {
      icon: <Users className="h-8 w-8 text-frontdesk-600" />,
      title: "services.title3",
      description: 'services.txt5',
      extraText: 'services.txt6',
    },
    {
      icon: <Shield className="h-8 w-8 text-frontdesk-600" />,
      title: "services.title4",
      description: 'services.txt7',
      extraText: 'services.txt8',
    },
    {
      icon: <Bell className="h-8 w-8 text-frontdesk-600" />,
      title: "services.title5",
      description: 'services.txt9',
      extraText: 'services.txt10',
    },
    {
      icon: <LineChart className="h-8 w-8 text-frontdesk-600" />,
      title: "services.title6",
      description: 'services.txt11',
      extraText: 'services.txt12',
    },
    {
      icon: <Clipboard className="h-8 w-8 text-frontdesk-600" />,
      title: "services.title7",
      description: 'services.txt13',
      extraText: 'services.txt14',
    },
    {
      icon: <Calendar className="h-8 w-8 text-frontdesk-600" />,
      title: "services.title8",
      description: 'services.txt15',
      extraText: 'services.txt16',
    },
    {
      icon: <Users className="h-8 w-8 text-frontdesk-600" />,
      title: "services.title9",
      description: 'services.txt17',
      extraText: 'services.txt18',
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-frontdesk-800 mb-4">
          {t('services.title')}
          </h2>
          <div className="w-20 h-1 bg-frontdesk-600 mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-6xl mx-auto">
          {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}>
              <ServiceCard 
                icon={service.icon}
                title={t(service.title)}
                description={t(service.description)}
                extraText={t(service.extraText)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
