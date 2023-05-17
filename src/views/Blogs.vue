<script>
import BlogBlock from "../components/Blog/BlogBlock.vue";
export default {
  name: "Blogs-page",
  components: {
    BlogBlock,
  },
  data() {
    return {
      img_1: require("../assets/images/marketing_mistakes.jpg"),
      img_2: require("../assets/images/marketing.jpg"),
      blogs_content: {
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
    };
  },
};
</script>

<template>
  <div class="container blogs-container">
    <h1>Senaste artiklarna från vår blogg</h1>
    <BlogBlock
      :caption="blogs_content.blog_1.caption"
      desc="I den konkurrensutsatta världen av e-handel är betald annonsering ett oumbärligt verktyg för att öka synligheten och locka potentiella kunder. 
      Trots detta är det vanligt att företag inom e-handel begår vissa misstag när det gäller betald annonsering ..."
      :img_path="img_1"
      :blog_content="blogs_content.blog_1"
    />
    <BlogBlock
      :caption="blogs_content.blog_2.caption"
      desc="Marknadsföring är en nyckelfaktor för att framgångsrikt nå ut till din målgrupp och öka försäljningen. 
      Oavsett om du driver en liten verksamhet eller är en etablerad företagare, finns det vissa beprövade tips som kan hjälpa dig..."
      :img_path="img_2"
      :blog_content="blogs_content.blog_2"
    />
  </div>
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
