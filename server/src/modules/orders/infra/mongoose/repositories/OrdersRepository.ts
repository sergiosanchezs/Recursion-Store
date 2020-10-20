import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import IUpdateOrderDeliveredDTO from '@modules/orders/dtos/IUpdateOrderDeliveredDTO';
import IUpdateOrderStatusDTO from '@modules/orders/dtos/IUpdateOrderStatusDTO';
import Order, { IOrder, User } from '../models/Order';

export default class OrdersRepository {
  public async findById(id: string): Promise<IOrder | null> {
    const order = await Order.findById(id).populate("products").populate('userId');

    return order;
  }

  public async findAllByUserId(id: string): Promise<IOrder[] | null> {
    const user = await User.findById(id);

    if (!user)
      return null;

    const orders = await Order.find({ userId: user });

    for (let i = 0; i < orders.length; i++)
      await orders[i].populate("products").populate("userId").execPopulate();

    return orders;
  }

  public async create({
    userId,
    status,
    delivered,
    products,
    shippingAddress,
    billingAddress,
  }: ICreateOrderDTO): Promise<IOrder> {
    const order = new Order({
      userId,
      status,
      delivered,
      products,
      shippingAddress,
      billingAddress,
    });

    await order.save();

    return order;
  }

  public async updateStatus({
    id,
    status,
  }: IUpdateOrderStatusDTO): Promise<IOrder | null> {
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });

    return order;
  }

  public async updateDelivered({
    id,
    delivered,
  }: IUpdateOrderDeliveredDTO): Promise<IOrder | null> {
    const order = await Order.findByIdAndUpdate(id, { delivered }, { new: true });

    return order;
  }
}