import Image from "next/image";
import Link from "next/link";
import {contactOffice, socialLinks} from "../contact-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";
import ArrowButton from "@/shared/components/ui/arrow-button";

export function ContactMain() {
    return (
        <section className="watermark-section before:top-[-10px] bg-[#f4fcf5] section-y md:before:top-[-24px]">
            <div className="mx-auto max-w-8xl px-5 md:px-10">
                <Reveal variant="scale" className="text-center">
                    <h2 className="text-[21px] font-bold text-primary md:text-[36px]">Liên hệ với chúng tôi</h2>
                    <p className="mt-2 text-[18px] font-medium text-[#8e9691] md:text-[20px]">Tư vấn và chăm sóc khách
                        hàng mọi lúc</p>
                </Reveal>

                <div className="section-mt grid section-gap md:grid-cols-[0.9fr_1.35fr] ">
                    <Reveal variant="left">
                        <div>
                            <h3 className="text-[21px] font-bold text-primary md:text-[28px]">{contactOffice.title}</h3>
                            <address
                                className="mt-4 space-y-1 text-[17px] not-italic leading-7 text-primary md:text-[18px]">
                                <p><span className="font-bold">Địa chỉ:</span> {contactOffice.address}</p>
                                <p><span className="font-bold">Số điện thoại:</span> {contactOffice.phone}</p>
                                <p><span className="font-bold">Gmail:</span> {contactOffice.email}</p>
                                <p><span className="font-bold">Website:</span> {contactOffice.website}</p>
                            </address>

                            <div className="section-mt flex items-center gap-6" aria-label="Mạng xã hội">
                                {socialLinks.map((item) => (
                                    <Link key={item.label} href={item.href} aria-label={item.label}
                                          className="transition hover:-translate-y-0.5">
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            width={28}
                                            height={28}
                                            className="h-7 w-7 [filter:brightness(0)_saturate(100%)_invert(50%)_sepia(25%)_saturate(905%)_hue-rotate(80deg)_brightness(92%)_contrast(88%)]"
                                        />
                                    </Link>
                                ))}
                            </div>

                            <div
                                className="mt-6 h-[260px] max-w-[410px] overflow-hidden rounded-[28px] bg-white shadow-[0_14px_32px_rgba(38,87,50,0.08)] md:h-[280px]">
                                <iframe
                                    title="Bản đồ trụ sở Huang Shan Global"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7450.41020364086!2d105.741045!3d20.984414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134537ddb396b8f%3A0xcdbbe0bf92bef1a4!2zR2VsZXhpbWNvIGtodSBDLCBMw6ogVHLhu41uZyBU4bqlbg!5e0!3m2!1svi!2sus!4v1784624470434!5m2!1svi!2sus"
                                    className="h-full w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </Reveal>

                    <Reveal variant="right" delay={0.08}>
                        <div>
                            <h3 className="text-[21px] font-bold text-primary md:text-[28px]">Thông tin liên hệ</h3>
                            <form className="section-mt grid section-gap" aria-label="Thông tin liên hệ">
                                <div className="grid section-gap sm:grid-cols-2">
                                    <label className="text-[16px] font-medium text-[#7c8580]">
                                        Họ và tên
                                        <input
                                            className="mt-2 h-12 w-full rounded-full border border-[#d9dee2] bg-[#f8f8f8] px-5 text-[15px] text-[#284832] outline-none ring-[#74bd82] transition placeholder:text-[#9aa0a6] focus:ring-2"
                                            placeholder="Nhập họ và tên"
                                        />
                                    </label>
                                    <label className="text-[16px] font-medium text-[#7c8580]">
                                        Số điện thoại
                                        <input
                                            className="mt-2 h-12 w-full rounded-full border border-[#d9dee2] bg-[#f8f8f8] px-5 text-[15px] text-[#284832] outline-none ring-[#74bd82] transition placeholder:text-[#9aa0a6] focus:ring-2"
                                            placeholder="Nhập email"
                                        />
                                    </label>
                                </div>
                                <label className="text-[16px] font-medium text-[#7c8580]">
                                    Email
                                    <input
                                        className="mt-2 h-12 w-full rounded-full border border-[#d9dee2] bg-[#f8f8f8] px-5 text-[15px] text-[#284832] outline-none ring-[#74bd82] transition placeholder:text-[#9aa0a6] focus:ring-2"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </label>
                                <label className="text-[16px] font-medium text-[#7c8580]">
                                    Lời nhắn
                                    <textarea
                                        className="mt-2 min-h-[128px] w-full resize-none rounded-[28px] border border-[#d9dee2] bg-[#f8f8f8] px-5 py-4 text-[15px] text-[#284832] outline-none ring-[#74bd82] transition placeholder:text-[#9aa0a6] focus:ring-2 md:min-h-[140px]"
                                        placeholder="Hãy nói về yêu cầu và mong muốn của bạn"
                                    />
                                </label>
                                <ArrowButton className={'mx-auto'}>
                                    Gửi liên hệ
                                </ArrowButton>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}








