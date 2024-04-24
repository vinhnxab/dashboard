import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl fixed-start bg-gradient-dark ps my-3 ms-3 border-0 bg-white">
      
      <SideNav />
      <div className="sidenav-footer position-absolute w-100 bottom-0 ">
        {children}
      </div>
    </aside>
  );
}
