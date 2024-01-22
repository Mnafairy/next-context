import { Header, Left, Right } from "@/components";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Left />
        <Right />
      </div>
    </div>
  );
};
export default Home;
