import Card from "@/components/ui/Card";

const cardItem = [
  {
    number: 1,
    url: "/",
    linkText: "Read More",
    color: "green",
    pattern: "lines",
  },
  {
    number: 2,
    url: "/",
    linkText: "Read More",
    color: "purple",
  },
  {
    number: 3,
    url: "/",
    linkText: "Read More",
    color: "yellow",
    active: true,
  },
  {
    number: 4,
    url: "/",
    linkText: "Read More",
    color: "blue",
  },
 
];

export default function Aboutpage() {
  return (
    <section className="hero-banner py-100">
      <div className="container">
        <div className="text-center">
          <h1>Loren Class Ipsum Donet</h1>
          <p>Loren Class Ipsum Donet</p>
        </div>
        <div className="card-container">
          {cardItem.map((card, key) => (
            <Card
              key={key}
              color={card.color}
              active={card.active}
              number={card.number}
              href={card.url}
              linkText={card.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
