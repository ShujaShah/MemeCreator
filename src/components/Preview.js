const Preview = ({ TopText, Image, BottomText }) => {
  return (
    <div className="Preview">
      <h2 className="my-3">Preview</h2>
      <div className="preview-wrapper">
        <div className="topText">
          {TopText ? TopText : "Enter Top Text Here..."}
        </div>
        <img src={Image} alt="Thumb" />
        <div className="topText">
          {BottomText ? BottomText : "Enter Bottom Text Here..."}
        </div>
      </div>
    </div>
  );
};

export default Preview;
