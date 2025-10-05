import Sidebar from "@/components/Sidebar";

const SidebarRoute = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Loadkfskd...");
    }, 500)
  );

  return <Sidebar />;
};

export default SidebarRoute;
