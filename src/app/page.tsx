import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgreementDocument from "@/components/AgreementDocument";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-slate-900 selection:text-white">
      <Header />

      <main className="flex-1 py-6 sm:py-10 px-3 sm:px-6">
        <Hero />

        <div className="mt-8 sm:mt-12">
          <AgreementDocument />
        </div>
      </main>

      <Footer />
    </div>
  );
}
