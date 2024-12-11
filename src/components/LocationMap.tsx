import { Card } from "@/components/ui/card";

const LocationMap = () => {
  return (
    <Card className="w-full h-[400px] overflow-hidden">
      <iframe
        title="Carnitas Location"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.6261945480394!2d-6.219483334665939!3d53.45924531097827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486710efb9d437a9%3A0x9d4370039b81badb!2sSwords%20Castle!5e1!3m2!1sen!2sie!4v1733921663928!5m2!1sen!2sie"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </Card>
  );
};

export default LocationMap;