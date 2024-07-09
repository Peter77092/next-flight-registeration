import CheckboxComp from "./CheckboxComp";

const Cancellation = () => {
  return (
    <div className="flex flex-col gap-2 mt-8">
      <p className="font-semibold text-sm">Property cancellation options</p>
      <CheckboxComp title='Fully refundable property' name='Fully refundable property' />
    </div>
  );
};

export default Cancellation;