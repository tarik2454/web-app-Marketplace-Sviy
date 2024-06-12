import { Field } from "formik";
import { useEffect, useState } from "react";

// type OrderChangeRecipientprops = {
//     formik: () => void
// }

export default function OrderChangeRecipient({ formik, onInputChange }: any) {
  const [isDisabled, setIsDisabled] = useState(false); 
  const [selectInput, ] = useState('');
  const [errorClassInput, ] = useState('border-blue-200');

  useEffect(() => {
    setIsDisabled(false); 
  }, []);

  return (
    <>
    <div></div>
      <div className='grid grid-cols-2 gap-5'>
        <div>   
          <h4 className="font-lora text-base">Ім&#39;я</h4>
          <div
            className={`bg-white flex pl-4 pr-4 pt-3 pb-3 items-center justify-between rounded-[20px] border-[1px] xl:min-w-[400px] md:min-w-[340px] sm:max-w-[170px] ${errorClassInput}`}
          >
            <div className="flex  basis-5/6">
              <Field
                className={`bg-white focus:outline-none basis-5/6 ${selectInput} `}
                type="text"
                name="firstName"
                disabled={isDisabled}
                value={formik.values.firstName} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    formik.handleChange(e); 
                    onInputChange(e.target.value); 
                  }}
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-lora text-base">Прізвище</h4>
          <div
            className={`bg-white flex pl-4 pr-4 pt-3 pb-3 items-center justify-between rounded-[20px] border-[1px] xl:min-w-[400px] md:min-w-[340px] sm:max-w-[170px] ${errorClassInput}`}
          >
            <div className="flex  basis-5/6">
              <Field
                className={`bg-white focus:outline-none basis-5/6 ${selectInput} `}
                type="text"
                name="lastName"
                disabled={isDisabled}
                value={formik.values.lastName}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <h4 className="font-lora text-base">По батькові</h4>
          <div
            className={`bg-white flex pl-4 pr-4 pt-3 pb-3 items-center justify-between rounded-[20px] border-[1px] xl:min-w-[400px] md:min-w-[340px] sm:max-w-[170px] ${errorClassInput}`}
          >
            <div className="flex gap-2 basis-5/6">
              <Field
                className={`bg-white focus:outline-none basis-5/6 ${selectInput} `}
                type="text"
                name="patronymic"
                disabled={isDisabled}
                value={formik.values.patronymic}
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-lora text-base">Телефон</h4>
          <div
            className={`bg-white flex pl-4 pr-4 pt-3 pb-3 items-center justify-between rounded-[20px] border-[1px] xl:min-w-[400px] md:min-w-[340px] sm:max-w-[170px] ${errorClassInput}`}
          >
            <div className="flex gap-2 basis-5/6">
              <Field
                className={`bg-white focus:outline-none basis-5/6 ${selectInput} `}
                type="text"
                name="phone"
                disabled={isDisabled}
                value={formik.values.phone} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
