import { add } from "@/utils";

const ServerComponent = () => {
  const result = add(1, 2);
  console.log(result);
  return <div>ServerComponent : {result}</div>;
};

export default ServerComponent;
