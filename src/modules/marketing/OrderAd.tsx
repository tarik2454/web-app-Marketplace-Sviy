'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormInput, OrangeButton } from '@/shared/components';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';

type Props = {
  closeModal?: () => void;
  closeForm?: () => void;
};

export default function AdOrder({ closeModal }: Props) {
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
    },
  });

  return (
    <div className="md:px-[25px] md:mt-[-20px]">
      <div className="flex flex-col gap-3 md:hidden">
        <span className=" text-xl text-gray-600">Зворотній звязок</span>
        <div className=" border-b-2 border-gray-600 mb-10 "></div>
      </div>
      <SectionTitle
        className="text-xl text-gray-900 font-['Lato'] sm:mb-6 md:text-xl md:font-['Lato'] xl:text-xl xl:font-['Lato'] xl:mb-6"
        name="Залиште свої контакти і ми з вами звяжимось"
      />
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
