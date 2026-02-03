import founders from "@/assets/founders.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EditorialSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <h2 className="text-2xl font-normal text-foreground leading-tight md:text-xl">
            Berpakaian Sopan, Tetap Bergaya
          </h2>
          <p className="text-sm font-light text-foreground leading-relaxed">
            Noon Moslemwear hadir sebagai pilihan bagi generasi muda yang ingin berpakaian sopan tanpa meninggalkan gaya. Setiap produk dirancang dengan potongan yang nyaman, warna yang tenang, dan detail yang tidak berlebihan untuk menemani aktivitas harian—sekolah, ibadah, hingga kegiatan santai.
          </p>
          <Link to="/about/our-story" className="inline-flex items-center gap-1 text-sm font-light text-foreground hover:text-foreground/80 transition-colors duration-200">
            <span>Baca cerita kami</span>
            <ArrowRight size={12} />
          </Link>
        </div>
        
        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden">
            <img src={founders} alt="Noon Moslemwear team" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;