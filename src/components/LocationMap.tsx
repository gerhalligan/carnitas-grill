import { Card } from "@/components/ui/card";

const LocationMap = () => {
  return (
    <Card className="w-full h-[400px] overflow-hidden">
      <iframe
        title="Carnitas Location"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0679167787405!2d-122.41941658468204!3d37.77492927975882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sHayes+Valley%2C+San+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1523456789012"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </Card>
  );
};

export default LocationMap;