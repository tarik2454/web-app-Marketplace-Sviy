import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import OrderImage from '@/shared/img/salo.jpeg';
import { OrangeButton, CloseButton, ArrowButton } from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { feedbackSchema } from '../helpers/validationSchemaFeedback';

type Order = {
  name: string;
  status: string;
  number: string;
  text: string;
  price: string;
  total: string;
  date: string;
  images: StaticImageData;
};

type MyOrderFeedbackProps = {
  isOpenModal: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  myOrderData: Order[];
};

export default function MyOrderFeedback({
  isOpenModal,
  handleCloseModal,
  handleOpenModal,
  myOrderData,
}: MyOrderFeedbackProps) {
  const [isOpenFeedback, setIsOpenFeedback] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOpenFeedback = (order: Order) => {
    setSelectedOrder(order);
    setIsOpenFeedback(true);
  };

  const handleCloseFeedback = () => {
    setIsOpenFeedback(false);
  };

  const handleSubmit = (values: any) => {
    console.log('Форма відправлена');
    console.log('рейтинг:', values.rating);
    console.log('коментар:', values.comment);
    // Логіка для відправки даних
    handleCloseFeedback();
  };

  return (
    <>
      {isOpenModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white px-5 py-6 rounded-2xl w-full mx-5 md:mx-10 md:px-10 md:py-15 md:max-w-[768px] ">
            <div className="flex justify-between">
              <h2 className="text-2xl leading-10 text-gray-900 ">
                Оберіть товар
              </h2>
              <CloseButton closeButtonClick={handleCloseModal} />
            </div>
            <div className="border-b-2 border-gray-300 w-full mb-5"></div>

            {myOrderData.map((orderItem, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-between mb-4 border-b border-gray-300 pb-4 md:mb-4 md:pb-2"
                >
                  <div className="flex items-center w-full">
                    <Image
                      className="w-[57px] h-[57px] rounded-2xl mr-4 md:mr-6 md:w-[84px] md:h-[81px]"
                      src={OrderImage}
                      alt="Order photo"
                    />
                    <div className="flex-grow md:flex justify-between items-baseline">
                      <div>
                        <p className="text-sm text-gray-900 mb-2">
                          {orderItem.name}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <OrangeButton
                          onClick={() => {
                            handleOpenFeedback(orderItem);
                            handleCloseModal();
                          }}
                          cssSettings="px-4 py-1 text-sm text-white md:px-8 md:py-2.5"
                        >
                          Залишити відгук
                        </OrangeButton>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      )}

      {isOpenFeedback && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white px-5 py-6 rounded-2xl w-full mx-5 md:mx-10 md:px-10 md:py-15 md:max-w-[768px] ">
            <div className="flex justify-between">
              <h2 className="text-2xl leading-10 text-gray-900 ">
                Написати відгук
              </h2>
              <CloseButton closeButtonClick={handleCloseFeedback} />
            </div>
            <div className="border-b-2 border-gray-300 w-full mb-5"></div>

            <Formik
              initialValues={{ rating: 0, comment: '' }}
              validationSchema={feedbackSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values }) => (
                <Form>
                  <p className="text-base leading-relaxed text-gray-900 mb-5">
                    Ваша оцінка товара
                  </p>
                  <ul className="flex gap-2 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <li
                        key={i}
                        onClick={() => setFieldValue('rating', i + 1)}
                      >
                        <div
                          className={`w-6 h-6 transition-all ${
                            i < values.rating
                              ? 'text-orange-500'
                              : 'text-gray-400'
                          } hover:text-orange-500`}
                        >
                          <SpriteSVG name="star" />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ErrorMessage
                    name="rating"
                    component="div"
                    className="text-red-600 text-sm mb-2"
                  />
                  <p className="text-base leading-relaxed text-gray-900 mb-2">
                    Ваш коментар
                  </p>
                  <Field
                    as="textarea"
                    name="comment"
                    className="w-full p-2 border border-gray-400 rounded-2xl mb-4"
                    rows={5}
                  />
                  <ErrorMessage
                    name="comment"
                    component="div"
                    className="text-red-600 text-sm mb-4"
                  />
                  <div className="flex flex-col items-center md:flex-row md:justify-center">
                    <OrangeButton
                      type="submit"
                      cssSettings="px-8 py-2.5 font-medium text-white mb-4 md:mr-6 md:mb-0"
                    >
                      Залишити відгук
                    </OrangeButton>
                    <ArrowButton
                      cssSettings="text-gray-900 mr-2 px-5 py-3 "
                      onClick={handleCloseFeedback}
                    >
                      <span className=""> Скасувати</span>
                    </ArrowButton>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}
