import descriptionData from '../data/description-data';

export default function DescriptionList() {
  return (
    <ul>
      {descriptionData.map((item, index) => (
        <li
          key={index}
          className="text-sm md:text-base leading-[1.4] md:leading-[1.6]"
        >
          <div>{item.description}</div>
          <div>{item.composition}</div>
          <div>{item.gost}</div>
          <div>{item.weight}</div>
          <div>{item.shelfLife}</div>
          <div>{item.conditions}</div>
        </li>
      ))}
    </ul>
  );
}
