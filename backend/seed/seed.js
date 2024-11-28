const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const OrderModel = require("../models/order.model");
const dotenv = require("dotenv");

dotenv.config();


const generateOrder = () => {
  const statuses = ["pending", "processing", "completed", "cancelled"];

  return {
    customerName: faker.person.fullName(),
    orderAmount: parseFloat((Math.random() * 1000 + 50).toFixed(2)),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    items: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => ({
      name: faker.commerce.productName(),
      quantity: Math.floor(Math.random() * 5) + 1,
      price: parseFloat((Math.random() * 200 + 10).toFixed(2)),
    })),
    createdAt: faker.date.between({
      from: new Date("2020-01-01"),
      to: new Date("2024-01-01"),
    }),
  };
};

const seedData = async () => {
  const uri = process.env.uri

  try {
    await mongoose.connect(uri);
    await OrderModel.deleteMany({});
    const orders = Array.from({ length: 10000 }, generateOrder);
    await OrderModel.insertMany(orders);
    console.log("Seeding completed!");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
