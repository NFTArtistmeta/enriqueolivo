import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedMenu />
    </div>
  );
};

export default Index;