import InputMask from 'react-input-mask';
import { FormikProps } from 'formik';

type Props = {
  name: string;
  label?: React.ReactNode;
  formik: FormikProps<any>;
};

const CardInput = ({ name, label, formik }: Props) => {
  const error = formik.touched[name] && formik.errors[name];

  return (
    <div className="relative h-auto flex flex-col w-full">
      {label && (
        <label htmlFor={name} className="mt-4 mb-2 text-gray-600">
          {label}
        </label>
      )}
      <div
        className={`flex p-4 gap-2 relative ${
          error ? 'border-red-600' : 'border-gray-300'
        } border-[1px] bg-white rounded-[20px]`}
      >
        <InputMask
          mask="9999 9999 9999 9999"
          placeholder="0000 0000 0000 0000"
          {...formik.getFieldProps(name)}
          className={`w-full outline-none ${error ? 'p-invalid' : ''}`}
          onChange={formik.handleChange}
        />
      </div>
      {error && <p className="error text-red-600">{String(error)}</p>}
    </div>
  );
};

export default CardInput;
