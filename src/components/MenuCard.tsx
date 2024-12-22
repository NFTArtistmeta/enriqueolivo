interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuCard = ({ name, description, price, image }: MenuCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif text-[#2A2826]">{name}</h3>
          <span className="text-[#722F37] font-semibold">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;