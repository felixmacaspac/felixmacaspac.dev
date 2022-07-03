const RichText = ({ className, content }) => {
  const richTextContent = { __html: content };
  return (
    <>
      <div className={className} dangerouslySetInnerHTML={richTextContent} />
    </>
  );
};

export default RichText;
