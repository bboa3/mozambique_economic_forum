// Static server component — renders the host-city CTA link bar.
export default function HostBar() {
  return (
    <div className="bg-white border-t border-[#ddd] border-b py-5 px-8 text-center" id="host-cities">
      <a
        href="mailto:jgewirtz@ntmllc.com?subject=I'm%20interested%20in%20hosting%20the%20EsportsTravel%20Summit"
        className="bg-blue text-white font-montserrat font-bold text-[0.7rem] tracking-widest uppercase py-[0.7rem] px-8 rounded-sm inline-block transition-colors duration-200 hover:bg-blue-dark"
      >
        INTERESTED IN HOSTING THE ESPORTSTRAVEL SUMMIT? CLICK HERE
      </a>
    </div>
  );
}
