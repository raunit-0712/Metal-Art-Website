export interface ContactDetails {
  whatsapp: string;
  whatsappMessage: string;
}

export interface ContactConfig {
  steel: ContactDetails;
  metal: ContactDetails;
  Metal: ContactDetails;
  art: ContactDetails;
  [key: string]: ContactDetails;
}

export const CONTACT: ContactConfig = {
  steel: {
    whatsapp: "8080414471",
    whatsappMessage:
      "Hello, I visited your website and I'm interested in your Metal Works services. Please share more details.",
  },
  metal: {
    whatsapp: "8080414471",
    whatsappMessage:
      "Hello, I visited your website and I'm interested in your Metal Works services. Please share more details.",
  },
  Metal: {
    whatsapp: "8080414471",
    whatsappMessage:
      "Hello, I visited your website and I'm interested in your Metal Works services. Please share more details.",
  },
  art: {
    whatsapp: "7388335687",
    whatsappMessage:
      "Hello, I visited your website and I'm interested in your Artwork. Please share more details.",
  },
};
