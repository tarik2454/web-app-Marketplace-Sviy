'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import { TlinksTitles, linksTitles } from './breadcrumbs_links_titles';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { Container } from '..';
import { twMerge } from 'tailwind-merge';

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator?: ReactNode;
  containerClasses?: string;
  linkClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumbs = ({
  homeElement,
  separator = (
    <span className="flex items-center justify-center w-[18px] h-[18px]">
      <SpriteSVG name="expand_right" />
    </span>
  ),
  containerClasses,
  linkClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  const items: TlinksTitles[] = pathNames.reduce(
    (acc: TlinksTitles[], path) => {
      const item = linksTitles.find(el => el.link === path);
      if (item) {
        return [...acc, item];
      }
      return acc;
    },
    []
  );

  return (
    <Container>
      <ul
        className={twMerge(
          `flex items-center mt-[21px] md:mt-[21px] xl:mt-[26px]`,
          containerClasses
        )}
      >
        <li className={`${linkClasses}`}>
          <Link href={'/'} className="hover:underline">
            {homeElement}
          </Link>
        </li>
        {pathNames.length > 0 && separator}
        {items.map(({ link, title }, index) => {
          const isLastItem = pathNames.length !== index + 1;
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          //   const itemLink = capitalizeLinks
          //     ? link[0].toUpperCase() + link.slice(1, link.length)
          //     : link;
          return (
            <React.Fragment key={index}>
              <li className={`${linkClasses}`}>
                {isLastItem ? (
                  <Link href={href} className="hover:underline">
                    {title}
                  </Link>
                ) : (
                  <span className={`text-[#1565C0] ${activeClasses}`}>
                    {title}
                  </span>
                )}
              </li>
              {isLastItem && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </Container>
  );
};

export default Breadcrumbs;
