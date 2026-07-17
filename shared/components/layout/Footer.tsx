import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-[#438f55] text-white">
            <div className="mx-auto max-w-8xl px-5 py-12 md:px-10">
                <div className="flex items-center gap-4">
                    <Image src="/logo/white-logo.png" alt="Huang Shan Global" width={210} height={70}
                           className="h-16 w-auto"/>
                </div>
                <div className="mt-7 max-w-xl">
                    <h2 className="text-[24px] font-bold uppercase">Công ty cổ phần thương mại xuất khẩu</h2>
                    <address className="mt-5 not-italic leading-7 text-white/90">
                        Trụ sở chính: C38-30, Geleximco C, Lê Trọng Tấn, Hà Đông<br/>
                        Số điện thoại: 038 959 1238 (A. Sơn)<br/>
                        Gmail: Huangshanglobal@gmail.com<br/>
                        Website: www.reallygreatsite.com
                    </address>
                </div>
                <div
                    className="mt-10 flex items-center justify-between border-t-2 border-white/80 pt-6 text-[14px] font-medium text-white/90">
                    <p>Copyright by @HUANGSHANGLOBAL</p>
                    <div className="flex gap-4 text-base" aria-label="Mạng xã hội">
                        <a href="#home" aria-label="Facebook"><Image src={'/icon/fb.svg'} alt={'Facebook'} width={24}
                                                                     height={24}/></a>
                        <a href="#home" aria-label="YouTube"><Image src={'/icon/ytb.svg'} alt={'Youtube'} width={24}
                                                                    height={24}/></a>
                        <a href="#home" aria-label="Messenger"><Image src={'/icon/email.svg'} alt={'Gmail'} width={24}
                                                                      height={24}/></a>
                        <a href="#home" aria-label="Instagram"><Image src={'/icon/ig.svg'} alt={'Instagram'} width={24}
                                                                      height={24}/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
