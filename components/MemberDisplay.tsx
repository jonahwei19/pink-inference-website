import Image from "next/image";
import Link from "next/link";

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
    <div className='flex flex-col bg-transparent items-start gap-4 font-thin'>
      <div className='relative overflow-hidden rounded-lg w-60 h-64 sm:w-68 sm:h-72'>
        <Image className='object-cover' fill alt={name} src={image} />
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col'>
          <p className='text-xl'>{name}</p>
          <p className='text-sm'>{role}</p>
        </div>
        {role !== "Science Advisor" && (
          <Link
            href={"#"}
            className='border-solid border-2 border-white rounded-full hover:opacity-70'
          >
            <Image
              width={50}
              height={50}
              src={"/linkedin_icon_full.png"}
              alt='linked In'
            />
          </Link>
        )}
      </div>
    </div>
  );
}
