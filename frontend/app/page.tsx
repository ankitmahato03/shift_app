import Home from "@/pageComponents/Home/Home";

export default async function page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, 3000);
  });

  return <Home />;
}
