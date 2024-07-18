export const initialState = {
    name: {
      value: "",
      required: true,
      description: "Please enter name",
      touched: false,
      status: ""
    },
    image: {
      value: "",
      required: true,
      description: "Please select image",
      touched: false,
      status: ""
    },
    status: {
      value: "",
      required: true,
      description: "Please select status",
      touched: false,
      status: ""
    },
    formStatus: "",
  }