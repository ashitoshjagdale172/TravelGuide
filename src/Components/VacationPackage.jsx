import React from "react";
import island from "../assets/andaman.jfif";
import island2 from "../assets/AndamanNicobar.jfif";
import VacationCompo from "./VacationCompo";
const VacationPackage = () => {
  return (
    <div>
      <div className=" mx-28 flex justify-between my-20">
        <div className="flex flex-col gap-10 w-[60%]">
          <div className="text-[30px] font-[700]">
            Featured Vacation Packege Deals
          </div>
          <VacationCompo
            images={island}
            Heading="What is Lorem ipsum?"
            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                quia quae, officiis consequuntur voluptatum, nam quod maiores,
                neque blanditiis iure molestias minima unde. Et, dicta! Ratione
                corporis voluptate suscipit magnam at consequuntur illum."
            price="$900"
          />
          <VacationCompo
            images={island2}
            Heading="Where does it come from?"
            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                quia quae, officiis consequuntur voluptatum, nam quod maiores,
                neque blanditiis iure molestias minima unde. Et, dicta! Ratione
                corporis voluptate suscipit magnam at consequuntur illum."
            price="$990"
          />
        </div>
        <div className="w-[40%] flex flex-col justify-center items-center gap-7">
          <div className=" text-[35px] font-[800]">Hot Deals</div>
          <div className=" gap-7 flex flex-col">
            <div className=" px-3 py-3 bg-[#4b5563]">
              <img src={island} alt="" className="h-[200px]" />
            </div>
            <div className=" flex flex-col text-[20px] w-[300px] gap-2">
              <div className=" flex justify-between">
                <div>vegas and More</div>
                <div>$799</div>
              </div>
              <div className=" flex justify-between">
                <div>Escape to Sunny LA</div>
                <div>$699</div>
              </div>
              <div className=" flex justify-between">
                <div>Huge Chicago Savings</div>
                <div>$599</div>
              </div>
              <div className=" flex justify-between">
                <div>Escape to Sunny LA</div>
                <div>$499</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacationPackage;
