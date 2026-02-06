import lookbook1 from "@/assets/lookbook-1.jpeg";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/9] mb-3 overflow-hidden">
        <img 
          src={lookbook1} 
          alt="Noon Studio lookbook" 
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="">
        <h2 className="text-sm font-normal text-foreground mb-1">
          New Collection
        </h2>
        <p className="text-sm font-light text-foreground">
          Kaos harian yang nyaman untuk gaya modest sehari-hari
        </p>
      </div>
    </section>
  );
};

export default LargeHero;