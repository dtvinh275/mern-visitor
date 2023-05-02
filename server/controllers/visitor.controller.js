import Visitor from "../mongodb/models/visitor.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const createVisitor = async (req, res) => {
  try {
    const { fullName, phoneNumber, city, property, company, plateNumber } =
      req.body;

    const newVisitor = await Visitor.create({
      fullName,
      phoneNumber,
      city,
      property,
      company,
      plateNumber,
    });

    res.status(200).json({ message: "Visitor created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createVisitor };
