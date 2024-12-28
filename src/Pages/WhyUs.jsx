import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyUs.css'; // Custom CSS file

const translations = {
  en: {
    title: "Why Choose Us",
    description: "At [Company Name], we pride ourselves on delivering exceptional service, innovative solutions, and an unwavering focus on customer satisfaction. Discover why we are the preferred choice for countless clients worldwide.",
    expertTeam: "Expert Team",
    expertTeamDesc: "Our team consists of experienced professionals dedicated to delivering top-notch services in every project we undertake.",
    expertTeamDetail: "With decades of collective experience, we ensure that your needs are met with precision and efficiency.",
    innovativeSolutions: "Innovative Solutions",
    innovativeSolutionsDesc: "We leverage cutting-edge technology and creativity to provide solutions that set new industry standards.",
    innovativeSolutionsDetail: "From AI-driven analytics to custom-tailored software, we help businesses achieve their goals faster and smarter.",
    customerFocus: "Customer Focus",
    customerFocusDesc: "Your satisfaction is at the heart of everything we do. We are committed to exceeding your expectations.",
    customerFocusDetail: "With a dedicated support team available 24/7, we ensure your experience is seamless and hassle-free.",
    unmatchedQuality: "Unmatched Quality",
    unmatchedQualityDesc: "We uphold the highest standards in every project, ensuring that our solutions are not only effective but also sustainable.",
    valueProposition: "Our Value Proposition",
    valuePropositionDesc: "We combine expertise, technology, and dedication to offer unparalleled value to our clients.",
    commitmentExcellence: "Commitment to Excellence",
    sustainablePractices: "Sustainable Practices",
    transparentCommunication: "Transparent Communication",
    learnMore: "Learn More"
  },
  ru: {
    title: "Почему выбирают нас",
    description: "В [Company Name] мы гордимся тем, что предоставляем исключительное обслуживание, инновационные решения и неуклонную ориентацию на удовлетворение потребностей клиентов. Узнайте, почему нас выбирают бесчисленные клиенты по всему миру.",
    expertTeam: "Экспертная команда",
    expertTeamDesc: "Наша команда состоит из опытных профессионалов, преданных делу предоставления первоклассных услуг в каждом проекте, который мы выполняем.",
    expertTeamDetail: "С десятилетиями коллективного опыта мы гарантируем, что ваши потребности будут удовлетворены с точностью и эффективностью.",
    innovativeSolutions: "Инновационные решения",
    innovativeSolutionsDesc: "Мы используем передовые технологии и креативность, чтобы предоставлять решения, которые устанавливают новые отраслевые стандарты.",
    innovativeSolutionsDetail: "От аналитики на основе ИИ до индивидуально разработанного программного обеспечения, мы помогаем бизнесу достигать своих целей быстрее и умнее.",
    customerFocus: "Ориентация на клиента",
    customerFocusDesc: "Ваше удовлетворение находится в центре всего, что мы делаем. Мы стремимся превзойти ваши ожидания.",
    customerFocusDetail: "С преданной командой поддержки, доступной 24/7, мы обеспечиваем ваш опыт без проблем и хлопот.",
    unmatchedQuality: "Несравненное качество",
    unmatchedQualityDesc: "Мы придерживаемся самых высоких стандартов в каждом проекте, гарантируя, что наши решения не только эффективны, но и устойчивы.",
    valueProposition: "Наше ценностное предложение",
    valuePropositionDesc: "Мы объединяем опыт, технологии и преданность делу, чтобы предложить нашим клиентам непревзойденную ценность.",
    commitmentExcellence: "Приверженность к совершенству",
    sustainablePractices: "Устойчивые практики",
    transparentCommunication: "Прозрачная коммуникация",
    learnMore: "Узнать больше"
  },
  et: {
    title: "Miks valida meid",
    description: "[Company Name] uhkustab erakordse teenuse, uuenduslike lahenduste ja vankumatu keskendumisega kliendirahulolule. Avastage, miks meid eelistavad lugematud kliendid üle kogu maailma.",
    expertTeam: "Ekspertide meeskond",
    expertTeamDesc: "Meie meeskond koosneb kogenud professionaalidest, kes on pühendunud tipptasemel teenuste pakkumisele igas projektis, mida me ette võtame.",
    expertTeamDetail: "Kümnendite pikkuse kollektiivse kogemusega tagame, et teie vajadused rahuldatakse täpsuse ja tõhususega.",
    innovativeSolutions: "Uuenduslikud lahendused",
    innovativeSolutionsDesc: "Kasutame tipptasemel tehnoloogiat ja loovust, et pakkuda lahendusi, mis seavad uusi tööstusstandardeid.",
    innovativeSolutionsDetail: "Alates AI-põhisest analüütikast kuni kohandatud tarkvarani aitame ettevõtetel saavutada oma eesmärke kiiremini ja targemalt.",
    customerFocus: "Kliendikesksus",
    customerFocusDesc: "Teie rahulolu on kõiges, mida me teeme, keskmes. Oleme pühendunud teie ootuste ületamisele.",
    customerFocusDetail: "Pühendunud tugimeeskonnaga, mis on saadaval 24/7, tagame, et teie kogemus on sujuv ja probleemivaba.",
    unmatchedQuality: "Võrratu kvaliteet",
    unmatchedQualityDesc: "Peame igas projektis kinni kõrgeimatest standarditest, tagades, et meie lahendused on mitte ainult tõhusad, vaid ka jätkusuutlikud.",
    valueProposition: "Meie väärtuspakkumine",
    valuePropositionDesc: "Kombineerime teadmised, tehnoloogia ja pühendumuse, et pakkuda oma klientidele ületamatut väärtust.",
    commitmentExcellence: "Pühendumus tipptasemele",
    sustainablePractices: "Jätkusuutlikud tavad",
    transparentCommunication: "Läbipaistev suhtlus",
    learnMore: "Loe rohkem"
  }
};

const WhyUs = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  const t = translations[language];

  return (
    <div className="container py-5">
      <div className="text-end">
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="form-select w-auto">
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="et">Eesti</option>
        </select>
      </div>
      <h1 className="text-center display-4 mb-4 mt-5 text-primary">{t.title}</h1>
      <p className="text-center lead mb-5 text-muted">{t.description}</p>

      {/* Cards Section */}
      <div className="row g-4">
        <div className="col-md-4" data-aos="zoom-in">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-people-fill display-3 text-primary mb-3"></i>
              <h5 className="card-title">{t.expertTeam}</h5>
              <p className="card-text">{t.expertTeamDesc}</p>
              <p className="text-muted small">{t.expertTeamDetail}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-lightbulb-fill display-3 text-success mb-3"></i>
              <h5 className="card-title">{t.innovativeSolutions}</h5>
              <p className="card-text">{t.innovativeSolutionsDesc}</p>
              <p className="text-muted small">{t.innovativeSolutionsDetail}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-hand-thumbs-up-fill display-3 text-warning mb-3"></i>
              <h5 className="card-title">{t.customerFocus}</h5>
              <p className="card-text">{t.customerFocusDesc}</p>
              <p className="text-muted small">{t.customerFocusDetail}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="row g-4 mt-5">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Quality Service"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center" data-aos="fade-left">
          <div>
            <h2 className="text-primary">{t.unmatchedQuality}</h2>
            <p className="text-muted">{t.unmatchedQualityDesc}</p>
            <ul className="list-unstyled">
              <li>✔ {t.commitmentExcellence}</li>
              <li>✔ {t.sustainablePractices}</li>
              <li>✔ {t.transparentCommunication}</li>
            </ul>
            <button className="btn btn-primary btn-lg">{t.learnMore}</button>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="row g-4 mt-5">
        <div className="col-md-12" data-aos="fade-up">
          <h2 className="text-center text-success">{t.valueProposition}</h2>
          <p className="text-center text-muted">{t.valuePropositionDesc}</p>
          <div className="row mt-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <h5 className="text-primary">{t.commitmentExcellence}</h5>
              <p>{t.commitmentExcellence}</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <h5 className="text-success">{t.sustainablePractices}</h5>
              <p>{t.sustainablePractices}</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <h5 className="text-warning">{t.transparentCommunication}</h5>
              <p>{t.transparentCommunication}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
