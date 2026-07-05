import { notFound } from "next/navigation";
import type { Product } from "@/src/types/product";
import CartControls from "@/src/components/Cart/CartControls";
import SafeImage from "@/src/components/Ui/SafeImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "detail product",
  description: "see etail foe ordering",
};

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const response = await fetch(`http://localhost:4000/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    notFound();
  }

  const product: Product = await response.json();

  return (
    <main className="mx-auto max-w-5xl p-8 bg-white mt-5 rounded-lg">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative aspect-square rounded-xl overflow-hidden border">
          <SafeImage
            src={product.image}
            alt={product.name}
            fill
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-black">{product.name}</h1>

          <p className="mt-4 text-2xl font-semibold text-gray-800">${product.price}</p>

          <div className="mt-8">
            <CartControls product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
