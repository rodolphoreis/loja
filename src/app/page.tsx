import Image from "next/image";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  descripiton: string | null;
  price: number | null;
};

const getProducts = async (): Promise<Product[]> => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      descripiton: product.description,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : null,
    };
  });
};

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="w-full h-screen">
      <div className="w-full max-w-[1200px] mx-auto h-screen items-center flex justify-center">
        <Carousel className="mt-[-80px] flex mx-auto w-[80%] h-full items-center justify-center">
          <CarouselContent className="flex w-full h-full">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/3 sm:basis-1/2 basis-full flex justify-center"
              >
                <div className="text-center">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-auto"
                    width={200}
                    height={200}
                  />
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p>{product.descripiton}</p>
                  <p className="text-lg">
                    {product.price ? `$${product.price}` : "N/A"}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
