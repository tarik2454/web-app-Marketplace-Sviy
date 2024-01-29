'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import { TlinksTitles, linksTitles } from './breadcrumbs_links_titles';

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumbs = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  const items: TlinksTitles[] = pathNames.reduce(
    (acc: TlinksTitles[], path) => {
      const item = linksTitles.find(el => el.link === path);
      if (item) {
        //   acc.push(item);
        return [...acc, item];
      }
      return acc;
    },
    []
  );

  return (
    <ul className={`flex items-center mb-10 ${containerClasses}`}>
      <li className={`${listClasses}`}>
        <Link href={'/'}>{homeElement}</Link>
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
            <li className={`${listClasses}`}>
              {isLastItem ? (
                <Link href={href}>{title}</Link>
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
  );
};

export default Breadcrumbs;
