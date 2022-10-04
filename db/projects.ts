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
            description: "QualKey provides secure digital credentials so you can prove the authenticity of your qualification.\nThrough QualKey, you can store evidence of your qualification on Header personal device, and you control what, and with whom, information is shared.",
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
            description: "QualKey provides secure digital credentials so you can prove the authenticity of your qualification.\nThrough QualKey, you can store evidence of your qualification on Header personal device, and you control what, and with whom, information is shared.",
            image: paronyanc,
            color: "#FFFFFF",
            url: "https://karineparonyanc.com/"
         }
      ]
   }
}