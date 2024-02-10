'use client';

import { useState } from 'react';
import { Container, Section, SectionTitle } from '@/shared/components';
import tabMenuData from './data/tab-menu-data';
import descriptionData from './data/description-data';

export default function TabMenu() {
  const [activeTab, setActiveTab] = useState<string>('Опис');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Section className="w-full">
      <Container>
        <SectionTitle name="Tab Menu" />
        <div>
          <ul className="flex gap-[2px] mb-12">
            {tabMenuData.map((item, index) => (
              <li className="min-w-[193px]  text-center bg-white " key={index}>
                <button
                  className={`text-xl w-full h-full px-[61px] py-2 ${
                    activeTab === item.title ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick(item.title)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>

          <ul className="flex">
            {activeTab === 'Опис' && (
              <li className="">
                <div>
                  <div>
                    {descriptionData.map((item, index) => (
                      <p key={index}>{item.description}</p>
                    ))}
                  </div>
                </div>
              </li>
            )}
            {activeTab === 'Відгуки' && (
              <li className="">
                <div>
                  <p>Содержимое вкладки Best Sellers...</p>
                </div>
              </li>
            )}
            {activeTab === 'Оплата та доставка' && (
              <li className="">
                <div>
                  <p>Содержимое вкладки Top Rated...</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
