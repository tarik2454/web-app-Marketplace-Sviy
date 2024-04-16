'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormInput, OrangeButton } from '@/shared/components';

type Props = {
  marketingOrderType: 'page' | 'mobile';
  closeModal?: () => void;
  closeForm?: () => void;
};

export default function AdOrder({
  marketingOrderType,
  closeModal,
  closeForm,
}: Props) {
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      text: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Дані введені некоректно')
        .required('Введіть електронну пошту'),
      phone: Yup.string().required('Введіть телефон'),
      text: Yup.string().required('Введіть коментар'),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      if (closeModal) {
        closeModal();
      }
      if (closeForm) {
        closeForm();
        resetForm();
      }
    },
  });

  return (
    <div className="sm:mt-7 md:px-[30px] md:mt-[-20px] md:mb-[-40px]">
      <div className="flex flex-col gap-3 md:hidden">
        <span className=" text-xl text-gray-600">Зворотній звязок</span>
        <div className=" border-b-2 border-gray-600 mb-10 "></div>
      </div>

      <h2 className="text-xl mb-5">
        Залиште свої контакти і ми з вами звяжимось
      </h2>
      <form className="flex flex-col gap-6 ">
        <FormInput
          formik={formik}
          name="email"
          placeholder="Електронна пошта"
          label={'Електронна пошта'}
          inputType="email"
        />
        <FormInput
          formik={formik}
          name="phone"
          placeholder="+380 96 000 00 00"
          label={'Телефон'}
          inputType="text"
        />
        <div className="mb-5">
          <FormInput
            formik={formik}
            name="text"
            placeholder="Повідомлення"
            label={'Коментар'}
            inputType="textarea"
          />
        </div>
        <div className="w-28 text-white ">
          <OrangeButton onClick={formik.handleSubmit} type="submit">
            Надіслати
          </OrangeButton>
        </div>
      </form>
    </div>
  );
}
