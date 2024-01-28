export default function FormHeading ({ heading, additionalText }: { heading: string, additionalText?: string }) {
  return (
    <div className="max-w-[400px] flex flex-col gap-5 mx-auto mb-10">
      <h1 className="text-neutral-800 text-2xl text-center font-normal font-lato leading-10">{heading}</h1>
      <p className="text-center text-neutral-800 text-sm font-normal font-lato leading-snug">{additionalText}</p>
    </div>
  )
}