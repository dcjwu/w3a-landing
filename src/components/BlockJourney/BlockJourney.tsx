import React from "react"

import { CSSTransition, SwitchTransition } from "react-transition-group"

import { BlockJourneyItem } from "@components/BlockJourney/BlockJourneyItem"
import { ActiveItemEnum } from "@customTypes/components"
import { dbJourney } from "@db/journey"
import { Heading } from "@lib/Heading/Heading"
import { ProcessNext } from "@lib/ProcessNext/ProcessNext"
import { Text } from "@lib/Text/Text"
import { useIsElementOnScreen } from "@hooks/useIsElementOnScreen"

import s from "./BlockJourney.module.scss"

export const BlockJourney: React.FC = (): JSX.Element => {

   const nodeRef = React.useRef<HTMLElement>(null)
   const ref = React.useRef<HTMLDivElement>(null)
   const isElementOnScreen = useIsElementOnScreen(false, ref)

   const [activeItem, setActiveItem] = React.useState<ActiveItemEnum>(ActiveItemEnum.Analysis)

   const handleActivateItem = (item: ActiveItemEnum): void => {
      setActiveItem(item)
   }

   const handleGetDescription = React.useCallback((): string => {
      const index = dbJourney.content.data.findIndex(item => item.header === activeItem)
      return dbJourney.content.data[index].description
   }, [activeItem])


   React.useEffect(() => {
      const activeItemsArray = Object.values(ActiveItemEnum)
      const index = activeItemsArray.indexOf(activeItem)

      const interval = setInterval(() => {
         if (index >= 0 && index < activeItemsArray.length - 1) {
            const nextItem = activeItemsArray[index + 1]
            setActiveItem(nextItem)
         } else {
            setActiveItem(ActiveItemEnum.Analysis)
         }
      }, isElementOnScreen ? 8000 : 1000000)

      return () => {
         clearInterval(interval)
      }
   }, [isElementOnScreen, activeItem])

   return (
      <div className={s.block} ref = {ref}>

         <div className={s.wrapper} data-aos="fade-down">

            {dbJourney.content.data.map((item, index) => (
               <React.Fragment key={item.header}>
                  <BlockJourneyItem handleActivateItem={handleActivateItem} header={item.header as ActiveItemEnum}
                                    isActive={activeItem === item.header}
                                    number={index + 1}/>
                  <ProcessNext active={activeItem === item.header}/>
               </React.Fragment>
            ))}

         </div>

         <div className={s.description} data-aos="fade-down">
            <Heading color="white" component="h3"
                     style={{ marginBottom: "2.4rem" }}
                     variant="h1">
               {activeItem}
            </Heading>
            <SwitchTransition mode="out-in">
               <CSSTransition key={handleGetDescription()} addEndListener={(done): void => {
                  nodeRef.current && nodeRef.current.addEventListener("transitionend", done, false)
               }}
                              classNames="fade"
                              nodeRef={nodeRef}
               >
                  <Text ref={nodeRef} color="white" component="p"
                        variant="paragraph-lg">
                     {handleGetDescription()}
                  </Text>
               </CSSTransition>
            </SwitchTransition>
         </div>

      </div>
   )
}