const AboutArticle = ({ title, text }) => {
  return (
    <article className="p-5">
      <h2 className="text-2xl xl:text-3xl garamond mb-2">{title}</h2>
      <p>{text}</p>
    </article>
  );
};

export default AboutArticle;
