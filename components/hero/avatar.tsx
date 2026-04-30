import Image from "next/image";

export function Avatar() {
  return (
    <div
      className="size-28 md:size-35 rounded-full 
    overflow-hidden mx-4 md:mx-2 select-none border 
    border-border relative"
    >
      <Image
        src="https://res.cloudinary.com/ddws3mapm/image/upload/f_auto,q_auto/pfp_oxmv2j.png"
        alt="Picture of the author"
        className="object-cover"
        draggable={false}
        fill
        sizes="(max-width: 768px) 112px, 140px"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
