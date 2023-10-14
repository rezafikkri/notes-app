import Icon from '@mdi/react';
import { mdiArchiveArrowDown, mdiArchiveArrowUp, mdiDelete } from '@mdi/js';

export default function NoteItemAction({ id, archived, onDelete, onArchive }) {
  return (
    <div className="card-action p-2">
      <a
        href="#"
        className="btn btn-sm trash"
        title="Hapus catatan"
        onClick={(e) => onDelete(e, id)}
      >
        <Icon path={mdiDelete} size={0.7} />
      </a>
      <a
        href="#"
        className="btn btn-sm archive"
        title={archived ? 'Pulihkan catatan' : 'Pindahkan catatan ke arsip'}
        onClick={(e) => onArchive(e, id)}
      >
        {archived ? (
          <Icon path={mdiArchiveArrowUp} size={0.7} />
        ) : (
          <Icon path={mdiArchiveArrowDown} size={0.7} />
        )}
      </a>
    </div>
  );
}
