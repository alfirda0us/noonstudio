import earringsCollection from "@/assets/earrings-collection.png";
import linkBracelet from "@/assets/link-bracelet.png";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/kaos" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={earringsCollection} 
                alt="Kaos collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Essential Tees
            </h3>
            <p className="text-sm font-light text-foreground">
              Kaos polos dengan bahan premium dan potongan yang nyaman
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/hoodie" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={linkBracelet} 
                alt="Hoodie collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Cozy Hoodies
            </h3>
            <p className="text-sm font-light text-foreground">
              Hoodie hangat untuk tampilan casual yang tetap sopan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;