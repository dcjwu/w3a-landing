import paronyanc from "@assets/images/projects/paronyanc.svg"
import qualkey from "@assets/images/projects/qualkey.svg"

export const dbProjects = {
   page: { header: "Our latest projects" },
   content: {
      data: [
         {
            header: "Qualkey",
            subheader: [
               "Blockchain",
               "Solidity",
               "NestJS",
               "AWS"
            ],
            description: "QualKey provides secure digital credentials so you can prove the authenticity of your qualification.\nThrough QualKey, you can store evidence of your qualification on a personal device, and you control what, and with whom, information is shared.",
            image: qualkey,
            color: "#0880CE",
            url: "https://www.app.qualkey.org/"
         },
         {
            header: "Karine Paronyanc",
            subheader: [
               "Strapi",
               "NextJS",
               "Heroku"
            ],
            description: "Karine Paronyanc is a wonderful artist with a hundreds of magnificent paintings.\nHer website is a gallery where you can explore her work and dive into many different chapters of her professional carrier and witness various painting styles.",
            image: paronyanc,
            color: "#FFFFFF",
            url: "https://karineparonyanc.com/"
         }
      ]
   }
}