import { Card } from "@/components/ui/card";

const LocationMap = () => {
  return (
    <Card className="w-full h-[400px] overflow-hidden">
      <iframe
        title="Carnitas Location"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://maps.app.goo.gl/zufxEbynb1HMrLYA6"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </Card>
  );
};

export default LocationMap;