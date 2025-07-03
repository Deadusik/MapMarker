import { type FC } from "react"
import { useTranslation } from "react-i18next"
// material
import SearchIcon from '@mui/icons-material/Search'
// styled
import { SearchInput, SearchMapButton, SearchMapPaper } from "@/styled/components/ui/input/styledSearchMap"

interface Props {
    onChange: (value: string) => void
    onSearchClick: (e: React.FormEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => void
}

const SearchMap: FC<Props> = ({ onChange, onSearchClick }) => {
    const { t } = useTranslation()

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        onChange(e.target.value)
    }

    return (
        <SearchMapPaper
            component="form"
            // allow enter input
            onSubmit={onSearchClick}>
            <SearchInput
                onChange={onChangeHandler}
                placeholder={t("search-input")}
                inputProps={{ 'aria-label': t("search-input") }} />
            <SearchMapButton
                onClick={onSearchClick}
                type="button"
                aria-label="search">
                <SearchIcon />
            </SearchMapButton>
        </SearchMapPaper>
    )
}

export default SearchMap