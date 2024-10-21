const mainTransition = "transition-all duration-500 ease-in-out"

const styles = {
    outerWrapper: "py-20 sm:py-32 md:py-36 h-auto",
    footerOuterWrapper: "pt-20 sm:pt-32 md:pt-36 pb-10 sm:pb-22 md:pb-26 h-auto",
    wrapper: "max-w-[1200px] px-4 mx-auto",

    heroHeading: "text-5xl sm:text-6xl md:text-7xl font-bold",
    heading1: "text-4xl sm:text-5xl md:text-6xl font-bold",
    heading2: "text-3xl sm:text-4xl md:text-5xl font-semibold",
    heading3: "text-2xl sm:text-3xl md:text-4xl font-semibold",
    heading4: "text-xl sm:text-2xl md:text-3xl font-medium",
    heading5: "text-lg sm:text-xl md:text-2xl font-medium",
    paragraph1: "text-lg sm:text-xl md:text-2xl font-medium max-w-[60ch]",
    paragraph2: "text-base sm:text-lg md:text-xl font-medium max-w-[60ch]",
    paragraph3: "text-sm sm:text-base md:text-lg max-w-[60ch]",
    paragraph4: "text-xs sm:text-sm md:text-base max-w-[60ch]",

    primaryBackground: "bg-primary-gradient-color",
    primaryButton: "px-6 py-1 rounded-full bg-primary-gradient-color hover:bg-primary-gradient-color-invert text-center h-fit",
   


    primaryText: `w-fit bg-gradient-to-r from-primary via-primary to-secondary inline-block text-transparent bg-clip-text ${mainTransition}`,
    primaryTextOnHover: `hover:underline hover:bg-gradient-to-r from-primary via-primary to-secondary inline-block hover:text-transparent bg-clip-text ${mainTransition}`,

    transition500: `${mainTransition}`
}

export default styles;