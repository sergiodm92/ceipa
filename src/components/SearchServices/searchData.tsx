import { Company } from "@/types/search";


const searchData: Company[] = [
  {
    id: 1,
    logo: "https://example.com/logo1.png",
    name: "PetroTech S.A.",
    industry: "Oil and Gas Exploration",
    description: "A leading company in the oil and gas exploration and production industry, focused on sustainable energy solutions.",
    phone: "+54 299 1234567",
    website: "https://www.petrotech.com"
  },
  {
    id: 2,
    logo: "https://example.com/logo2.png",
    name: "Energy Petroleum Co.",
    industry: "Refining and Distribution",
    description: "Specializing in the refining and distribution of petroleum products across South America.",
    phone: "+54 221 7654321",
    website: "https://www.energypetroleum.com"
  },
  {
    id: 3,
    logo: "https://example.com/logo3.png",
    name: "Green Oil Ltd.",
    industry: "Renewable Energy and Oil Production",
    description: "Combining oil production with renewable energy sources for a cleaner future in the energy sector.",
    phone: "+54 351 2345678",
    website: "https://www.greenoil.com"
  },
  {
    id: 4,
    logo: "https://example.com/logo4.png",
    name: "OilMax Corporation",
    industry: "Oil and Gas Production",
    description: "Leading producer of crude oil and natural gas with operations across North America.",
    phone: "+1 800 123 4567",
    website: "https://www.oilmaxcorp.com"
  },
  {
    id: 5,
    logo: "https://example.com/logo5.png",
    name: "DeepWater Energy",
    industry: "Offshore Drilling",
    description: "Innovating the future of offshore drilling and subsea engineering.",
    phone: "+1 800 234 5678",
    website: "https://www.deepwaterenergy.com"
  },
  {
    id: 6,
    logo: "https://example.com/logo6.png",
    name: "BlackGold Resources",
    industry: "Oil Exploration",
    description: "Exploring new oil reserves and focusing on sustainable exploration methods.",
    phone: "+1 800 345 6789",
    website: "https://www.blackgoldresources.com"
  },
  {
    id: 7,
    logo: "https://example.com/logo7.png",
    name: "Global PetroTech",
    industry: "Petroleum Technology Solutions",
    description: "Providing cutting-edge technology solutions for the petroleum industry worldwide.",
    phone: "+1 800 456 7890",
    website: "https://www.globalpetrotech.com"
  },
  {
    id: 8,
    logo: "https://example.com/logo8.png",
    name: "Prime Oil & Gas",
    industry: "Refining and Distribution",
    description: "Focused on refining and distributing high-quality petroleum products across global markets.",
    phone: "+1 800 567 8901",
    website: "https://www.primeoilgas.com"
  },
  {
    id: 9,
    logo: "https://example.com/logo9.png",
    name: "Future Petroleum Ltd.",
    industry: "Renewable Energy and Oil Production",
    description: "Investing in a greener future through the combination of renewable energy and petroleum.",
    phone: "+1 800 678 9012",
    website: "https://www.futurepetroleum.com"
  },
  {
    id: 10,
    logo: "https://example.com/logo10.png",
    name: "Energy Nexus",
    industry: "Oil and Gas Trading",
    description: "Global leader in the trading of oil and gas products, connecting suppliers with international markets.",
    phone: "+1 800 789 0123",
    website: "https://www.energynexus.com"
  },
  {
    id: 11,
    logo: "https://example.com/logo11.png",
    name: "Atlas Oil Corporation",
    industry: "Oil and Gas Exploration",
    description: "Exploring new reserves and delivering the highest quality of petroleum products worldwide.",
    phone: "+1 800 890 1234",
    website: "https://www.atlasoilcorp.com"
  },
  {
    id: 12,
    logo: "https://example.com/logo12.png",
    name: "Peak Oil Services",
    industry: "Oilfield Services",
    description: "Providing specialized services for oil exploration and production companies worldwide.",
    phone: "+1 800 901 2345",
    website: "https://www.peakoilservices.com"
  },
  {
    id: 13,
    logo: "https://example.com/logo13.png",
    name: "Alpha Petroleum Group",
    industry: "Petroleum Exploration",
    description: "Leading exploration company with a focus on the discovery of untapped oil reserves.",
    phone: "+1 800 012 3456",
    website: "https://www.alphapetroleumgroup.com"
  },
  {
    id: 14,
    logo: "https://example.com/logo14.png",
    name: "NextGen Oil & Gas",
    industry: "Renewable Energy and Oil Production",
    description: "Innovating the future of oil production with sustainable and renewable energy solutions.",
    phone: "+1 800 123 6547",
    website: "https://www.nextgenoilgas.com"
  },
  {
    id: 15,
    logo: "https://example.com/logo15.png",
    name: "Royal Energy Co.",
    industry: "Oil and Gas Distribution",
    description: "Specializing in the distribution of high-quality refined oil and gas products globally.",
    phone: "+1 800 234 7658",
    website: "https://www.royalenergyco.com"
  },
  {
    id: 16,
    logo: "https://example.com/logo16.png",
    name: "Sunrise Petroleum",
    industry: "Oil Extraction and Production",
    description: "Extracting and producing high-quality petroleum resources with an emphasis on environmental responsibility.",
    phone: "+1 800 345 8769",
    website: "https://www.sunrisepetroleum.com"
  },
  {
    id: 17,
    logo: "https://example.com/logo17.png",
    name: "Apex Oil Ltd.",
    industry: "Oilfield Services",
    description: "Providing premium services for oil extraction, production, and transportation.",
    phone: "+1 800 456 9870",
    website: "https://www.apexoil.com"
  },
  {
    id: 18,
    logo: "https://example.com/logo18.png",
    name: "Titan Energy Solutions",
    industry: "Oil Exploration and Extraction",
    description: "Exploring innovative energy solutions while focusing on oil extraction technologies.",
    phone: "+1 800 567 0981",
    website: "https://www.titanenergysolutions.com"
  },
  {
    id: 19,
    logo: "https://example.com/logo19.png",
    name: "Crescent Petroleum",
    industry: "Oil and Gas Trading",
    description: "Global trading and logistics company in the oil and gas industry, offering high-quality products.",
    phone: "+1 800 678 1092",
    website: "https://www.crescentpetroleum.com"
  },
  {
    id: 20,
    logo: "https://example.com/logo20.png",
    name: "BlueOcean Oil & Gas",
    industry: "Offshore Oil Production",
    description: "Leading the industry in offshore oil production and sustainable exploration practices.",
    phone: "+1 800 789 2103",
    website: "https://www.blueoceanoilgas.com"
  },
  {
    id: 21,
    logo: "https://example.com/logo21.png",
    name: "WestOil Exploration",
    industry: "Oil and Gas Exploration",
    description: "Committed to discovering and developing new oil reserves worldwide.",
    phone: "+1 800 890 3214",
    website: "https://www.westoilexploration.com"
  },
  {
    id: 22,
    logo: "https://example.com/logo22.png",
    name: "Noble Oil & Gas",
    industry: "Oil and Gas Extraction",
    description: "A global leader in the extraction and transportation of oil and natural gas.",
    phone: "+1 800 901 4325",
    website: "https://www.nobleoilgas.com"
  },
  {
    id: 23,
    logo: "https://example.com/logo23.png",
    name: "EcoEnergy Petroleum",
    industry: "Sustainable Oil Production",
    description: "Pioneering sustainable and eco-friendly oil production techniques.",
    phone: "+1 800 012 5436",
    website: "https://www.ecoenergypetroleum.com"
  },
  {
    id: 24,
    logo: "https://example.com/logo24.png",
    name: "Silverstone Petroleum",
    industry: "Oil Distribution",
    description: "Delivering high-quality refined oil and gas products to markets around the world.",
    phone: "+1 800 123 6547",
    website: "https://www.silverstonepetroleum.com"
  }
];

export default searchData;
