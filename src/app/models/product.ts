export class Products{
    id: number=0;
    title: string='';
    price: number=0;
    description: string='';
    category: string='';
    image: string='';
    rating: Rating | undefined
       
  }

  export class Rating {
    rate: number=0;
    count: number=0
  }