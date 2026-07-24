import {Reveal} from "@/shared/components/ui/motion-primitives";

export function ContactSection() {
    return (
        <section id="lien-he" className="relative overflow-hidden section-y text-white">
            <div className="absolute inset-0 bg-[url('/cskh.png')] bg-cover bg-center"/>
            <div className="relative mx-auto grid max-w-7xl section-gap px-5 md:grid-cols-2 md:px-10">
                <Reveal className="self-center" variant="left">
                    <h2 className="text-[21px] md:text-[28px] font-semibold">Kết nối với Huang Shan Global</h2>
                    <p className="mt-5 max-w-2xl text-[16px] leading-7 text-white/90">
                        Mọi hành trình kinh doanh đều cần một người đồng hành tin cậy. Với đội ngũ chuyên sự tận tâm và
                        am hiểu thị trường Trung - Việt, Huang Shan Global luôn sẵn sàng hỗ trợ bạn tối ưu chi phí nhập
                        hàng từ những bước đầu tiên. Đăng ký ngay để nhận giải pháp vận chuyển phù hợp nhất cho doanh
                        nghiệp của bạn.
                    </p>
                    <span
                        className="section-mt inline-flex rounded-full border border-white/60 px-5 py-1.5 text-[14px] font-medium uppercase text-white bg-[#FFFFFF]/20">Huang Shang Global</span>
                </Reveal>

                <Reveal delay={0.12} variant="blur">
                    <form className="grid section-gap" aria-label="Đăng ký tư vấn">
                        <div className="grid section-gap sm:grid-cols-2">
                            <label className="text-[16px] font-semibold text-white/90">
                                Họ và tên
                                <input
                                    className="mt-2 h-11 w-full rounded-full border-gray-100 border-2 bg-white px-5 text-sm text-[#284832] outline-none ring-[#74bd82] transition focus:ring-2"
                                    placeholder="Nhập họ và tên"/>
                            </label>
                            <label className="text-[16px] font-semibold text-white/90">
                                Số điện thoại
                                <input
                                    className="mt-2 h-11 w-full rounded-full border-gray-100 border-2 bg-white px-5 text-sm text-[#284832] outline-none ring-[#74bd82] transition focus:ring-2"
                                    placeholder="Nhập email"/>
                            </label>
                        </div>
                        <label className="text-[16px] font-semibold text-white/90">
                            Email
                            <input
                                className="mt-2 h-11 w-full rounded-full border-gray-100 border-2 bg-white px-5 text-sm text-[#284832] outline-none ring-[#74bd82] transition focus:ring-2"
                                placeholder="Nhập số điện thoại"/>
                        </label>
                        <label className="text-[16px] font-semibold text-white/90">
                            Lời nhắn
                            <textarea
                                className="mt-2 min-h-32 w-full border-gray-100 border-2 resize-none rounded-[22px] bg-white px-5 py-4 text-sm text-[#284832] outline-none ring-[#74bd82] transition focus:ring-2"
                                placeholder="Hãy nói về yêu cầu và mong muốn của bạn"/>
                        </label>
                        <button type="button"
                                className="justify-self-center rounded-full bg-[#72b87f] px-5 py-1.5 text-[16px] font-bold text-white transition hover:bg-[#438f55] hover:-translate-y-0.5 active:scale-95">
                            Đăng ký ngay
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}




