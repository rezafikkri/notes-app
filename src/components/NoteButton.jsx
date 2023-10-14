import Icon from '@mdi/react';

export default function NoteButton({ id, title, onClick, iconPath, btnHoverColor }) {
  return (
    <a
      href="#"
      className={"btn btn-sm " + btnHoverColor}
      title={title}
      onClick={(e) => onClick(e, id)}
    >
      <Icon path={iconPath} size={0.7} />
    </a>
  );
}
