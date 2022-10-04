import React from "react"

import classNames from "classnames/bind"

import type { ButtonType } from "@customTypes/lib"

import s from "./Button.module.scss"

const cx = classNames.bind(s)

export const Button = React.forwardRef<HTMLButtonElement, ButtonType>(({
   variant,
   children,
   ariaLabel,
   loading,
   success,
   error,
   ...props
}, ref): JSX.Element => {

   const classNamesButton = cx(s.button, {
      [variant]: variant,
      loading: loading,
      success: success,
      error: error
   })

   return (
      <button ref={ref} aria-label={ariaLabel} {...props}
              className={classNamesButton}
              disabled={loading || !!success || !!error}>
         <span>

            {loading && "Processing"}
            {success && success}
            {error && error}

            {(!loading && !success && !error) && children}

         </span>

         {variant === "unique" && <svg fill="none" height="32" viewBox="0 0 32 32"
                                       width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5625 16.1C12.5915 18.2251 14.3098 19.939 16.4375 20.9625C16.5944 21.0369 16.768 21.069 16.9412 21.0559C17.1143 21.0427 17.2811 20.9847 17.425 20.8875L20.55 18.8C20.6881 18.7064 20.8476 18.6493 21.0137 18.634C21.1799 18.6187 21.3471 18.6457 21.5 18.7125L27.35 21.225C27.5499 21.3083 27.717 21.4549 27.8254 21.6424C27.9338 21.8298 27.9776 22.0477 27.95 22.2625C27.7646 23.7097 27.0582 25.0397 25.9631 26.0038C24.8679 26.9678 23.459 27.4997 22 27.5C17.4913 27.5 13.1673 25.709 9.97918 22.5209C6.79107 19.3327 5 15.0087 5 10.5C5.00033 9.04104 5.53227 7.63214 6.49628 6.53699C7.4603 5.44183 8.79033 4.73546 10.2375 4.55004C10.4523 4.52245 10.6702 4.56623 10.8577 4.67465C11.0452 4.78307 11.1918 4.9501 11.275 5.15004L13.7875 11.0125C13.8528 11.163 13.8802 11.3272 13.8671 11.4907C13.854 11.6541 13.8009 11.8119 13.7125 11.95L11.625 15.125C11.5321 15.2686 11.4775 15.4337 11.4666 15.6044C11.4556 15.7751 11.4887 15.9457 11.5625 16.1V16.1Z"
               stroke="white" strokeLinecap="round"
               strokeLinejoin="round" strokeWidth="1.5"/>
            <path d="M21 6.5H26V11.5" stroke="white" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
            <path d="M20 12.5L26 6.5" stroke="white" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
         </svg>}

         {loading && <svg height="58" viewBox="0 0 58 58" width="58"
                          xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
               <g stroke="#FFF" strokeWidth="1.5" transform="translate(2 1)">
                  <circle cx="42.601" cy="11.462" fill="#fff"
                          fillOpacity="1" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="1;0;0;0;0;0;0;0"/>
                  </circle>
                  <circle cx="49.063" cy="27.063" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;1;0;0;0;0;0;0"/>
                  </circle>
                  <circle cx="42.601" cy="42.663" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;1;0;0;0;0;0"/>
                  </circle>
                  <circle cx="27" cy="49.125" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;1;0;0;0;0"/>
                  </circle>
                  <circle cx="11.399" cy="42.663" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;0;1;0;0;0"/>
                  </circle>
                  <circle cx="4.938" cy="27.063" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;0;0;1;0;0"/>
                  </circle>
                  <circle cx="11.399" cy="11.462" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;0;0;0;1;0"/>
                  </circle>
                  <circle cx="27" cy="5" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;0;0;0;0;1"/>
                  </circle>
               </g>
            </g>
         </svg>}

         {success && <svg fill="none" height="25" viewBox="0 0 24 25"
                          width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.25 7.25L9.75 17.75L4.5 12.5" stroke="white" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
         </svg>}

      </button>
   )
})

Button.displayName = "Button"