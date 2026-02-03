import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black pt-8 pb-2 px-6 border-t border-[#e5e5e5] mt-48">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Brand - Left side */}
          <div>
            <h2 className="text-xl font-normal tracking-wide mb-4">NOON</h2>
            <p className="text-sm font-light text-black/70 leading-relaxed max-w-md mb-6">
              Modest wear untuk generasi muda muslim. Nyaman, modern, dan bernuansa Islami.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm font-light text-black/70">
              <div>
                <p className="font-normal text-black mb-1">Kunjungi Kami</p>
                <p>Jl. Kemang Raya No. 45</p>
                <p>Jakarta Selatan, 12730</p>
              </div>
              <div>
                <p className="font-normal text-black mb-1 mt-3">Kontak</p>
                <p>+62 812 3456 7890</p>
                <p>hello@noonmoslemwear.id</p>
              </div>
            </div>
          </div>

          {/* Link lists - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shop */}
            <div>
              <h4 className="text-sm font-normal mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/category/new-in" className="text-sm font-light text-black/70 hover:text-black transition-colors">New In</Link></li>
                <li><Link to="/category/kaos" className="text-sm font-light text-black/70 hover:text-black transition-colors">Kaos</Link></li>
                <li><Link to="/category/longsleeve" className="text-sm font-light text-black/70 hover:text-black transition-colors">Longsleeve</Link></li>
                <li><Link to="/category/hoodie" className="text-sm font-light text-black/70 hover:text-black transition-colors">Hoodie</Link></li>
                <li><Link to="/category/kemeja" className="text-sm font-light text-black/70 hover:text-black transition-colors">Kemeja</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-normal mb-4">Bantuan</h4>
              <ul className="space-y-2">
                <li><Link to="/about/size-guide" className="text-sm font-light text-black/70 hover:text-black transition-colors">Panduan Ukuran</Link></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Perawatan</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Pengembalian</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Pengiriman</a></li>
                <li><Link to="/about/customer-care" className="text-sm font-light text-black/70 hover:text-black transition-colors">Hubungi Kami</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-normal mb-4">Ikuti Kami</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">TikTok</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - edge to edge separator */}
      <div className="border-t border-[#e5e5e5] -mx-6 px-6 pt-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-light text-black mb-1 md:mb-0">
            © 2024 Noon Moslemwear. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;