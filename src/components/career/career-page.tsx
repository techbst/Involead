import Hero from "./Hero";
import WhyInvolead from "./why-involead";
import HowWeWork from "./how-we-work";
import CurrentOpenings from "./current-openings";
import LifeInvolead from "./life-involead";
import EmployeesStories from "./employees-stories";
import ShareProfile from "./share-profile";
import StatsCounter from "../home/StatsCounter";
export default function CareerPageClient(){return <main className="overflow-hidden">
    <Hero/>
    <WhyInvolead/>
    <HowWeWork/>
    <CurrentOpenings/>
    <LifeInvolead/>
    <EmployeesStories/>
    <ShareProfile/>
    <StatsCounter />
</main>}