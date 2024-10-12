import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";
import GameImg from "@/components/game-pic/page";
import GameDev from "@/components/gameDev/page";
import Games from "@/components/games/page";
import Main from "@/components/main-page/page";
import Services from "@/components/Services/page";

export default function Home() {
  return (
  <div>
    <div className="container px-32 m-auto">
<GameDev/>
<Games/>
<Main/>
  </div>
<Services/>
<div className="container px-32 m-auto mb-20">
    <GameImg/>
    <Contact/>
</div>
<Footer/>

  </div>
  );
}
