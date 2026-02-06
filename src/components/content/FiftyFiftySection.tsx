import { Link } from "react-router-dom";
import lookbook2 from "@/assets/lookbook-2.jpeg";
import lookbook3 from "@/assets/lookbook-3.jpeg";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/kaos" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={lookbook2} 
                alt="Smile & Beautiful Tee lookbook" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Smile & Beautiful Tee
            </h3>
            <p className="text-sm font-light text-foreground">
              Kaos harian yang rapi, nyaman, dan mudah dipadukan
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/kaos" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={lookbook3} 
                alt="Collection lookbook" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Outdoor Vibes
            </h3>
            <p className="text-sm font-light text-foreground">
              Statement minimal yang tetap sopan dan clean
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;