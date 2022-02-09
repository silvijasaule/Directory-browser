import React, { useCallback, useState } from 'react';
import './directory-browser.css';
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';

import { FileNode } from '../DataStructure/Data';

export const DirectoryBrowser: React.FC<FileNode> = ({ id, children }: FileNode) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren, setShowChildren])

  return (
    <div>
      <span onClick={handleClick}>
      <h4 className= {showChildren? "file-node file-node__title is-active" : "file-node file-node__title"}>
          <SignalCellular4BarIcon sx={{
            fontSize: '0.4rem',
            marginRight: '5px',
                }}
          />
  {id}
      </h4>
      </span>
      <div className='file-node'>
        {showChildren && (children ?? []).map((node: FileNode) => <DirectoryBrowser {...node}/>)}
      </div>
    </div>
  )
}