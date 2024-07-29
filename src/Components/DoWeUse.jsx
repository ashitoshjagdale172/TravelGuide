import React from "react";
import island from "../assets/andaman.jfif";
const DoWeUse = () => {
  return (
    <div>
      <div className=" mx-28 px-10 py-10 bg-[#CED3CD] flex flex-col  my-20 gap-10">
        <div className="text-[30px] font-[700] ml-[15%] ">Why do we use it?</div>
        <div className=" flex gap-5">
          <div className=" h-[300px] w-[120%] px-[10px] bg-[#8AA78C] flex justify-center items-center">
            <img src={island} alt="" className=" h-[280px] w-[100%]" />
          </div>
          <div className=" flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam eum
              cumque, quidem temporibus eaque corrupti possimus provident earum
              in sint blanditiis sunt fugit tenetur, veniam, sapiente porro?
              Corrupti nulla eius animi rerum ab! Quasi modi repellat labore
              odit maxime pariatur dolorum quam accusamus eius reiciendis at
              nesciunt optio aliquid doloremque, ea voluptate cumque, beatae
              tempora totam minus id nobis veritatis accusantium quia! Minus
              adipisci atque facilis ut illum. Asperiores consequuntur sapiente
              nesciunt, culpa, quos alias ut, laborum distinctio eaque corporis
              vitae quo consectetur adipisci! Quasi deserunt impedit quaerat!
              Omnis, eos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              esse sunt eum atque commodi ea ratione temporibus in aspernatur
              tenetur, officia maxime illum exercitationem natus magni ipsam
              nam, ullam a ipsa, vel consectetur culpa. Deleniti modi sapiente
              veniam, quaerat distinctio odit quidem accusantium maiores
              quisquam autem excepturi consectetur, iure commodi dicta molestiae
              ipsum inventore asperiores culpa consequatur, numquam voluptatibus
              repellendus magnam esse. Delectus sed aut totam eos, perspiciatis
              nostrum corrupti optio voluptate expedita, nisi reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoWeUse;
