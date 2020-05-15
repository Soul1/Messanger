export type FooterProps = MSTP & MDTP

export type MSTP = {
}

export type MDTP = {
  addMessage: (message: string, date: string) => void;
}