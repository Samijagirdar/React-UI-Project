import RightCards from "./RightCards";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full flex rounded-4xl flex-nowrap gap-10 overflow-x-auto w-3/4 p-6"
    >
      {props.users.map(function (elem, idx) {
        return <RightCards img={elem.img} tag={elem.tag} key={idx} id={idx} />;
      })}
    </div>
  );
};

export default RightContent;
