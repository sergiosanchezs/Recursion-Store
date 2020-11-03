import UpdateOrderStatusService from '@modules/orders/services/UpdateOrderStatusService';
import { Request, Response } from 'express';

const ordersStatus = new UpdateOrderStatusService();

class OrderStatusController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: orderId } = req.params;
    const { status } = req.body;

    const order = await ordersStatus.execute({ orderId, status });

    return res.status(201).json(order);
  }
}

export default OrderStatusController;
