import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ContactUsFormComponent from "@/components/common/ContactUsFormComponent";
import HeroImageSection from "@/components/common/HeroImageSection";

export default function Contact() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection title="Contact Us" />
        </div>
      </div>

      <section className="relative py-8 px-4 font-custom">
        <div id="contact_form" className="response-animated pt-5 pb-5">
          <div className="contact_form_container contact_layout fa_wrapper response-transition">
            <div className="relative max-w-full max-h-full">
              <div className="block lg:flex justify-between contact_layout response-transition  ">
                <div className="contact_item w-full">
                  <div className="contact_container_3 contact_layout response-transition">
                    <div className="contact_item">
                      <div className="contact_container_4 contact_layout response-transition">
                        <div className="contact_item">
                          <p className="e_text-27 contact_summary response-transition"></p>
                          <p className="e_text-28 contact_link response-transition">
                            Contact
                          </p>
                          <p className="title_line">
                            <span></span>
                            <span></span>
                          </p>
                        </div>
                      </div>
                      <div className="contact_container_5 contact_layout fa_tel_li response-transition">
                        <div className="contact_item">
                          <p className="e_text-31 contact_title fa_tel_tt response-transition">
                            Tel
                          </p>
                          <p className="e_text-32 contact_title fa_tel_cnt response-transition">
                            <a href="tel:+91 9825071551" target="_self">
                              +91 9825071551
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="contact_container_6 contact_layout fa_tel_li">
                        <div className="contact_item">
                          <p className="e_text-35 contact_title fa_tel_tt">
                            Email
                          </p>
                          <div className="e_richText-36 contact_title fa_tel_cnt clearfix">
                            <p style={{ lineHeight: "24px" }}>
                              <span style={{ lineHeight: "2" }}>
                                <a href="mailto:sales@nessolar.in">
                                  sales@nessolar.in
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contact_container_7 contact_layout fa_tel_li">
                        <div className="contact_item">
                          <p className="e_text-38 contact_title fa_tel_tt">
                            Add
                          </p>
                          <div className="e_richText-39 contact_title fa_tel_cnt clearfix">
                            <p style={{ lineHeight: "2", color: "#000000" }}>
                              <p> 409 , Sakar - 3 ,</p>
                              <p>Opp. old high Court, </p>
                              <p>Nr. Income tax circle, </p>{" "}
                              <p>Ashramroad , Ahmedabad - 380009</p>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ContactUsFormComponent />
                <div className="fa_tag" id="tag_01"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1048.0068580676045!2d72.5629188!3d23.0600407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851b56d1b85b%3A0x8dd658ce33cee08b!2sNES%20Energy%20Solutions!5e1!3m2!1sen!2sin!4v1671785516389!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-gtm-yt-inspected-5="true"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
