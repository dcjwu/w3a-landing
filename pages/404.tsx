import React from "react"

import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"

import error404 from "@assets/images/404.svg"
import { colorBrand } from "@constants/styles"
import { Button } from "@lib/Button/Button"
import { Heading } from "@lib/Heading/Heading"

const Custom404: NextPage = (): JSX.Element => {
   
   const router = useRouter()
   
   return (
      <div className="not-found">
         <div className="not-found__wrapper">
            <Heading color="white" component="p" variant="display">
               <span style={{ color: colorBrand }}>P</span>age <span style={{ color: colorBrand }}>n</span>ot <span style={{ color: colorBrand }}>f</span>ound
            </Heading>
            <Button ariaLabel="back-to-home-page" variant="secondary" onClick={(): Promise<boolean> => router.push("/")}>
               Return Home
            </Button>
         </div>
         <Image alt="page not found" height={600} quality={100}
                   src={error404} width={501}/>
      </div>
   )
}

export default Custom404