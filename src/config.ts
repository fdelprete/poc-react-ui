export const ALGOLIA_APPLICATION_ID = "C3LH96ZHEX";
export const ALGOLIA_API_KEY = "b830b771e0de9fe9eca1bc562b67a546";
export const ALGOLIA_INDEX_NAME = "demo_CGI";

const config = {
  apiUrl: {
    dev: "http://localhost:3000/api/product"
  },
  components: {
    announcements: {
      firstSlide:
        "http://seekvectorlogo.com/wp-content/uploads/2018/12/red-hat-openshift-vector-logo.png",
      secondSlide:
        "http://mediasuite.co/cms/wp-content/uploads/2014/10/Samsung-S4-Wallpaper.jpg",
      thirdSlide:
        "https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/Microsoft-Logo-2012.jpg",
      fourthSlide:
        "https://www.colt.net/wp-content/uploads/2019/03/IBM-Cloud.png"
    },
    // abnormal cards content will be resolved throught Wordpress + GraphQL, this is a temporary solution.
    abnormal_cards: {
      firstCard: {
        text: "Leader di brand leader del mercato ICT",
        imageUrl:
          "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      },
      secondCard: {
        text: "Soluzioni a valore",
        imageUrl:
          "https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      },
      thirdCard: {
        text: "Il tuo distributore italiano",
        imageUrl:
          "https://d2sr9p9v571tfz.cloudfront.net/wp-content/uploads/2018/02/napoli-computer-gross-150521150748.jpg"
      }
    },
    actions: {
      become_a_customer: {
        title: "Entra nel mondo Computer Gross",
        button_text: "DIVENTA UN CLIENTE A VALORE"
      }
    },
    public_insights: {
      title: "Perché più di 10 mila aziende italiane ci hanno scelto",
      description:
        "Con oltre un Miliardo di fatturato raggiunto anche nel 2018, Computer Gross si contraddistingue nel panorama ICT per la completezza della sua offerta di prodotti, la qualità dei servizi ed il valore aggiunto che è in grado di trasferire."
    },
    footer: {
      copyright:
        "1994 - 2019 Computer Gross Italia S.p.A. © Tutti i diritti riservati - P. I. 04801490485 - C.F. 02500250168 - Cap. Soc. 40.000.000,00 i.v.",
      social_links: {
        facebook: "https://www.facebook.com/ComputerGross/",
        youtube: "https://www.youtube.com/channel/UCaJ89GmWrT7PArLj4Ko7wMQ",
        twitter: "https://twitter.com/computergross?lang=en",
        linkedin: "https://www.linkedin.com/company/computergross/"
      }
    }
  }
};

export default config;
