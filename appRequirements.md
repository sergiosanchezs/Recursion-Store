# All

- Make sure we are using celebrate correctly on every route ✅
- Correct status code in the controllers and services for (CRUD) ✅
- See a way to check multiform data with celebrate or another package ✅


# Reviews

- Return review field populated on get a single product route ✅
- Create a service to handdle the user interactions ✅
- The same user cannot like twice ✅
- The user cannot like and dislike at the same time ✅


# Orders

- Remove product quantity when a new order is created ✅
- Prevent the user to buy a color that has no quantity ✅
- The order must contain the totalPrice ✅
- The order was created by the user who is trying to modify ✅
- Modify orders Services to update in just one service ✅
- The user must be able to edit the order when it isn't sent ✅

<<<<<<< HEAD
=======
- Updating the shipping and billing address must be able to provide only one field ✅
- Update total, subTotal, quantities when products array is modified ✅
>>>>>>> master


# Products

- Cannot allow creating 2 products with the same name ✅
- Add / Update / Remove items to the product ✅
- Add / Update / Remove sizes to the item ✅
- Check if update has a body content else return another status code ✅
<<<<<<< HEAD

- Allow the Admin to set products images 🛑
- Make sure we can access the image 🛑
- Remember to set image as multpartform and not send it in the json body 🎯
=======
- Allow the Admin to set products images ✅
- Make sure we can access the image ✅
- Remember to set image as multpartform and not send it in the json body ✅
>>>>>>> master


# Users

- Make sure when create user not return password. ✅
- The user must have only one main address, if they don't select any, then the first one will be the main. ✅
- Create / Update / Delete a Route and Service to handle shippingAddresses ✅


# Payment

- Set a payment provider 🛑
- Set order status to in process while payment is not completed 🛑


# Coupom

- Create a coupom for discont in some specific products 🛑


# Last Updates

- should not return user populated on List Order By User ✅
- updateProfile not working when password is being updated ✅
- Array lenght on update product Images ✅
- On update images and save images from diskStorage ✅
- remove product images ✅

#

- Check the images sizes (GB) 🛑
- Make a middleware to ensure empty body on Avatar. 🛑
- Create repository interfaces to make the code adaptable to any other database provider 🛑
- Use dependency injection to make the code even more flexible 🛑
- Add createdAt and updatedAt to all the interfaces.
