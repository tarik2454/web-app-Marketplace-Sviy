import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Link from 'next/link';

export default function CatalogItem({
  categoryName,
}: {
  categoryName: string;
}) {
  return (
    <li className="max-w-[302px] bg-[white]">
      <Link
        href={'#'}
        className="flex flex-row justify-between items-center px-5 py-2.5 hover:bg-blue-200 focus:bg-blue-200 transition-all"
      >
        <p className="text-black text-base leading-relaxed">{categoryName}</p>

        <div className="">
          <SpriteSVG name="catalog-arrow" />
        </div>
      </Link>
    </li>
  );
}
