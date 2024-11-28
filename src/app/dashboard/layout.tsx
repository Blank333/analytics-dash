import SideBar from "../ui/dashboard/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="grow p-8">{children}</div>
    </div>
  );
}
