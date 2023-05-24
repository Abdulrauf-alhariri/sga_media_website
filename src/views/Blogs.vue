<script>
import BlogBlock from "../components/Blog/BlogBlock.vue";
import NavBar from "../components/Home/NavBar.vue";
import Footer from "../components/Home/Footer.vue";
export default {
  name: "Blogs-page",
  components: {
    BlogBlock,
    NavBar,
    Footer,
  },
  data() {
    let en_status = this.$store.getters.getEnglishStatus;
    return {
      img_1: require("../assets/images/marketing_mistakes.jpg"),
      img_2: require("../assets/images/marketing.jpg"),
      sv_flag: require("../assets/icons/sweden.jpg"),
      en_flag: require("../assets/icons/usa.jpg"),
      call_link: "https://calendly.com/abdullrauf-alhariri-yjc/45-min-meeting",
      blogs_content_sv: {
        blog_1: {
          caption: "Vanliga misstag inom betald annonsering inom e-handel",
          author_info: ["Abdullrauf Alhariri", "11 maj 2023"],
          intro: `I den konkurrensutsatta världen av e-handel är betald annonsering ett oumbärligt verktyg för att öka synligheten och locka potentiella kunder. 
            Trots detta är det vanligt att företag inom e-handel begår vissa misstag när det gäller betald annonsering, 
            vilket kan leda till slöseri med budget och utebliven avkastning på investeringen. 
            I denna artikel kommer vi att diskutera några vanliga misstag inom betald annonsering inom e-handel och hur man undviker dem.`,

          paragraphs: [
            [
              `1. Otillräcklig sökordsforskning: En av de största felen inom betald annonsering är 
            bristen på noggrann sökordsforskning. Att inte identifiera de mest relevanta och 
            effektiva sökorden kan leda till att annonserna visas för en irrelevant publik eller att de inte når fram till potentiella kunder. 
            Genom att investera tid i att genomföra grundlig sökordsforskning kan man säkerställa att annonserna når rätt målgrupp och genererar högre konverteringsfrekvenser.`,
            ],
            [
              `2. Felaktig målgruppsinriktning: Att inte rikta in annonskampanjer mot rätt målgrupp kan vara ett kostsamt misstag. 
              Inom e-handel är det viktigt att vara noggrann med att definiera och välja den mest relevanta målgruppen för varje annonskampanj. 
              Genom att använda olika segmenteringsalternativ, såsom demografi, intressen och beteende, kan man förbättra precisionen i målgruppsinriktningen och därigenom öka chanserna för att nå framgång med annonserna.`,
            ],
            [
              `3. Felaktig användning av annonsformat: Att inte anpassa annonsformat efter plattformen eller kanalen kan minska effektiviteten av annonskampanjen. 
            Varje plattform har sina egna specifika krav och bästa praxis för annonser. Att inte ta hänsyn till detta kan resultera i oattraktiva och icke-engagerande annonser. 
            Genom att optimera annonserna för varje kanal och använda rätt format, såsom bilder, videor eller karuseller, 
            kan man förbättra annonsens synlighet och locka fler klick och konverteringar.`,
            ],
            [
              `4. Bristfällig annonshantering och optimering:
            Att inte övervaka och optimera annonskampanjer kontinuerligt kan leda till ineffektiv användning av marknadsföringsbudgeten. 
            Det är viktigt att regelbundet analysera resultat, justera budstrategier, testa olika annonstexter och optimera för att förbättra prestandan. 
            Genom att använda analysverktyg och ha en noggrann uppföljning av kampanjer kan man identifiera vad som fungerar och vad som bör förbättras.
            `,
            ],
          ],
        },
        blog_2: {
          caption: "Effektiva marknadsföringstips för att lyckasg",
          author_info: ["Abdullrauf Alhariri", "12 maj 2023"],
          intro: `Marknadsföring är en nyckelfaktor för att framgångsrikt nå ut till din målgrupp och öka försäljningen. 
          Oavsett om du driver en liten verksamhet eller är en etablerad företagare, finns det vissa beprövade tips som kan hjälpa dig att lyckas med din marknadsföringsstrategi. 
          I denna artikel kommer vi att diskutera några effektiva marknadsföringstips som du kan använda för att nå dina affärsmål.`,
          paragraphs: [
            [
              `1. Förstå din målgrupp: Att ha en djup förståelse för din målgrupp är avgörande för att skapa effektiva marknadsföringskampanjer. 
            Genom att genomföra noggrann forskning och analys kan du identifiera deras behov, preferenser och beteenden. 
            Använd denna insikt för att skräddarsy ditt budskap och dina erbjudanden så att de verkligen resonerar med din målgrupp.`,
            ],
            [
              `2. Bygg en stark varumärkesidentitet: Ett starkt varumärke hjälper dig att sticka ut i den konkurrensutsatta marknaden. 
            Definiera din varumärkesidentitet genom att tydligt kommunicera din vision, värderingar och unika försäljningsargument. 
            Skapa en konsekvent och attraktiv visuell identitet och sprid den över olika kanaler för att bygga upp varumärkesmedvetenhet och lojalitet.`,
            ],
            [
              `3. Använd flera marknadsföringskanaler: Genom att diversifiera dina marknadsföringskanaler kan du nå en bredare publik och maximera din synlighet.
               Använd en kombination av online- och offlinekanaler, såsom sociala medier, e-postmarknadsföring, content marketing, evenemang och samarbete med influencers. 
              Anpassa din strategi efter din målgrupps preferenser och beteenden för att nå ut på bästa sätt.`,
            ],
            [
              `4. Skapa engagerande innehåll: Innehållsmarknadsföring är en kraftfull metod för att locka och engagera din målgrupp. 
            Skapa relevant och värdefullt innehåll som är anpassat efter din målgrupps intressen och behov. Använd olika format, såsom blogginlägg, videor, infografik och podcasts, för att variera din kommunikation och nå olika typer av användare. 
            Kom ihåg att prioritera kvalitet framför kvantitet.`,
            ],
            [
              `5. Bygg starka kundrelationer: Att bygga och underhålla starka kundrelationer är avgörande för att öka lojaliteten och få återkommande affärer. 
            Skapa en positiv kundupplevelse genom att erbjuda utmärkt kundservice, snabb respons på förfrågningar och personlig interaktion. 
            Använd också incitament och belöningar för att visa uppskattning för dina kunder och up`,
            ],
          ],
        },
      },
      blogs_content_en: {
        blog_1: {
          caption: "Common Mistakes in Paid Advertising in E-commerce",
          author_info: ["Abdullrauf Alhariri", "May 11, 2023"],
          intro: `In the competitive world of e-commerce, paid advertising is an indispensable tool for increasing visibility and attracting potential customers. 
          However, it is common for e-commerce businesses to make certain mistakes when it comes to paid advertising, 
          resulting in budget wastage and lack of return on investment. In this article, we will discuss some common mistakes in paid advertising in e-commerce and how to avoid them.`,
          paragraphs: [
            [
              `1. Insufficient keyword research: One of the biggest mistakes in paid advertising is the lack of thorough keyword research. 
              Failing to identify the most relevant and effective keywords can result in ads being shown to an irrelevant audience or failing to reach potential customers.
               By investing time in conducting thorough keyword research, you can ensure that your ads reach the right target audience and generate higher conversion rates.`,
            ],
            [
              `2. Incorrect audience targeting: Not targeting ad campaigns towards the right audience can be a costly mistake. 
              In e-commerce, it is crucial to be precise in defining and selecting the most relevant audience for each ad campaign. 
              By using different segmentation options such as demographics, interests, and behaviors, 
              you can improve the accuracy of audience targeting and thereby increase the chances of success with your ads.`,
            ],
            [
              `3. Incorrect use of ad formats: Failing to adapt ad formats to the platform or channel can diminish the effectiveness of your ad campaign.
               Each platform has its specific requirements and best practices for ads. Not taking this into account can result in unattractive and non-engaging ads. 
               By optimizing your ads for each channel and using the appropriate formats, such as images, videos, or carousels, you can enhance ad visibility and attract more clicks and conversions.`,
            ],
            [
              `4. Inadequate ad management and optimization: Failing to monitor and optimize ad campaigns continuously can lead to inefficient use of marketing budget. 
              It is essential to regularly analyze results, adjust bidding strategies, test different ad texts, and optimize to improve performance. By utilizing analytics tools and closely tracking your campaigns, you can identify what works and what needs improvement.`,
            ],
          ],
        },

        blog_2: {
          caption: "Effective Marketing Tips for Success",
          author_info: ["Abdullrauf Alhariri", "May 12, 2023"],
          intro: `Marketing is a key factor in successfully reaching your target audience and increasing sales. 
          Whether you are running a small business or an established entrepreneur, there are some proven tips that can help you succeed with your marketing strategy.
           In this article, we will discuss some effective marketing tips that you can use to achieve your business goals.`,
          paragraphs: [
            [
              `1. Understand your target audience: Having a deep understanding of your target audience is crucial for creating effective marketing campaigns. 
              Through thorough research and analysis, you can identify their needs, preferences, and behaviors. 
              Use this insight to tailor your messaging and offers in a way that truly resonates with your target audience.`,
            ],
            [
              `2. Build a strong brand identity: A strong brand helps you stand out in the competitive market. 
              Define your brand identity by clearly communicating your vision, values, and unique selling propositions. 
              Create a consistent and appealing visual identity and spread it across various channels to build brand awareness and loyalty.`,
            ],
            [
              `3. Use multiple marketing channels: By diversifying your marketing channels, you can reach a broader audience and maximize your visibility. 
              Utilize a combination of online and offline channels, such as social media, email marketing, content marketing, events, and collaboration with influencers. 
              Adapt your strategy based on your target audience's preferences and behaviors to reach them effectively.`,
            ],
            [
              `4. Create engaging content: Content marketing is a powerful method to attract and engage your target audience. 
              Create relevant and valuable content tailored to your audience's interests and needs. Use various formats such as blog posts, videos, infographics, and podcasts to diversify your communication and reach different types of users.
               Remember to prioritize quality over quantity.`,
            ],
            [
              `5. Build strong customer relationships: Building and maintaining strong customer relationships is crucial for increasing loyalty and generating repeat business. 
              Create a positive customer experience by offering excellent customer service, prompt responses to inquiries, and personal interaction. Also,
               use incentives and rewards to show appreciation for your customers and encourage their loyalty.`,
            ],
          ],
        },
      },
      english_status: en_status,
    };
  },
  methods: {
    change() {
      // Getting the current language, 0 represent swedish and 1 english
      let status = this.$store.getters.getEnglishStatus;
      this.english_status = status;
    },
  },
};
</script>

<template>
  <NavBar
    :sv_flag="sv_flag"
    :en_flag="en_flag"
    :call_link="call_link"
    @changeLang="change"
  />
  <div v-if="!english_status" class="container blogs-container sv">
    <h1>Senaste artiklarna från vår blogg</h1>
    <BlogBlock
      :caption="blogs_content_sv.blog_1.caption"
      desc="I den konkurrensutsatta världen av e-handel är betald annonsering ett oumbärligt verktyg för att öka synligheten och locka potentiella kunder. 
      Trots detta är det vanligt att företag inom e-handel begår vissa misstag när det gäller betald annonsering ..."
      :img_path="img_1"
      :blog_content_sv="blogs_content_sv.blog_1"
      :blog_content_en="blogs_content_en.blog_1"
      btn_text="Läsa mer!"
    />
    <BlogBlock
      :caption="blogs_content_sv.blog_2.caption"
      desc="Marknadsföring är en nyckelfaktor för att framgångsrikt nå ut till din målgrupp och öka försäljningen. 
      Oavsett om du driver en liten verksamhet eller är en etablerad företagare, finns det vissa beprövade tips som kan hjälpa dig..."
      :img_path="img_2"
      :blog_content_sv="blogs_content_sv.blog_2"
      :blog_content_en="blogs_content_en.blog_2"
      btn_text="Läsa mer!"
    />
  </div>
  <div v-if="english_status" class="container blogs-container sv">
    <h1>The latest articles from our blog</h1>
    <BlogBlock
      :caption="blogs_content_en.blog_1.caption"
      desc="In the competitive world of e-commerce, paid advertising is an indispensable tool for increasing visibility and attracting potential customers. 
          However, it is common for e-commerce businesses to make ..."
      :img_path="img_1"
      :blog_content_en="blogs_content_en.blog_1"
      :blog_content_sv="blogs_content_sv.blog_1"
      btn_text="Read more!"
    />
    <BlogBlock
      :caption="blogs_content_en.blog_2.caption"
      desc="Marketing is a key factor in successfully reaching your target audience and increasing sales. 
          Whether you are running a small business or an established entrepreneur, there are some proven tips that can help you ..."
      :img_path="img_2"
      :blog_content_en="blogs_content_en.blog_2"
      :blog_content_sv="blogs_content_sv.blog_2"
      btn_text="Read more!"
    />
  </div>
  <Footer :en="english_status" />
</template>

<style scoped>
.blogs-container {
  padding-top: var(--section-padding);
  min-height: 90vh;
  background-color: #fff;
}

.blogs-container h1 {
  color: var(--headers-color);
}
</style>
