import TeamMember from "@/component/Loader/TeamMember";
import Image from "next/image";
import imgfooter from "~/images/img_mountain.png";

export default function Team() {
  return (
    <>
      <section
        className="team-section w-full relative pt-[75px] lg:pt-[150px] pb-[300px] lg:pb-[400px]"
        data-aos="fade-up"
        id="team"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
            <TeamMember
              name="Krishna"
              img="/images/img_krishna.png"
              linkedinLink="https://www.linkedin.com/in/krishnaavril"
              twitterLink="https://x.com/krishna_avril?s=20"
              discordLink="https://discord.com/users/krishnaavril"
            />
            <TeamMember
              name="Meghna"
              img="/images/img_meghna.png"
              linkedinLink="https://www.linkedin.com/in/meghanatirumalasetty"
              twitterLink="https://x.com/NftsVth14179?s=20"
              discordLink="https://discord.com/users/nfts_vth_megha"
            />
            <TeamMember
              name="Ravi"
              img="/images/img_ravi.png"
              linkedinLink=""
              twitterLink=""
              discordLink=""
            />
          </div>
        </div>
        <div className="bottom-bg absolute bottom-0 left-0 right-0 overflow-hidden h-[380px] z-[-1]">
          <Image
            src={imgfooter}
            alt=""
            className="bottom-img absolute top-0 left-0 right-0 object-cover h-[500px] object-[99%]"
          />
        </div>
      </section>
    </>
  );
}
