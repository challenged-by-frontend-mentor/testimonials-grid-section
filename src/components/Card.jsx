import DanielCliffordAvatar from "../assets/image-daniel.jpg";
import JonathanWaltersAvatar from "../assets/image-jonathan.jpg"
import JeanetteHarmonAvatar from "../assets/image-jeanette.jpg"
import PatrickAbramsAvatar from "../assets/image-patrick.jpg"
import KiraWhittleAvatar from "../assets/image-kira.jpg"

const CARD_DATA = [
  {
    id: 1,
    name: "Daniel Clifford",
    status: "Verified Graduate",
    highlight:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    review:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    cardColor: "purple",
    avatarPath: DanielCliffordAvatar,
    gridArea: "hero",
  },
  {
    id: 2,
    name: "Jonathan Walters",
    status: "Verified Graduate",
    highlight: "The team was very supportive and kept me motivated",
    review:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
    cardColor: "grey",
    avatarPath: JonathanWaltersAvatar,
    gridArea: "jonathan",
  },
  {
    id: 3,
    name: "Jeanette Harmon",
    status: "Verified Graduate",
    highlight: "An overall wonderful and rewarding experience",
    review:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
    cardColor: "white",
    avatarPath: JeanetteHarmonAvatar,
    gridArea: "jeanette",
  },
  {
    id: 4,
    name: "Patrick Abrams",
    status: "Verified Graduate",
    highlight:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    review:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    cardColor: "dark-blue",
    avatarPath: PatrickAbramsAvatar,
    gridArea: "patrick",
  },
  {
    id: 5,
    name: "Kira Whittle",
    status: "Verified Graduate",
    highlight: "Such a life-changing experience. Highly recommended!",
    review:
    "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
    cardColor: "white",
    avatarPath: KiraWhittleAvatar,
    gridArea: "kira",
  },
];

const Card = () => {
  return (
    <div className="testimonials-grid">
      {CARD_DATA.map((data) => (
        <article
          className={`testimonial-card testimonial-card--${data.cardColor} testimonial-card--${data.gridArea}`}
          key={data.id}
        >
          <header className="testimonial-card__account">
            <img
              src={data.avatarPath}
              alt=""
              className="testimonial-card__avatar"
            />
            <div className="testimonial-card__author">
              <span className="testimonial-card__author-name">{data.name}</span>
              <span className="testimonial-card__author-status">{data.status}</span>
            </div>
          </header>
          <h2 className="testimonial-card__highlight">{data.highlight}</h2>
          <blockquote className="testimonial-card__quote">
            <p className="testimonial-card__review">{data.review}</p>
          </blockquote>
        </article>
      ))}
    </div>
  );
}

export default Card