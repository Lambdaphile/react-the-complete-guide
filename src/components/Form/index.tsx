import FormInput from './FormInput';
import FormLabel from './FormLabel';

function Form({
  children,
  onSubmit,
}: {
  children: JSX.Element[];
  onSubmit: (event: any) => void;
}) {
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.Input = FormInput;
Form.Label = FormLabel;

export default Form;
