import { type FC } from "react"
import { FloatAlert } from "@/styled/components/ui/info/styledFloatMessage";
import { Snackbar, type AlertColor } from "@mui/material"

interface Props {
    message: string
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
    type?: AlertColor
}

const FloatMessage: FC<Props> = ({ message, isActive, type = "success", setIsActive }) => {
    const handleClose = () => {
        setIsActive(false);
    }

    return (
        <>
            <Snackbar
                open={isActive}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <FloatAlert severity={type}>
                    {message}
                </FloatAlert>
            </Snackbar >
        </>
    )
}

export default FloatMessage