const xstore = {
  name: "Insiderum - Crypto Venture Capital",
  title: "Insiderum - Crypto Venture Capital",
  description: "",
  faviconUrl: "/favicon.ico",
  socialThumbUrl: "/images/logo.svg", // ảnh để share lên mạng xã hội <meta og:image/>
  page: {
    header: {
      logo: {
        title: "Satochain",
        imageUrl: "/images/logo.svg",
      },
      logoFooter: {
        title: "IRONChain Bank",
        imageUrl: "/images/logo-footer.svg",
      },
      menuItem: [
        {
          id: 1,
          title: "Mint Rune",
          url: "/mint-key",
          icon: "",
          isHot: true,
        },
        {
          id: 2,
          title: "Dashboard",
          url: "/dashboard",
          icon: "",
          anotherPage: true,
        },
        {
          id: 3,
          title: "Staking",
          url: "/stalking",
          icon: "",
        },
        {
          id: 4,
          title: "Airdrop",
          url: "/air-drop",
          icon: "",
        },
        {
          id: 5,
          title: "Swap",
          icon: "",
          isComingSoon: true,
        },
        {
          id: 6,
          title: "Explorer",
          icon: "",
          isComingSoon: true,
        },
        {
          id: 7,
          title: "Bridge",
          icon: "",
          isComingSoon: true,
        },
      ],

      menu: "/images/menu.svg",
      backgroundColor: "#f9f9f9",
    },
    banner: {
      backgroundUrl: "/images/background.png",
      backgroundColor: "",
      title: "Shinobi Community Like Never Before",
      subTitle: "NFT minted. Mint live",
      displayMintBox: 1,
      mintCount: "2,3,5",
      linkButtonHref: "#",
      linkButtonTitle: "Get here",
    },
    footer: {
      logo: {
        imageUrl: "",
        title: "Join Us Today To Meet Most Amazing Community Ever.",
        subTitle: "Copyright ©2022 All rights reserved Shinobi Bunny",
        imgFooterUrl: "/images/footer-bg.png",
      },
      backgroundColor: "#0C0C0C",
      menuFooter: [
        {
          title: "TWITTER",
          url: "https://twitter.com/SatochainL2",
          icon: "/images/icon/twitter.svg",
        },
        {
          title: "DISCORD",
          url: "https://discord.com/invite/satochain",
          icon: "/images/icon/discord.svg",
        },
      ],
    },
  },
  fontFamily: "Font",
  fontUrl: "/fonts/FiraSans-Regular.ttf",
  fontHeading: "Font Heading",
  fontUrlHeading: "/fonts/FiraSans-Regular.ttf",
  fontSizeBody: "14px",
  fontSizeHeading: "20px",
  primaryColor: "#F0B90B",
  headingColor: "#fff",
  textColor: "#fff",
  textColorInput: "#fff",
  ethereumNetwork: "",
};

export default xstore;
