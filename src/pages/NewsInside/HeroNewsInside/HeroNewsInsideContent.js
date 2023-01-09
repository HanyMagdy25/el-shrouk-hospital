function HeroNewsInsideContent({ articleInside }) {
  return (
    <div className="heroNewsInsideContent mt-10 pb-6 md:pb-0 lg:mt-14 px-5 lg:px-0">
      <p className="font-bold text-lg">{articleInside.title}</p>
    </div>
  );
}

export default HeroNewsInsideContent;
