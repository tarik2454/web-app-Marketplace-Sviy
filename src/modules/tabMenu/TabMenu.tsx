'use client';

import { SetStateAction, useState } from 'react';
import { Container, Section, SectionTitle } from '@/shared/components';
import tabMenuData from './data/tab-menu-data';
import { DescriptionList, Reviews, ServicesList } from './components';

export default function TabMenu() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: SetStateAction<number>) => {
    setActiveTab(index);
  };

  const after = `after:content-[''] after:none after:w-full after:h-[1px] after:bg-gray-600`;

  return (
    <Section>
      <Container>
        <div>
          <ul className="flex gap-[2px] mb-6 md:mb-10 xl:mb-12">
            {tabMenuData.map((item, index) => (
              <li key={index} className={`text-center bg-white relative`}>
                <button
                  className={`text-sm md:text-xl leading-[1.4] md:leading-[1.6] w-full h-full px-5 md:px-6 py-[6px] text-gray-600 transition-all 
                  ${after} 
                  ${
                    activeTab === index
                      ? 'text-gray-900 bg-neutral-50 after:block'
                      : ''
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>

          <div>
            {activeTab === 0 && <DescriptionList />}
            {activeTab === 1 && <Reviews />}
            {activeTab === 2 && <ServicesList />}
          </div>
        </div>
      </Container>
    </Section>
  );
}
