import { Breadcrumbs } from '@/shared/components';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function Page() {
  return (
    <main className="pt-80">
      <Breadcrumbs
        homeElement={<span>Головна</span>}
        separator={<SpriteSVG name="expand_right" />}
        capitalizeLinks
      />
    </main>
  );
}
