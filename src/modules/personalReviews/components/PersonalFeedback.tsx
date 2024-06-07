import { Dropdown, Pagination } from '@/shared/components';
import sort from '@/shared/data/personal-select-data';
import React from 'react';
import reviews from '../data/reviews-data';
import PersonalFeedbackList from './PersonalFeedbackList';
import ScreenSize from '@/shared/hooks/useMediaQuery';

import myFeedbackData from '@/modules/personalReviews/data/reviews-feedback-data';
import { StaticImageData } from 'next/image';

export default function PersonalFeedback() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  const itemsPerPage = isOnMobile ? 6 : isOnTablet ? 8 : 1;

  const renderItemLi = (item: {
    id: number;
    orderImage: StaticImageData;
    title: string;
    rating: number;
    date: string;
    reviewer: string;
    reviewDate: string;
    reviewStatus: boolean;
    reviewText: string;
  }) => <PersonalFeedbackList myFeedbackData={myFeedbackData} key={item.id} />;
  return (
    <div>
      <div className="w-full justify-end flex gap-10 mb-5 pt-8 md:pt-10 xl:pt-0">
        <Dropdown
          onChange={() => {}}
          options={reviews}
          placeholder="Всі відгуки"
          id={`novelties-${23}`}
          wrapperClassName="w-[166px] md:w-[193px]"
          menuClassName="!w-[193px]"
        />
        <Dropdown
          onChange={() => {}}
          options={sort}
          placeholder="Сортувати"
          id={`novelties-${23}`}
          wrapperClassName="w-[166px] md:w-[193px]"
          menuClassName="!w-[166px] md:!w-[193px]"
        />
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        array={myFeedbackData}
        styleUl={'flex flex-col gap-5 mb-5 md:mb-10'}
        renderItemLi={renderItemLi}
      />
    </div>
  );
}
