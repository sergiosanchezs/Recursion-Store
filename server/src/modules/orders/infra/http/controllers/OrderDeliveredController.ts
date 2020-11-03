import UpdateOrderDeliveredService from '@modules/orders/services/UpdateOrderDeliveredService';
import { Request, Response } from 'express';

const orderDelivered = new UpdateOrderDeliveredService();

class OrderDeliveredController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: orderId } = req.params;
    const { delivered } = req.body;

    const order = await orderDelivered.execute({ orderId, delivered });

    return res.status(201).json(order);
  }
}

export default OrderDeliveredController;
