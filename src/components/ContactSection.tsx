
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t('contact.errorMessage') || "Please fill in all fields");
      return;
    }

    try {
      setIsSubmitting(true);
      
      const subject = `Contact Form Submission from ${formData.name}`;
      const body = `
        Name: ${formData.name}  
        Email: ${formData.email}
        Message:${formData.message}`;
      
      const mailtoLink = `mailto:info@concierge.com.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      toast.success(t('contact.thankYou'));
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(t('contact.errorMessage') || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-frontdesk-800 mb-4">
          {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-frontdesk-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('contact.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 animate-fade-in-up">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-frontdesk-800 mb-6">
              {t('contact.sendMessage')}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.fullName')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t('contact.fullNamePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('contact.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t('contact.messagePlaceholder')}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-frontdesk-600 hover:bg-frontdesk-800 text-black hover:text-white font-medium py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:w-1/2 animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-frontdesk-800 mb-6">
              {t('contact.contactInfo')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-frontdesk-600 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('contact.emailLabel')}</h4>
                    <p className="text-gray-600">info@concierge.com.de</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-frontdesk-600 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('contact.phoneLabel')}</h4>
                    <p className="text-gray-600">+4915206652072</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-frontdesk-600 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('contact.webLabel')}</h4>
                    <p className="text-gray-600">www.concierge.com.de</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-frontdesk-600 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('contact.office')}</h4>
                    <p className="text-gray-600">
                      Bodenseestraße 39, 78315<br />
                      Radolfzell am Bodensee,<br />
                      Germany
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-start">
                  <Clock className="h-6 w-6 text-frontdesk-600 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{t('contact.businessHours')}</h4>
                    <p className="text-gray-600">
                    {t('contact.businessHoursDetails')}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
