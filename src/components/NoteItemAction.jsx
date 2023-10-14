import { mdiArchiveArrowDown, mdiArchiveArrowUp, mdiDelete } from '@mdi/js';
import NoteButton from './NoteButton';

export default function NoteItemAction({ id, archived, onDelete, onArchive }) {
  return (
    <div className="card-action p-2">
      <NoteButton
        id={id}
        title="Hapus catatan"
        onClick={onDelete}
        iconPath={mdiDelete}
        btnHoverColor="danger"
      />
      <NoteButton
        id={id}
        title={archived ? 'Pulihkan catatan' : 'Pindahkan catatan ke arsip'}
        onClick={onArchive}
        iconPath={archived ? mdiArchiveArrowUp : mdiArchiveArrowDown}
        btnHoverColor="warning"
      />
    </div>
  );
}
