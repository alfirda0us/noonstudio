import { Link } from "react-router-dom";
import { products } from "@/data/products";

const OneThirdTwoThirdsSection = () => {
  const left = products[2];
  const right = products[3];

  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to={`/product/${left.id}`} className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
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
              Basic yang clean untuk gaya harian yang rapi
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to={`/product/${right.id}`} className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
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
              Aksen bermakna, tetap minimal dan elegan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;