import React from 'react'
import './Services.css'
import ServiceItem from './ServiceItem';
import  {FaStopwatch, FaUsers,  FaCertificate, FaVideo, FaListAlt, FaFlag, FaList,  FaMoneyCheckAlt,  } from 'react-icons/fa';
 const Services = () => {
    return (
        <div className="Container__service">
            <div className="service__wrapper">
                <div className="service__text_left">
                    <h5>Keuntungan yang Akan Kamu Dapatkan</h5>
                    <p>Apa sih keuntungan belajar di layanan daridasar.com ?</p>
                </div>
                <div className="wrapp__list">
                    <div className="service__item1">
                        <span className="service__list">
                            <FaStopwatch/>
                            <ServiceItem service="Waktu"info='Belajar bersama praktisi dibidangnya'/>
                        </span>
                        <span className="service__list">
                            <FaVideo/>
                            <ServiceItem service="Video"info='Belajar menggunakan video dengan kualitas HD'/>
                        </span>
                        <span className="service__list">
                            <FaFlag/>
                            <ServiceItem service="Guarantee"info='Garansi uang kembali jika dalam 7 hari merasa kelas nya tidak cocok'/>
                        </span>
                    </div>

                    <div className="service__item2">
                    <   span className="service__list">
                            <FaUsers/>
                            <ServiceItem service="Trainer"info='Belajar dengan 40 lebih  course tersedia'/>
                        </span>
                        <span className="service__list">
                            <FaListAlt/>
                            <ServiceItem service="Case Studi"info='Belajar dengan studi kasus'/>
                        </span>
                        <span className="service__list">
                            <FaMoneyCheckAlt/>
                            <ServiceItem service="Pricing"info='Kamu bebas memilih untuk sekali bayar atau dengan berlangganan'/>
                        </span>
                    </div>

                    <div className="service__item3">
                        <span className="service__list">
                            < FaCertificate/>
                            <ServiceItem service="Certificate"info='Certificate'/>
                        </span>
                        <span className="service__list">
                            <FaList/>
                            <ServiceItem service="Dari Dasar"info='Materi belajar dimulai dari dasar'/>
                        </span>
                    </div>
                </div>
                   
                   

            </div>
        </div>
        
    )
}

export default Services;