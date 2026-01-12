import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title="Піци"
              categoryId={1}
              items={[
                {
                  id: 1,
                  name: "Маргарита",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                   {
                  id: 2,
                  name: "Маргарита",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                   {
                  id: 3,
                  name: "Маргарита",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                   {
                  id: 4,
                  name: "Маргарита",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                   {
                  id: 5,
                  name: "Маргарита",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                   {
                  id: 6,
                  name: "Маргарита",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
              ]}
              
            />
                  <ProductsGroupList
              title="Сніданки"
               categoryId={2}
              items={[
                {
                  id: 1,
                  name: "Маргарита1",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                   {
                  id: 2,
                  name: "Маргарита2",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                   {
                  id: 3,
                  name: "Маргарита3",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                   {
                  id: 4,
                  name: "Маргарита4",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                   {
                  id: 5,
                  name: "Маргарита",
                  imageUrl: "/images/pizza-1.png",
                  items: [{ price: 99 }],
                },
                
                
                 
              ]}
             
            />
          </div>
        </div>
      </Container>
    </>
  );
}
