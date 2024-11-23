const menu = [
  {
    heading: "Dashboards",
  },
  {
    icon: "cart-fill",
    text: "Default",
    link: "/",
  },
  {
    icon: "activity-round-fill",
    text: "Sales",
    link: "/sales",
  },
  {
    icon: "growth-fill",
    text: "Analytics",
    link: "/analytics",
  },
  {
    heading: "Components",
  },
  {
    icon: "layers-fill",
    text: "Ui Elements",
    active: false,
    subMenu: [
      {
        text: "Alerts",
        link: "/components/alerts",
      },
      {
        text: "Accordions",
        link: "/components/accordions",
      },
      {
        text: "Utilities",
        active: false,
        subMenu: [
          {
            text: "Borders",
            link: "/components/util-border",
          },
          {
            text: "Colors",
            link: "/components/util-colors",
          }
        ],
      },
    ],
  }];
export default menu;