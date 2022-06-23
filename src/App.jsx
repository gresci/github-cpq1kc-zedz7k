import { FilterableMultiSelect } from '@carbon/react';
import React, { useState } from 'react';

const allUserIds = [
  'hans',
  'jeff',
  'bernd',
  'klaus',
  'martin',
  'daniel',
  'paul',
];
const initialUserIds = ['daniel', 'paul'];

function App() {
  const [userIds, setUserIds] = useState(initialUserIds || []);
  return (
    <div style={{ padding: 10 }}>
      <div>
        <FilterableMultiSelect
          id="users"
          placeholder="Type to filter"
          items={allUserIds}
          // ↓
          initialSelectedItems={userIds}
          selectedItems={userIds}
          itemToString={(id) => id.toString()}
          onChange={(event) => {
            setUserIds(event.selectedItems);
          }}
        />
      </div>
      {userIds.map((id) => {
        return (
          <div
            key={id}
            className="cds--tag cds--tag--filter cds--tag--high-contrast"
          >
            <span className="cds--tag__label">{id}</span>
            <button
              className="cds--tag__close-icon"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                const ids = userIds.filter((i) => i != id);
                setUserIds(ids);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
