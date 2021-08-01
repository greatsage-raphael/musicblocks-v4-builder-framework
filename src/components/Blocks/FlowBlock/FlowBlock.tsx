import React from 'react';
import FlowBlockSVG from './FlowBlockSVG';
import { useSelector } from 'react-redux';

interface Props {
    setBlockPathRef: (drag: React.RefObject<SVGPathElement>) => void
    id: string
}

const FlowBlock: React.FC<Props> = (props) => {
    const block = useSelector((state: any) => state.blocks[props.id]);
    return (
        <div className="Flow Block">
            <FlowBlockSVG 
                blockHeightLines={block.blockHeightLines}
                blockWidthLines={block.blockWidthLines}
                setBlockPathRef={props.setBlockPathRef}
                color={block.color}/>
        </div>
    );
}

export default React.memo(FlowBlock);