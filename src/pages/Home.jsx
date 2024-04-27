export const Home = () => {
  return (
    <div className="h-screen">
      <div className="px-40 bg-cyan-100 flex flex-row justify-center">
        <div className="w-1/2">
        <h1 className="  text-4xl font-bold ">
          Hey there, I am Sonika Chaudhary Fullstack Web Developer
        </h1>
        <p className=" pb-6 text-l font-normal">
          I am flexible and adaptable when it comes to different projects and
          learn new things
        </p>
        <h2 className="font-bold">Skills:- HTML, Javascript, CSS, Reactjs, Redux, Nodejs, Typescript, MongoDB, Expressjs and Tailwindcss</h2>
        </div>
        <div className="w-1/3 h-72">
        <img className="h-80 shadow-lg rounded-lg" src="https://res.cloudinary.com/dej1tezib/image/upload/v1713631456/portfolio_pic_j50c8m.jpg" alt="Graphic"/>
        </div>
        
      </div>
    </div>
  );
};
