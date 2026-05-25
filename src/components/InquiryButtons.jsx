import { MessageCircle, Phone } from "lucide-react";
import { contact } from "../data/siteContent";

export default function InquiryButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a className="floating-action" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp inquiry">
        <MessageCircle size={21} />
      </a>
      <a className="floating-action secondary" href={`tel:+91${contact.phones[0].replace(/\s/g, "")}`} aria-label="Call ANSH INDUSTRIES">
        <Phone size={20} />
      </a>
    </div>
  );
}
