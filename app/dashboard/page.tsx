export default function Page() {
  return (
    <>
    <hr className="horizontal light mt-0"/>
      <div className="container">
        <form>
              <button className="btn btn-icon bg-gradient-primary w-100" type="button">
              <span className="btn-inner--icon"><i className="material-icons">power</i></span>
              <span className="btn-inner--text">Sign out</span>
              </button>
            </form>
      </div>
      <h1 className="font-weight-light fs-6 ms-1 text-center text-white">
        Dashboard Page
      </h1>
    </>
  );
}
