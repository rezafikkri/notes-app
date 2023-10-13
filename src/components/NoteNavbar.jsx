import NavbarBrand from "./NavbarBrand";
import NoteSearch from "./NoteSearch";

export default function NoteNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container">
        <NavbarBrand />
        <NoteSearch />
      </div>
    </nav>
  );
}
