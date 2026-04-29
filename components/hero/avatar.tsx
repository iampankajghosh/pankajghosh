import Image from "next/image";

export function Avatar() {
  return (
    <div className="bg-background size-30 md:size-35 rounded-full overflow-hidden mx-4 md:mx-2 select-none border border-border">
      <Image
        src="https://res.cloudinary.com/ddws3mapm/image/upload/v1777348546/pfp_oxmv2j.png"
        draggable={false}
        width={200}
        height={200}
        alt="PFP"
      />
    </div>
  );
}
