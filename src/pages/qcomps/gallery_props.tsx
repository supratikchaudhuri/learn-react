interface GalleryItemProps {
  name: string;
  imgSrc: string;
  profession: string;
  awards: string;
  discovery: string;
}

const galleryItems: GalleryItemProps[] = [
  {
    name: "Maria Skłodowska-Curie",
    imgSrc: "https://i.imgur.com/szV5sdGs.jpg",
    profession: "physicist and chemist",
    awards:
      "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
    discovery: "polonium (element)",
  },
  {
    name: "Katsuko Saruhashi",
    imgSrc: "https://i.imgur.com/YfeOqp2s.jpg",
    profession: "geochemist",
    awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
    discovery: "a method for measuring carbon dioxide in seawater",
  },
];

const GalleryItem: React.FC<GalleryItemProps> = ({
  name,
  imgSrc,
  profession,
  awards,
  discovery,
}) => {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img className="avatar" src={imgSrc} alt={name} width={70} height={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
};

const GalleryProps: React.FC = () => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {galleryItems.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </div>
  );
};

export default GalleryProps;
