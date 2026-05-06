// Static server component — renders the multi-year sponsors logo grid.
export default function Sponsors() {
  return (
    <div className="w-full flex flex-col items-center py-10 px-6 bg-white" id="sponsor">
      <div className="text-center font-montserrat font-bold text-lg tracking-[0.18em] uppercase text-[#222] mb-6">
        Organizadores &amp; Parceiros
      </div>
      <div className="max-w-3xl flex flex-wrap items-center justify-center gap-7 max-sm:gap-[0.9rem]">
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">Enermina</div>
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">APME</div>
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">APICOL</div>
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">SeasonWizard</div>
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">Legacy Holding Corporation</div>
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">Grupo Mesquita</div>
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">Chele Consultoria</div>
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">Royal Burger Group</div>
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">IFPELAC – Inhambane</div>
        <div className="h-12 flex items-center justify-center px-4 py-[0.35rem] bg-[#f7f7f7] border border-[#ddd] rounded font-montserrat font-bold text-[0.68rem] text-[#666] tracking-[0.04em] whitespace-nowrap transition-all duration-200 hover:border-blue hover:text-blue">Conselho Nacional da Juventude</div>
      </div>
    </div>
  );
}
