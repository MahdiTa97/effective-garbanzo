import Image from "next/image";

interface Props {
  title: string;
  price: string;
  category: string;
  image: string;
  onClick: () => void;
  tooltip: string;
}

export const Product = ({ category, image, price, title, tooltip, onClick }: Props) => {
  return (
    <button onClick={onClick} className="card card-compact card-bordered hover:border-primary md:tooltip md:tooltip-bottom self-stretch w-40 md:w-full min-w-40" data-tip={tooltip}>
      <div className="card-body">
        <Image
          src={image}
          width={48}
          height={48}
          className="object-cover object-center w-36 h-36 self-center"
          alt={title}
        />
        <div>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-2">{title}</h2>
          <p className="mt-1">{price}</p>
        </div>
      </div>
    </button>
  )
}
