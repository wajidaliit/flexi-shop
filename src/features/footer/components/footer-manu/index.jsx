import facebook from '../../../../assets/footer/facebook.svg'
import instagram from '../../../../assets/footer/instagram.svg'
import twitter from '../../../../assets/footer/twitter.svg'
import youtube from '../../../../assets/footer/youtube.svg' 
 
export const footerData = {
  aboutText:
    "We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting.",
    socialMedia: [
      { name: "Facebook", icon: facebook, url: "https://www.facebook.com" },  
      { name: "Twitter", icon: twitter, url: "https://www.twitter.com" },
      { name: "Instagram", icon: instagram, url: "https://www.instagram.com" },
      { name: "YouTube", icon: youtube, url: "https://www.youtube.com" },
    ],
  sections: [
    {
      title: "Shopping Online",
      links: [
        { name: "Order Status", href: "/order-status" },
        { name: "Shipping & Delivery", href: "/shipping-delivery" },
        { name: "Returns", href: "/returns" },
        { name: "Payment Options", href: "/payment-options" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Gift Card", href: "/gift-card" },
        { name: "Find a store", href: "/find-store" },
        { name: "Newsletter", href: "/newsletter" },
        { name: "Become a member", href: "/become-member" },
        { name: "Site feedback", href: "/site-feedback" },
      ],
    },
    {
      title: "Contact",
      contactInfo: [
        "store@mail.com",
        "Tel: +91 1234 5678 99",
      ],
    },
  ],
  copyRight: `© ${new Date().getFullYear()} Copyrights. All Right Reserved`,
};