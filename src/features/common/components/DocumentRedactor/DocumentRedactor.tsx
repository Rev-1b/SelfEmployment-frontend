import { FC, useState, useEffect } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Divider } from '@mui/material';
import {
    Editor,
    EditorState,
    ContentState,
    RichUtils,
} from 'draft-js';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import 'draft-js/dist/Draft.css';
import { styles } from './DocumentRedactor.styles';

interface DocumentRedactorProps {
    initialContent?: string;
    onChange?: (content: string) => void;
}

const DocumentRedactor: FC<DocumentRedactorProps> = ({ initialContent = '', onChange }) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createWithContent(ContentState.createFromText(initialContent))
    );

    const handleInlineStyle = (style: string) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    const handleBlockType = (type: string) => {
        setEditorState(RichUtils.toggleBlockType(editorState, type));
    };

    useEffect(() => {
        if (onChange) {
            const contentState = editorState.getCurrentContent();
            const rawText = contentState.getPlainText();
            onChange(rawText);
        }
    }, [editorState, onChange]);

    const currentInlineStyle = editorState.getCurrentInlineStyle();
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <Box sx={styles.container}>
            <Box sx={styles.toolbar}>
                <ToggleButtonGroup size="small">
                    <ToggleButton
                        value="BOLD"
                        selected={currentInlineStyle.has('BOLD')}
                        onClick={() => handleInlineStyle('BOLD')}
                    >
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="ITALIC"
                        selected={currentInlineStyle.has('ITALIC')}
                        onClick={() => handleInlineStyle('ITALIC')}
                    >
                        <FormatItalicIcon />
                    </ToggleButton>
                </ToggleButtonGroup>

                <Divider orientation="vertical" flexItem sx={styles.divider} />

                <ToggleButtonGroup size="small">
                    <ToggleButton
                        value="left"
                        selected={blockType === 'left-align'}
                        onClick={() => handleBlockType('left-align')}
                    >
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="center"
                        selected={blockType === 'center-align'}
                        onClick={() => handleBlockType('center-align')}
                    >
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="right"
                        selected={blockType === 'right-align'}
                        onClick={() => handleBlockType('right-align')}
                    >
                        <FormatAlignRightIcon />
                    </ToggleButton>
                </ToggleButtonGroup>

                <Divider orientation="vertical" flexItem sx={styles.divider} />

                <ToggleButtonGroup size="small">
                    <ToggleButton
                        value="unordered-list"
                        selected={blockType === 'unordered-list-item'}
                        onClick={() => handleBlockType('unordered-list-item')}
                    >
                        <FormatListBulletedIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="ordered-list"
                        selected={blockType === 'ordered-list-item'}
                        onClick={() => handleBlockType('ordered-list-item')}
                    >
                        <FormatListNumberedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Editor
                editorState={editorState}
                onChange={setEditorState}
            />
        </Box>
    );
};

export default DocumentRedactor;
