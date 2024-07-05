type Invoice = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total: number;
};

type RegisterData = {
  message: string | null;
  status: number | null;
  data: { id: string; email: string; password: string; password2: string };
};
type LoginData = {
  message: string | null;
  status: number | null;
  data: { email: string; password: string };
};
