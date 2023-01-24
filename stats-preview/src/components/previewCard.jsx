const PreviewCard = () => {
  return (
    <div className="bg-desaturatedBlue lg:h-[435px] lg:w-[1050px] sm:h-[760px] sm:w-[320px] lg:grid lg:grid-cols-2 sm:flex sm:flex-col-reverse sm:justify-center border rounded-lg border-transparent">
      <div className="lg:flex lg:flex-col lg:mt-[80px] lg:ml-[65px] lg:mr-[110px] lg:mx-4 sm:mx-8 sm:text-center sm:mb-6">
        <p className="text-white lg:text-4xl sm:text-3xl font-lexandDeca mb-6">
          Get <span className="text-softViolet">insights</span> that help your
          business grow.
        </p>
        <p className="text-slightlyTransparentWhite text-md lg:mt-8 font-lexandDeca sm:my-4 ">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="lg:grid lg:grid-cols-3 lg:mt-12 font-lexandDeca sm:flex sm:flex-col mb-4 gap-3">
          <div>
            <p className="text-white font-bold lg:text-2xl sm:text-xl mb-1">
              10k+
            </p>
            <p className="text-slightlyTransparentWhite sm:text-sm mb-2">
              COMPANIES
            </p>
          </div>
          <div>
            <p className="text-white font-bold lg:text-2xl sm:text-xl mb-1">
              314
            </p>
            <p className="text-slightlyTransparentWhite sm:text-sm mb-2">
              TEMPLATES
            </p>
          </div>
          <div>
            <p className="text-white font-bold lg:text-2xl sm:text-xl mb-1">
              12M+
            </p>
            <p className="text-slightlyTransparentWhite sm:text-sm mb-2">
              QUERIES
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-0">
        <picture>
          <source
            media="(min-width: 1100px)"
            srcSet={require("../assets/images/image-header-desktop.jpg")}
            className="w-full h-full"
          />
          <source
            media="(min-width: 375px)"
            srcSet={require("../assets/images/image-header-mobile.jpg")}
          />
          <img
            src={require("../assets/images/image-header-desktop.jpg")}
            className="sm:w-[320px] border lg:rounded-r-lg  sm:rounded-t-lg border-transparent lg:w-auto lg:h-auto"
            alt="groupe of people"
          />
        </picture>
      </div>
    </div>
  );
};

export default PreviewCard;
