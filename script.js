// Datos de universidades para mostrar en detalle
const universities = {
  upq: {
    name: "Universidad Politécnica de Querétaro",
    img: "LogosUniversidades/LOGO_UPQ.png",
    courses: [
      "Licenciatura en Comercio Internacional y Aduanas",
      "Licenciatura en Administración",
      "Ingeniería Mecatrónica",
      "Ingeniería Mecatrónica (Modalidad Mixta)",
      "Ingeniería en Manufactura Avanzada",
      "Ingeniería en Tecnologías de la Información e Innovación Digital",
      "Ingeniería en Tecnología Automotriz",
      "Ingeniería de Datos e Inteligencia Artificial"
    ],
    lat: 20.54634474462597, 
    lng: -100.27482406331694,
    convocationLink: "https://sistemaintegral.upq.edu.mx/admisiones.php",
  },
  up: {
    name: "Universidad Politécnica de Santa Rosa",
    img: "LogosUniversidades/LOGO_UP.png",
    courses: [
      "Ingeniería en Calidad y Metrología",
      "Ingeniería en Sistemas Automotrices",
      "Ingeniería en Tecnologías de la Información e Innovación Digital",
      "Ingeniería en Animación y Efectos Visuales",
      "Licenciatura en Terapia Física",
      "Ingeniería en Robótica Computacional"
    ],
    convocationLink: "https://upsrj.edu.mx/inscripciones-reinscripciones/"
  },
  uteq: {
    name: "Universidad Tecnológica de Querétaro",
    img: "LogosUniversidades/LOGO_HALCON.png",
    courses: [
      "Licenciatura En Administración",
      "Licenciatura en Negocios y Mercadotecnía",
      "Licenciatura en Ingeniería en Logística",
      "Licenciatura en Educación",
      "Licenciatura en Ingeniería Ambiental y Sustentabilidad",
      "Licenciatura en Ingeniería En Energía y Desarrollo Sostenible",
      "Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital",
      "Licenciatura en Ingeniería Mecatrónica",
      "Licenciatura en Ingeniería en Mantenimiento Industrial",
      "Licenciatura en Ingeniería en Nanotecnología",
      "Licenciatura en Ingeniería Industrial",
      "Licenciatura en Ingeniería Mecánica",
      "Licenciatura en Ingeniería Mecánica Automotriz",
      "Licenciatura en Ingeniería Semiconductores",
      "Licenciatura en Contaduría"
    ],
    convocationLink: "https://admisiones.uteq.edu.mx/"
  },
  utc: {
    name: "Universidad Tecnológica de Corregidora",
    img: "LogosUniversidades/LOGO_UTC.png",
    courses: [
      "Licenciatura en Gestión y Desarrollo Turístico",
      "Licenciatura en Ingeniería en Mantenimiento Industrial",
      "Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital",
      "Licenciatura en Ingeniería en Biotecnología",
      "Licenciatura en Ingeniería Mecatrónica"
    ],
    convocationLink: "https://captacion.utcorregidora.edu.mx/"
  },
  unaq: {
    name: "Universidad Aeronáutica de Querétaro",
    img: "LogosUniversidades/LOGO_UNAQ.png",
    courses: [
      "Ingeniería Aeronáutica en Manufactura",
      "Ingeniería en Diseño Mecánico Aeronáutico",
      "Ingeniería en Electrónica y Control de Sistemas de Aeronaves",
      "Ingeniería Aeronáutica en Mantenimiento"
    ],
    convocationLink: "https://www.unaq.edu.mx/admisiones/convocatoria-ingenieria/"
  },
  utsjr: {
    name: "Universidad Tecnológica de San Juan del Río",
    img: "LogosUniversidades/LOGO_UTSJR.png",
    courses: [
      "TSU en Mercadotecnia (Jalpan y SJR). Lic. en Negocios Y Mercadotecnia",
      "TSU en Química Tecnológica Farmacéutica. Ing. Química Farmacéutica",
      "TSU en Química Industrial. Ingeniería Química",
      "TSU en Energía Turbo Solar. Ing. Energía Y Desarrollo Sustentable",
      "TSU en Construcción. Ingeniería Civil",
      "TSU en Automotriz. Ingeniería Industrial",
      "TSU en Procesos Productivos. Ingeniería Industrial",
      "TSU en Sistemas de Gestión de Calidad. Ingeniería Industrial",
      "TSU en Desarrollo de Software Multiplataforma (Jalpan y SJR). Ing. en Tec. de la Información e Innovación Digital",
      "TSU en Entornos Virtuales Y Negocios Digitales. Ing. en Tec.de la Información e Innovación Digital",
      "TSU en IA – Ing. en Tec. de la Información e Innovación Digital",
      "TSU en Automatización. Ingeniería Mecatrónica",
      "TSU en Robótica. Ingeniería Mecatrónica",
      "TSU en Automatización. Ingeniería Mecatrónica Mixto (Virtual)",
      "TSU en Mantenimiento Industrial. Ing. en Mantenimiento Industrial",
      "TSU en Turismo. Lic. Gestión Y Desarrollo Turístico"
    ],
    convocationLink: "http://200.188.14.50/admision/admision.jsp?C=2"
  },
  itq: {
    name: "TECNM Campus Querétaro",
    img: "LogosUniversidades/LOGO_ITQ.png",
    courses: [
      "Ingeniería en Sistemas Computacionales",
      "Ingeniería Electrónica",
      "Ingeniería Industrial",
      "Ingeniería Mecánica",
      "Ingeniería Mecatrónica",
      "Ingeniería Eléctrica",
      "Ingeniería en Materiales",
      "Ingeniería en Semiconductores",
      "Ingeniería en Ciencia De Datos",
      "Ingeniería en Logística",
      "Licenciatura en Arquitectura",
      "Licenciatura en Gestión Empresarial"
    ],
    convocationLink: "https://queretaro.tecnm.mx/wp-content/uploads/2024/06/CONVOCATORIA-NUEVO-INGRESO-AGO-DIC-2024-Extraordinaria-1.pdf"
  },
  tecnm: {
    name: "TECNM Campus San Juan del Río",
    img: "LogosUniversidades/LOGO_ITQ.png",
    courses: [
      "Ingeniería Industrial",
      "Ingeniería en Sistemas Computacionales",
      "Ingeniería Electrónica",
      "Ingeniería en Gestión Empresarial",
      "Ingeniería en Tecnologías de la Información y Comunicaciones",
      "Ingeniería en Electromecánica"
    ],
    convocationLink: "https://cetech.sjuanrio.tecnm.mx/convocatoriaAdmision/6462448e1fcfda3330afe6fc5b50d53b"
  },
  cuauhtemoc: {
    name: "Universidad Cuauhtémoc Querétaro",
    img: "LogosUniversidades/LOGO_UCQ45.png",
    courses: [
      "Lic. en Gestión Empresarial",
      "Lic. en Desarrollo e Innovación Turística",
      "Lic. en Animación y Diseño de Arte Digital",
      "Lic. en Arquitectura",
      "Lic. en Comercio y Logística Internacional",
      "Lic. en Comunicación",
      "Lic. en Contaduría e Impuestos",
      "Lic. en Cultura Física y Entretenimiento Deportivo",
      "Lic. en Derecho",
      "Lic. en Diseño Gráfico y Multimedia",
      "Lic. en Diseño Industrial y de Producto",
      "Ingeniería Civil",
      "Ingeniería Desarrollo de Videojuegos",
      "Ingeniería en Software y Sistemas",
      "Ing. Industrial en Sistemas de Manufactura y Calidad",
      "Ing. Logística del Transporte y Cadenas de Suministro",
      "Lic. en Mercadotecnia y Publicidad",
      "Lic. en Pedagogía",
      "Lic. en Nutrición",
      "Lic. en Psicología Clínica",
      "Lic. en Fisioterapia",
      "Lic. en Odontología",
      "Lic. en Medicina"
    ],
    convocationLink: "https://www.ucq.edu.mx/uc/licenciatura"
  },
  uniq: {
    name: "Universidad Internacional de Querétaro",
    img: "LogosUniversidades/LOGO_UNIQ.png",
    courses: [
      "Lic. en Administración de Empresas Turísticas",
      "Lic. en Administración de Empresas",
      "Lic. en Derecho",
      "Lic. en Mercadotecnia",
      "Lic. en Negocios Internacionales",
      "Lic. en Pedagogía",
      "Lic. en Psicología",
      "Ingeniería en Sistemas Computacionales"
    ],
    convocationLink: "https://www.uniq.education/oferta-educativa/"
  },
  uvm: {
    name: "Universidad del Valle de México - Querétaro",
    img: "LogosUniversidades/LOGO_UVM.png",
    courses: [
      "Licenciaturas de Salud",
      "Licenciaturas en Ciencias Sociales",
      "Licenciaturas en Diseño, Arte y Arquitectura",
      "Licenciaturas en Hospitalidad, Turismo y Gastronomía",
      "Ingenierías",
      "Licenciaturas en Negocios"
    ],
    convocationLink: "https://uvm.mx/admisiones"
  },
  uniceq: {
    name: "Universidad Central de Querétaro",
    img: "LogosUniversidades/LOGO_UNICEQ.png",
    courses: [
      "Lic. En Administración de Empresas", 
      "Lic. En Comercio Internacional y Aduanas",
      "Lic. En Contaduría y Finanzas",
      "Lic. En Criminología",
      "Lic. En Derecho",
      "Ingeniería Industrial",
      "Ingeniería en Innovación y Desarrollo Tecnológico",
      "Lic. En Mercadotecnia y Publicidad",
      "Lic. En Pedagogía",
      "Lic. En Psicología"
    ],
    convocationLink: "https://www.unea.edu.mx/iniciamos-clases?utm_content=ejecutiva&utm_source=google&utm_campaign=C2_Generico_UNEA_CNV_GG_TEX_ADS_CPC_AON&utm_medium=cpc&utm_term=donde%20estudiar%20licenciatura&hsa_kw=donde%20estudiar%20licenciatura&hsa_mt=b&hsa_tgt=kwd-3808387545&hsa_src=g&hsa_ad=691524290802&hsa_ver=3&hsa_cam=21036600639&hsa_net=adwords&hsa_acc=7877656689&hsa_grp=162148190874&gad_source=1&gad_campaignid=21036600639&gbraid=0AAAAADcJWR3vnmwgnxJ8Vqfu4605r2sCo&gclid=Cj0KCQjw1JjDBhDjARIsABlM2SsZIQ9lycZi-4MgdcRSCj61TWRb_Q_CAPMlxYsiUlzdeuHHv00Kz0AaAitmEALw_wcB"
  },
  cesba: {
    name: "Centro de Estudios Superiores del Bajío",
    img: "LogosUniversidades/LOGO_CESBA.png",
    courses: [
      "Lic. en Administración de Empresas",
      "Lic. en Administración",
      "Lic. en Derecho",
      "Ingeniería Industrial",
      "Lic. en Contaduría Pública",
      "Lic. en Pedagogía",
      "Lis. En Ingeniería En Sistemas Computacionales",
      "Lic. En Sistemas Computacionales",
      "Lic. En Enfermería",
      "Lic. En Psicología",
      "Lic. En Nutrición",
      "Lic. En Mercadotecnia",
      "Lic. En Fisioterapia",
      "Lic. En Arquitectura",
      "Lic. En Comercio Internacional"
    ],
    convocationLink: "https://www.cesba-queretaro.edu.mx/admisiones/"
  },
  londres: {
    name: "Universidad de Londres",
    img: "LogosUniversidades/LOGO_LONDRES.png",
    courses: [
      "Lic. En Administración de Empresas",
      "Lic. En Contaduría",
      "Lic. En Derecho",
      "Lic. En Psicología",
      "Lic. En Criminología y Criminalística",
      "Lic. En Relaciones Comerciales Internacionales",
      "TSU en Gestión de la Hospitalidad y Servicios Turísticos"
    ],
    convocationLink: "https://udelondresqueretaro.com.mx/"
  },
  uniplea: {
    name: "Universidad de Uniplea",
    img: "LogosUniversidades/LOGO_UNIPLEA.png",
    courses: [
      "Lic. en Mercadotecnia Digital",
      "Lic. en Psicología Organizacional",
      "Lic. en Administración de Empresas",
      "Lic. en Administración de Negocios Gastronómicos y de la Recreación",
      "Lic. en Derecho",
      "Ingeniería Industrial"
    ],
    convocationLink: "https://www.uniplea.mx/admisiones/"
  },
  dicormo: {
    name: "Universidad de Dicormo",
    img: "LogosUniversidades/LOGO_DICORMO.png",
    courses: [
      "Licenciatura en Diseño de Modas y Marketing Publicitario",
      "Licenciatura en Diseño de Interiores y Arquitectura Sustentable",
      "Licenciatura en Diseño y Comunicación Multimedia"      
    ],
    convocationLink: "https://www.dicormo.com/"
  },
  atenas: {
    name: "Universidad de Atenas",
    img: "LogosUniversidades/LOGO_ATENAS.png",
    courses: [
      "Lic. y TSU en Puericultura y Educación Infantil con Administración",
      "⁠Lic. en Pedagogía",
      "⁠Lic. en Derecho",
      "Lic. en Administración y Mercadotecnia",
      "Ingeniería Geomática",
      "Maestría en Educación",
      "Maestría en Administración Empresarial y Pública"      
    ],
    convocationLink: "https://atenas.edu.mx/"
  },
  cnci: {
    name: "Universidad de CNCI",
    img: "LogosUniversidades/LOGO_CNCI.png",
    courses: [
      "Lic. en Derecho",
      "Lic. en Derecho Corporativo",
      "Lic. en Derecho Laboral",
      "Lic. en Derecho y Finanzas",
      "Lic en Derecho con Acentuación en Economía",
      "Lic. en Administración Financiera",
      "Lic. en Administración de Empresas",
      "Lic. en Mercadotecnia Turística",
      "Lic. en Mercadotecnia",
      "Lic. en Ciencias de la Educación",
      "Lic. en Gestión Turística",
      "Lic. en Informática Administrativa",
      "Contador Público",
      "Ing. Industrial y de Sistemas",
      "Ing. En Tecnologías Computacionales",
      "Ing. En Gestión Empresarial",
      "Ing. En Logística",
      "Lic. en Recursos Humanos",
      "Lic. en Negocios Internacionales"
    ],
    convocationLink: "https://cnci.edu.mx/carreras-profesionales/"
  },
  real: {
    name: "Universidad REAL Querétaro",
    img: "LogosUniversidades/LOGO_REAL.png",
    courses: [
      "Ingeniería Industrial",
      "Lic. En Negocios Internacionales",
      "Lic. En Derecho",
      "Lic. En Pedagogía",
      "Lic. En Contabilidad",
      "Lic. En Mercadotecnia",
      "Lic. En Administración"
    ],
    convocationLink: "https://www.urq.edu.mx/"
  },
  new_element: {
    name: "Universidad NEW ELEMENT",
    img: "LogosUniversidades/LOGO_NEW.png",
    courses: [
      "Lic. en Derecho",
      "Lic. en Mercadotecnia",
      "Lic. en Administración"
    ],
    convocationLink: "https://www.neuniversity.mx/es/#admisiones"
  }
};

// Selección de elementos DOM
const cards = document.querySelectorAll('.card[data-university]');
const detailPanel = document.getElementById('university-detail');
const detailImg = document.getElementById('detail-img');
const detailName = document.getElementById('detail-name');
const detailCoursesList = document.getElementById('detail-courses-list');
const detailConvocation = document.getElementById('detail-convocation');
const closeBtn = document.getElementById('close-detail');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const uniKey = card.getAttribute('data-university');
    if (!universities[uniKey]) return;

    const uni = universities[uniKey];

    // Actualizar contenido del panel detalle
    detailImg.src = uni.img;
    detailImg.alt = `Logo de ${uni.name}`;
    detailName.textContent = uni.name;

    // Limpiar y llenar lista de cursos
    detailCoursesList.innerHTML = '';
    uni.courses.forEach(course => {
      const li = document.createElement('li');
      li.textContent = course;
      detailCoursesList.appendChild(li);
    });

    detailConvocation.href = uni.convocationLink;
    detailConvocation.textContent = "Convocatoria";

    // Mostrar panel detalle
    detailPanel.style.display = 'block';

    // Scroll suave al panel
    detailPanel.scrollIntoView({ behavior: 'smooth' });
  });
});

closeBtn.addEventListener('click', () => {
  detailPanel.style.display = 'none';
});

const tooltips = {
  unaq: "Universidad Aeronáutica en Querétaro",
  up: "Universidad Politécnica de Santa Rosa Jáuregui",
  upq: "Universidad Politécnica de Querétaro",
  utc: "Universidad Tecnológica de Corregidora",
  uteq: "Universidad Tecnológica de Querétaro",
  utsjr: "Universidad Tecnológica de San Juan del Río",
  itq: "Tecnológico Nacional de México Campus Querétaro",
  tecnm: "Tecnológico Nacional de México Campus SJR",
  cuauhtemoc: "Universidad Cuauhtémoc",
  uniq: "Universidad Intercultural de Querétaro",
  uvm: "Universidad del Valle de México",
  uniceq: "Universidad Central de Querétaro",
  cesba: "Centro de Estudios Superiores de Bajío",
  londres: "Universidad de Londres",
  uniplea: "Universidad Privada de Estudios Avanzados",
  dicormo: "Universidad DICORMO",
  atenas: "Universidad Atenas",
  cnci: "Universidad CNCI",
  real: "Universidad Real",
  new_element: "Universidad New Element"
};

document.querySelectorAll('.card').forEach(card => {
  const uniKey = card.dataset.university;
  card.addEventListener('mouseenter', () => {
    const tooltipText = tooltips[uniKey];
    if (tooltipText) {
      const tooltip = document.createElement('div');
      tooltip.className = 'custom-tooltip';
      tooltip.innerText = tooltipText;
      document.body.appendChild(tooltip);

      const rect = card.getBoundingClientRect();
      tooltip.style.left = `${rect.left + window.scrollX + 10}px`;
      tooltip.style.top = `${rect.top + window.scrollY - 30}px`;

      card.addEventListener('mouseleave', () => {
        tooltip.remove();
      }, { once: true });
    }
  });
});
/*
// ========== Modal de Ubicación ==========
const modalUbicacion = document.getElementById('mapModal');
const openUbicacionBtn = document.getElementById('openModalUBtn');
const closeUbicacionBtn = document.getElementById('closeModalUBtn');

if (openUbicacionBtn && closeUbicacionBtn && modalUbicacion) {
  openUbicacionBtn.addEventListener('click', () => {
    modalUbicacion.style.display = 'block';
  });

  closeUbicacionBtn.addEventListener('click', () => {
    modalUbicacion.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modalUbicacion) {
      modalUbicacion.style.display = 'none';
    }
  });
}*/
  
  let map;
  let marker;

  function initMap() {
    // Inicializa un mapa vacío centrado en México
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 23.6345, lng: -102.5528 },
      zoom: 5,
    });

    marker = new google.maps.Marker({
      map: map,
    });
  }

  // Abre el modal con la ubicación de la universidad
  document.getElementById("openModalUBtn").addEventListener("click", function () {
    // Asegúrate de tener lat/lng de la universidad seleccionada
    const lat = parseFloat(this.dataset.lat);
    const lng = parseFloat(this.dataset.lng);

    if (!isNaN(lat) && !isNaN(lng)) {
      marker.setPosition({ lat, lng });
      map.setCenter({ lat, lng });
      map.setZoom(15);
    }

    document.getElementById("mapModal").style.display = "block";
  });

  // Cierra el modal
  document.getElementById("closeMapModal").addEventListener("click", function () {
    document.getElementById("mapModal").style.display = "none";
  });