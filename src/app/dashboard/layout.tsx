import SideBar from "../ui/dashboard/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-64">
        <SideBar />
      </div>
      <div className="grow p-8">{children}</div>
    </div>
  );
}
