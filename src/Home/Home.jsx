import React from "react";

const Hero = () => {
  return (
    <div className="main-container ">
      <div className="flex md:flex-row flex-col justify-between ">
        <div className=" flex flex-col items-center justify-start w-[53%] md:my-0 my-10  mx-[20]">
          <div className="max-w-[60%]">
             
          <h1 class="padding-bottom margin-auto text-[52px]  pt-36 pb-9 font-serif leading-tight :" >Find a gift for your wife or girlfriend</h1>
          <p className="mb-6  font-serif text-[19px]">

            Struggling to find a gift or girlfriend? No  problem!
          </p>
          <a className="text-[#fffefd] bg-[#F7941E] hover:bg-[#F7941E] hover:text-white flex
           justify-center transition-all duration-300 ease-in-out items-center
            border border-[#F7941E]  max-w-[148px] w-full font-serif px-2  pt-[14px] pb-3  rounded">Find Gift Now</a>
         </div>
        </div>

        <div>
          <div className="">
            <img
              src="https://giftstore.netlify.app/assets/images/Background.png"
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between">
        <div>
          <div className="">
            <img
              src="https://giftstore.netlify.app/assets/images/Background.png"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className=" flex flex-col items-center justify-start w-[50%] md:my-0 my-10  mx-[20]">
        <div className="max-w-[60%]">
             
          <h1 class="padding-bottom margin-auto text-[52px]  pt-36 pb-9 font-serif leading-tight :" >How we work</h1>
          <p className="mb-6  font-serif text-[19px]">

          We’ve actually already asked hundreds of women what they want, and made a database with results. All you have to do is take our short survey that only takes seconds,
           and our proprietary algorithm will match you with a few perfect gift options
          </p>
          <a className="text-[#fffefd] bg-[#F7941E] hover:bg-[#F7941E] hover:text-white flex
           justify-center transition-all duration-300 ease-in-out items-center
            border border-[#F7941E]  max-w-[148px] w-full font-serif px-2  pt-[14px] pb-3  rounded">Learn More</a>
         </div>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
