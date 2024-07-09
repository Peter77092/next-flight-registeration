const FormatNumber = ({number}) => {
  
  const numericPrice = parseFloat(number);

  if (isNaN(numericPrice)) {
    return "Invalid price";
  }

  return numericPrice.toLocaleString();
};

export default FormatNumber;
