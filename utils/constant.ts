export const emailReg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const REGISTER_INPUTS = [
  {
    id: "email",
    name: "email",
    placeholder: "e.g. alex@test.com",
    type: "email",
    label: "Emails Address",
  },
  {
    id: "password",
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
  },
  {
    id: "password2",
    name: "password2",
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
  },
];

export const LOGIN_INPUTS = [
  {
    id: "email",
    name: "email",
    placeholder: "e.g. alex@test.com",
    type: "email",
    label: "Emails Address",
    validity: (val: string) => emailReg.test(val),
  },
  {
    id: "password",
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
    validity: (val: string) => val.trim().length > 8,
  },
];

export const BILL_FROM_INPUTS = [
  {
    id: "street-address",
    name: "street-address",
    label: "Street Address",
    placeholder: "Onion street 3 ",
    type: "text",
  },
  {
    id: "post-code",
    name: "post-code",
    label: "Post Code",
    placeholder: "00-001",
    type: "text",
  },
  {
    id: "city",
    name: "city",
    label: "City",
    placeholder: "Warsaw",
    type: "text",
  },
  {
    id: "country",
    name: "country",
    label: "Country",
    placeholder: "Poland",
    type: "text",
  },
];

export const BILL_TO_INPUTS = [
  {
    id: "client-name",
    name: "client-name",
    label: "Client's Name",
    placeholder: "Alex Grim",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    label: "Cleint's Email",
    placeholder: "alexgrim@mail.com",
    type: "email",
  },
  {
    id: "client-street-address",
    name: "street-address",
    label: "Street Address",
    placeholder: "Onion street 3 ",
    type: "text",
  },
  {
    id: "client-post-code",
    name: "post-code",
    label: "Post Code",
    placeholder: "00-001",
    type: "text",
  },
  {
    id: "client-city",
    name: "city",
    label: "City",
    placeholder: "Warsaw",
    type: "text",
  },
  {
    id: "client-country",
    name: "country",
    label: "Country",
    placeholder: "Poland",
    type: "text",
  },
];

export const ITEM_INPUTS = [
  {
    id: "item-name",
    name: "item-name",
    label: "Item Name",
    placeholder: "Banner Design",
    type: "text",
  },
  {
    id: "qty",
    name: "qty",
    label: "Qty.",
    placeholder: "0",
    type: "number",
  },
  {
    id: "price",
    name: "price",
    label: "Price",
    placeholder: "00.00",
    type: "number",
  },
];

export const PAYMENTS_INPUTS = [
  {
    id: "date",
    name: "date",
    label: "Invoice Date",
    placeholder: "21 August 2021",
    type: "date",
    default: new Date(),
  },
  {
    id: "terms",
    name: "terms",
    label: "Payment Terms",
    placeholder: "Net 30 Days",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Project Description",
    placeholder: "Graphic Design",
    type: "text",
  },
];
