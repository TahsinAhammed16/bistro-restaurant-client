/* eslint-disable react/prop-types */

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-2/5 my-8 pt-8">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h3 className="text-2xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
