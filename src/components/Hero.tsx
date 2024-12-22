const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Experience Fine Dining
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Savor the artistry of our culinary masterpieces in an atmosphere of elegance
          </p>
          <button className="px-8 py-3 bg-[#722F37] text-white rounded-md hover:bg-[#8B383F] transition-colors text-lg">
            View Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;