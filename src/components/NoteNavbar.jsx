import NavbarBrand from "./NavbarBrand";
import NavbarToggler from "./NavbarToggler";
import NoteSearch from "./NoteSearch";

export default function NoteNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container">
        <NavbarBrand />
        <NavbarToggler />
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <NoteSearch />
        </div>
      </div>
    </nav>
  );
}
