export function getVisibleSlides(isMobile: boolean, isTablet: boolean, configVisibleSlides: number) {
    if (isMobile) return configVisibleSlides / 4;
    if (isTablet) return configVisibleSlides / 2 ;

    return configVisibleSlides;
}