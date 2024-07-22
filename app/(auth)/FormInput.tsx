type FormInputProps = {
  name: string;
  label: string;
  type?: string;
  onChange?: () => void;
};

function FormInput({ name, label, type }: FormInputProps) {
  return (
    <>
      <label htmlFor={name} className="text-sm mb-2">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        id={name}
        name={name}
        className="border border-gray-300 outline-gray-400 outline-offset-4 rounded-full px-4 py-2"
      />
    </>
  );
}

export default FormInput;
