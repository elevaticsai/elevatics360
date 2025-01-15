import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero />
        <Features />
      </div>
    </div>
  );
};

export default Index;