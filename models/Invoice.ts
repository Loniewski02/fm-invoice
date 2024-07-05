import mongoose, { Schema, model, models } from "mongoose";

const InvoiceShema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    invoices: [
      {
        id: { type: String },
        createdAt: { type: Date, default: Date.now },
        paymentDue: { type: Date },
        description: { type: String },
        paymentsTerms: { type: Number },
        clientName: { type: String },
        clientEmail: { type: String },
        status: { type: String },
        senderAddress: {
          street: { type: String },
          city: { type: String },
          postCode: { type: String },
          country: { type: String },
        },
        clientAddress: {
          street: { type: String },
          city: { type: String },
          postCode: { type: String },
          country: { type: String },
        },
        items: [
          {
            name: { type: String },
            quantity: { type: Number },
            price: { type: Number },
            total: { type: Number },
          },
        ],
        total: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Invoice = models.Invoice || model("Invoice", InvoiceShema, "invoices");
export default Invoice;
