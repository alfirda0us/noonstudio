import { Link } from "react-router-dom";
import { products } from "@/data/products";

const FiftyFiftySection = () => {
  const left = products[0];
  const right = products[1];

  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to={`/product/${left.id}`} className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={left.images[0]} 
                alt={left.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              {left.name}
            </h3>
            <p className="text-sm font-light text-foreground">
              Kaos harian yang rapi, nyaman, dan mudah dipadukan
            </p>
          </div>
        </div>

        <div>
          <Link to={`/product/${right.id}`} className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={right.images[0]} 
                alt={right.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              {right.name}
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