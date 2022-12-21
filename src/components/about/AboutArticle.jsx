const AboutArticle = ({ title, text }) => {
  return (
    <article className="bg-dark p-5">
      <h3 className="text-secondary text-2xl xl:text-3xl garamond mb-2">
        {title}
      </h3>
      <p className="text-light">{text}</p>
    </article>
  );
};

export default AboutArticle;
