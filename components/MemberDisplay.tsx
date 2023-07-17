import Image from "next/image";

export default function MemberDisplay({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className='flex flex-col items-start gap-4 font-thin'>
      <div className='relative overflow-hidden rounded-lg w-60 h-60 sm:w-68 sm:h-68'>
        <Image fill alt={name} src={image} />
      </div>
      <div className='flex flex-col'>
        <p className='text-xl'>{name}</p>
        <p className='text-sm'>{role}</p>
      </div>
    </div>
  );
}
