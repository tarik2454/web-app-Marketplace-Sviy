import { SpriteSVG } from '@/shared/img/SpriteSVG';

export default function Cabinet() {
  return (
    <div className="flex gap-4 mt-[80px] mb-[124px]">
      <div className="p-4 bg-blue-200 border-2 rounded-circle border-transparent">
        <SpriteSVG name="profile-picture" />
      </div>
      <div>
        <div className="flex gap-4">
          <p>Вхід</p>
          <p>|</p>
          <p>Реєстрація</p>
        </div>
        <p className="mt-2 text-xs">Зареєструйся для розширених можливостей</p>
      </div>
    </div>
  );
}
