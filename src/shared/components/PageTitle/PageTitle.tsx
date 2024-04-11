export default function PageTitle({ name }: { name: string }) {
  return (
    <h1 className="font-lora text-[32px] font-normal leading-[1.28] text-[#1f1f1f] xl:text-[41px] xl:leading-[1.26]">
      {name}
    </h1>
  );
}
