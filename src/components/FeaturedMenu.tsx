import MenuCard from "./MenuCard";

const FeaturedMenu = () => {
  const featuredDishes = [
    {
      name: "Truffle Risotto",
      description: "Creamy Arborio rice with black truffle and aged Parmesan",
      price: "$32",
      image: "https://images.unsplash.com/photo-1673421161165-25cb8797a988?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Seared Scallops",
      description: "Pan-seared scallops with cauliflower purée and crispy capers",
      price: "$38",
      image: "https://images.unsplash.com/photo-1532980193606-72cb2ea9d0c1?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Wagyu Steak",
      description: "Grade A5 Wagyu beef with roasted seasonal vegetables",
      price: "$65",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F1E8]" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#2A2826] mb-4">Featured Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our chef's carefully curated selection of signature dishes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <MenuCard key={dish.name} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;