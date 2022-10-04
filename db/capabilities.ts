import blockchain from "@assets/images/capabilities/blockchain.svg"
import consulting from "@assets/images/capabilities/consulting.svg"
import testing from "@assets/images/capabilities/testing.svg"
import uxui from "@assets/images/capabilities/uxui.svg"
import webmobile from "@assets/images/capabilities/webmobile.svg"

export const dbCapabilities = {
   page: { header: "Capabilities" },
   content: {
      data: [
         {
            header: "Web & Mobile Development",
            subheader: "Our web development services range from handling complex business logic to solving uncommon front-end challenges, and are designed for companies of any size and industry.",
            image: webmobile
         },
         {
            header: "Blockchain Development",
            subheader: "We provide your business with secure, transparent and decentralized blockchain solutions for companies of any size, from start-ups to large scale operations.",
            image: blockchain
         },
         {
            header: "UX/UI Design",
            subheader: "At Web3App we strive to create efficient, functional and intuitive user experience that helps users connect with business’ brand identity.",
            image: uxui
         },
         {
            header: "Software Testing & QA",
            subheader: "Our testing and development processes are fused into single activity, and are based on the Agile methodology. During the testing process we detect bugs, performance issues and other details that hinder enjoyment of the final product.",
            image: testing
         },
         {
            header: "Consulting",
            subheader: "With our assistance, you will be able to expand your knowledge of latest web technologies and identify the weaknesses of your current strategy, thus providing you with an efficient solution for your business.",
            image: consulting
         }
      ]
   }
}