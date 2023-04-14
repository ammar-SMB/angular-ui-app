
export class Order {
  id: number;
  orderDate: string;
  orderItems: OrderItems[];
  shippingAddress: ShippingAddress;
}

export class  OrderItems {
  id: number;
  productId: number;
  quantity: number;
  orderId: number;
}

export class ShippingAddress {
  id: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
  orderId: number;
}