import { products } from "@/data/products";

const LargeHero = () => {
  const hero = products[3];

  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/9] mb-3 overflow-hidden">
        <img 
          src={hero.images[0]} 
          alt={hero.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h2 className="text-sm font-normal text-foreground mb-1">
          Kaos Noon
        </h2>
        <p className="text-sm font-light text-foreground">
          Potongan rapi, warna tenang, nyaman untuk aktivitas harian
        </p>
      </div>
    </section>
  );
};

export default LargeHero;