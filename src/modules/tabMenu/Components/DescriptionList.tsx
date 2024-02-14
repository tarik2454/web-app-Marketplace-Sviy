import descriptionData from '../data/description-data';

export default function DescriptionList() {
  return (
    <ul>
      {descriptionData.map((item, index) => (
        <li key={index}>
          <p>{item.description}</p>
          <p>{item.composition}</p>
          <p>{item.gost}</p>
          <p>{item.weight}</p>
          <p>{item.shelfLife}</p>
          <p>{item.conditions}</p>
        </li>
      ))}
    </ul>
  );
}
