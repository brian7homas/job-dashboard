// Desktop: 1920×1080, 1366×768, 1280×1024, 1024×768
// Mobile: 375×667, 414×736, 360×800, 390×844
// Tablet: 768×1024, 1024×768, 601×962

const bpDesktop = [1024, 1280, 1366, 1920]
const bpTablet = [601, 768, 1024]
const bpMobile = [360, 375, 390, 414]

export const MinWidth_1920 = bpDesktop.map(bp => `@media (min-width: ${bp}px)`)


export const MaxWidth_1024 = bpTablet.map(bp => `@media (max-width: ${bp}px)`)
