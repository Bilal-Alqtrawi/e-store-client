import { Card } from "@mui/material";
import Product from "./Product";

export default function Products({ products }) {
  return (
    <div className="products grid grid-cols-1 gap-5">
      {products.map((product) => (
        <article key={product.id}>
          <Card variant="outlined">
            <Product key={product.id} {...product} />
          </Card>
        </article>
      ))}
    </div>
  );
}
