const mainTransition = "transition-all duration-500 ease-in-out";

const styles = {
    outerWrapper: "py-10 md:py-20 h-auto",
    footerOuterWrapper: "pt-10 md:pt-20 pb-5 md:pb-10 h-auto",
    wrapper: "max-w-[1200px] px-4 mx-auto",
    innerWrapper: "py-8 px-4 md:px-9",
    outerWrapperAppPages: "max-w-[1300px] mx-auto",

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

    // New button styles
    newGradientButton: "text-white bg-gradient-to-r from-primary via-thirdly to-[#FF00CC] rounded-full p-0.5",
    newInnerButton: `rounded-full bg-[#211f33] py-0.5 px-12 ${mainTransition} hover:bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC]`,

    primaryText: `w-fit bg-gradient-to-r from-primary via-thirdly to-secondary inline-block text-transparent bg-clip-text ${mainTransition}`,
    primaryTextOnHover: `hover:underline hover:bg-gradient-to-r from-primary via-thirdly to-secondary inline-block hover:text-transparent bg-clip-text ${mainTransition}`,

    transition500: `${mainTransition}`
};

export default styles;
