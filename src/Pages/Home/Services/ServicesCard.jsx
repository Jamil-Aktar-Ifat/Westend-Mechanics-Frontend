import { IoMdArrowForward } from "react-icons/io";

const ServicesCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card bg-base-100 w-96 border">
      <figure className="px-5 pt-5">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-xl">{title}</h2>
        <div className=" text-orange-500 flex items-center justify-between ">
          <p className=" text-lg">Price: {price}</p>

          <button className=" text-2xl ">
            <IoMdArrowForward></IoMdArrowForward>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
