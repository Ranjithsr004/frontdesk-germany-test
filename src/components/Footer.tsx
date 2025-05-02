
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    const input = document.getElementById("email-input") as HTMLInputElement;
    if (input) input.value = "";
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">FrontDesk<span className="text-frontdesk-800"> Solutions</span></h3>
            <p className="text-frontdesk-100">
            {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-frontdesk-800 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-frontdesk-800 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-frontdesk-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-frontdesk-800 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quicklinks</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-frontdesk-800 transition-colors">{t('footer.home')}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-frontdesk-800 transition-colors">{t('footer.about')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-frontdesk-800 transition-colors">{t('footer.services')}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-frontdesk-800 transition-colors">{t('footer.contact')}</a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Unsere Leistungen</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-frontdesk-800 transition-colors">Visitor Management</a>
              </li>
              <li>
                <a href="#services" className="hover:text-frontdesk-800 transition-colors">Appointment Scheduling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-frontdesk-800 transition-colors">Staff Management</a>
              </li>
              <li>
                <a href="#services" className="hover:text-frontdesk-800 transition-colors">Security Solutions</a>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-frontdesk-100 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <Input
                id="email-input"
                type="email"
                placeholder="Your email"
                className="rounded-r-none bg-frontdesk-600 border-frontdesk-800 text-black placeholder:text-black"
                required
              />
              <Button type="submit" className="rounded-l-none bg-frontdesk-600 hover:bg-frontdesk-600">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-frontdesk-600 mt-10 pt-6 text-center text-sm text-frontdesk-800">
          <p>© {new Date().getFullYear()} FrontDesk Solutions. {t('footer.end')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
