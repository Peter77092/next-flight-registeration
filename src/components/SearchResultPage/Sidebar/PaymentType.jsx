import CheckboxComp from "./CheckboxComp";

const PaymentType = () => {
  return (
    <div className="flex flex-col gap-2 mt-8">
      <p className="font-semibold text-sm">Payment type</p>
      <CheckboxComp title='Reserve now, pay later' name='Reserve now, pay later' />
    </div>
  );
};

export default PaymentType;
