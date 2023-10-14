import Icon from '@mdi/react';
import { mdiArchiveArrowDown, mdiArchiveArrowUp, mdiDelete } from '@mdi/js';

export default function NoteItemAction({ id, archived, onDelete }) {
  return (
    <div className="card-action p-2">
      <a
        href="#"
        className="btn btn-sm trash"
        onClick={(e) => onDelete(e, id)} title="Hapus catatan"
      >
        <Icon path={mdiDelete} size={0.7} />
      </a>
      <a
        href="#"
        className="btn btn-sm archive"
        title={archived ? 'Pulihkan catatan' : 'Pindahkan catatan ke arsip'}
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
