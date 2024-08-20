// import React, { useEffect, useState } from 'react';
// import { FormInput } from '@/shared/components';
// import { Field, ErrorMessage } from 'formik';

// export default function RecipientSwitcher({ formik }: any) {
//   const [errorClassInput, setErrorClassInput] = useState('border-blue-200');
//   const [selectInput, setSelectInput] = useState('');

//   useEffect(() => {
//     if (formik && formik.touched && formik.errors) {
//       setErrorClassInput(
//         formik.errors.customer && formik.touched.customer
//           ? 'border-red-800'
//           : 'border-blue-200'
//       );
//     }
//   }, [formik]);

//   return (
//     <form>
//       <div className="flex mb-4">
//         <div className="">
//           <span>Прізвище</span>
//           <div
//             className={`bg-white pl-4 pr-4 pt-3 pb-3 rounded-[20px] border-[1px] xl:mr-10 xl:w-[400px] md:max-w-[700px] sm:max-w-[343px] ${errorClassInput}`}
//           >
//             <FormInput
//               formik={formik}
//               name="full_name"
//               label={'Ваше ім’я та призвище'}
//               inputType="text"
//             />
//             <ErrorMessage
//               name="customer"
//               component="div"
//               className="text-red-600"
//             />
//           </div>
//         </div>
//         <div className="">
//           <span>Ім`я</span>
//           <div
//             className={`bg-white pl-4 pr-4 pt-3 pb-3 rounded-[20px] border-[1px] xl:w-[400px] md:max-w-[700px] sm:max-w-[343px] ${errorClassInput}`}
//           >
//             <FormInput
//               formik={formik}
//               name="full_name"
//               label={'Ваше ім’я та призвище'}
//               inputType="text"
//             />
//             <ErrorMessage
//               name="customer"
//               component="div"
//               className="text-red-600"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="">
//           <span>По-батькові</span>
//           <div
//             className={`bg-white pl-4 pr-4 pt-3 pb-3 rounded-[20px] border-[1px] xl:mr-10 xl:w-[400px] md:max-w-[700px] sm:max-w-[343px] ${errorClassInput}`}
//           >
//             <FormInput
//               formik={formik}
//               name="full_name"
//               label={'Ваше ім’я та призвище'}
//               inputType="text"
//             />
//             <ErrorMessage
//               name="customer"
//               component="div"
//               className="text-red-600"
//             />
//           </div>
//         </div>
//         <div>
//           <span>Телефон</span>
//           <div
//             className={`bg-white pl-4 pr-4 pt-3 pb-3 rounded-[20px] border-[1px] xl:w-[400px] md:max-w-[700px] sm:max-w-[343px] ${errorClassInput}`}
//           >
//             <FormInput
//               formik={formik}
//               name="phone"
//               label={'Телефон'}
//               inputType="tel"
//             />
//             <ErrorMessage
//               name="customer"
//               component="div"
//               className="text-red-600"
//             />
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }

import React, { useEffect, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { FormInput } from '@/shared/components';

export default function RecipientSwitcher({ formik }: any) {
  const [errorClassInput, setErrorClassInput] = useState('border-blue-200');
  // const [selectInput, setSelectInput] = useState('');

  return (
    <form>
      <div className="flex mb-4">
        <div className="">
          <span>Прізвище</span>
          <div
            className={`bg-white pl-4 pr-4 pt-3 pb-3 rounded-[20px] border-[1px] xl:mr-10 xl:w-[400px] md:max-w-[700px] sm:max-w-[343px] ${errorClassInput}`}
          >
            <FormInput
              formik={formik}
              name="name"
              label={'Ваше ім’я та призвище'}
              inputType="text"
            />
          </div>
        </div>
        <div className="">
          <span>Ім`я</span>
          <div
            className={`bg-white pl-4 pr-4 pt-3 pb-3 rounded-[20px] border-[1px] xl:w-[400px] md:max-w-[700px] sm:max-w-[343px] ${errorClassInput}`}
          >
            <FormInput
              formik={formik}
              name="name"
              label={'Ваше ім’я та призвище'}
              inputType="text"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="">
          <span>По-батькові</span>
          <div
            className={`bg-white pl-4 pr-4 pt-3 pb-3 rounded-[20px] border-[1px] xl:mr-10 xl:w-[400px] md:max-w-[700px] sm:max-w-[343px] ${errorClassInput}`}
          >
            <FormInput
              formik={formik}
              name="name"
              label={'Ваше ім’я та призвище'}
              inputType="text"
            />
          </div>
        </div>
        <div>
          <span>Телефон</span>
          <div
            className={`bg-white pl-4 pr-4 pt-3 pb-3 rounded-[20px] border-[1px] xl:w-[400px] md:max-w-[700px] sm:max-w-[343px] ${errorClassInput}`}
          >
            <FormInput
              formik={formik}
              name="phone"
              label={'Телефон'}
              inputType="tel"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
