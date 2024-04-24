import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl fixed-start bg-gradient-dark ps my-3 ms-3 border-0 bg-white">
        <SideNav />
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="container">
            <form>
              <button
                className="btn btn-icon bg-gradient-primary w-100"
                type="button"
              >
                <span className="btn-inner--icon">
                  <i className="material-icons">power</i>
                </span>
                <span className="btn-inner--text">Sign out</span>
              </button>
            </form>
          </div>
          <h1 className="font-weight-light fs-6 ms-1 text-center text-white">
            Dashboard Page
          </h1>
        </div>
      </aside>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y">
        {children}
      </main>
    </>
  );
}
