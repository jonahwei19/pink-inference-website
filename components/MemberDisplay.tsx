import Image from "next/image";
import Link from "next/link";

export default function MemberDisplay({
  name,
  role,
  image,
  linkedIn,
  twitter,
}: {
  name: string;
  role: string;
  image: string;
  linkedIn?: string | "#";
  twitter?: string | "#";
}) {
  const linkedInHref = linkedIn || "#";
  const twitterHref = twitter || "#";

  return (
    <div className='flex flex-col bg-transparent items-start gap-4 font-thin'>
      <div className='relative overflow-hidden rounded-lg w-60 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80'>
        <Image className='object-cover' fill alt={name} src={image} />
      </div>
      <div className='flex flex-col w-full gap-4'>
        <div className='flex flex-col'>
          <p className='text-xl'>{name}</p>
          <p className='text-sm'>{role}</p>
        </div>
        {role !== "Science Advisor" && (
          <div className='flex gap-2'>
            <Link
              href={linkedInHref}
              target='blank'
              className='w-12 h-12 flex items-center justify-center border-solid border-2 border-white rounded-full hover:opacity-70'
            >
              <Image
                width={50}
                height={50}
                src={"/linkedin_icon_full.png"}
                alt='LinkedIn'
              />
            </Link>
            <Link
              href={twitterHref}
              target='blank'
              className='w-12 h-12 flex items-center justify-center border-solid border-2 border-white rounded-full hover:opacity-70'
            >
              <Image
                width={30}
                height={30}
                src={"/twitter_icon.png"}
                alt='Twitter'
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
