class Product implements productInterface{
    title!: string;
    price!: string;
    description!: string;
    category!: string;
    image!: string;
    id!: string;
  constructor(
    title: string,
    price: string,
    description: string,
    category: string,
    image: string,
    id: string
  ) {
    title=title
    price=price
    description=description
    category=category
    image=image
    id=id
  }
}
