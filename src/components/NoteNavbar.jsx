import NavbarBrand from "./NavbarBrand";
import NoteSearch from "./NoteSearch";

export default function NoteNavbar({ keyword, onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container">
        <NavbarBrand />
        <NoteSearch keyword={keyword} onSearch={onSearch} />
      </div>
    </nav>
  );
}
