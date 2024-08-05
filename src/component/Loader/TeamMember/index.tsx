import Image from "next/image";
import Link from "next/link";

interface Props {
  name?: string;
  img?: string;
  linkedinLink?: string;
  twitterLink?: string;
  discordLink?: string;
}

export default function TeamMember({
  name,
  img,
  linkedinLink,
  twitterLink,
  discordLink,
}: Props) {
  return (
    <>
      <div className="relative border border-phlox p-4 lg:p-5 2xl:p-7 max-w-[410px] md:max-w-full mx-auto">
        {img ? <Image src={img} alt="" width={460} height={460} /> : ""}

        {name ? (
          <h3 className="text-xl lg:text-2xl 2xl:text-[32px] text-phlox text-center font-bold mt-4 lg:mt-5">
            {name}
          </h3>
        ) : (
          ""
        )}

        <div className="flex gap-4 justify-center items-center mt-4 lg:mt-5">
          {linkedinLink ? (
            <Link
              className="inline-block no-underline transition-all hover:opacity-90"
              href={linkedinLink}
              target="_blank"
            >
              <Image
                src={"/images/icon-linkedin.svg"}
                alt="Linkedin"
                width={40}
                height={40}
              />
            </Link>
          ) : (
            ""
          )}
          {twitterLink ? (
            <Link
              className="inline-block no-underline transition-all hover:opacity-90"
              href={twitterLink}
              target="_blank"
            >
              <Image
                src={"/images/icon-twitter.svg"}
                alt="Twitter "
                width={40}
                height={40}
              />
            </Link>
          ) : (
            ""
          )}
          {discordLink ? (
            <Link
              className="inline-block no-underline transition-all hover:opacity-90"
              href={discordLink}
              target="_blank"
            >
              <Image
                src={"/images/icon-discord.svg"}
                alt="Discord"
                width={40}
                height={40}
              />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
