import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3001/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.id);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="text-2xl font-bold mt-4">
        {product.name}
      </h1>

      <p className="text-gray-600 mt-2">
        ${product.price}
      </p>
    </div>
  );
}