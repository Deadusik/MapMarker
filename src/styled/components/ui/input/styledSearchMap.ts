import { IconButton, InputBase, Paper, styled, type PaperProps } from "@mui/material";

export const SearchMapPaper = styled(Paper)<PaperProps>({
    p: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 0.1)"
})

export const SearchInput = styled(InputBase)({
    marginLeft: "12px",
    flex: 1
})

export const SearchMapButton = styled(IconButton)({
    p: '10px'
})