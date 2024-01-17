export default function Cabinet() {
  return (
    <div className="flex gap-4 mt-6">
      <div className="p-4 bg-[#DBE5EE] border-2 rounded-circle border-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M1 25.5C1 23.6435 1.7375 21.863 3.05025 20.5503C4.36301 19.2375 6.14348 18.5 8 18.5H22C23.8565 18.5 25.637 19.2375 26.9497 20.5503C28.2625 21.863 29 23.6435 29 25.5C29 26.4283 28.6313 27.3185 27.9749 27.9749C27.3185 28.6312 26.4283 29 25.5 29H4.5C3.57174 29 2.6815 28.6312 2.02513 27.9749C1.36875 27.3185 1 26.4283 1 25.5Z"
            stroke="#386A93"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M15 11.5C17.8995 11.5 20.25 9.1495 20.25 6.25C20.25 3.35051 17.8995 1 15 1C12.1005 1 9.75 3.35051 9.75 6.25C9.75 9.1495 12.1005 11.5 15 11.5Z"
            stroke="#386A93"
            strokeWidth="2"
          />
        </svg>
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
