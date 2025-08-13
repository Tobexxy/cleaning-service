import simg from "/public/images/service/car1.jpg";
import simg2 from "/public/images/service/seas.jpg";
import simg3 from "/public/images/service/mo1.jpg";
import simg4 from "/public/images/service/k1.jpg";
import simg5 from "/public/images/service/ba1.jpg";
import simg6 from "/public/images/service/wi1.jpg";
import simg7 from "/public/images/service/car1.jpg";
import simg8 from "/public/images/service/ba1.jpg";
import simg9 from "/public/images/service/ta2.jpg";
import simg10 from "/public/images/service/comp1.jpg";
import simg11 from "/public/images/service/off1.jpg";
import simg12 from "../public/images/service/curtain2.jpg";

import sIcon1 from "/public/images/icon/carpet.svg";
import sIcon2 from "/public/images/icon/season.svg";
import sIcon3 from "/public/images/icon/express-delivery.svg";
import sIcon4 from "/public/images/icon/cutlery.svg";
import sIcon5 from "/public/images/icon/shower.svg";
import sIcon6 from "/public/images/icon/1.svg";
import sIcon7 from "/public/images/icon/2.svg";
import sIcon8 from "/public/images/icon/3.svg";
import sIcon9 from "/public/images/icon/workplace.png";
import sIcon10 from "/public/images/icon/computer.png";
import sIcon11 from "/public/images/icon/group.png";
import sIcon12 from "/public/images/icon/win.png";

import sSingleimg1 from "/public/images/service/car2.jpg";
import sSingleimg2 from "/public/images/service/car3.jpg";
import sSingleimg3 from "/public/images/service/s2.jpg";
import sSingleimg4 from "/public/images/service/s3.jpg";
import sSingleimg5 from "/public/images/service/mo4.jpg";
import sSingleimg6 from "/public/images/service/mo3.jpg";
import sSingleimg7 from "/public/images/service/k2.jpg";
import sSingleimg8 from "/public/images/service/k3.jpg";
import sSingleimg9 from "/public/images/service/ba2.jpg";
import sSingleimg10 from "/public/images/service/ba3.jpg";
import sSingleimg11 from "/public/images/service/wi3.jpg";
import sSingleimg12 from "/public/images/service/mi2.jpg";
import sSingleimg13 from "/public/images/service/car2.jpg";
import sSingleimg14 from "/public/images/service/car3.jpg";
import sSingleimg15 from "/public/images/service/b4.jpg";
import sSingleimg16 from "/public/images/service/ba3.jpg";
import sSingleimg17 from "/public/images/service/ta1.jpg";
import sSingleimg18 from "/public/images/service/off2.jpg";
import sSingleimg19 from "/public/images/service/off2.jpg";
import sSingleimg20 from "/public/images/service/comp2.jpg";
import sSingleimg21 from "/public/images/service/off3.jpg";
import sSingleimg22 from "/public/images/service/off2.jpg";
import sSingleimg23 from "../public/images/service/curtain1.jpg";
import sSingleimg24 from "/public/images/service/mi2.jpg";

const Services = [
  {
    Id: "1",
    sImg: simg,
    sIcon: sIcon1,
    sTitle: "Carpet",
    slug: "Carpet",
    description:
      "We deep clean carpets to remove dirt, stains, and allergens, restoring freshness and extending the life of your flooring.",
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
  },
  {
    Id: "2",
    sImg: simg2,
    sIcon: sIcon2,
    sTitle: "Seasonal",
    slug: "Seasonal",
    description:
      "Whether it's spring cleaning or prepping for the holidays, our seasonal service gives your space a top-to-bottom refresh.",
    ssImg1: sSingleimg3,
    ssImg2: sSingleimg4,
  },
  {
    Id: "3",
    sImg: simg3,
    sIcon: sIcon3,
    sTitle: "Moving",
    slug: "Express",
    description:
      "Whether you're moving in or handing over keys, we provide thorough cleans to make the space look its best.",
    ssImg1: sSingleimg5,
    ssImg2: sSingleimg6,
  },
  {
    Id: "4",
    sImg: simg4,
    sIcon: sIcon4,
    sTitle: "Kitchen",
    slug: "Kitchen",
    description:
      "From appliances like ovens to countertops, we tackle grease, grime, and bacteria to ensure your kitchen is spotless and hygienic.",
    ssImg1: sSingleimg7,
    ssImg2: sSingleimg8,
  },
  {
    Id: "5",
    sImg: simg5,
    sIcon: sIcon5,
    sTitle: "Bathroom",
    slug: "Bathroom",
    description:
      "We disinfect and detail every surface, from tiles to toilets, leaving your bathroom sparkling and sanitized.",
    ssImg1: sSingleimg9,
    ssImg2: sSingleimg10,
  },
  {
    Id: "6",
    sImg: simg6,
    sIcon: sIcon6,
    sTitle: "Windows",
    slug: "Windows",
    description:
      "Say goodbye to smudges and streaks! We make your windows shine, letting more light in and giving your home a polished look.",
    ssImg1: sSingleimg11,
    ssImg2: sSingleimg12,
  },
  {
    Id: "7",
    sImg: simg7,
    sIcon: sIcon7,
    sTitle: "Floors & Carpets",
    slug: "Carpets",
    description:
      "Vacuuming, mopping, and deep carpet cleaning to keep your office flooring looking its best.",
    ssImg1: sSingleimg13,
    ssImg2: sSingleimg14,
  },
  {
    Id: "8",
    sImg: simg8,
    sIcon: sIcon8,
    sTitle: "Restroom",
    slug: "Glasss",
    description:
      "We clean and disinfect office restrooms, and restock essentials like paper towels, soap, and toilet paper.",
    ssImg1: sSingleimg15,
    ssImg2: sSingleimg16,
  },
  {
    Id: "9",
    sImg: simg9,
    sIcon: sIcon9,
    sTitle: "Table & Chair",
    slug: "Table",
    description:
      "We sanitize desks, chairs, and communal areas, keeping workspaces tidy and hygienic for employees.",
    ssImg1: sSingleimg17,
    ssImg2: sSingleimg18,
  },
  {
    Id: "10",
    sImg: simg10,
    sIcon: sIcon10,
    sTitle: "Computer",
    slug: "Computer",
    description:
      "We gently clean monitors, keyboards and other devices removing dust and germs without damaging sensitive equipment.",
    ssImg1: sSingleimg19,
    ssImg2: sSingleimg20,
  },
  {
    Id: "11",
    sImg: simg11,
    sIcon: sIcon11,
    sTitle: "Reception Area",
    slug: "Bathrooms",
    description:
      "First impressions count. We ensure your client-facing areas are spotless, organized, and welcoming.",
    ssImg1: sSingleimg21,
    ssImg2: sSingleimg22,
  },
  {
    Id: "12",
    sImg: simg12,
    sIcon: sIcon12,
    sTitle: "Window Blind & Curtains",
    slug: "Chair",
    description:
      "Dust and allergens collect on blinds and curtains,we clean them to keep your office air fresher and reduce irritants.",
    ssImg1: sSingleimg23,
    ssImg2: sSingleimg24,
  },
];
export default Services;
