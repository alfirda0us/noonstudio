import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader 
            title="Cerita Kami" 
            subtitle="Perjalanan menghadirkan modest wear untuk generasi muda muslim"
          />
          
          <ContentSection>
            <ImageTextBlock
              image="/founders.png"
              imageAlt="Noon Studio team"
              title="Didirikan dengan Tujuan"
              content="Noon Studio lahir dari keinginan untuk menghadirkan pakaian muslim yang nyaman, modern, dan relevan bagi anak muda. Kami percaya bahwa berpakaian sopan tidak harus mengorbankan gaya. Nama 'Noon' terinspirasi dari huruf Arab ن (Nun) yang melambangkan awal, identitas, dan makna."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Warisan Kami">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Kualitas Premium</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Setiap produk Noon dibuat dengan bahan berkualitas tinggi yang nyaman dipakai seharian. Kami bekerja sama dengan produsen lokal terpercaya untuk memastikan setiap jahitan memenuhi standar kami yang tinggi.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Desain Bermakna</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desain kami sederhana namun berkarakter. Dengan warna-warna tenang dan detail yang tidak berlebihan, setiap produk Noon cocok untuk berbagai aktivitas—dari sekolah, ibadah, hingga kegiatan santai.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Nilai Kami">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Kenyamanan</h3>
                <p className="text-muted-foreground">
                  Pakaian yang nyaman adalah prioritas utama kami dalam setiap desain.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Kesederhanaan</h3>
                <p className="text-muted-foreground">
                  Desain yang bersih dan tidak berlebihan, cocok untuk berbagai kesempatan.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Relevansi</h3>
                <p className="text-muted-foreground">
                  Mengikuti tren namun tetap berpegang pada nilai-nilai kesopanan.
                </p>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurStory;