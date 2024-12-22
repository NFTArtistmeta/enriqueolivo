import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-[#722F37]">Gusto</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-[#2A2826] hover:text-[#722F37] transition-colors">Menu</a>
            <a href="#about" className="text-[#2A2826] hover:text-[#722F37] transition-colors">About</a>
            <a href="#contact" className="text-[#2A2826] hover:text-[#722F37] transition-colors">Contact</a>
            <Button className="bg-[#722F37] hover:bg-[#8B383F] text-white">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;