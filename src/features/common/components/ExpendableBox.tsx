import { FC, useState } from "react";
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ExpandableBox: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box>
            <IconButton 
                onClick={() => setIsExpanded(!isExpanded)}
                sx={{ 
                    transition: 'transform 0.3s ease',
                    transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
            >
                <AddIcon />
            </IconButton>
            
            <Box
                className={isExpanded ? 'expanded' : ''}
                sx={{
                    backgroundColor: '#f5f5f5',
                    padding: 0,
                    overflow: 'hidden',
                    maxHeight: 0,
                    opacity: 0,
                    transition: 'all 0.3s ease-out',
                    '&.expanded': {
                        padding: '24px',
                        maxHeight: '200px',
                        opacity: 1
                    }
                }}
            >
                Содержимое раскрывающегося окна
            </Box>
        </Box>
    );
};

export default ExpandableBox;