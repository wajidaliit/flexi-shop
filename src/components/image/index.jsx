import PropTypes from "prop-types";

export default function Image(props) {
  const { src, alt = "image", width, height, className = "", ...rest } = props;
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={` ${className}`}
        {...rest}
      />
    </>
  );
}

Image.propTypes = { 
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string, 
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};
