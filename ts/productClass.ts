class Product implements productInterface{
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    id: string;
  constructor(
    title: string,
    price: string,
    description: string,
    category: string,
    image: string,
    id: string
  ) {
    this.title=title
    this.price=price
    this.description=description
    this.category=category
    this.image=image
    this.id=id
  }
}
