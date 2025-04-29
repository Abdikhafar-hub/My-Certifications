
export interface Certificate {
  title: string;
  link: string;
  date: string;
  logo: string;
  category?: string;
}

const certificates: Certificate[] = [
  {
    title: 'Machine Learning: Stanford University',
    link: 'https://coursera.org/share/5a3950febafbd257749b803e433b606f',
    date: 'January 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1737920084/stanford_vflee8.png',
    category: 'Machine Learning'
  },
  {
    title: 'Complete Ethical Hacking Bootcamp: Packt',
    link: 'https://coursera.org/share/d3ad8198cfda0e128e3ceb63bb31ad94',
    date: 'January 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1737578077/pac_lq6u2q.png',
    category: 'Cyber Security'
  },
  {
    title: 'Meta Certified Frontend Developer',
    link: 'https://coursera.org/share/e197f4800a998dccac6b9e743ec3ba97',
    date: 'November 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1731480955/meta-logo_ifg3hz.webp',
    category: 'Developer Certifications'
  },
  {
    title: 'Security Management and Governance',
    link: 'https://coursera.org/share/342fd48a06d336533d51d742949860d4',
    date: 'December 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1735657567/uoll_r1jbxt.png',
    category: 'Cyber Security'
  },
  {
    title: 'Safaricom Hackathon: Best Portfolio Website',
    link: 'https://drive.google.com/file/d/1bg0IC0qR6RbZAw3i8nbVc_nCIj_M7-8e/view?usp=drive_link',
    date: 'January 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1737127743/saf-removebg-preview_ufqvaj.png',
    category: 'Awards'
  },
  {
    title: 'KDF leadership Command and Control',
    link: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1728573961/WhatsApp_Image_2024-10-10_at_6.24.22_PM_ju6cb4.jpg',
    date: 'February 2023',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1728680315/kdf_ve3nvg.jpg',
    category: 'Leadership'
  },
  {
    title: 'Google Certified Cyberysecurity Specialist',
    link: 'https://coursera.org/share/65d3dc954bf759173f7bdec7a8fea089',
    date: 'September 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1734848151/google_logo-google_icongoogle-512_xf8eik.webp',
    category: 'Cyber Security'
  },
  {
    title: 'Meta Certified Python Developer',
    link: 'https://coursera.org/share/00f621d9b8b161064abcf9c60bea5a4d',
    date: 'September 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1731480955/meta-logo_ifg3hz.webp',
    category: 'Developer Certifications'
  },
  {
    title: 'Microsoft Certified: C# Developer',
    link: 'https://drive.google.com/file/d/1u3-hugWMFN7RZOfXbuHoMFXgXSoZxgdo/view?usp=sharing',
    date: 'September 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1735658297/ms_vkw72d.png',
    category: 'Developer Certifications'
  },
  {
    title: 'Amazon Web Services Security Specialty',
    link: 'https://drive.google.com/file/d/1M9rb-SDKBooD91v9Lhjne2ysNZZ87zk0/view',
    date: 'October 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1735658424/aws_wibqjs.png',
    category: 'Cloud & DevOps'
  },
  {
    title: 'Microsoft 365 Certified',
    link: 'https://drive.google.com/file/d/13C9qiXPs_MQNCjvmxicd3GGzimwzGLWa/view?usp=sharing',
    date: 'December 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1734847785/m365_kml9wn.png',
    category: 'Microsoft'
  },
  {
    title: 'KDF Incident Management System',
    link: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1728573925/WhatsApp_Image_2024-10-10_at_6.24.22_PM_1_hz3lu1.jpg',
    date: 'December 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1728680315/kdf_ve3nvg.jpg',
    category: 'Management'
  },
  {
    title: 'HackerRank Javascript Developer',
    link: 'https://www.hackerrank.com/certificates/c214461cc240',
    date: 'August 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1728679743/cover_ofwonz.png',
    category: 'Developer Certifications'
  },
  {
    title: 'Microsoft Certified: Machine Learning Fundamentals',
    link: 'https://drive.google.com/file/d/1fAiMbK6WdJNsJFFNip-fMT3k_ryhKdge/view',
    date: 'September 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1729736927/av2e7cawv_l3ag1d.webp',
    category: 'Machine Learning'
  },
  {
    title: 'Microsoft Certified: GitHub Foundations',
    link: 'https://drive.google.com/file/d/1pR7qLv2fhmYW7YRqfkxj9ZLdC5_haL6l/view',
    date: 'September 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1729735546/25231_z1rbyi.png',
    category: 'Developer Certifications'
  },
  {
    title: 'Microsoft Certified: Fundamentals of Azure AI Services',
    link: 'https://drive.google.com/file/d/1f90rPZ7l5ceS0XAgv2y1SsCmzAdOdERk/view',
    date: 'September 2024',
    logo: 'https://res.cloudinary.com/dvuazircp/image/upload/v1698216904/new_portfolio/azure_lmxkhu.webp',
    category: 'Cloud & DevOps'
  },
  {
    title: 'Meta Certified Backend Developer',
    link: 'https://coursera.org/share/f8cc5522562e84a2dc629b9d91aff8ac',
    date: 'October 2024',
    logo: 'https://res.cloudinary.com/ddkkfumkl/image/upload/v1731480955/meta-logo_ifg3hz.webp',
    category: 'Developer Certifications'
  },
  {
    title: 'HackerRank Software Engineer',
    link: 'https://www.hackerrank.com/certificates/35ad602b5a7b',
    date: 'August 2024',
    logo: 'https://res.cloudinary.com/dvuazircp/image/upload/v1697061485/new_portfolio/gdsc_ddlz0h.webp',
    category: 'Developer Certifications'
  },
];

export default certificates;
