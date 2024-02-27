export enum DeviceBreakpoints {
  Mobile = 600,
  Tablet = 768,
  Laptop = 1024,
  Desktop = 1200,
}

export const isMobile = (width: number) => width < DeviceBreakpoints.Mobile
